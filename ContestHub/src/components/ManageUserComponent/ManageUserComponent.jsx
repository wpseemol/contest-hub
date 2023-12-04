import { useState } from 'react';
import PropTypes from 'prop-types';
import useAxiosPublic from '../../hook/useAxiosPublic/useAxiosPublic';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import useAuthProvider from '../../hook/useAuthProvider/useAuthProvider';
import { useNavigate } from 'react-router-dom';

const ManageUserComponent = ({ userData, refetch }) => {
    const [userRoleChange, setUserRoleChange] = useState(userData?.role);
    const [btnEnable, setBtnEnable] = useState(true);

    const navigate = useNavigate();

    const publicBaseUrl = useAxiosPublic();
    const { user, setUserRole } = useAuthProvider();

    const handleUserRole = (e) => {
        setBtnEnable(false);
        setUserRoleChange(e.target.value);
    };

    const handleConfirm = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: `"${userData?.uName}" make role "${userRoleChange}"`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Confirm!',
        }).then((result) => {
            if (result.isConfirmed) {
                publicBaseUrl
                    .put('/users', {
                        uEmail: userData?.uEmail,
                        role: userRoleChange,
                    })
                    .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `User Role Permission Successful`,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        refetch();
                        setBtnEnable(true);
                        if (user?.email === userData?.uEmail) {
                            localStorage.setItem('user-role', userRoleChange);
                            navigate('/dashboard');
                        }
                    });
            }
        });
    };

    useEffect(() => {
        const userRoleLocal = localStorage.getItem('user-role');
        setUserRole(userRoleLocal);
    }, [btnEnable, setUserRole]);

    return (
        <>
            <td className="p-3">
                <figure className="w-10 h-10">
                    <img
                        src={userData?.uPhoto}
                        alt={userData?.uName}
                        className={`${
                            user?.email === userData?.uEmail
                                ? 'border-[3px] border-primaryColor'
                                : ''
                        } w-full h-full object-cover object-center`}
                    />
                </figure>
            </td>
            <td
                className={`${
                    user?.email === userData?.uEmail ? 'text-primaryColor' : ''
                } p-3`}>
                <p>{userData?.uName}</p>
            </td>
            <td
                className={`${
                    user?.email === userData?.uEmail
                        ? 'text-primaryColor'
                        : 'dark:text-gray-400'
                } p-3`}>
                <p className="">{userData?.uEmail}</p>
            </td>
            <td
                className={`${
                    user?.email === userData?.uEmail ? 'text-primaryColor' : ''
                } p-3 ml-auto`}>
                <select
                    onChange={handleUserRole}
                    name="userRole"
                    id="userRole"
                    value={userRoleChange}
                    className="dark:bg-gray-900">
                    <option value="user">User</option>
                    <option value="contest-creator">Contest creator</option>
                    <option value="admin">Admin</option>
                </select>
            </td>

            <td className="p-3">
                <button
                    disabled={btnEnable}
                    onClick={handleConfirm}
                    className={`${
                        user?.email === userData?.uEmail
                            ? 'border-2 border-primaryColor'
                            : ''
                    } dark:text-gray-400 border text-center p-2 rounded-lg disabled:bg-red-400/20 disabled:dark:bg-red-400/40`}>
                    Confirm
                </button>
            </td>
        </>
    );
};

export default ManageUserComponent;

ManageUserComponent.propTypes = {
    userData: PropTypes.object,
    refetch: PropTypes.func,
};
