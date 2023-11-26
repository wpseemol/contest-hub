import { Helmet } from 'react-helmet-async';
import Slider from 'react-slick';
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn';
import Checkbox from '../../components/Checkbox/Checkbox';

const Login = () => {
    const googleLoginLoading = false;

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
                <title>ContestHub | Login</title>
            </Helmet>
            <div className="text-neutral-700">
                <div className="">
                    <div className="fixed md:w-[29rem] w-screen h-screen top-0 left-0 p-14 px-2 sm:px-14 z-20">
                        <div className="">
                            <h2 className="text-3xl font-semibold">
                                Let’s get started
                            </h2>
                            <p className="mt-4">
                                Use your email address or Password.
                            </p>
                            {/* google login */}
                            <div
                                // onClick={handelGoogleLogin}
                                className="flex my-4 justify-center gap-5 w-full py-2 rounded-full border border-black/30 hover:bg-primaryColor/80 hover:text-white duration-200">
                                <figure>
                                    <img
                                        src="https://i.ibb.co/QN1hrN9/icons8-google-24.png"
                                        alt="icon"
                                    />
                                </figure>
                                <span>
                                    {googleLoginLoading
                                        ? 'Loading...'
                                        : 'Sing in with Google'}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="border-b w-1/2 h-1"></div>
                                <span>or</span>
                                <div className="border-b w-1/2 h-1"></div>
                            </div>

                            <form>
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
                                        name="loginEmail"
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
                                        name="loginPassword"
                                        id="passwordId"
                                        placeholder="Please enter your password"
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between mb-3 relative">
                                    <div>
                                        <Checkbox />
                                    </div>
                                    <div className="text-primaryColor text-base ">
                                        <p>Forgot your password</p>
                                    </div>
                                </div>
                                <div className="mt-8 mb-4">
                                    <PrimaryBtn>
                                        <span className="uppercase">Login</span>
                                    </PrimaryBtn>
                                </div>
                                <div>
                                    <p>
                                        Don’t have an account?{' '}
                                        <span className="text-primaryColor">
                                            Sign Up
                                        </span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="ml-auto hidden md:block w-[calc(100%-29rem)] h-screen bg-[#f2f2f2]">
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
