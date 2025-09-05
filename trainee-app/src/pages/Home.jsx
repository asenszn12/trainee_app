import { Themetoggle } from "@/components/Themetoggle";
import { CloudyBackground } from "@/components/CloudyBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/Hero";
export const Home = () => {
    return (
    // Apply colour for background
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle (dark mode or light mode*/}
        <Themetoggle />

        {/* Background effects (dreamy vibes)*/}
        <CloudyBackground />
        
        {/* Navbar CHECK IF WE NEED BOOTSTRAP*/}
        <Navbar />

        {/* Main content */}
        <main>
            <HeroSection />
        </main>

        {/* Footer */}
    </div>
    );
};