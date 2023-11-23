import Container from '../Container/Container';

const NavBar = () => {
    return (
        <nav>
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <figure className="w-12">
                            <img
                                src="https://i.ibb.co/VBc0Yjh/Contest-Hub-Logo.png"
                                alt="logo"
                            />
                        </figure>
                        <span className="text-4xl">ContestHub</span>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li>Home</li>
                        <li>Contest</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>About Us</li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
