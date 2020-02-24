import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router"
import fire from '../config/Fire';
import { AuthContext } from '../Auth';
import { Col, Row } from 'reactstrap';



const Login = (props) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await fire
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(function () {
                let currentUser = fire.auth().currentUser;
                // console.log(currentUser.displayName); 
                props.updatedUser(currentUser.displayName)
                props.history.push("/");
                });
        } catch (error) {
            alert(error);

        }

    }, [props.history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        // console.log( currentUser )
        return <Redirect to="/" />;
    }

        return (

            <div>
            <br></br>
            <br></br>

            <Row>
                <Col size="md-2"></Col>
                <Col size="md-8">

                
                        <div className="signupForm mt-5">
                            <form onSubmit={handleLogin}>
                                <h1>Log In</h1>
                                <hr></hr>

                                <label>
                                    Email
                                        <input type="email" name="email" placeholder="" />
                                </label>
                                <hr></hr>
                                <label>
                                    Password
                                        <input type="password" name="password" placeholder="" />
                                </label>
                                <hr></hr>
                                <button type="login" style={{ marginTop: '25px', marginLeft: '10px' }} className="btn btn-success">Login</button>
                                <button type="" style={{ marginTop: '25px', marginLeft: '10px' }} 
                                className="btn btn-success" >Sign Up</button>

                            </form>
                        </div>

                   

                </Col>

                <Col size="md-2"></Col>
            </Row>

        </div >

        );
    
}

export default withRouter (Login);
