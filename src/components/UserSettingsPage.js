import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, FormGroup, FormText, Label, Input, Alert, Toast, ToastHeader, ToastBody } from 'reactstrap';
import { useSpring, animated, config } from 'react-spring';
import { useAuth } from '../contexts/AuthContext';
import { useDB } from '../contexts/DBContext';

export default function UserSettingsPage() {

    const { updateUserSettings, getUser, checkUnavailNames, removeFromUnavail, addToUnavailNames } = useDB();
    const { currentUser, updateUserEmail, sendVerifyEmail } = useAuth();
    const [userDBInfo, setUserDBInfo] = useState({});
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [formState, setFormState] = useState({})
    const [emailToast, setEmailToast] = useState(false);
    const [updateToast, setUpdateToast] = useState(false);
    const [available, setAvailable] = useState(true);

    const toggleEmailToast = () => {
        setEmailToast(true);
        setTimeout(() => {
            setEmailToast(false);
        }, 3000)
    }

    const toggleUpdateToast = () => {
        setUpdateToast(true);
        setTimeout(() => {
            setUpdateToast(false);
        }, 2000)
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
        setAvailable(true);
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
                } catch (err) {
                    setError(err);
                }
                if (formState.userName) {
                    try {
                        await checkUnavailNames(formState.userName).then((snapshot) => {
                            if (snapshot.exists()) {
                                setAvailable(false);
                                throw new Error('Username Unavailable');
                            }
                        })
                        if (available) {
                            try {
                                if (userDBInfo.userName) {
                                    await checkUnavailNames(userDBInfo.userName).then((snapshot) => {
                                        const key = Object.keys(snapshot.val());
                                        removeFromUnavail(key[0]);
                                    })
                                }
                                try {
                                    await addToUnavailNames(formState.userName)
                                } catch (err) {
                                    setError(err)
                                }
                            } catch (err) {
                                setError(err)
                            }
                        }
                    } catch (err) {
                        setError(err)
                    }
                }
            }
        }
        try {
            const update = { ...userDBInfo, ...formState };
            await updateUserSettings(update.email, update.userName, update.ofAge)
            callDB()
        } catch (err) {
            setError(err)
            console.log(err)
        } finally {
            setLoading(false);
            toggleUpdateToast();
        }
    }




    return (
        <div className='container pb-5'>
            <div className='container'>
                <animated.div style={slideLeft} className='container'>
                    <div className='row'>
                        <div className='col-auto'>
                            <h1 style={{ margin: '3rem', fontSize: '3rem', padding: '1.5rem', backgroundColor: 'hsla(0,0%, 100%, .75', borderRadius: '2rem' }}>User Settings</h1>
                        </div>
                    </div>
                </animated.div>
                <animated.div style={fadeIn} className='container pb-3 form-bg'>
                    <Row>
                        <Col>
                            <Form>
                                {error && <Alert color='danger'>{error.message}</Alert>}
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
                                    {currentUser.emailVerified ? <FormText size='lg' color='success'>Email has been verified</FormText> : <FormText size='lg' sm={3} color='danger'>Email has not been verified</FormText>}
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
                                    <Label size='lg' sm={3}>Current Username</Label>
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
                                            <option value={''}>

                                            </option>
                                            <option value={false}>
                                                No I am under 18
                                            </option>
                                            <option value={true}>
                                                Yes I am over 18
                                            </option>
                                        </Input>
                                    </Col>
                                    {userDBInfo.ofAge === 'true' ? <FormText size='lg' color='success'>User is 18 or older</FormText> : <FormText size='lg' color='danger'>Adult language is filtered for underaged users</FormText>}
                                </FormGroup>
                                <div className='d-flex justify-content-center'>
                                    {updateToast && <Alert color='success'>User Settings Updated Successfully</Alert>}
                                </div>
                                <Button disabled={loading || available === false} type="submit" color='primary' onClick={handleSubmit}>Update Settings</Button>
                            </Form>
                        </Col>
                    </Row>
                </animated.div>
            </div>
        </div>
    )
};