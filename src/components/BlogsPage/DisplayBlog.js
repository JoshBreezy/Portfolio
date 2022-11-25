import React from 'react';
import { useDB } from '../../contexts/DBContext';
import { CardHeader, CardBody } from 'reactstrap';
import AddComment from './AddComment';
import { useSpring, animated, config } from "react-spring";

export default function DisplayBlog() {

    const slideW = 0 - window.innerWidth;

    const slideLeft = useSpring({
        from: { x: slideW },
        to: { x: 0 },
        config: config.molasses,
    });

    // eslint-disable-next-line no-unused-vars
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.slow,
    });

    const {  currentBlog } = useDB();



    return (
        <div className='container'>
            <animated.div style={slideLeft} className="container">
                <div className="row">
                    <div className="col-auto">
                        <h1
                            style={{
                                margin: "3rem",
                                fontSize: "3rem",
                                padding: "1.5rem",
                                backgroundColor: "hsla(0,0%, 100%, .75",
                                borderRadius: "2rem",
                            }}
                        >
                            {currentBlog.data.title}
                        </h1>
                    </div>
                </div>
            </animated.div>
            <animated.div style={fadeIn} className='card'>
                <CardHeader>
                    <h3>By: {currentBlog.data.author}</h3>
                </CardHeader>
                <CardBody>
                    <h5>{currentBlog.data.content}</h5>
                </CardBody>
            </animated.div>
            <animated.div style={fadeIn}>
                <AddComment />
            </animated.div>
        </div>
    )
}
