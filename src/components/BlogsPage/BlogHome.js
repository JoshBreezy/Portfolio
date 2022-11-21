import React from "react";
import BlogTable from './BlogTable';
import { useSpring, animated, config } from "react-spring";
import { Link } from 'react-router-dom';


export default function BlogHome() {
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

  return (
    <div className="container pb-2">
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
              Blogs are here!
            </h1>
          </div>
        </div>
      </animated.div>
      <div className="container m-3">
        <div className='row'>
          <div className='col'>
            <Link to='/newblog' className='btn btn-primary'>Start new blog</Link>
          </div>
        </div>
      </div>
      <BlogTable />
    </div>
  );
}
