import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Button } from 'reactstrap';
import Projects from './Projects';

export default function Main() {
    return (
        <div className='container-fluid'>
            <div className='position-absolute top-50 start-50 translate-middle'>
                <Link to ='/projects'>
                    <Button color='primary'>Projects</Button>
                </Link>
            </div>
        </div>
    )
}