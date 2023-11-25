import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import MenuIcon from '../MenuIcon/MenuIcon';
import MenuPopup from '../MenuPopup/MenuPopup';
import MenuBtn from '../MenuBtn/MenuBtn';
import useWindowPosition from '../../hook/useWindowPosition/useWindowPosition';

const NavBar = () => {
    const [isClickMenuIcon, setIsClickMenuIcon] = useState(false);
    const windowPosition = useWindowPosition();

    const menus = [
        { path: '/', menu: 'Home' },
        { path: 'contest', menu: 'Contest' },
        { path: '/blog', menu: 'Blog' },
        { path: '/contact', menu: 'Contact' },
        { path: '/about', menu: 'About Us' },
    ];
    return (
        <nav
            className={`${
                windowPosition.y < 100
                    ? 'fixed top-0  w-full left-0 h-[5.5rem] z-50'
                    : isClickMenuIcon
                    ? 'fixed top-0  w-full left-0 h-[5.5rem] z-50 bg-white '
                    : windowPosition.y > 800
                    ? 'fixed top-0  w-full left-0 h-[5.5rem] z-50  bg-white duration-300 animate-fade-right animate-duration-[2000ms] shadow-2xl'
                    : 'fixed top-0  w-full -left-[110rem] h-[5.5rem] z-50'
            }
            
            font-montserratFont `}>
            <Container>
                <div className="flex items-center justify-between py-4 px-8 sm:px-0 relative">
                    <Link to="/">
                        <div className="flex items-center">
                            <figure className="w-12">
                                <img
                                    src="https://i.ibb.co/VBc0Yjh/Contest-Hub-Logo.png"
                                    alt="logo"
                                />
                            </figure>
                            <h2 className="hidden sm:block text-5xl text-[#49494a] font-bold">
                                <span className="text-[#787878]">ontest</span>
                                Hub
                            </h2>
                        </div>
                    </Link>
                    <ul className="lg:flex hidden items-center gap-4 text-lg font-semibold text-[#25273d]">
                        {menus.map((menu, inx) => {
                            return (
                                <li key={inx}>
                                    <NavLink to={menu.path}>
                                        {menu.menu}
                                    </NavLink>
                                </li>
                            );
                        })}

                        <MenuBtn />
                    </ul>
                    <div
                        onClick={() => setIsClickMenuIcon(!isClickMenuIcon)}
                        className="lg:hidden">
                        <MenuIcon isTrue={isClickMenuIcon} />
                    </div>
                    <MenuPopup isOpen={isClickMenuIcon} menus={menus} />
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
