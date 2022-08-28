import React, { useEffect, useRef, useState, useMemo }  from 'react';
import DeskProj from './DeskProj';
import MobProj from './MobProj';
import Contact from './Contact';
import About from './About';
import DeskBlog from './DeskBlog';
import MobBlog from './MobBlog';
import { isMobile } from 'react-device-detect';



export default function Main() {

    return (
        <div style={{
            backgroundAttachment: 'fixed',
            backgroundImage: `url(${process.env.PUBLIC_URL + 'images/Josh.jpg'})`,
            backgroundSize: '100vh auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }} >
            <div className={' container'}>
                <div className='row'>
                    <div className='col-md-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Josh Brazinski</h1>
                    </div>
                </div>
            </div>
            <div className={ ' container'}>
                <About />
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Projects</h1>
                    </div>
                </div>
            </div>
            <div className={' container-responsive mx-5'}>
                { isMobile? <MobProj /> : <DeskProj /> }
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Blog</h1>
                    </div>
                </div>
                <div className="row">
                    <div className='col col-md-8 col-lg-11 m-auto'>
                        {isMobile? <MobBlog /> : <DeskBlog /> }
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem'}}>Contact</h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <Contact />
            </div>
        </div>
    )
};