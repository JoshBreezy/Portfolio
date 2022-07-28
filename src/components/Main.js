import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import { useSpring, animated, config } from 'react-spring';



export default function Main() {
    
    const slideLeft = useSpring({ 
        to: { x: 0 }, 
        from: { x: -450 }, 
        config: config.molasses,
        delay: 1000
    });

    const slideRight = useSpring({ 
        to: { x: 0 }, 
        from: { x: 1600 }, 
        config: config.molasses,
        delay: 1000
    });

    const fadeIn = useSpring({ 
        to: { opacity: 1 }, 
        from: { opacity: 0 },
        config: config.slow,
        delay: 500
    });

    return (
        <Parallax pages={4} style={{ overflow: 'overlay' }}>
            <ParallaxLayer
                sticky={{ start: 0, end: 4}}
                offset={0}
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + 'images/Josh.jpg'})`,
                    backgroundSize: 'auto auto',
                    backgroundPosition: 'center',
                    zIndex: '-1'
                }}
            />
            <ParallaxLayer
                offset={.2}
                speed={2}
            >
                <animated.div style={slideLeft} className='containter'>
                    <div className='row'>
                        <div className='col-md-auto'>
                            <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Josh Brazinski</h1>
                        </div>
                    </div>
                </animated.div>
                <animated.div style={slideRight} className='container mt-5'>
                    <About />
                </animated.div>
            </ParallaxLayer>
            <ParallaxLayer 
                offset={.9}
                speed={.5}
            >
                <animated.div style={fadeIn}>
                    <Projects />
                </animated.div>
            </ParallaxLayer>
            <ParallaxLayer 
                offset={1.7}
                speed={.2}
            >
                <Contact />
            </ParallaxLayer>
        </Parallax>
    )
};