import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Container, Button } from 'reactstrap';

export default function ContactForm () {
    
    const { 
        register, 
        handleSubmit,
        formState: { errors }
    } = useForm();
    
    console.log(errors);
    
    /*
    const [values, setValues] = useState({
        first: '',
        last: '',
        email: '',
        phone: '',
        agree: false,
        feedback: ''
    });

    const handleFirst = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            first: event.target.value
        }));
    };

    const handleLast = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            last: event.target.value
        }));
    };

    const handleEmail = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value
        }));
    };

    const handlePhone = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            phone: event.target.value
        }));
    };

    const handleAgree = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            agree: event.target.value
        }));
    };

    const handleFeedback = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            feedback: event.target.value
        }));
    };

    const handleChange = (event) => {
        this.setState({value: event.target.value});
      }
    */

    return (

        <Container className='container-fluid'>
            <Row className='row-content'>
                <h2 style={{color: 'white'}}>Contact Me!</h2>
                <Col>
                <form onSubmit={handleSubmit((data) => {
                    console.log(data);
                    })}>
                    <input {...register('first', {required: 'This is required'})} placeholder='First Name' />
                    <p>{errors.first?.message}</p>
                    <input {...register('last', {required: 'This is required'})} placeholder='Last Name' />
                    <p>{errors.last?.message}</p>
                    <input {...register('email', {required: 'This is required'})} placeholder='Email Address' />
                    <p>{errors.email?.message}</p>
                    <input {...register('phone', {required: 'This is required'})} placeholder='Phone Number' />
                    <p>{errors.phone?.message}</p>
                </form>
                </Col>
            </Row>
        </Container>


        /*
        <>
            <Container>
                <Row>
                    <Col>
                        <h2>Contact me!</h2>
                        <hr />
                    </Col>
                </Row>
                <Row className='row-content'>
                    <Col>
                        <form onSubmit={handleSubmit()}>
                            <input
                                id="first-name"
                                class="form-field"
                                type="text"
                                placeholder="First Name"
                                name="first"
                                value={values.first}
                                onChange={handleChange}
                            />
                            <input 
                                id='last-name'
                                class='form-field'
                                type='text'
                                placeholder='Last Name'
                                name='last'
                                value={values.last}
                                onChange={handleChange}
                            />
                            <input 
                                id='email'
                                class='form-field'
                                type='text'
                                placeholder='Email Address'
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                            />
                            <input 
                                id='phone'
                                class='form-field'
                                type='text'
                                placeholder='Phone Number'
                                name='phone'
                                value={values.phone}
                                onChange={handleChange}
                            />
                            <select>

                            </select>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
        */
    )
};