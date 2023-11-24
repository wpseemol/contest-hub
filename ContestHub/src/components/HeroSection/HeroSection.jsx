import Container from '../Container/Container';
import ContestBrand from '../ContestBrand/ContestBrand';
import HeroBg from '../HeroBg/HeroBg';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import { IoSearch } from 'react-icons/io5';

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-b from-[#edfcff] to-white py-24 z-10 overflow-hidden">
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
                        <div className="lg:my-8 my-4 xl:w-[50rem]">
                            <p className="lg:text-xl font-semibold text-lg">
                                Choose from dozens of unique Contest created
                                just for you Start a contest Watch how it works
                            </p>
                        </div>
                        <div className="flex items-center mx-auto lg:mx-0 border-primaryColor rounded-full border w-fit overflow-hidden bg-white relative z-[3]">
                            <input
                                placeholder="Search Contest"
                                type="text"
                                id="searchBox"
                                name="searchBox"
                                className="ml-2 h-[2.8rem] sm:w-[18rem] w-full outline-none font-medium "
                            />
                            <PrimaryBtn>
                                <span className="text-3xl">
                                    <IoSearch className="" />
                                </span>
                            </PrimaryBtn>
                        </div>
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
