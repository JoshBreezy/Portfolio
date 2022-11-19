import React, { useState } from 'react';
import { useDB } from '.../contexts/DBContext';
import { Form, Button, Form, FormGroup, FormText, Label, Input, Alert } from 'reactstrap';

export default function NewBlog() {

    const { addBlog } = useDB;
    const [formState, setFormState] = useState();


    return (
        <div>

        </div>
    )
}
