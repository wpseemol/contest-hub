import Container from '../Container/Container';
import ContestBrand from '../ContestBrand/ContestBrand';
import HeroBg from '../HeroBg/HeroBg';

import SearchComponent from '../SearchComponent/SearchComponent';

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#edfcff] to-white py-24 z-20 overflow-hidden">
            <Container>
                <div className="flex lg:flex-row flex-col items-center justify-between text-fontColor text-center lg:text-left gap-6 lg:gap-0 py-16">
                    <div>
                        <div>
                            <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold">
                                Get the Project
                                <br />
                                Contest Creation
                            </h2>
                        </div>
                        <div className="lg:my-8 my-4 xl:w-[48rem]">
                            <p className="lg:text-xl font-semibold text-lg">
                                Choose from dozens of unique Contest created
                                just for you Start a contest Watch how it works
                            </p>
                        </div>
                        {/* search  */}
                        <SearchComponent />
                    </div>
                    <div className=" sm:w-[45rem] relative">
                        <figure className="sm:w-[20rem] mx-auto p-5 sm:p-0">
                            <img
                                src="https://i.ibb.co/VBc0Yjh/Contest-Hub-Logo.png"
                                alt="Site Logo"
                                className="w-full h-full object-cover object-center scale-x-[-1]"
                            />
                        </figure>
                        <ContestBrand />
                    </div>
                </div>
            </Container>

            {/* hero background */}
            <HeroBg />
        </div>
    );
};

export default HeroSection;
