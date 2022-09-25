import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import { useAuth } from '../contexts/AuthContext';


export default function CreateAccount(props) {

    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();

    const {
        register,
        getValues,
        setError,
        clearErrors,
        formState: { errors },
        handleSubmit
    } = useForm({
        defaultValues: {
            // username: "",
            password: "",
            passwordConfirm: "",
            email: ""
        },
    });

    const checkPassMatch = () => {
        if (getValues('password') !== getValues('passwordConfirm')) {
            setError('passMissMatch', {type: 'custom', message: 'Passwords must match'})
        } else {
            clearErrors('passMissMatch')
        }
    }

    async function onSubmit (data) {

        try {
            setLoading(true)
            await signup(getValues('email'), getValues('password'))
        } catch {
            setError('CreateAccountFail', {type: 'custom', message: 'Failed to create account'})
        }
        setLoading(false)
    }

    return (
        <Modal className="container" isOpen={props.isOpen}>
            <ModalHeader className="justify-content-center">
                <h2>Create Account</h2>
                {errors.CreateAccountFail && <Alert color="danger">{errors.CreateAccountFail?.message}</Alert>}
            </ModalHeader>
            <ModalBody>
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
                    <label>Password Confirmation</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("passwordConfirm", {
                            required: "Confirmation is required",
                            validate: { checkPassMatch }
                        })}
                        placeholder="Confirm Password"
                    />
                    <p>{errors.passwordConfirm?.message}</p>
                    <p>{errors.passMissMatch?.message}</p>
                    <input disabled={loading} type="submit" className="btn btn-primary" />
                </form>
                <ModalFooter>
                    <a href="/">Already an account?</a>
                </ModalFooter>
            </ModalBody>
        </Modal>
    );
}
