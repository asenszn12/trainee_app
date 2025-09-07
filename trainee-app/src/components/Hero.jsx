
export const HeroSection = () => {
    return <section id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text 6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Aadhi </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Senthil Kumar</span>
                </h1>
                <p className="text-lg md:text-xl mx-auto opacity-0 animate-fade-in-delay-4">
                    Welcome to my Zzzone. <br>
                    </br>
                    I hope you get to know more about me in this portfolio 
                    and encourage you on why I'd be a <i><b>dream</b></i> fit in 
                    your award-winning trainee program 🫡
                </p>
                <div>
                    <a href="#about" className="dreamy-button">
                    Find out more
                    </a>
                </div>
            </div>

        </div>


    </section>
}