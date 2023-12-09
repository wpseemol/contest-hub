import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPinterestP,
    FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="font-montserratFont text-sm bg-[#252737] text-white pt-8">
            <Container>
                <div className="flex md:justify-between justify-center flex-wrap py-4">
                    <div className="flex gap-12 lg:justify-start justify-center flex-wrap">
                        <ul className="flex flex-col gap-4">
                            <li className="hover:text-primaryColor duration-200">
                                Price
                            </li>
                            <li className="hover:text-primaryColor duration-200">
                                Blog
                            </li>
                            <li className="hover:text-primaryColor duration-200">
                                Forum
                            </li>
                            <li className="hover:text-primaryColor duration-200">
                                Knowledge base
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-4">
                            <li className="hover:text-primaryColor duration-200">
                                About us
                            </li>
                            <li className="hover:text-primaryColor duration-200">
                                Contact us
                            </li>
                            <li className="hover:text-primaryColor duration-200">
                                Testimonials
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-4">
                            <li className="hover:text-primaryColor duration-200">
                                Designers Join us
                            </li>
                            <li className="hover:text-primaryColor duration-200">
                                Terms of services
                            </li>
                            <li className="hover:text-primaryColor duration-200">
                                Privacy policy
                            </li>
                            <li className="hover:text-primaryColor duration-200">
                                Refund policy
                            </li>
                        </ul>
                    </div>
                    <div className="order-first mb-10 md:mb-0">
                        <p>Sign up for secrets, news and specials</p>
                        <div className="flex items-center bg-white py-1 rounded-full overflow-hidden my-4">
                            <input
                                type="email"
                                name="footerEmail"
                                id="emailForFooter"
                                placeholder="E-mail"
                                className="ml-2 outline-none h-[2rem] text-neutral-700 pl-3"
                            />
                            <div className="mr-1">
                                <PrimaryBtn>Sign up</PrimaryBtn>
                            </div>
                        </div>
                        <ul className="flex items-center justify-center md:justify-start gap-4">
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaPinterestP />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <FaLinkedinIn />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="flex items-center lg:justify-between justify-center flex-wrap py-4">
                    <div>
                        <Link to="/">
                            <div className="flex items-center">
                                <figure className="w-10">
                                    <img
                                        src="https://i.ibb.co/VBc0Yjh/Contest-Hub-Logo.png"
                                        alt="logo"
                                    />
                                </figure>
                                <h2 className="hidden sm:block text-3xl text-[#787878] font-bold">
                                    <span className="">ontest</span>
                                    Hub
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        <p>© 2003 — 2023 ContestHub LLC</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
