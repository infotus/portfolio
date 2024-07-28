import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"

import { loadSlim } from "@tsparticles/slim"

function BackgroundEffect() {
    
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          //await loadAll(engine);
          //await loadFull(engine);
          await loadSlim(engine);
          //await loadBasic(engine);
        }).then(() => {
          setInit(true);
        });
      }, []
    )

    
    const particlesLoaded = (container) => {
    console.log(container);
    }

    const options = useMemo(
    () => ({
        fullscreen: {
            // enable: true,
            zIndex: -1
        },

        background: {
        color: {
            value: "#00695C",
        },
        },
        fpsLimit: 60,
        interactivity: {
        events: {
            // onClick: {
            // enable: true,
            // mode: "push",
            // },
            // onHover: {
            // enable: true,
            // mode: "repulse",
            // },
        },
        modes: {
            push: {
            quantity: 4,
            },
            repulse: {
            distance: 200,
            duration: 0.4,
            },
        },
        },
        particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
            default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
        },
        number: {
            density: {
            enable: true,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
        },
        detectRetina: true,
    }),
    [],
    )



    if (init) {
        return (
            <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            />
        );
    }

    return <Particles options={options} />
}

export default BackgroundEffect