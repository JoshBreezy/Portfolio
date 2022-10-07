import React from 'react';
import DeskProj from './DeskProj';
import MobProj from './MobProj';
import Contact from './Contact';
import About from './About';
import DeskBlog from './DeskBlog';
import MobBlog from './MobBlog';
import { useSpring, animated, config } from 'react-spring';
import { isMobile } from 'react-device-detect';



export default function Main() {

    const slideW = 0 - window.innerWidth;
    
    const slideLeft = useSpring({ 
        from: { x: slideW }, 
        to: { x: 0 }, 
        config: config.molasses,
    });

    const fadeIn = useSpring({ 
        from: { opacity: 0 },
        to: { opacity:1 }, 
        config: config.slow,
    });

    return (
        <div>            
            <animated.div style={slideLeft} className= 'container'>
                <div className='row'>
                    <div className='col-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1.5rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem' }}>Josh Brazinski</h1>
                    </div>
                </div>
            </animated.div>
            <div />
            <animated.div style={slideLeft} className= 'container'>
                <About />
            </animated.div>
            <div />
            <animated.div style={slideLeft} className='container'>
                <div className='row'>
                    <div className='col-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Projects</h1>
                    </div>
                </div>
            </animated.div>
            <div />
            <animated.div style={fadeIn} className={' container-responsive mx-3 '}>
                { isMobile? <MobProj /> : <DeskProj /> }
            </animated.div>
            <div />
            <animated.div style={slideLeft} className='container'>
                <div className='row'>
                    <div className='col-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Blog</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col col-md-8 col-lg-11 m-auto'>
                        {isMobile? <MobBlog /> : <DeskBlog /> }
                    </div>
                </div>
            </animated.div>
            <animated.div style={slideLeft} div className='container'>
                <div className='row'>
                    <div className='col-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Contact</h1>
                    </div>
                </div>
            </animated.div>
            <animated.div style={slideLeft}className='container'>
                <Contact />
            </animated.div>
        </div>
    )
};