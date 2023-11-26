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
                <div className="p-3 text-xl rounded-full hover:shadow-2xl duration-300 hover:scale-110 hover:border">
                    <MdOutlineLightMode />
                </div>
            ) : (
                <div className="p-3 text-xl rounded-full bg-neutral-600 text-white hover:shadow-2xl duration-300 hover:scale-110">
                    <MdOutlineNightlight />
                </div>
            )}
        </button>
    );
};

export default DarkModeToggle;
