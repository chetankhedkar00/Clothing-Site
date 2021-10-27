import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    hadnleSubmit = event => {
        event.preventDefault();
        this.setState({email: '' , password: '' })
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({ [name] : value });
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> Sign in with your email and password</span>

               <form onSubmit={this.hadnleSubmit}>
                <label>Email</label>
                <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} //
                label='email' required />
                
                <label>Password</label>
                <FormInput name="password" type="password" value={this.state.email} handleChange={this.handleChange} 
                 label='password' required />
            <div className='buttons'>
                <CustomButton type='submit'> Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >  Sign in with Google </CustomButton>
            </div>
                </form>

            </div>
        );
    }
}
export default SignIn;
