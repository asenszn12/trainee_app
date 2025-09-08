import { useEffect, useState } from "react";

// list of different links in navbar
const navItems = [
    {name: "Home", href: "/"},
    {name: "About", href: "#about"},
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

    // Create className manually without cn utility
    const navClasses = `fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    }`;

    return (
    <nav className={navClasses}>
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center"
                href="#hero"
            >
               <span className="relative z-10">
                 <span className="text-glow text-foreground"> Aadhi's </span>{" "}
                Zzzone
               </span> 
            </a>

            {/*desktop nav*/}
            <div className="hidden md:flex space-x-6">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        {item.name}
                    </a>
                ))}
            </div>

           
        </div>
    </nav>
    );
};