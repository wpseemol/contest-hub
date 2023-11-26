import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';

const ContestCard = () => {
    return (
        <>
            <div className="flex items-center gap-10 justify-center border-b last:border-none">
                <div className="p-4  font-medium lg:w-3/5 sm:w-1/2">
                    <div>
                        <h2 className="lg:text-2xl md:text-xl text-base font-bold">
                            Snowbird Agility Government Contracting
                        </h2>
                    </div>
                    <div className=" my-5 hidden md:block">
                        <p>
                            *** We have selected a winner *** (but the website
                            does not let me close the contest.) Please do not
                            make new entries. We really appreciate all the ideas
                            that ha...
                        </p>
                    </div>
                    <div className="flex items-center gap-4 overflow-x-auto">
                        <figure className="sm:w-20 w-8 sm:h-14 h-6">
                            <img
                                src="https://dynamic.brandcrowd.com/asset/logo/39bc3cc5-b97f-4acb-a436-ab0b551fa765/logo-search-grid-1x?logoTemplateVersion=2&v=638306996616630000"
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                        <figure className="sm:w-20 w-8 sm:h-14 h-6">
                            <img
                                src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg"
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                        <figure className="sm:w-20 w-8 sm:h-14 h-6">
                            <img
                                src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg"
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                    </div>
                </div>

                <div className="flex items-center justify-evenly lg:w-2/5 sm:w-1/2 gap-10 pr-3 text-center">
                    <div className="mx-auto hidden md:block">
                        <p className="">629</p>
                    </div>
                    <div className="mx-auto ">
                        <p>$ 495</p>
                    </div>
                    <div className="mx-auto hidden md:block">
                        <PrimaryBtn>Details</PrimaryBtn>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContestCard;
