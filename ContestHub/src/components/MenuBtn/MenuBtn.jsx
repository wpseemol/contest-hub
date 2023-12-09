import { Link, NavLink } from 'react-router-dom';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import NavBarUser from '../navBarUser/navBarUser';
import useAuthProvider from '../../hook/useAuthProvider/useAuthProvider';
import { ImSpinner9 } from 'react-icons/im';

const MenuBtn = () => {
    const { user, loading, logOut } = useAuthProvider();

    return (
        <div className="flex lg:items-center items-start lg:flex-row flex-col lg:gap-3 gap-8 lg:ml-12 mt-16 lg:mt-0">
            {loading ? (
                <span className="px-10">
                    <ImSpinner9 className="animate-spin text-2xl" />
                </span>
            ) : user ? (
                <>
                    <NavBarUser user={!loading ? user : {}} logOut={logOut} />
                </>
            ) : (
                <>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isActive
                                ? 'active'
                                : isPending
                                ? 'pending'
                                : 'hover:active duration-200'
                        }>
                        <button>Log in</button>
                    </NavLink>

                    <Link to="/singup">
                        <PrimaryBtn>
                            <span>Get started</span>
                        </PrimaryBtn>
                    </Link>
                </>
            )}
        </div>
    );
};

export default MenuBtn;
