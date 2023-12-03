import ShortDescription from '../ShortDescription/ShortDescription';
import PropTypes from 'prop-types';

const HomeContestCard = ({ contestCardData }) => {
    return (
        <>
            <div className="border shadow-2xl rounded-xl pt-4  text-center bg-white hover:shadow-primaryColor hover:shadow-lg duration-500 relative z-10">
                <div>
                    <div className="">
                        <figure className="w-48 h-[11.5rem] rounded-tl-3xl rounded-br-xl  bg-primaryColor/30 mx-auto flex items-center justify-center p-2">
                            <img
                                src={contestCardData?.contestImage}
                                alt={contestCardData?.contestName}
                                className="w-full h-full object-cover object-center rounded-tl-3xl rounded-br-3xl"
                            />
                        </figure>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mt-4 mb-2 w-[19rem] h-16  mx-auto overflow-hidden text-ellipsis">
                            {contestCardData?.contestName}
                        </h2>
                        <p className="text-xl font-semibold">
                            Participants :{' '}
                            <span>{contestCardData?.participants}</span>
                        </p>

                        {}
                        <ShortDescription
                            shortDes={
                                contestCardData?.contestDescription
                                    ? contestCardData?.contestDescription
                                    : ''
                            }
                        />
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
        </>
    );
};

export default HomeContestCard;
HomeContestCard.propTypes = { contestCardData: PropTypes.object };
