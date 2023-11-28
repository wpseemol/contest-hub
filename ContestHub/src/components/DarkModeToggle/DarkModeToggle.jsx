import { useEffect, useState } from 'react';

import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'enabled'
    );

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const toggleDarkBode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
    };

    return (
        <button onClick={toggleDarkBode}>
            {darkMode ? (
                <div className="p-3 text-xl rounded-full hover:shadow-2xl text-[#9a9b9b] duration-300 hover:scale-110 ">
                    <MdOutlineLightMode />
                </div>
            ) : (
                <div className="p-3 text-xl rounded-full hover:shadow-2xl text-[#343535] duration-300 hover:scale-110 hover:border">
                    <MdOutlineNightlight />
                </div>
            )}
        </button>
    );
};

export default DarkModeToggle;
