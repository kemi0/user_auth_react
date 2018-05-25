import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import { connect } from 'react-redux';
import { signUp, clearAuthError } from '../actions';
import { renderInput } from '../helpers';


class SignUp extends Component {
  
        handleSignUp(values) {
        console.log('sign Up info', values);

        this.props.signUp(values)
    } 

    componentWillUnmount(){
        this.props.clearAuthError();
    }


    render() {
        // remeber you email and password to sign back in
        // C318Jeanpaul@mail.com
        // learningfuze

        const { handleSubmit, authError } = this.props

        return (
            <div className="row">
                <div className="col s8 offset-s2">
                  <div className="card deep orange lighten-2">
                        <div className="card-content">
                            <span className="card-title center">Sign Up</span>            
                          
                            <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                                <Field name="email" label="Email" component={renderInput} />
                                <Field name="password" label="Password" component={renderInput} type="password" />
                                <Field name="confirmPassword" label="Confirm Password" component={renderInput} type="password"/>
                                <div className="row right-align">
                                    <button className="btn amber darken-4">Sign Up</button>
                                    <p className="right-align red-text tex-darken-3">
                                    
                                    {authError}
                                    
                                    </p>
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
    const { email, password, confirmPassword } = values;

    //errors oobj
    const errors = {}

    if(!email) {
        errors.email = "Please enter email"
    }

    if(!password){
        errors.password = "Please choose a password";
    }
    if(password !== confirmPassword){
        errors.confirmPassword = "Passwords do not match"
    }

    return errors;

}

SignUp = reduxForm({
    form: "sign-up",
    //must add validate or wont see it the config 
    validate: validate
})(SignUp);

function mapStateToProps(state){
    return{
        authError: state.user.error
    }
}

export default connect(mapStateToProps, {signUp, clearAuthError})(SignUp) ;