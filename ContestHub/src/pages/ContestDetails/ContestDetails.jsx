import { Link, useParams } from 'react-router-dom';
import useCountdownTimer from '../../hook/useCountdownTimer/useCountdownTimer';
import useAxiosPublic from '../../hook/useAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../LoadingPage/LoadingPage';
import Container from '../../components/Container/Container';
import { Helmet } from 'react-helmet-async';
import { GrNext } from 'react-icons/gr';
import useAuthProvider from '../../hook/useAuthProvider/useAuthProvider';
import PaymentComponent from '../../components/PaymentComponent/PaymentComponent';

const ContestDetails = () => {
    const { id } = useParams();

    const publicBaseUrl = useAxiosPublic();

    const { userRole } = useAuthProvider();

    const { data = [], isLoading } = useQuery({
        queryKey: ['contest-details'],

        queryFn: async () => {
            const contestCategoryData = await publicBaseUrl.get(
                `/contests-details/${id}`
            );

            return contestCategoryData.data;
        },
    });

    const { countdown } = useCountdownTimer(data?.contestDeadline);

    const enrolContest = {
        enrolContestId: data?._id,
        price: data?.contestPrice,
    };

    if (isLoading) {
        return <LoadingPage />;
    }
    return (
        <>
            <Helmet>
                <title>ontestHub | {data?.contestName}</title>
            </Helmet>
            <div className="bg-gradient-to-b from-[#dcf8fd] to-white pb-8">
                <Container>
                    <div className="flex flex-wrap items-center gap-3 my- text-xl font-semibold py-6">
                        <Link to="/" className="text-primaryColor">
                            ContestHub
                        </Link>
                        <GrNext />
                        <Link to="/contest">{data?.contestType}</Link>
                        <GrNext />
                        <Link to="/contest">{data?.contestName}</Link>
                    </div>
                    <div className="flex flex-wrap gap-8 items-center justify-center">
                        <div>
                            <div>
                                <h2 className="text-3xl font-medium ">
                                    {data?.contestName}
                                </h2>
                            </div>
                            <div className="flex items-center gap-2 my-3">
                                <figure className="w-16 h-16 rounded-full overflow-hidden border shadow-sm">
                                    <img
                                        src={data?.author?.photo}
                                        alt={data?.author?.name}
                                    />
                                </figure>
                                <div>
                                    <h2 className="text-xl font-medium">
                                        {data?.author?.name}
                                    </h2>
                                    <p>{userRole ? userRole : '...'}</p>
                                </div>
                            </div>
                            <div className="text-xl font-medium">
                                <h2 className="mb-2">
                                    Participation:
                                    <span> {data?.participants}</span>
                                </h2>
                                <div>
                                    Prize money:{' '}
                                    <span> ${data?.prizeMoney}.00</span>
                                </div>
                            </div>
                            {!countdown?.massage && (
                                <div>
                                    <h2 className="underline underline-offset-4 text-xl font-semibold my-6">
                                        Deadline:
                                    </h2>
                                    <div className="grid grid-cols-4 text-center gap-4 border p-2">
                                        <div className="text-xl font-semibold capitalize">
                                            d
                                            <span className="hidden sm:inline">
                                                ays
                                            </span>
                                            <hr />
                                        </div>
                                        <div className="text-xl font-semibold capitalize">
                                            h
                                            <span className="hidden sm:inline">
                                                ours
                                            </span>
                                            <hr />
                                        </div>
                                        <div className="text-xl font-semibold capitalize">
                                            m
                                            <span className="hidden sm:inline">
                                                inutes
                                            </span>
                                            <hr />
                                        </div>
                                        <div className="text-xl font-semibold capitalize">
                                            s
                                            <span className="hidden sm:inline">
                                                econds
                                            </span>
                                            <hr />
                                        </div>
                                        <div
                                            className="font-medium sm:text-7xl text-4xl"
                                            style={{
                                                fontFamily: 'Digital-7',
                                                fontWeight: 'normal',
                                                fontStyle: 'normal',
                                            }}>
                                            {countdown?.days}
                                        </div>
                                        <div
                                            className="font-medium sm:text-7xl text-4xl"
                                            style={{
                                                fontFamily: 'Digital-7',
                                                fontWeight: 'normal',
                                                fontStyle: 'normal',
                                            }}>
                                            {countdown?.hours}
                                        </div>
                                        <div
                                            className="font-medium sm:text-7xl text-4xl"
                                            style={{
                                                fontFamily: 'Digital-7',
                                                fontWeight: 'normal',
                                                fontStyle: 'normal',
                                            }}>
                                            {countdown?.minutes}
                                        </div>
                                        <div
                                            className="font-medium sm:text-7xl text-4xl"
                                            style={{
                                                fontFamily: 'Digital-7',
                                                fontWeight: 'normal',
                                                fontStyle: 'normal',
                                            }}>
                                            {countdown?.seconds}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {countdown?.massage && (
                                <div className="my-6">
                                    <p className="text-xl text-red-500">
                                        {countdown?.massage}
                                    </p>
                                </div>
                            )}
                        </div>
                        <div>
                            <figure className="md:w-[25rem] md:h-[26rem] w-full h-full overflow-hidden shadow-xl rounded-lg">
                                <img
                                    src={data?.contestImage}
                                    alt={data?.contestName}
                                    className="w-full h-full object-cover object-center"
                                />
                            </figure>
                        </div>
                    </div>

                    {!countdown?.massage && (
                        <div className="relative mt-24 sm:w-[21.5rem] w-[13.5rem] border mx-auto pb-3">
                            <PaymentComponent enrolContest={enrolContest}>
                                <div className="w-fit mx-auto my-5 py-2 sm:px-8 px-3 border border-primaryColor text-primaryColor  text-xl font-semibold hover:text-white hover:bg-primaryColor duration-200 rounded-full">
                                    Join{' '}
                                    <span className="hidden sm:inline">
                                        Contest
                                    </span>{' '}
                                    to Pay{' '}
                                    <span> ${data?.contestPrice}.00</span>
                                </div>
                            </PaymentComponent>
                        </div>
                    )}

                    <div>
                        <p className="underline text-xl font-semibold underline-offset-4">
                            Description:
                        </p>
                        <p>{data?.contestDescription}</p>
                    </div>
                    <div>
                        <p className="underline text-xl font-semibold underline-offset-4">
                            Task:
                        </p>
                        <p>{data?.taskSubmissionInstruction}</p>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default ContestDetails;
