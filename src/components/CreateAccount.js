import { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Alert,
    Button,
} from "reactstrap";
import { useAuth } from "../contexts/AuthContext";
import { useDB } from "../contexts/DBContext";

export default function CreateAccount(props) {
    const [loading, setLoading] = useState(false);

    const { signup, sendVerifyEmail } = useAuth();

    const { addCurrentUserToDB, checkUnavailNames, addToUnavailNames } = useDB();

    const [accountSuccess, setAccountSuccess] = useState(false);

    const [available, setAvailable] = useState();

    const [formState, setFormState] = useState({
        email: "",
        userName: "",
        password: "",
        passwordConfirm: "",
    });

    const [error, setError] = useState("");

    function handleForm(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (formState.password !== formState.passwordConfirm) {
            return setError({ message: "Passwords do not match" });
        }

        try {
            setError();
            setLoading(true);
            await checkUnavailNames(formState.userName).then((snapshot) => {
                if (snapshot.exists()) {
                    setAvailable(false);
                    throw new Error('Username Unavailable')
                } else {
                    setAvailable(true);
                }
            })
            if (available) {
                await signup(formState.email, formState.password);
                setAccountSuccess(true);
                setTimeout(() => {
                    props.toggle();
                    setAccountSuccess(false);
                }, 3000);
                sendVerifyEmail();
                addCurrentUserToDB(formState.userName);
                addToUnavailNames(formState.userName);
            }
        } catch (err) {
            console.log(JSON.stringify(err));
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Modal className="container" isOpen={props.isOpen}>
            <ModalHeader className="justify-content-center" toggle={props.toggle}>
                <h2>Create Account</h2>
            </ModalHeader>
            <ModalBody>
                {error && <Alert color="danger">{error.message}</Alert>}
                {accountSuccess && (
                    <Alert color="success">Account created successfully!</Alert>
                )}
                <form className="container mb-4">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        onChange={handleForm}
                    />
                    <label>Username</label>
                    <input
                        type="text"
                        name="userName"
                        className="form-control"
                        placeholder="UserName"
                        onChange={handleForm}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={handleForm}
                    />
                    <label>Password Confirmation</label>
                    <input
                        type="password"
                        name="passwordConfirm"
                        className="form-control"
                        placeholder="Confirm Password"
                        onChange={handleForm}
                    />
                    <Button
                        disabled={loading}
                        type="submit"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        Create Account
                    </Button>
                </form>
                <ModalFooter>
                    <Button color="primary" onClick={props.toggleLogSign}>
                        Already have an account?
                    </Button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    );
}
