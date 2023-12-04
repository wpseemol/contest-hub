import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import Title from '../../components/Title/Title';
import LoadingPage from '../LoadingPage/LoadingPage';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import useAuthProvider from '../../hook/useAuthProvider/useAuthProvider';
import useAxiosSecure from '../../hook/useAxiosSecure/useAxiosSecure';
import { useState } from 'react';

const ManageContest = () => {
    const secureBaseUrl = useAxiosSecure();
    const [clickButton, setClickButton] = useState(0);

    const { user } = useAuthProvider();

    const {
        data = {},
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ['contests', user?.email],

        queryFn: async () => {
            const allContestData = await secureBaseUrl.get(
                `/all-contests?pageNumber=${clickButton}`
            );
            return allContestData.data;
        },
    });

    const { allContest = [], contestCount = 0 } = data;

    const itemParPage = 10;

    const pageNumber = Math.ceil(contestCount / itemParPage);

    const pages = [...Array(pageNumber).keys()];

    const handelContestDeleted = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                secureBaseUrl.delete(`/contests/${id}`).then((massage) => {
                    if (massage?.data?.deletedCount) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success',
                        });
                        refetch();
                    }
                });
            }
        });
    };

    if (isLoading) {
        return <LoadingPage />;
    }

    if (allContest?.length <= 0) {
        return (
            <>
                <div className="mt-4">
                    <Title>My Created Contest</Title>
                </div>
                <div className="text-4xl font-bold flex items-center justify-center h-96">
                    No data found
                </div>
            </>
        );
    }

    return (
        <>
            <div className="mt-4">
                <Title>My Created Contest</Title>
            </div>
            <div className="mx-auto -mt-6 overflow-x-auto">
                <div className="container p-2 mx-auto sm:p-4 bg-neutral-800/5 dark:text-gray-100 dark:border-[#313335] border rounded sm:w-full w-[30rem]  ">
                    <div className=" ">
                        <table className="min-w-full text-xs">
                            <thead className="dark:border-[#121314] bg-neutral-800/20 dark:bg-gray-900/70">
                                <tr className="text-left">
                                    <th className="p-3 sm:block hidden">
                                        Contest Pic
                                    </th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Contest price</th>
                                    <th className="p-3">Prize Money</th>
                                    <th className="p-3 text-right">Edit</th>
                                    <th className="p-3 text-right">Deleted</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allContest?.map((contest) => {
                                    return (
                                        <tr
                                            key={contest?._id}
                                            className="border-b border-opacity-10 dark:dark:border-gray-700 dark:bg-[#262626] hover:bg-primaryColor/10
                                             hover:dark:bg-primaryColor/5 duration-300 ">
                                            <td className="p-3 sm:block hidden">
                                                <figure className="h-12 w-16">
                                                    <img
                                                        src={
                                                            contest?.contestImage
                                                        }
                                                        alt={
                                                            contest?.contestName
                                                        }
                                                        className="w-full h-full object-cover object-center"
                                                    />
                                                </figure>
                                            </td>
                                            <td className="p-3">
                                                <h2 className="text-lg font-normal">
                                                    {contest?.contestName}
                                                </h2>
                                            </td>
                                            <td className="p-3">
                                                <p className="text-lg font-normal">
                                                    $ {contest?.contestPrice}
                                                    .00
                                                </p>
                                            </td>
                                            <td className="p-3">
                                                <p className="text-lg font-normal">
                                                    $ {contest?.prizeMoney}
                                                    .00
                                                </p>
                                            </td>
                                            <td className="p-3 text-right">
                                                <button className="text-xl font-normal shadow rounded p-3 bg-green-300/50 hover:bg-green-400/60 hover:scale-110 duration-300">
                                                    <FaEdit />
                                                </button>
                                            </td>
                                            <td className="p-3 text-right">
                                                <button
                                                    onClick={() =>
                                                        handelContestDeleted(
                                                            contest?._id
                                                        )
                                                    }
                                                    className="text-xl font-normal shadow rounded p-3 bg-red-600/50 hover:bg-red-700/60 hover:scale-110 duration-300 text-white">
                                                    <span>
                                                        <FaRegTrashAlt />
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* pagination  */}
                <div className="w-fit mx-auto flex items-center justify-center gap-3 my-6">
                    <button
                        disabled={!clickButton}
                        onClick={() => {
                            clickButton && setClickButton(clickButton - 1);
                        }}
                        className="p-2 bg-slate-500 text-white font-bold rounded-md disabled:bg-red-200/60">
                        Previous
                    </button>
                    {pages?.map((element, inx) => {
                        return (
                            <button
                                key={inx}
                                onClick={() => {
                                    setClickButton(element);
                                }}
                                className={`${
                                    clickButton === element
                                        ? 'bg-primaryColor/50 text-white'
                                        : 'bg-white text-neutral-700'
                                } p-2 border font-bold rounded-md
                                                hover:bg-primaryColor/50 hover:text-white duration-300`}>
                                {element + 1}
                            </button>
                        );
                    })}
                    <button
                        disabled={!(clickButton < pages?.length - 1)}
                        onClick={() => {
                            clickButton < pages?.length - 1 &&
                                setClickButton(clickButton + 1);
                        }}
                        className="p-2 bg-slate-500 text-white font-bold rounded-md disabled:bg-red-200/60">
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default ManageContest;
