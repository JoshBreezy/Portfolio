import React, { useState, useEffect } from 'react'
import { useDB } from '../../contexts/DBContext';
import { useAuth } from '../../contexts/AuthContext';
import { useSpring, animated, config } from 'react-spring';
import { CardHeader, CardText, CardBody, CardFooter, Button, Label, Input, Form, FormGroup } from 'reactstrap';

export default function NewBlog() {

  const slideW = 0 - window.innerWidth;

  const slideLeft = useSpring({
    from: { x: slideW },
    to: { x: 0 },
    config: config.molasses,
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
  });

  const { newBlog, getUserName } = useDB();
  const { currentUser } = useAuth();
  const [error, setError] = useState();
  const [userName, setUserName] = useState();
  const [formState, setFormState] = useState();

  async function callForUname() {
    try {
      await getUserName().then((res) => {
        console.log(res.val());
        setUserName(res.val())
      })
    } catch (err) {
      setError(err)
    };
  };

  useEffect(() => {
    callForUname()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleForm = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  };


  return (
    <div className='container'>
      <animated.div style={slideLeft} className= 'container'>
        <div className='row'>
          <div className='col-auto'>
              <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1.5rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem' }}>New Blog</h1>
          </div>
        </div>
      </animated.div>
      <animated.div style={fadeIn} className='card'>
        <CardHeader className='row align-items-center'>
          <Form className='align-items-center row'>
            <Label tag={'h2'} className='mb-0 col-2' >{userName}</Label>
            <Label for='titleInput' size={'lg'} className='col-auto mb-0 p-0' >Title:</Label>
            <div className='col-8'>
              <Input name='titleInput' id='titleInput' onChange={handleForm} />
            </div>
          </Form>
        </CardHeader>
      </animated.div>
    </div>
  );
}