import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Button, Row, Col, Container } from 'reactstrap';


export default function Main() {
    return (
        <Container style={{height: '100vh'}}>
            <Row className='justify-content-center p-3'>
                <Col className='col-sm-auto'>
                    <Link to='/projects'>
                        <Button color='primary'>Projects</Button>
                    </Link>
                </Col>
            </Row>
            <Row className='justify-content-center p-3'>
                <Link to='/contact' className='col-auto'>
                    <Button color='primary'>Contact</Button>
                </Link>
            </Row>
        </Container>
    )
}