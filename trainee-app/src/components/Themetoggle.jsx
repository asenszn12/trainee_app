import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/libs/utils";

export const Themetoggle = () => {

    // automatically set to lightmode
    const [isDarkMode, setDarkMode] = useState(false);

    // useEffect is used for making sure if on a certain mode, when refreshed it says same
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme == "dark") {
            setDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false)
        }
    })

    // Switching out from one mode to another 
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setDarkMode(true)
        }
    };
    
    return (
        <button onClick={toggleTheme}
        className={cn(
            "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}> 

            {isDarkMode ? ( <Sun className="h-6 w-6 text-yellow-300"/> ) : 
            ( <Moon className="h-6 w-6 text-blue-300"/>)} 
        </button>
    );
};