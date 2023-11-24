import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MenuBtn from '../MenuBtn/MenuBtn';

const MenuPopup = ({ isOpen, menus }) => {
    return (
        <div
            className={`${
                isOpen
                    ? 'top-20 scale-100 left-0 origin-top opacity-100'
                    : 'left-48 opacity-0 origin-center'
            } fixed z-50 top-20 w-screen min-h-screen border duration-300 overflow-hidden bg-[#edfcff]`}>
            <ul className="text-[#25273d]">
                {menus.map((menu, inx) => {
                    return (
                        <li key={inx} className="m-8 font-semibold text-xl">
                            {' '}
                            <NavLink to={menu.path}>{menu.menu}</NavLink>
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
