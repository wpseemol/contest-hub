import { Helmet } from 'react-helmet-async';
import Slider from 'react-slick';
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn';
import Checkbox from '../../components/Checkbox/Checkbox';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthProvider from '../../hook/useAuthProvider/useAuthProvider';
import { ImSpinner9 } from 'react-icons/im';
import Swal from 'sweetalert2';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [googleLoginLoading, setGoogleLoginLoading] = useState(false);

    const { loading, singIn, logInGoogle } = useAuthProvider();

    //login use email password fun
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handelLogin = (data) => {
        singIn(data.loginEmail, data.loginPassword)
            .then(() => {
                Swal.fire({
                    title: 'Successful',
                    text: 'Log in Successful',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                });

                // get access token
                // axiosBasUrl.post('/jwt', { email }).then(() => {});

                location?.state
                    ? navigate(location?.state?.from)
                    : navigate('/');
                reset();
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
            });
    };

    const handelGoogleLogin = () => {
        setGoogleLoginLoading(true);

        logInGoogle()
            .then(() => {
                Swal.fire({
                    title: 'Successful',
                    text: 'Log in Successful',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                });

                //const email = result?.user?.email;
                // jwt token set
                //axiosBasUrl.post('/jwt', { email }).then(() => {});
                setGoogleLoginLoading(false);
                location?.state
                    ? navigate(location?.state?.from)
                    : navigate('/');
            })
            .catch((error) => {
                setGoogleLoginLoading(false);

                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
            });
    };

    //slider settings
    const settings = {
        fade: true,
        infinite: true,
        autoplaySpeed: 4000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };

    return (
        <>
            <Helmet>
                <title>ontestHub | Login</title>
            </Helmet>
            <div className="text-neutral-700">
                <div className="">
                    <div className="w-[calc(100%-29rem)] ml-auto h-20"></div>
                    {/* this page header */}
                    <div
                        className="fixed top-0 right-0  z-30 md:z-10  md:w-[calc(100%-29rem)] w-screen h-20 
                    bg-white shadow">
                        <div className="mx-auto w-fit py-[1.1rem]">
                            <Link to="/">
                                <div className="flex items-center">
                                    <figure className="w-10">
                                        <img
                                            src="https://i.ibb.co/VBc0Yjh/Contest-Hub-Logo.png"
                                            alt="logo"
                                        />
                                    </figure>
                                    <h2 className="hidden sm:block sm:text-4xl text-3xl text-[#49494a] font-bold">
                                        <span className="text-[#787878]">
                                            ontest
                                        </span>
                                        Hub
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="md:fixed md:w-[29rem] w-screen h-screen top-0 left-0 p-14 px-4 sm:px-14 z-20 ">
                        <div className="w-full sm:w-[21.5rem] mx-auto text-center md:text-left">
                            <h2 className="text-3xl font-semibold">
                                Welcome back
                            </h2>
                            <p className="mt-4">
                                {`Log into your "ContestHub" account here.`}
                            </p>
                            {/* google login */}
                            <div
                                onClick={handelGoogleLogin}
                                className="flex my-4 justify-center gap-5 w-full py-2 rounded-full border border-black/30 hover:bg-primaryColor/80 hover:text-white duration-200">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/QN1hrN9/icons8-google-24.png"
                                        alt="icon"
                                    />
                                </figure>
                                <span>
                                    {googleLoginLoading ? (
                                        <ImSpinner9 className="animate-spin text-2xl" />
                                    ) : (
                                        'Sing in with Google'
                                    )}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="border-b w-1/2 h-1"></div>
                                <span>or</span>
                                <div className="border-b w-1/2 h-1"></div>
                            </div>

                            <form
                                onSubmit={handleSubmit(handelLogin)}
                                className="text-left">
                                <div className="mb-4">
                                    <label
                                        htmlFor="loginEmail"
                                        className="text-base font-semibold">
                                        Email Address
                                    </label>
                                    <br className="my-2" />
                                    <input
                                        className=" outline-primaryColor/60 border py-3 rounded text-lg pl-4 w-full mt-1"
                                        type="email"
                                        {...register('loginEmail')}
                                        id="emailId"
                                        placeholder="johndoe@gmail.com"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="loginPassword"
                                        className="text-base font-semibold">
                                        Password
                                    </label>
                                    <br />
                                    <input
                                        className=" outline-primaryColor/60 border py-3 rounded text-lg pl-4 w-full mt-1"
                                        type="password"
                                        {...register('loginPassword', {
                                            minLength: 6,
                                            pattern:
                                                /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/,
                                        })}
                                        id="passwordId"
                                        placeholder="Please enter your password"
                                        required
                                    />
                                    {errors?.loginPassword?.type ===
                                        'minLength' && (
                                        <span className="text-red-600">
                                            Password must be 6 characters
                                        </span>
                                    )}
                                    {errors?.loginPassword?.type ===
                                        'pattern' && (
                                        <span className="text-red-600">
                                            Password must be one capital letter
                                            or special character.
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center justify-between mb-3 relative">
                                    <div>
                                        <Checkbox />
                                    </div>
                                    <div className="text-primaryColor text-base ">
                                        <p>Forgot your password</p>
                                    </div>
                                </div>
                                <div className="mt-8 mb-4 w-fit mx-auto md:mx-0">
                                    <PrimaryBtn>
                                        <span className="uppercase">
                                            {loading ? (
                                                <ImSpinner9 className="animate-spin text-2xl" />
                                            ) : (
                                                'Login'
                                            )}
                                        </span>
                                    </PrimaryBtn>
                                </div>
                                <div>
                                    <p className="text-center md:text-left">
                                        Don’t have an account?{' '}
                                        <span className="text-primaryColor">
                                            <Link to="/singup">Sign Up</Link>
                                        </span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* login and reg slider section */}
                    <div className="ml-auto hidden md:block w-[calc(100%-29rem)] h-[calc(100vh-5rem)] bg-[#f2f2f2]">
                        <div className="flex items-center justify-center h-full">
                            <div className="w-2/3">
                                <Slider {...settings}>
                                    <div>
                                        <div className="w-fit mx-auto">
                                            <figure>
                                                <img
                                                    src="https://soliloquywp.com/wp-content/uploads/2017/06/optimize-your-wordpress-slider-seo.jpg"
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                        <div className="w-fit mx-auto mt-8 text-center">
                                            <h2 className="mt-5 text-2xl font-semibold my-3">
                                                Grow will you email list
                                            </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.{' '}
                                                <br /> Unde, consequatur!
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-fit mx-auto">
                                            <figure>
                                                <img
                                                    src="https://soliloquywp.com/wp-content/uploads/2017/03/wordpress-sliders-seo.jpg"
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                        <div className="w-fit mx-auto mt-8 text-center">
                                            <h2 className="mt-5 text-2xl font-semibold my-3">
                                                some more information Like name
                                            </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.{' '}
                                                <br /> Unde, consequatur!
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-fit mx-auto">
                                            <figure>
                                                <img
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpImSrHKQkEA84dxNxQ0GY4V0WZALH-7a8yH0GuBG8qsjJ8bPbDdg4y2oSOA4DYPzXOts&usqp=CAU"
                                                    alt=""
                                                />
                                            </figure>
                                        </div>
                                        <div className="w-fit mx-auto mt-8 text-center">
                                            <h2 className="mt-5 text-2xl font-semibold my-3">
                                                Logo desiginer
                                            </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.{' '}
                                                <br /> Unde, consequatur!
                                            </p>
                                        </div>
                                    </div>

                                    {/* Add more slides as needed */}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
