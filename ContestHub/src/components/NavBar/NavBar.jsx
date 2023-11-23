import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import MenuIcon from '../MenuIcon/MenuIcon';
import { useState } from 'react';

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
        <nav className="font-montserratFont">
            <Container>
                <div className="flex items-center justify-between my-4">
                    <Link to="/">
                        <div className="flex items-center">
                            <figure className="w-12">
                                <img
                                    src="https://i.ibb.co/VBc0Yjh/Contest-Hub-Logo.png"
                                    alt="logo"
                                />
                            </figure>
                            <span className="text-5xl text-[#49494a] font-bold">
                                <span className="text-[#787878]">ontest</span>
                                Hub
                            </span>
                        </div>
                    </Link>
                    <ul className="lg:flex hidden items-center gap-4 text-lg font-semibold">
                        {menus.map((menu, inx) => {
                            return (
                                <li key={inx}>
                                    <NavLink to={menu.path}>
                                        {menu.menu}
                                    </NavLink>
                                </li>
                            );
                        })}

                        <div className="flex items-center gap-3 ml-12">
                            <button>Log in</button>
                            <PrimaryBtn>
                                <span>Get started</span>
                            </PrimaryBtn>
                        </div>
                    </ul>
                    <div
                        onClick={() => setIsClickMenuIcon(!isClickMenuIcon)}
                        className="lg:hidden">
                        <MenuIcon isTrue={isClickMenuIcon} />
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
