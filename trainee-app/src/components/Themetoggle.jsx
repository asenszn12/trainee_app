import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export const Themetoggle = () => {

    const [isDarkMode, setDarkMode] = useState(false);
    

    return <button> 
        {isDarkMode ? <Moon /> : <Sun />} 
    </button>;
}