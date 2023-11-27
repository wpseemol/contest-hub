import { Link } from 'react-router-dom';
import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';

const Dashboard = () => {
    return (
        <div>
            <div
                className="fixed top-0 left-0 w-64 min-h-screen
            bg-[#111c43] dark:bg-neutral-800
            ">
                <Link to="/">
                    <div className="flex items-center">
                        <figure className="w-10">
                            <img
                                src="https://i.ibb.co/VBc0Yjh/Contest-Hub-Logo.png"
                                alt="logo"
                            />
                        </figure>
                        <h2 className="hidden sm:block sm:text-4xl text-3xl text-[#49494a] font-bold">
                            <span className="text-[#787878]">ontest</span>
                            Hub
                        </h2>
                    </div>
                </Link>
            </div>
            <div className="w-fit mx-auto ">
                <DarkModeToggle />
            </div>
            <div className="w-[50rem] ml-auto mt-44"></div>
        </div>
    );
};

export default Dashboard;
