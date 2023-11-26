import { Helmet } from 'react-helmet-async';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
                <div className="grid grid-cols-4">
                    <div className="col-span-1 p-14">
                        <div className="">
                            <h2 className="text-3xl font-semibold">
                                Let’s get started
                            </h2>
                            <p className="mt-4">
                                Use your email address or Password.
                            </p>

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
                        </div>
                    </div>
                    <div className="col-span-3 min-h-screen bg-[#f2f2f2]">
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
