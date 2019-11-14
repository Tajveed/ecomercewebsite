import React from 'react';
import './Sign-up.styles.scss';
import FormInput from '../Form-Input/form-input.component';
import CustomButton from '../Custom-Buttons/custom-buttons.components';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.PreventDefault();
        if (password !== confirmPassword) {
            alert('Passwords dont Match');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        debugger;
        return (
            <div className='sign-up'>
                <h2 className='title'>Dont Have an account?</h2>
                <span>Sign up below</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required />
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        handleChange={this.handleChange}
                        label="Email"
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        label="password"
                        required />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            SIGN UP
                       </CustomButton>
                    </div>
                </form>
            </div>)
    }
}

export default SignUp;
