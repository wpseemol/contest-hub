import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MenuBtn from '../MenuBtn/MenuBtn';

const MenuPopup = ({ isOpen, menus }) => {
    return (
        <div
            className={`${
                isOpen
                    ? 'top-20 scale-100 left-0 origin-top opacity-100'
                    : 'left-[25rem] sm:left-[45rem] md:left-[60rem] opacity-0 origin-left scale-x-0'
            } fixed lg:hidden z-50 top-20 w-screen min-h-screen border duration-300 overflow-hidden bg-[#edfcff]`}>
            <ul className="text-[#25273d]">
                {menus.map((menu, inx) => {
                    return (
                        <li key={inx} className="m-8 font-semibold text-xl">
                            {' '}
                            <NavLink
                                to={menu.path}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? 'active'
                                        : isPending
                                        ? 'pending'
                                        : 'hover:active duration-200'
                                }>
                                {menu.menu}
                            </NavLink>
                        </li>
                    );
                })}
                <li className="m-8 font-semibold text-xl">
                    <MenuBtn />
                </li>
            </ul>
        </div>
    );
};

export default MenuPopup;

MenuPopup.propTypes = {
    isOpen: PropTypes.bool,
    menus: PropTypes.array,
};
