import React from 'react';

import './sign-in-and-sign-up.styles.scss';
import SignIN from '../../components/SignIn/sign-in.component';
import SignUP from '../../components/Signup/Sign-up-component';

const SignINSignUPPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIN />
        <SignUP />
    </div>
)

export default SignINSignUPPage;