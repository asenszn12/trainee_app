import { useEffect, useState } from "react";

const navItems = [
    {name: "Home", action: () => window.scrollTo({top: 0, behavior: 'smooth'})},
    {name: "About", action: () => document.getElementById('about').scrollIntoView({behavior: 'smooth'})},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    const navClasses = `fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    }`;

    return (
    <nav className={navClasses}>
        <div className="container flex items-center justify-between">
            <button 
                className="text-xl font-bold text-primary flex items-center bg-transparent border-none cursor-pointer"
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
               <span className="relative z-10">
                 <span className="text-glow text-foreground"> Aadhi's </span>{" "}
                Zzzone
               </span> 
            </button>

            <div className="hidden md:flex space-x-6">
                {navItems.map((item, key) => (
                    <button 
                        key={key} 
                        onClick={item.action}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer"
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </div>
    </nav>
    );
};