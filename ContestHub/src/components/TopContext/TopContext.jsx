import Container from '../Container/Container';

import ShortDescription from '../ShortDescription/ShortDescription';
import Title from '../Title/Title';
import TopContextBg from '../TopContextBg/TopContextBg';

const TopContext = () => {
    const topContest = [1, 2, 3, 4, 5];
    const shortDes = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi unde recusandae adipisicing elit. Nisi unde recusandae adipisicing elit. Nisi unde recusandae          adipisicing elit. Nisi unde recusandae`;
    return (
        <div className="bg-gradient-to-b from-[#edfcff] to-white py-24 z-10 relative overflow-hidden">
            <Container>
                <Title>popular contest</Title>
                <div className="flex items-center justify-center flex-wrap gap-5">
                    {/* top contest  */}
                    {topContest.map((context) => {
                        return (
                            <div
                                key={context}
                                className="border shadow-2xl rounded-xl pt-4  text-center bg-white hover:shadow-primaryColor hover:shadow-lg duration-500 relative z-10">
                                <div>
                                    <div className="">
                                        <figure className="w-48 h-[11.5rem] rounded-tl-3xl rounded-br-xl  bg-primaryColor/30 mx-auto flex items-center justify-center p-2">
                                            <img
                                                src="https://img.freepik.com/premium-vector/set-simple-business-logo-design-templates_920207-43.jpg"
                                                alt=""
                                                className="w-full h-full object-cover object-center rounded-tl-3xl rounded-br-3xl"
                                            />
                                        </figure>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mt-4 mb-2 w-[19rem] h-16  mx-auto overflow-hidden text-ellipsis">
                                            contest Name logo Design
                                        </h2>
                                        <p className="text-xl font-semibold">
                                            Participants : <span>20</span>
                                        </p>

                                        {}
                                        <ShortDescription shortDes={shortDes} />
                                    </div>
                                    <button
                                        className="py-2 px-5 border border-primaryColor text-primaryColor
                            rounded-full text-lg font-semibold
                            hover:bg-primaryColor hover:text-white duration-300">
                                        <span>Details</span>
                                    </button>
                                </div>
                                <div className="mt-4 px-8 bg-primaryColor/50 text-white py-2 rounded-b-xl">
                                    ContestHub, Best for Contest
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
            <TopContextBg />
        </div>
    );
};

export default TopContext;
