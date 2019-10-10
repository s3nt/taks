import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './Login.css';
import * as actionCreators from '../../store/actions';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    render () {
        
        let redirect = null;
        if (this.props.logIn) {
            redirect = <Redirect to='/market' />
        }
        return (
            <div>
            {redirect}
            <h1>Log In</h1>
            <Formik
                initialValues = {{ 
                    email: "",
                    password: ""
                }}
                onSubmit = {(values, { setSubmitting }) => {
                    localStorage.setItem('LogIn', values.email);
                    localStorage.setItem('Password', values.password);
                    this.props.onLogIn();
                    
                }}
                validationSchema = {Yup.object().shape({
                    email: Yup.string()
                        .email()
                        .required("Required"),
                    password: Yup.string()
                        .required("No password provided")
                        .min(8, "Password is too short - should be eight characters minimun")
                        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%^*#?&])[A-Za-z\d@$!%^*#?&]{8,}$/, "Password should contain at least one number, symbol and letter")
                })}

            >

            {props => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;

                return (
                    
                    <form
                        
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >

                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.email && touched.email && "error"}
                        />

                        {errors.email && touched.email && (
                            <div className={"input-feedback"}>
                                {errors.email}
                            </div>
                        )}

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password && "error"}
                        />

                        {errors.password && touched.password && (
                            <div className={"input-feedback"}>
                                {errors.password}
                            </div>
                        )}

                        <button
                            
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>

                    </form>
                )
            }}    
            
            </Formik>
            </div>    
            
        );
    };
    
}

const mapStateToProps = state => {
    return {
        logIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogIn: () => dispatch(actionCreators.logInAsync())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
