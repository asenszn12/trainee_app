import { Themetoggle } from "@/components/Themetoggle";
import { CloudyBackground } from "@/components/CloudyBackground";
export const Home = () => {
    return (
    // Apply colour for background
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle (dark mode or light mode*/}
        <Themetoggle />

        {/* Background effects (dreamy vibes)*/}
        <CloudyBackground />
        
        {/* Navbar*/}

        {/* Main content */}

        {/* Footer */}
    </div>
    );
};