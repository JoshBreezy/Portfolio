import React, { useState, useEffect } from 'react';
import {Row, Col, Button, Form, FormGroup, Label, Input,Alert, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { useSpring, animated, config } from 'react-spring';
import { useAuth } from '../contexts/AuthContext';
import { useDB } from '../contexts/DBContext';

export default function UserSettingsPage() {

    const { updateUserSettings, getUser } = useDB();

    const { currentUser, updateUserEmail, sendVerifyEmail } = useAuth();

    const [userDBInfo, setUserDBInfo] = useState({});

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState()

    const [formState, setFormState] = useState({})

    const [emailToast, setEmailToast] = useState(false);

    const toggleEmailToast = () => {
        setEmailToast(true);
        setTimeout(() => {
            setEmailToast(false);
        }, 3000)
    }

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

    async function callDB() {
        try {
            setLoading(true)
            await getUser().then((snapshot) => {
                if (snapshot.val()) {
                    setUserDBInfo(userDBInfo => {
                        return {
                            ...userDBInfo,
                            ...snapshot.val()
                        }
                    })
                }
            })
        } catch (err) {
            console.log(JSON.stringify(err))
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        callDB()
    }, [])

    function handleForm(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (formState.email) {
            try {
                setLoading(true);
                setError();
                await updateUserEmail(formState.email);
                await sendVerifyEmail();
                toggleEmailToast();
            } catch (err){
                console.log(JSON.stringify(err));
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        try {
            setLoading(true);
            const update = {...userDBInfo, ...formState};
            console.log(update);
            await updateUserSettings(update.email, update.userName)
            callDB()
        } catch(err) {
            console.log(JSON.stringify(err))
            setError(err)
        } finally {
            setLoading(false)
        }
    }




    return (
        <>
            <animated.div style={slideLeft} className='container'>
                <div className='row'>
                    <div className='col-auto'>
                        <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1.5rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem' }}>User Settings</h1>
                    </div>
                </div>
            </animated.div>
            <animated.div style={fadeIn} className='container'>
                <Row>
                    <Col>
                        <Form>
                            { error && <Alert color='danger'>{error.message}</Alert> }
                            <FormGroup row className='align-items-center'>
                                <Label for='email' size='lg' sm={3}>Update Email</Label>
                                <Col sm={9}>
                                    <Input
                                        id='email'
                                        name='email'
                                        placeholder='New Email'
                                        type='email'
                                        onChange={handleForm}
                                        bsSize='lg'
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row className='align-items-center'>
                                <Label size='lg' sm={3} >Current Email</Label>
                                <Col sm={4}>
                                    <Label size='lg'>{currentUser.email}</Label>
                                </Col>
                                <Col sm={4}>
                                    <Button color='primary' onClick={sendVerifyEmail}>Resend Verification Email</Button>
                                </Col>                              
                            </FormGroup>
                            <div className='d-flex justify-content-center'>
                                <Toast isOpen={emailToast} fade className='bg-success'>
                                    <ToastHeader toggle={toggleEmailToast}>
                                        Email successfully Changed
                                    </ToastHeader>
                                    <ToastBody>
                                        Be sure to check you new email for confirmation
                                    </ToastBody>
                                </Toast>
                            </div>
                            <FormGroup row className='align-items-center'>
                                <Label size='lg' for='userName' sm={3}>Update Username</Label>
                                <Col sm={9}>
                                    <Input
                                        id='userName'
                                        name='userName'
                                        placeholder='New Username'
                                        type='text'
                                        onChange={handleForm}
                                        bsSize='lg'
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row className='align-items-center'>
                                <Label size='lg'sm={3}>Current Username</Label>
                                <Col sm={9}>
                                    <Label size='lg'>{userDBInfo.userName}</Label>
                                </Col>
                            </FormGroup>
                            <Button disabled={loading} type="submit" color='primary' onClick={handleSubmit}>Update Settings</Button>
                        </Form>
                    </Col>
                </Row>
            </animated.div>
        </>
    )
}
