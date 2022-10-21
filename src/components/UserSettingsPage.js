import React, { useState, useEffect } from 'react';
import {Row, Col, Button, Form, FormGroup, Label, Input,Alert, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { useSpring, animated, config } from 'react-spring';
import { useAuth } from '../contexts/AuthContext';
import { useDB } from '../contexts/DBContext';

export default function UserSettingsPage() {

    const { updateUserSettings, getUser, checkUnavailNames } = useDB();

    const { currentUser, updateUserEmail, sendVerifyEmail } = useAuth();

    const [userDBInfo, setUserDBInfo] = useState({});

    const [loading, setLoading] = useState(false)

    const [error, setError] = useState()

    const [formState, setFormState] = useState({})

    const [emailToast, setEmailToast] = useState(false);

    const [unavailable, setUnavailable] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleForm(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
        setUnavailable(false);
        setError();
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (Object.keys(formState).length !== 0) {

            if (formState.email) {
                try {
                    setLoading(true);
                    await updateUserEmail(formState.email);
                    await sendVerifyEmail();
                    toggleEmailToast();
                } catch (err){
                    setError(err);
                } finally {
                    setLoading(false);
                }
            }
    
            try {
                setLoading(true);
                await checkUnavailNames(formState.userName).then((snapshot) => {
                    console.log(snapshot.userName) 
                    if (snapshot.val().userName === formState.userName) {
                        setUnavailable(true);
                        throw new Error('Username Unavailable');                      
                    }
                })
            } catch(err){
                setError(err);
            } finally {
                setLoading(false);
            }
            if (unavailable !== true) {
                try {
                    setLoading(true);
                    if (userDBInfo.userName) {
                        await checkUnavailNames(userDBInfo.userName).then((snapshot) => {
                            snapshot.ref.remove().then((res) => {
                                console.log(res)
                            })
                        })
                    }
                    const update = {...userDBInfo, ...formState};
                    await updateUserSettings(update.email, update.userName, update.ofAge)
                    callDB()
                } catch(err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
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
                            </FormGroup>
                            <FormGroup row className='align-items-center'>
                                <Label size='lg' sm={3}>{currentUser.emailVerified? 'Email has been verified' : 'Email has not been verified'}</Label>
                                <Col sm={9}>
                                {!currentUser.emailVerified && <Button onClick={sendVerifyEmail} color='primary' >Resend Verification Email</Button>}
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
                            <FormGroup row className='align-items-center'>
                                <Label size='lg' sm={3}>Are you &gt;= 18 years old?</Label>
                                <Col sm={9}>
                                    <Input
                                        type='select'
                                        id='ofAge'
                                        name='ofAge'
                                        onChange={handleForm}
                                        bsSize='lg'
                                    >
                                        <option value={false}>
                                            No I am under 18
                                        </option>
                                        <option value={true}>
                                            Yes I am over 18
                                        </option>
                                    </Input>                                    
                                </Col>
                            </FormGroup>
                            <Button disabled={loading || unavailable} type="submit" color='primary' onClick={handleSubmit}>Update Settings</Button>
                        </Form>
                    </Col>
                </Row>
            </animated.div>
        </>
    )
}
