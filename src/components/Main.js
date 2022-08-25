import React from 'react';
import DeskProj from './DeskProj';
import MobProj from './MobProj';
import Contact from './Contact';
import About from './About';
import DeskBlog from './DeskBlog';
import MobBlog from './MobBlog';
import { isMobile } from 'react-device-detect';
import { useInView } from 'react-intersection-observer';


export default function Main() {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 1,
        onChange: (inView) => {
            if (inView) entry.target.classList.toggle('show')
        }
    });

    return (
        <div style={{
            backgroundAttachment: 'fixed',
            backgroundImage: `url(${process.env.PUBLIC_URL + 'images/Josh.jpg'})`,
            backgroundSize: '100vh auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }} >
            <div className='container' ref={ref}>
                <div className='row'>
                    <div className='col-md-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Josh Brazinski</h1>
                    </div>
                </div>
            </div>
            <div className='container mt-5' ref={ref}>
                <About />
            </div>
            <div className='container' ref={ref}>
                <div className='row'>
                    <div className='col-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Projects</h1>
                    </div>
                </div>
            </div>
            <div className='container' ref={ref}>
                { isMobile? <MobProj /> : <DeskProj /> }
            </div>
            <div className='container' ref={ref}>
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
            <div className='container' ref={ref}>
                <div className='row'>
                    <div className='col-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Contact</h1>
                    </div>
                </div>
            </div>
            <div className='container' ref={ref}>
                <Contact />
            </div>
        </div>
    )
};


{/* <Parallax pages={4} style={{ overflow: 'overlay' }}>
            <ParallaxLayer
                sticky={{ start: 0, end: 4}}
                offset={0}
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + 'images/Josh.jpg'})`,
                    backgroundSize: 'auto 100%',
                    backgroundPosition: 'center',
                    zIndex: '-1'
                }}
            />
            <ParallaxLayer
                offset={.10}
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
                factor={1}
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
                offset={1.9}
                factor={1}
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
                offset={2.7}
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
        </Parallax> */}