import logo200Image from '../assets/img/logo/ATL-logo.PNG';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from "react-router"
import fire from '../config/Fire';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';



class AuthForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }


  // handleSubmit = useCallback(async event => {
  //   event.preventDefault();
  //   const { email, password } = event.target.elements;
  //   try {
  //     await fire
  //       .auth()
  //       .createUserWithEmailAndPassword(email.value, password.value);
  //     this.props.history.push("/");

  //   } catch (error) {
  //     alert(error)
  //   }
   
  // }, [this.props.history]);
  
 
  get isLogin() {
    return this.props.authState === STATE_LOGIN;
    
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
    
  }

  changeAuthState = authState => event => {
    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=> {
    }).catch((error)=>{
      console.log(error)
    })
  };

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    }

    if (!buttonText && this.isSignup) {
      return 'Signup';
    }

    return buttonText;
  }

  render() {
    const {
      showLogo,
      usernameLabel,
      usernameInputProps,
      userFirstNameLabel,
      userLastNameLabel,
      userFirstNameInputProps,
      userLastNameInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
      children,
      onLogoClick,
    } = this.props;


    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 100, height: 70, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input {...usernameInputProps} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input {...passwordInputProps} onChange={this.handleChange} />
        </FormGroup>
        {this.isSignup && (
          <FormGroup>
            <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input {...confirmPasswordInputProps} />
            
            <Label for={userFirstNameLabel}>{userFirstNameLabel}</Label>
            <Input {...userFirstNameInputProps} onChange={this.handleChange}/>
            
            <Label for={userLastNameLabel}>{userLastNameLabel}</Label>
            <Input {...userLastNameInputProps} onChange={this.handleChange}/>
          </FormGroup>
        )}
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            {this.isSignup ? 'Agree the terms and policy' : 'Remember me'}
          </Label>
        </FormGroup>
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          {this.renderButtonText()}
        </Button>

        <div className="text-center pt-1">
          <h6>or</h6>
          <h6>
            {this.isSignup ? (
              <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
                Login
              </a>
            ) : (
              <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
                Signup
              </a>
            )}
          </h6>
        </div>

        {children}
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';



AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
    id: 'email',

  },
  userFirstNameLabel: 'First Name',
  userFirstNameInputProps: {
    type: 'name',
    placeholder: 'your first-name',
    id: 'firstName'
  },
  userLastNameLabel: 'Last Name',
  userLastNameInputProps: {
    type: 'text',
    placeholder: 'your last-name',
    id: 'lastName'
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
    id: 'password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
    id: 'password'
  },
  onLogoClick: () => {},
};

export default withRouter(AuthForm);
