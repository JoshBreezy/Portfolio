import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { baseURL } from './shared/baseURL';
import Projects from './Projects';
import Contact from './Contact';


export default function Main() {
    return (
        <Parallax pages={4}>
            <ParallaxLayer
                sticky={{ start: 0, end: 4}}
                offset={0}
                style={{
                    backgroundImage: `url(${baseURL + '/images/josh.jpg'})`,
                    backgroundSize: 'auto 100%',
                    backgroundPosition: 'center',
                    zIndex: '-1'
                }}
            />
            <ParallaxLayer 
                offset={.8}
                speed={.5}
            >
                <Projects />
            </ParallaxLayer>
            <ParallaxLayer 
                offset={2}
                speed={.2}
            >
                <Contact />
            </ParallaxLayer>
        </Parallax>
    )
}