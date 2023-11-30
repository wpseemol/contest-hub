import { Link, Outlet } from 'react-router-dom';
import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';
import { RiMenu2Line } from 'react-icons/ri';
import DashboardMenus from '../../components/DashboardMenus/DashboardMenus';
import { useState } from 'react';
import useAuthProvider from '../../hook/useAuthProvider/useAuthProvider';
import { ImSpinner9 } from 'react-icons/im';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hook/useAxiosPublic/useAxiosPublic';
import useUserRole from '../../hook/useUserRole/useUserRole';

const Dashboard = () => {
    const [isDryerClose, setIsDryerClose] = useState(false);

    const { user, loading, logOut } = useAuthProvider();

    const publicBaseUrl = useAxiosPublic();

    const { data, isLoading } = useUserRole();

    const handelLogout = () => {
        publicBaseUrl.post('/logout').then(() => {});

        logOut().then(() => {
            Swal.fire({
                icon: 'success',
                position: 'top-end',
                title: 'Logout Successful',
                showConfirmButton: false,
                timer: 1500,
            });
        });
    };

    return (
        <div>
            {/* site Dryer */}
            <div
                className={`${
                    isDryerClose
                        ? 'md:w-20 sm:w-64 w-screen origin-left'
                        : 'md:w-64 w-0 origin-left'
                } fixed top-0 left-0  z-20 min-h-screen
            bg-[#111c43] dark:bg-neutral-800 dark:border-[#313335] sm:border-r duration-300 overflow-x-hidden overflow-y-auto text-neutral-300`}>
                <div className="h-16 border-b dark:border-[#313335] border-[#2c3658] items-center justify-center md:flex hidden">
                    <Link to="/">
                        <div className="flex items-center">
                            <figure className="w-9">
                                <img
                                    src="https://i.ibb.co/VBc0Yjh/Contest-Hub-Logo.png"
                                    alt="logo"
                                />
                            </figure>
                            <h2
                                className={`${
                                    isDryerClose ? 'hidden' : 'sm:block'
                                } text-2xl text-[#49494a] font-bold`}>
                                <span className="text-[#787878]">ontest</span>
                                Hub
                            </h2>
                        </div>
                    </Link>
                </div>

                {/* Dryer menu section  */}
                <div className="">
                    <div className="md:hidden relative h-16 dark:border-[#313335] border-[#2c3658] border-b flex items-center justify-center text-neutral-300 text-xl font-bold">
                        <span>MAIN</span>
                        <div
                            onClick={() => {
                                setIsDryerClose(false);
                            }}
                            className="absolute text-3xl top-0 right-0 bg-primaryColor/5 p-4">
                            <IoCloseOutline />
                        </div>
                    </div>

                    <div className="p-4  h-[calc(100vh-8rem)] overflow-x-hidden overflow-y-auto">
                        <div className="">
                            <DashboardMenus
                                user={user ? user : {}}
                                userRole={data}
                                isDryerClose={isDryerClose}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handelLogout}
                            className="flex items-center justify-center gap-2 bg-slate-800/60 hover:bg-slate-800/80 p-3 rounded font-bold">
                            <MdOutlineLogout />
                            <span
                                className={
                                    isDryerClose ? 'md:hidden block' : 'block'
                                }>
                                Log out
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {/* top navbar Dashboard */}
            <div
                className={`${
                    isDryerClose
                        ? 'md:w-[calc(100%-5rem)] w-full origin-right'
                        : 'md:w-[calc(100%-16rem)] w-full origin-left'
                } fixed top-0 right-0 z-10  h-16 dark:bg-neutral-800 bg-white dark:border-[#313335] dark:border-b dark:border-l shadow-lg dark:shadow-none duration-300`}>
                <div className="flex items-center justify-between h-full dark:text-[#9c9d9e]">
                    <div className="text-2xl ml-2 dark:text-[#a3a4a5]">
                        <button
                            onClick={() => {
                                setIsDryerClose(!isDryerClose);
                            }}>
                            {isDryerClose ? (
                                <>
                                    <IoCloseOutline />

                                    <div
                                        onClick={() => {
                                            setIsDryerClose(false);
                                        }}
                                        className="md:hidden block fixed top-0 left-0 w-screen h-screen"></div>
                                </>
                            ) : (
                                <RiMenu2Line />
                            )}
                        </button>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className=" ">
                            <DarkModeToggle />
                        </div>
                        {!loading ? (
                            <>
                                <div className="flex items-center gap-2 mr-8">
                                    <div>
                                        <figure className="w-9 h-9 rounded-full overflow-hidden">
                                            <img
                                                src={user.photoURL}
                                                alt={user.displayName}
                                                className="w-full h-full object-cover object-center"
                                            />
                                        </figure>
                                    </div>
                                    <div className="text-sm">
                                        <h2 className="font-bold">
                                            {user.displayName}
                                        </h2>
                                        <p className="font-semibold">
                                            {isLoading ? (
                                                <>
                                                    <span className="animate-bounce">
                                                        ...
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="capitalize">
                                                        {data?.role?.replace(
                                                            /-/g,
                                                            ' '
                                                        )}
                                                    </span>
                                                </>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <span className="px-10">
                                    <ImSpinner9 className="animate-spin text-2xl" />
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div
                className={`${
                    isDryerClose
                        ? 'md:w-[calc(100%-5rem)] w-full origin-right'
                        : 'md:w-[calc(100%-16rem)] w-full origin-left'
                } ml-auto h-16 duration-300`}></div>

            {/* main data section */}
            <div
                className={`${
                    isDryerClose
                        ? 'md:w-[calc(100%-5rem)] w-full origin-right'
                        : 'md:w-[calc(100%-16rem)] w-full origin-left'
                }  dark:bg-[#252729] bg-[#f0f1f7] min-h-[calc(100vh-4rem)] ml-auto duration-300
                 dark:text-neutral-300 text-neutral-700 p-4
                `}>
                <Outlet userRole={data ? data : {}} />
            </div>
        </div>
    );
};

export default Dashboard;
