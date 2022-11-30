import React, { useState, useEffect } from 'react'
import { useDB } from '../../contexts/DBContext';
import { useAuth } from '../../contexts/AuthContext';
import { useSpring, animated, config } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import { CardHeader, CardText, CardBody, Button, Label, Input, Form, Alert } from 'reactstrap';

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

  const { addBlog, getUserName } = useDB();
  const { currentUser } = useAuth();
  const [error, setError] = useState();
  const [userName, setUserName] = useState();
  const [formState, setFormState] = useState();
  const [loading, setLoading] = useState(false);
  const [blogPosted, setBlogPosted] = useState();

  const navigate = useNavigate();

  const toggleBlogPosted = () => {
    setBlogPosted(true);
    setTimeout(() => {
      setBlogPosted(false);
    }, 2000)
  }

  async function callForUname() {
    try {
      setLoading(true);
      await getUserName(currentUser.uid).then((res) => {
        setUserName(res.val())
      })
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const blogPack = {
      author: userName,
      content: formState.content,
      title: formState.title,
      authorID: currentUser.uid
    }
    try {
      setLoading(true);
      await addBlog(blogPack);
    } catch(err) {
      setError(err)
    } finally {
      toggleBlogPosted();
      setFormState();
      setLoading(false);
      setTimeout(() => {
        navigate('/blogs');
      }, 2500)
    }
  }

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
      {error && <Alert color='danger'>{error.message}</Alert>}
      {blogPosted && <Alert color='success'>Successfully Posted Blog</Alert>}
      <animated.div style={fadeIn} className='card blog-card'>
        <CardHeader className='row align-items-center'>
          <Form className='align-items-center row'>
            <Label for='title' size={'lg'} className='col-auto mb-0 pr-0' >Title:</Label>
            <div className='col-8'>
              <Input name='title' id='title' onChange={handleForm} />
            </div>
          </Form>
        </CardHeader>
        <CardBody style={{height: '100%'}} className='d-flex flex-column' >
          <CardText tag='h5'>Compose your blog here:</CardText>
          <Form className='d-flex flex-column flex-grow-1 justify-items-center'>
            <Input type='textarea' name='content' id='content' onChange={handleForm} className='blog-text flex-grow-1' />
            <div className='row'>
              <Button type='submit' color='primary' className='col-4 m-auto' disabled={ loading === true } onClick={handleSubmit} >Post</Button>
            </div>
          </Form>
        </CardBody>
      </animated.div>
    </div>
  );
}