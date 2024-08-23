import React, { useState, useEffect } from 'react';
import './ThemeSwitcher.css'; // Import your CSS file or use styled-components

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }, [isDarkMode]);

    const handleToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
        trans();
    };

    const trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000);
    };

    return (
        <div className='theme-btn-box'>
            <input
                className="container_toggle"
                type="checkbox"
                id="switch"
                checked={isDarkMode}
                onChange={handleToggle}
            />
            <label htmlFor="switch">Toggle</label>
        </div>
    );
};

export default ThemeSwitcher;
