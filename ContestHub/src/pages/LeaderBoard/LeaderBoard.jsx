import { useQuery } from '@tanstack/react-query';

import useAxiosPublic from '../../hook/useAxiosPublic/useAxiosPublic';
import useAuthProvider from '../../hook/useAuthProvider/useAuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';

const LeaderBoard = () => {
    const [yourPosition, setYourPosition] = useState(null);
    const { user } = useAuthProvider();

    const publicBaseUrl = useAxiosPublic();

    const { data = [], isLoading } = useQuery({
        queryKey: ['leader-board'],
        queryFn: async () => {
            const winnerUsers = await publicBaseUrl.get(`/leader-board`);
            return winnerUsers.data;
        },
    });

    useEffect(() => {
        data.forEach((element, inx) => {
            if (element?.winnerGmail === user?.email) {
                const isLogoInWinner = {
                    position: inx + 1,
                    winnerEmail: element.winnerGmail,
                    winnerName: element.winnerName,
                    winnerCount: element.winner,
                    winnerPrize: element.prize,
                    winnerPicture: element.winnerPicture,
                };
                setYourPosition(isLogoInWinner);
            }
        });
    }, [data, user]);

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="bg-gradient-to-b from-[#d5f3f8] to-white">
            <div
                className="container mx-auto pt-8
            ">
                <div className="container p-2 mx-auto sm:p-4  w-fit">
                    <h2 className="mb-4 text-2xl font-semibold lg:text-4xl md:text-3xl ">
                        Leader Board
                    </h2>
                    <div className="overflow-x-auto bg-white rounded-lg border p-3">
                        <table className="min-w-full text-xs">
                            <thead className="bg-black/30 ">
                                <tr className="text-left text-xl text-white">
                                    <th className="p-3 lg:min-w-[20rem] sm:min-w-[10rem] w-fit">
                                        {yourPosition
                                            ? 'Your position'
                                            : 'Top position '}
                                    </th>

                                    <th className="p-3 text-center lg:min-w-[20rem] sm:min-w-[10rem] w-fit">
                                        Amount
                                    </th>
                                    <th className="p-3 text-right lg:min-w-[20rem] sm:min-w-[10rem] w-fit">
                                        Total Prize
                                    </th>
                                </tr>
                            </thead>

                            {yourPosition && (
                                <tbody className="text-lg">
                                    <tr
                                        className="border-b border-opacity-20 
                                last:border-none 
                                hover:bg-primaryColor/5 duration-300">
                                        <td
                                            className="p-3 flex items-center gap-2 lg:min-w-[20rem] sm:min-w-[10rem]
                                    ">
                                            <p>{yourPosition?.position}</p>
                                            <figure className="w-10 h-10 rounded-full">
                                                <img
                                                    src={
                                                        yourPosition?.winnerPicture
                                                    }
                                                    alt=""
                                                    className="w-full h-full object-cover object-center"
                                                />
                                            </figure>
                                            <h2 className="text-xl font-medium">
                                                {yourPosition?.winnerName}
                                            </h2>
                                        </td>
                                        <td className="p-3 text-center lg:min-w-[20rem] sm:min-w-[10rem]">
                                            <p>{yourPosition?.winnerCount}</p>
                                        </td>
                                        <td className="p-3 lg:min-w-[20rem] sm:min-w-[10rem] text-right">
                                            <p className="">
                                                $
                                                <span>
                                                    {yourPosition?.winnerPrize}
                                                </span>
                                                .00
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            )}
                        </table>

                        {yourPosition && (
                            <h2 className="mb-4 font-bold text-xl my-6">
                                Top Positions
                                <hr />
                            </h2>
                        )}

                        <table className="min-w-full text-xs">
                            <tbody className="text-lg">
                                {data?.map((winner, inx) => {
                                    return (
                                        <tr
                                            key={inx}
                                            className="border-b border-opacity-20 
                                last:border-none 
                                hover:bg-primaryColor/5 duration-300">
                                            <td
                                                className="p-3 flex items-center gap-2 lg:min-w-[20rem] sm:min-w-[10rem]
                                    ">
                                                <p>{inx + 1}</p>
                                                <figure className="w-10 h-10 rounded-full">
                                                    <img
                                                        src={
                                                            winner?.winnerPicture
                                                        }
                                                        alt={winner?.winnerName}
                                                        className="w-full h-full object-cover object-center"
                                                    />
                                                </figure>
                                                <h2 className="text-xl font-medium">
                                                    {winner?.winnerName}
                                                </h2>
                                            </td>
                                            <td className="p-3 text-center lg:min-w-[20rem] sm:min-w-[10rem]">
                                                <p>{winner?.winner}</p>
                                            </td>
                                            <td className="p-3 lg:min-w-[20rem] sm:min-w-[10rem] text-right">
                                                <p className="">
                                                    $
                                                    <span>{winner?.prize}</span>
                                                    .00
                                                </p>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoard;
