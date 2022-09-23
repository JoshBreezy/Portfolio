import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import { useAuth } from '../contexts/AuthContext';


export default function LoginModal(props) {

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

    async function onSubmit (data) {
        try {
            setLoading(true)
            await signup(getValues('email'), getValues('password'))
        } catch {
            setError('CreateAccountFail', {type: 'custom', message: 'Failed to create account'})
        }
    }

    return (
        <Modal className="container" isOpen={props.isOpen}>
            <ModalHeader className="justify-content-center">
                <h2>Login</h2>
            </ModalHeader>
            <ModalBody>
                <form
                    className="container mb-4"
                    onSubmit={handleSubmit}
                >
                    {/* <input
                        {...register("username", {
                            required: "Username is required",
                            maxLength: { value: 15, message: "Maximum of 15 characters" },
                        })}
                        className="form-control"
                        placeholder="username"
                    /> */}
                    <p>{errors.username?.message}</p>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            maxLength: { value: 15, message: "Maximum of 15 characters" },
                        })}
                        className="form-control"
                        placeholder="Email Address"
                    />
                    <p>{errors.email?.message}</p>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 8, message: "Minimum of 8 characters" },
                        })}
                        placeholder="password"
                    />
                    <p>{errors.password?.message}</p>
                    <input
                        type="password"
                        className="form-control"
                        {...register("passwordConfirm", {
                            required: "Confirmation is required",
                            minLength: { value: 8, message: "Minimum of 8 characters" },
                        })}
                        placeholder="Confirm Password"
                    />
                    <p>{errors.passwordConfirm?.message}</p>
                    <input disabled={loading} type="submit" className="btn btn-primary" />
                </form>
                <ModalFooter>
                    <a href="/">Already an account?</a>
                </ModalFooter>
            </ModalBody>
        </Modal>
    );
}
