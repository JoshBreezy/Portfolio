import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from 'react-hook-form';

export default function LoginModal(props) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);

    return (
        <Modal className='container' isOpen={props.isOpen} >
            <ModalHeader className='justify-content-center'><h2>Login</h2></ModalHeader>
            <ModalBody>
                <form className='container mb-4' onSubmit={handleSubmit(onSubmit, onError)}>
                    <input 
                        {...register('username', 
                            {required: 'Username is required', 
                            maxLength: {value: 15, message: 'Maximum of 15 characters'}})}
                        className='form-control' 
                        placeholder='username' 
                    />
                    <p>{errors.username?.message}</p>
                    <input 
                        type='password' 
                        className='form-control' 
                        {...register('password', 
                            {required: 'Password is required', minLength: {value: 8, message: 'Minimum of 8 characters'}})} 
                        placeholder='password' 
                    />
                    <p>{errors.password?.message}</p>
                    <input type='submit' className='btn btn-primary' />
                </form>
                <ModalFooter>
                    <a href='/'>Need to create an account?</a>
                </ModalFooter>
            </ModalBody>
        </Modal>
    );
}
