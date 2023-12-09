import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PropTypes from 'prop-types';
import { useState } from 'react';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import useAuthProvider from '../../hook/useAuthProvider/useAuthProvider';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { IoClose } from 'react-icons/io5';

//strips
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const PaymentComponent = ({ children, enrolContest }) => {
    const [goToPayment, setGoToPayment] = useState(false);

    const navigate = useNavigate();

    const { user, userRole } = useAuthProvider();

    const handelToPayment = () => {
        if (user) {
            if (userRole) {
                if (userRole === 'admin' || userRole === 'contest-creator') {
                    toast("You can't enrol You are Authority");
                } else {
                    setGoToPayment(true);
                }
            }
        } else {
            navigate('/login');
        }
    };

    return (
        <>
            <div className="absolute bottom-0" onClick={handelToPayment}>
                {children}
            </div>
            {goToPayment && (
                <>
                    <div
                        className="fixed top-0 left-0 w-screen h-screen bg-black/20 z-20
                        flex items-center justify-center
                        ">
                        <div className=" bg-gradient-to-b from-[#edfcff] to-white relative z-10 md:w-[42rem] sm:w-[32rem] w-screen mx-3  h-fit p-4 py-8 rounded shadow-lg overflow-x-auto ">
                            <div className="md:w-[40rem] sm:w-[30rem] w-[28rem]">
                                <div className="mb-8 text-xl font-medium">
                                    <p>
                                        Enroll payment amount $
                                        {enrolContest.price}.00
                                    </p>
                                    <hr />
                                </div>
                                <Elements stripe={stripePromise}>
                                    <CheckOutForm
                                        setGoToPayment={setGoToPayment}
                                        enrolContest={
                                            enrolContest
                                        }></CheckOutForm>
                                </Elements>
                            </div>
                            <div
                                onClick={() => setGoToPayment(false)}
                                className="absolute text-3xl top-0 right-0 p-[.75rem] bg-red-600 text-white font-bold">
                                <p>
                                    <IoClose />
                                </p>
                            </div>
                        </div>
                        <div
                            className="absolute top-0 left-0 w-full h-full z-[3]"
                            onClick={() => setGoToPayment(false)}></div>
                    </div>
                </>
            )}
        </>
    );
};

export default PaymentComponent;
PaymentComponent.propTypes = {
    children: PropTypes.node,
    enrolContest: PropTypes.object,
};
