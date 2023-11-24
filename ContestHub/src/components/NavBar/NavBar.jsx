import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import MenuIcon from '../MenuIcon/MenuIcon';
import MenuPopup from '../MenuPopup/MenuPopup';
import MenuBtn from '../MenuBtn/MenuBtn';

const NavBar = () => {
    const [isClickMenuIcon, setIsClickMenuIcon] = useState(false);

    const menus = [
        { path: '/', menu: 'Home' },
        { path: 'contest', menu: 'Contest' },
        { path: '/blog', menu: 'Blog' },
        { path: '/contact', menu: 'Contact' },
        { path: '/about', menu: 'About Us' },
    ];
    return (
        <nav className="font-montserratFont ">
            <Container>
                <div className="flex items-center justify-between py-4 relative">
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
