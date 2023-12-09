import PromotionBg from '../PromotionBg/PromotionBg';
import Title from '../Title/Title';

const Promotion = () => {
    return (
        <div className=" py-24 z-10 relative overflow-hidden">
            <div
                className="bg-fixed bg-no-repeat bg-cover relative"
                style={{
                    backgroundImage:
                        'url(https://i.ibb.co/gZbmSsM/work-competition.jpg)',
                }}>
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[2]"></div>
                <div className="relative z-[4] py-28 text-white">
                    <div className="flex items-center justify-evenly flex-wrap ">
                        <div className="relative hidden lg:block">
                            <figure className="group w-[18rem] h-[20rem] lg:absolute -left-20 -top-[7.8rem] z-[2] overflow-hidden p-2 border border-b-0">
                                <img
                                    src="https://i.ibb.co/jwJ0QQb/portrait-happy-satisfied-man-celebrating-success.png"
                                    alt="Winner image"
                                    className="w-full h-full object-cover object-center"
                                />

                                <div
                                    className="group-hover:top-0 absolute top-[20rem] left-0 bg-white/40 duration-300
                                w-[110%] h-full z-[3]">
                                    <div className="text-neutral-800 mt-[12rem] px-4">
                                        <h2 className="text-3xl font-bold">
                                            Sujon Maji
                                        </h2>
                                        <p className="text-xl font-semibold">
                                            Winner: Logo Design Contest
                                        </p>
                                    </div>
                                </div>

                                {/* bag */}
                                <div className="absolute top-0 left-0 z-[4]">
                                    <figure className="w-12">
                                        <img
                                            src="https://i.ibb.co/SttfmnR/2-2-winner-free-png-image.png"
                                            alt="winner bag"
                                        />
                                    </figure>
                                </div>
                            </figure>
                        </div>

                        <div>
                            <Title>
                                <span className="">
                                    Learn and Earn <br /> With Us
                                </span>
                            </Title>
                            <div className="text-center -mt-2">
                                <p className="text-xl font-medium">
                                    Winner Winner chicken dinner
                                </p>
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                                <button
                                    className="lg:text-3xl text-2xl bg-primaryColor text-white py-4 px-12
                        rounded-full font-bold">
                                    <span className="uppercase">Enter</span>
                                </button>
                            </div>
                        </div>

                        <div className="relative hidden lg:block">
                            <figure className="group w-[18rem] h-[20rem] absolute -right-20 -top-[7.8rem] z-[2] overflow-hidden p-2 border border-b-0">
                                <img
                                    src="https://i.ibb.co/mv9Hqkt/Screenshot-1.png"
                                    alt="Winner image"
                                    className="w-full h-full object-cover object-center"
                                />

                                <div
                                    className="group-hover:top-0 absolute top-[20rem] left-0 bg-white/40 duration-300
                                w-full h-full z-[3]">
                                    <div className="text-neutral-800 mt-[12rem] px-4">
                                        <h2 className="text-3xl font-bold">
                                            Sujon Maji
                                        </h2>
                                        <p className="text-xl font-semibold">
                                            Winner: Logo Design Contest
                                        </p>
                                    </div>
                                </div>

                                {/* bag */}
                                <div className="absolute top-0 left-0 z-[4]">
                                    <figure className="w-12">
                                        <img
                                            src="https://i.ibb.co/SttfmnR/2-2-winner-free-png-image.png"
                                            alt="winner bag"
                                            className=""
                                        />
                                    </figure>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mx-auto w-fit mt-20 z-[4] relative mb-14">
                <h2 className="lg:text-4xl text-3xl font-bold">
                    There is a good prize bond for each winner{' '}
                </h2>
                <p className="sm:w-[40rem] mx-auto mt-4 text-lg font-medium">
                    Welcome to ContestHub, the ultimate platform where
                    innovation meets recognition! ContestHub is a dynamic and
                    user-friendly Project Contest Creation Platform designed to
                    foster creativity, engage communities, and celebrate talent
                    across various domains.
                </p>
            </div>

            <PromotionBg />
        </div>
    );
};

export default Promotion;
