import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';

const ContestCard = () => {
    return (
        <>
            <div className="flex items-center gap-10 justify-center border-b">
                <div className="p-4  font-medium w-3/5">
                    <div>
                        <h2 className="text-2xl font-bold">
                            Snowbird Agility Government Contracting
                        </h2>
                    </div>
                    <div className=" my-5">
                        <p>
                            *** We have selected a winner *** (but the website
                            does not let me close the contest.) Please do not
                            make new entries. We really appreciate all the ideas
                            that ha...
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <figure className="w-20 h-14">
                            <img
                                src="https://dynamic.brandcrowd.com/asset/logo/39bc3cc5-b97f-4acb-a436-ab0b551fa765/logo-search-grid-1x?logoTemplateVersion=2&v=638306996616630000"
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                        <figure className="w-20 h-14">
                            <img
                                src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg"
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                        <figure className="w-20 h-14">
                            <img
                                src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg"
                                alt=""
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                    </div>
                </div>

                <div className="flex items-center justify-evenly w-2/5">
                    <div className=" mx-auto">
                        <p className="">629</p>
                    </div>
                    <div className=" mx-auto ">
                        <p>$ 495</p>
                    </div>
                    <div className="mx-auto">
                        <PrimaryBtn>Details</PrimaryBtn>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContestCard;
