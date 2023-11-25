import Marquee from 'react-fast-marquee';
import Title from '../Title/Title';

const BestContestCreator = () => {
    const bestContectCreator = [1, 2, 3];
    return (
        <div className="bg-gradient-to-b from-[#edfcff] to-white py-16 z-10 relative overflow-hidden">
            <div>
                <Title>best contest creator</Title>
            </div>
            <div className="py-8">
                <Marquee pauseOnHover={true}>
                    {bestContectCreator.map((creator) => {
                        return (
                            <div
                                key={creator}
                                className="lg:w-[30rem] sm:w-[20rem] w-[19.6rem] bg-white border rounded p-8 overflow-hidden mr-10">
                                <div className="hover:scale-105 duration-300">
                                    <div>
                                        <figure className="w-full h-[10rem]">
                                            <img
                                                src="https://www.tubefilter.com/wp-content/uploads/2022/11/creator-dao-andrew-east-1400x825.jpg"
                                                alt=""
                                                className="w-full h-full object-cover object-center"
                                            />
                                        </figure>
                                        <div>
                                            <p className="text-lg font-semibold my-3">
                                                Name: <span>Sujona Mondal</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:text-4xl text-2xl lg:font-bold font-semibold">
                                        <h2>Logo Design Create Context</h2>
                                    </div>
                                    <div className="my-3">
                                        <p className="text-base font-medium">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Ipsam
                                            hic tempore minima reiciendis. Hic
                                            ducimus explicabo nihil
                                            necessitatibus sequi expedita
                                            perferendis magnam deleniti, ex
                                            nulla exercitationem a in iusto eum
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Marquee>
            </div>
        </div>
    );
};

export default BestContestCreator;
