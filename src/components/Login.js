import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Alert, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import { useAuth } from '../contexts/AuthContext';


export default function Login(props) {

    const [loading, setLoading] = useState(false);

    const { login, currentUser } = useAuth();

    const {
        register,
        getValues,
        formState: { errors },
        handleSubmit
    } = useForm({
        defaultValues: {
            // username: "",
            password: "",
            email: ""
        },
    });

    async function onSubmit (data) {

        try {
            setLoading(true)
            await login(getValues('email'), getValues('password'))
            props.setLoginOutcome(true)
            setTimeout(() => {
                props.toggle()
            }, 2000)
        } catch {
            props.setLoginOutcome(false)
        }
        setLoading(false)
    }

    return (
        <Modal className="container" isOpen={props.isOpen}>
            <ModalHeader className="justify-content-center" toggle={props.toggle}>
                <h2>Log In</h2>
            </ModalHeader>
            <ModalBody>
            {props.loginOutcome!== undefined && <Alert color={props.loginOutcome? 'success' : 'danger'} >{props.loginOutcome? 'Login Successful' : 'Login Failed'}</Alert>}
                <form
                    className="container mb-4"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label>Email</label>
                    <input
                        type='email'
                        {...register("email", {
                            required: "Email is required",
                            maxLength: { value: 50, message: "Maximum of 50 characters" },
                        })}
                        className="form-control"
                        placeholder="Email Address"
                    />
                    <p>{errors.email?.message}</p>
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: "Minimum of 8 characters" },
                        })}
                        placeholder="Password"
                    />
                    <p>{errors.password?.message}</p>
                    <input disabled={loading} type="submit" className="btn btn-primary" />
                </form>
                <ModalFooter>
                    {!currentUser && <Button color='primary' onClick={props.toggleLogSign}>Need an account?</Button>}
                </ModalFooter>
            </ModalBody>
        </Modal>
    );
}
