import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Alert, Button } from "reactstrap";
import { useAuth } from '../contexts/AuthContext';


export default function ForgotPassword(props) {

    const [loading, setLoading] = useState(false);

    const { sendResetPassEmail } = useAuth();

    const [emailSent, setEmailSent] = useState(false)

    const [formState, setFormState] = useState({
        email: ""
    });

    const [error, setError] = useState()

    function handleForm(e) {
        setFormState({
          ...formState,
          [e.target.name]: e.target.value
        })
      }

      async function handleSubmit(e) {

        e.preventDefault()

        try {
            setError()
            setLoading(true)
            await sendResetPassEmail(formState.email)
            setEmailSent(true)
            setTimeout(() => {
                props.toggle()
                setEmailSent(false)
            }, 3000)
        } catch (err) {
            console.log(JSON.stringify(err))
            setError(err)
        } finally {
            setLoading(false)
        }
      }

    return (
        <Modal className="container" isOpen={props.isOpen}>
            <ModalHeader className="justify-content-center" toggle={props.toggle}>
                <h2>Create Account</h2>
            </ModalHeader>
            <ModalBody>
            {error && <Alert color= 'danger'>{error.message}</Alert>}
            {emailSent && <Alert color= 'success'>Please check your email for a password reset Link</Alert>}
                <form
                    className="container mb-4"
                >
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        className="form-control"
                        placeholder="Email Address"
                        onChange={ handleForm }
                    />
                    <Button disabled={loading} type="submit" color='primary' onClick={handleSubmit}>Send password reset email</Button>
                </form>
            </ModalBody>
        </Modal>
    );
}
