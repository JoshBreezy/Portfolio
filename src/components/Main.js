import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import DeskProj from './DeskProj';
import MobProj from './MobProj';
import Contact from './Contact';
import About from './About';
import DeskBlog from './DeskBlog';
import MobBlog from './MobBlog';
import { useSpring, animated, config } from 'react-spring';
import { isMobile } from 'react-device-detect';


const slideW = window.innerWidth;


export default function Main() {
    
    const slideLeft = useSpring({ 
        to: { x: 0 }, 
        from: { x: -450 }, 
        config: config.molasses,
        delay: 1000
    });

    const slideRight = useSpring({ 
        to: { x: 0 }, 
        from: { x: slideW }, 
        config: config.molasses,
        delay: 1000
    });

    const fadeIn = useSpring({ 
        to: { opacity: 1 }, 
        from: { opacity: 0 },
        config: config.slow,
        delay: 1000
    });


    return (
        <Parallax pages={3.5} style={{ overflow: 'overlay' }}>
            <ParallaxLayer
                sticky={{ start: 0, end: 3.5}}
                offset={0}
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + 'images/Josh.jpg'})`,
                    backgroundSize: 'auto 100%',
                    backgroundPosition: 'center',
                    zIndex: '-1'
                }}
            />
            <ParallaxLayer
                offset={.15}
                factor={.25}
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
                offset={.8}
                factor={.75}
                speed={.5}
            >
                <animated.div style={slideLeft} className='containter'>
                    <div className='row'>
                        <div className='col-auto'>
                            <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Projects</h1>
                        </div>
                    </div>
                </animated.div>
                <animated.div style={fadeIn}>
                    <div className='container'>
                        { isMobile? <MobProj /> : <DeskProj />}
                    </div>
                </animated.div>
            </ParallaxLayer>
            <ParallaxLayer
                offset={1.35}
                factor={.5}
                speed={.7}
            >
                <div className='containter'>
                    <div className='row'>
                        <div className='col-auto'>
                            <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Blog</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-10 col-md-8 m-auto'>
                            {isMobile? <MobBlog /> : <DeskBlog /> }
                        </div>
                    </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer 
                offset={2}
                factor={1}
                speed={.2}
            >
                <div className='row'>
                    <div className='col-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Contact</h1>
                    </div>
                </div>
                <Contact />
            </ParallaxLayer>
        </Parallax>
    )
};