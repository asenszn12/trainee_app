import { useEffect, useState } from "react"

export const CloudyBackground = () => {

    // id, size, x, y, opacity, and animation duration
    useEffect(() => {
        makeClouds();
        makeMeteors();
    }, []);

    const [clouds, setClouds] = useState([])
    const [meteors, setMeteor] = useState([])

    const makeClouds = () => {
        const numberofClouds = Math.floor(
            window.innerWidth * window.innerHeight / 20000 );

        const newClouds = []
        
        for (let i = 0; i < numberofClouds; i++) {
            newClouds.push({
                id:i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setClouds(newClouds);
    };

    const makeMeteors = () => {
        const numberofMeteors = 5
        const newMeteors = [];
        
        for (let i = 0; i < numberofMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteor(newMeteors);
    }

    return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {clouds.map((cloud) => (
            <div 
                key={cloud.id} 
                className="absolute bg-white rounded-full animate-float" 
                style={{
                width: cloud.size * 20 + "px",
                height: cloud.size * 15 + "px",
                left: cloud.x + "%",
                top: cloud.y + "%",
                opacity: cloud.opacity,
                animationDuration: cloud.animationDuration + "s",

                boxShadow:
                // x-offset, y-offset, blur-radius, and spread radius
                `
                ${cloud.size * 7}px ${cloud.size * 4}px 0 ${cloud.size * -4}px white,
                ${cloud.size * -6}px ${cloud.size * 2}px 0 ${cloud.size * -2}px white
                `,
            }}/>
        ))}

        {meteors.map((meteor) => (
            <div 
                key={meteor.id} 
                className="meteor animate-meteor" 
                style={{
                width: meteor.size * 50 + "px",
                height: meteor.size * 2 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                delay: meteor.delay,
                animationDuration: meteor.animationDuration + "s",
            }}/>
        ))}

    </div>
    );
};