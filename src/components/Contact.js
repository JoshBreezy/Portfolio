import { useForm } from 'react-hook-form';
import { Row, Col, Container, Button } from 'reactstrap';
import emailjs from '@emailjs/browser';

export default function ContactForm () {
    
    const { register, formState: { errors } } = useForm();
    
    console.log(errors);

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_s0p3pzo', 'template_l74pxog', e.target, 'TuqUzW0957vOjFmkw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return (

        <Container className='container'>
            <Row className='row-content'>
                <Col className='col-12 mt-4'>
                    <h2>Contact Me!</h2>
                    <hr/>
                </Col>
                <Col className='col-md-10'>
                    <form onSubmit={sendEmail}>
                        <Row className='form-group align-items-center'>
                            <label htmlFor='first' className='col-md-2'>First Name</label>
                            <input id='first' name='first' className='col-md-10'{...register('first', {required: 'This is required'})} placeholder='First Name' />
                            <p>{errors.first?.message}</p>
                        </Row>
                        <Row className='form-group align-items-center'>
                            <label htmlFor='last' className='col-md-2'>Last Name</label>
                            <input id='first' name='last' className='col-md-10' {...register('last', {required: 'This is required'})} placeholder='Last Name' />
                            <p>{errors.last?.message}</p>
                        </Row>
                        <Row className='form-group align-items-center'>
                            <label htmlFor='email' className='col-md-2'>Email Address</label>
                            <input id='email' name='email' className='col-md-10' {...register('email', {required: 'This is required'})} placeholder='Email Address' />
                            <p>{errors.email?.message}</p>
                        </Row>
                        <Row>
                            <label htmlFor='phone' className='col-md-2 align-items-center'>Phone Number</label>
                            <input id='phone' name='phone' className='col-md-10' {...register('phone', {required: 'This is required'})} placeholder='Phone Number' />
                            <p>{errors.phone?.message}</p>
                        </Row>
                        <Row className='form-group'>
                            <label htmlFor='agree'>Are we allowed to contact you?
                            {' '}
                                <select id='agree' name='agree' {...register('agree')} >
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </label>
                        </Row>
                        <br/>
                        <Row className='form-group'>
                            <label htmlFor='feedback' className='col-md-2'>Feedback</label>
                            {' '}
                            <textarea rows='12' id='feedback' name='feedback' className='col-md-10' {...register('feedback')} />
                        </Row>
                        <br/>
                        <Row className='form-group'>
                            <Col md={{ size: 10, offset: 2}}>
                                <Button type='submit' color='primary'>
                                    Send Feedback
                                </Button>
                            </Col>
                        </Row>
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