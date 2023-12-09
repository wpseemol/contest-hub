import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import useAxiosSecure from '../../hook/useAxiosSecure/useAxiosSecure';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuthProvider from '../../hook/useAuthProvider/useAuthProvider';

const CheckOutForm = ({ setGoToPayment, enrolContest }) => {
    const [clientSecret, setClientSecret] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    const secureBaseUrl = useAxiosSecure();
    const { user } = useAuthProvider();

    useEffect(() => {
        secureBaseUrl
            .post('/create-payment-intent', { price: enrolContest.price })
            .then((res) => {
                setClientSecret(res.data.clientSecret);
            });
    }, [secureBaseUrl, enrolContest]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            });
        }

        //confirm payment
        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    },
                },
            });

        if (confirmError) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: confirmError.message,
            });
        } else {
            if (paymentIntent.status === 'succeeded') {
                secureBaseUrl
                    .post('/enrollment', {
                        enrolContestId: enrolContest.enrolContestId,
                        price: enrolContest.price,
                        enrolUser: user?.email,
                        enrolName: user?.displayName,
                        transactionID: paymentIntent.id,
                        enrolTime: paymentIntent.created,
                    })
                    .then(() => {
                        Swal.fire(
                            'Payment successful transaction ID:' +
                                paymentIntent.id
                        );

                        setGoToPayment(false);
                    })
                    .catch(() => {
                        return;
                    });

                console.log(paymentIntent);
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                                color: '#00c1f1',
                                '::placeholder': {
                                    color: '#242424',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button
                    type="submit"
                    disabled={!stripe || !clientSecret}
                    className="mt-12 py-2 px-4 text-white  bg-primaryColor/80 rounded disabled:bg-gray-500">
                    Pay
                </button>
            </form>
        </>
    );
};

export default CheckOutForm;

CheckOutForm.propTypes = {
    setGoToPayment: PropTypes.func,
    enrolContest: PropTypes.object,
};
