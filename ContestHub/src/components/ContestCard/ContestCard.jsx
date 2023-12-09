import { useNavigate } from 'react-router-dom';
import PaymentComponent from '../PaymentComponent/PaymentComponent';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import PropTypes from 'prop-types';
const ContestCard = ({ contest }) => {
    const navigate = useNavigate();

    const handelDetails = () => {
        navigate(`/contest/${contest?._id}`);
    };

    const enrolContest = {
        enrolContestId: contest?._id,
        price: contest?.contestPrice,
    };

    return (
        <>
            <div className="flex items-center sm:gap-10 gap-44 justify-center border-b last:border-none relative md:w-fit w-screen">
                <div className="p-4  font-medium lg:w-3/5 sm:w-1/2 ">
                    <div>
                        <h2 className="lg:text-2xl md:text-xl text-base font-bold">
                            {contest.contestName}
                        </h2>
                    </div>
                    <div className=" my-5 hidden md:block">
                        <p>{contest.contestDescription}</p>
                    </div>
                    <div className="flex items-center gap-4 overflow-x-auto">
                        <figure className="sm:w-20 w-8 sm:h-14 h-6">
                            <img
                                src={contest.contestImage}
                                alt={contest.contestName}
                                className="w-full h-full object-cover object-center"
                            />
                        </figure>
                    </div>
                </div>

                <div className="flex items-center justify-evenly lg:w-2/5 sm:w-1/2 gap-10 pr-3 text-center">
                    <div className="mx-auto hidden md:block">
                        <p className="">
                            {contest?.entries ? contest?.entries : '0'}
                        </p>
                    </div>
                    <div className="mx-auto ">
                        <p>${contest.prizeMoney}.00</p>
                    </div>
                    <div
                        className="mx-auto hidden md:block"
                        onClick={handelDetails}>
                        <PrimaryBtn>Details</PrimaryBtn>
                    </div>
                </div>
                <PaymentComponent enrolContest={enrolContest}>
                    <PrimaryBtn>
                        Pay to enroll
                        <span> ${contest?.contestPrice}.00</span>
                    </PrimaryBtn>
                </PaymentComponent>
            </div>
        </>
    );
};

export default ContestCard;

ContestCard.propTypes = { contest: PropTypes.object };
