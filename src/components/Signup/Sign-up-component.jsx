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
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('Passwords dont Match');
            return;
        }
    }
    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>Dont Have an account?</h2>
                <span>Sign up below</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='DisplayName'
                        type='text'
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label="Display Name"
                        required />
                    <FormInput
                        name='Email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required />
                    <FormInput
                        name='ConfirmPassword'
                        type='password'
                        value={this.state.confirmPassword}
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
