import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hook/useAxiosPublic/useAxiosPublic';
import LoadingPage from '../LoadingPage/LoadingPage';

import { useState } from 'react';
import { useEffect } from 'react';
import ManageUserComponent from '../../components/ManageUserComponent/ManageUserComponent';

const ManageUser = () => {
    const [clickButton, setClickButton] = useState(0);

    const publicBaseUrl = useAxiosPublic();

    const {
        data = {},
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['users'],

        queryFn: async () => {
            const allUserResult = await publicBaseUrl.get(
                `/users?pageNumber=${clickButton}`
            );

            return allUserResult.data;
        },
    });

    useEffect(() => {
        refetch();
    }, [refetch, clickButton]);

    const { allUser, userCount } = data;
    // console.log(userCount, 'all user', allUser);

    if (isLoading) {
        return <LoadingPage />;
    }

    const itemParPage = 10;

    const pageNumber = Math.ceil(userCount / itemParPage);

    const pages = [...Array(pageNumber).keys()];

    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 bg-white dark:bg-[#262626] dark:border-[#222121] border lg:w-[50rem] md:w-[40rem] w-fit ">
                <h2 className="mb-4 text-2xl font-semibold leadi">
                    Manage user
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">User picture</th>
                                <th className="p-3">User name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3 ">Role</th>
                                <th className="p-3 ">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUser?.map((element) => {
                                return (
                                    <tr
                                        key={element?._id}
                                        className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                        <ManageUserComponent
                                            userData={element}
                                            refetch={refetch}
                                        />
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
    );
};

export default ManageUser;
