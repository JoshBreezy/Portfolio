import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from "react-hook-form";
import { useAuth } from '../contexts/AuthContext';


export default function LoginModal(props) {

    const { signup } = useAuth();

    const {
        register,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
            passwordConfirm: "",
            email: ""
        },
    });

    function handleSubmit(e) {
        e.preventDefault()

        signup(getValues('email'), getValues('password'))
    }

    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);


    return (
        <Modal className="container" isOpen={props.isOpen}>
            <ModalHeader className="justify-content-center">
                <h2>Login</h2>
            </ModalHeader>
            <ModalBody>
                <form
                    className="container mb-4"
                    onSubmit={(e) => handleSubmit}
                >
                    <input
                        {...register("username", {
                            required: "Username is required",
                            maxLength: { value: 15, message: "Maximum of 15 characters" },
                        })}
                        className="form-control"
                        placeholder="username"
                    />
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
                    <input type="submit" className="btn btn-primary" />
                </form>
                <ModalFooter>
                    <a href="/">Already an account?</a>
                </ModalFooter>
            </ModalBody>
        </Modal>
    );
}
