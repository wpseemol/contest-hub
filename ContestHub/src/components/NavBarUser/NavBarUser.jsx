import PropTypes from 'prop-types';
import { IoIosLogOut, IoIosNotificationsOutline } from 'react-icons/io';
import {
    FaAngleDown,
    FaAngleUp,
    FaDollarSign,
    FaRegUser,
} from 'react-icons/fa6';
import { BsDatabaseDash } from 'react-icons/bs';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hook/useAxiosPublic/useAxiosPublic';

const NavBarUser = ({ user, logOut }) => {
    const [showUserDetails, setShowUserDetails] = useState(false);

    const nameForNavbar = user.displayName?.split(' ')[0] || null;

    const publicBaseUrl = useAxiosPublic();
    const handelLogout = () => {
        publicBaseUrl.post('/logout').then(() => {});

        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Log out Done',
                    text: 'account is successfully logout',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
            });
    };

    return (
        <div className="w-36 relative">
            <div
                onClick={() => {
                    setShowUserDetails(!showUserDetails);
                }}
                className="w-fit mx-auto flex items-center gap-2">
                <figure className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                        src={
                            user?.photoURL ||
                            'https://i.ibb.co/wBfQjTy/user-Image.png'
                        }
                        alt={user.displayName || 'User Name'}
                        className="w-full h-full object-cover object-center"
                    />
                </figure>
                <div
                    className={`${
                        showUserDetails ? 'active' : 'hover:active'
                    } duration-200`}>
                    <h2>{nameForNavbar || 'userName'}</h2>
                </div>
                <div className="lg:hidden block">
                    {showUserDetails ? <FaAngleUp /> : <FaAngleDown />}
                </div>
            </div>
            {showUserDetails && (
                <div
                    onClick={() => {
                        setShowUserDetails(!showUserDetails);
                    }}
                    className="lg:block hidden fixed top-0 left-0 w-screen h-screen z-10"></div>
            )}

            <div
                className={`${
                    showUserDetails
                        ? 'scale-100 opacity-100 lg:origin-top-right origin-top'
                        : 'scale-0 opacity-0 lg:origin-top-right origin-top'
                } duration-300 absolute top-14 lg:-left-28 sm:left-0 -left-9 shadow-xl rounded-md sm:w-[16.5rem] w-screen sm:h-64 h-fit z-20 bg-white px-4 py-5`}>
                <div className="">
                    <div className="w-fit mx-auto mb-3">
                        <h2 className="text-base font-semibold">
                            {user.displayName || 'User Name'}
                        </h2>
                    </div>
                    <ul className="text-base font-light flex flex-col gap-3">
                        <li className="flex items-center gap-2 hover:text-primaryColor/60 duration-200">
                            <FaRegUser />
                            <p>My public profile</p>
                        </li>
                        <li className="flex items-center gap-2 hover:text-primaryColor/60 duration-200">
                            <IoIosNotificationsOutline />
                            <p>Notifications</p>
                        </li>
                        <li className="flex items-center gap-2 hover:text-primaryColor/60 duration-200">
                            <FaDollarSign />
                            <p>Billing</p>
                        </li>
                        <li className=" ">
                            <NavLink
                                to="/dashboard"
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? 'active flex items-center gap-2'
                                        : isPending
                                        ? 'pending'
                                        : 'hover:active duration-200 flex items-center gap-2'
                                }>
                                <BsDatabaseDash />
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li className="flex items-center gap-2 hover:text-primaryColor/60 duration-200">
                            <button
                                onClick={handelLogout}
                                className="flex font-normal items-center gap-2 mt-1">
                                <IoIosLogOut />
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBarUser;

NavBarUser.propTypes = {
    user: PropTypes.object,
    logOut: PropTypes.func,
};
