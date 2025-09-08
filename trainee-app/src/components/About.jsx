import { Code2, Dribbble, Target } from 'lucide-react'

export const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Hello! I'm Aadhi Senthil Kumar, and I'm a current 2nd year
                            Computer Science Student studying @ UNSW.
                        </h3>

                        <p className="text-muted-foreground">
                            Talk a walk through 
                           
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code2 className='h-6 w-6 text-primary'/>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Skills</h4>
                                    <p className="text-sm text-muted-foreground">
                                        C, Javascript, Typescript, Python, Bash,
                                        React, and Tailwind CSS
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Dribbble className='h-6 w-6 text-primary'/>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Hobbies</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Basketball, Badminton,
                                        Rugby, MMA, Binging any animes on Netflix ( or illegally),
                                        and Learning random Kpop dances 🕺
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Target className='h-6 w-6 text-primary'/>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Fun Facts‼️</h4>
                                    <p className="text-sm text-muted-foreground">
                                        - My friend group since high school have a youtube channel together called @hangoutvault <br></br>
                                        - I won 2 BTS Albums through giveaways <br></br>
                                        - I was a background extra for Sydney Morning Herald and then got promoted to foreground actor on 7news 😎 <br></br>
                                        - Kobe Bryant is my GOAT Athlete and Coryxkenshin is my GOAT Youtuber <br></br>
                                    </p>
                                </div>
                            </div>
                        </div>                 
                    </div>
                </div>
            </div>
        </section>
    );
};