import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Card, CardHeader, CardBody, Alert } from 'reactstrap';
import { useDB } from '../../contexts/DBContext';
import { useAuth } from '../../contexts/AuthContext';

export default function AddComment() {

    const { addComment, getUserName } = useDB();
    const { currentUser } = useAuth();
    const [ formState, setFormState ] = useState();
    const [ userName, setUserName ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState();

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

    async function handleSubmit (e) {
        e.preventDefault();
        const commentPack = {
            author: userName,
            comment: formState.comment
        }
        try {
            setLoading(true);
            await addComment(commentPack);
        } catch(err) {
            setError(err)
        } finally {
            setFormState();
            setLoading(false);
        }
    }



    return (
        <Card className='comment-card'>
            <CardHeader>
                <h5>Add Comment</h5>
            </CardHeader>
            <CardBody>
                <Form className='d-flex'>
                    {error && <Alert color='danger'>{error.message}</Alert>}
                    <Input type='text' id='comment' name='comment' placeholder='Type comment here' onChange={handleForm} className='col mx-2' />
                    <Button color='primary' type='submit' className='col-3 m-auto' disabled={ loading === true } onClick={handleSubmit} >Submit</Button>
                </Form>
            </CardBody>
        </Card>
    )
}
