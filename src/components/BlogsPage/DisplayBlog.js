import React, { useEffect } from 'react';
import { useDB } from '../../contexts/DBContext';
import { CardHeader, CardBody, Card } from 'reactstrap';
import AddComment from './AddComment';
import DisplayComments from './DisplayComments';
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

    const { currentBlog, pullComments } = useDB();

    useEffect(() => {
        pullComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



    return (
        <div className='container pb-5'>
            <Card className='mt-5 ' >
                <animated.div style={slideLeft} className="container">
                    <div className="row">
                        <div className="col-auto">
                            <h1
                                style={{
                                    margin: "1rem",
                                    fontSize: "3rem",
                                    padding: "1.6rem",
                                    backgroundColor: "hsla(0,0%, 100%, .75",
                                    borderRadius: "2rem",
                                }}
                            >
                                {currentBlog.data.title}
                            </h1>
                        </div>
                    </div>
                </animated.div>
                <Card className='comment-card'>
                    <CardHeader>
                        <h3>By: {currentBlog.data.author}</h3>
                        <p>{currentBlog.data.date}</p>
                    </CardHeader>
                    <CardBody>
                        <h5>{currentBlog.data.content}</h5>
                    </CardBody>
                </Card>
                <DisplayComments />
                <AddComment />
            </Card>
        </div>
    )
}
