import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';

const Dashboard = () => {
    return (
        <div>
            <div
                className="fixed top-0 left-0 w-64 min-h-screen
            bg-[#111c43] dark:bg-neutral-800
            "></div>
            <div className="w-fit mx-auto ">
                <DarkModeToggle />
            </div>
        </div>
    );
};

export default Dashboard;
