import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export const Themetoggle = () => {

    // automatically set to lightmode
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            setDarkMode(true)
        }
    };
    
    return (
        <button onClick={toggleTheme}> 
            {isDarkMode ? ( <Sun className="h-6 w-6 text-yellow-300"/> ) : 
            ( <Moon className="h-6 w-6 text-blue-300"/>)} 
        </button>
    );
};