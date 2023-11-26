import { Link, NavLink } from 'react-router-dom';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';

const MenuBtn = () => {
    return (
        <div className="flex lg:items-center items-start lg:flex-row flex-col lg:gap-3 gap-8 lg:ml-12 mt-16 lg:mt-0">
            <NavLink
                to="login"
                className={({ isActive, isPending }) =>
                    isActive
                        ? 'active'
                        : isPending
                        ? 'pending'
                        : 'hover:active duration-200'
                }>
                <button>Log in</button>
            </NavLink>

            <Link to="signup">
                <PrimaryBtn>
                    <span>Get started</span>
                </PrimaryBtn>
            </Link>
        </div>
    );
};

export default MenuBtn;
