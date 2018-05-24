import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import { renderInput } from '../helpers';




class SignIn extends Component {
  
    handleSignIn(values) {
        console.log('sign Up info', values);

        this.props.signIn(values)
    } 


    render() {
        // remeber you email and password to sign back in
        // C318Jeanpaul@mail.com
        // learningfuze

        const { handleSubmit } = this.props

        return (
            <div className="row">
                <div className="col s8 offset-s2">
                  <div className="card deep orange lighten-2">
                        <div className="card-content">
                            <span className="card-title center">Sign In</span>            
                          
                            <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                <Field name="email" label="Email" component={renderInput} />
                                <Field name="password" label="Password" component={renderInput} type="password" />
                                <div className="row right-align">
                                    <button className="btn amber darken-4">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>       
            </div>
        );
    }
}

function validate(values) {
    const { email, password  } = values;

    //errors oobj
    const errors = {}

    if(!email) {
        errors.email = "Please enter email"
    }

    if(!password){
        errors.password = "Please choose a password";
    }
    // if(password !== confirmPassword){
    //     errors.confirmPassword = "Passwords do not match"
    // }

    return errors;

}

SignIn = reduxForm({
    form: "sign-in",
    //must add validate or wont see it the config 
    validate: validate
})(SignIn);

export default connect(null, {signIn})(SignIn);

