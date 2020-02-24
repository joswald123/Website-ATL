import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router"
import fire from '../config/Fire';
import { Col, Row } from 'reactstrap';
import { AuthContext } from '../Auth';


const Signup = ( props ) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { firstname, lastname, email, password } = event.target.elements;
        let username = firstname.value + " " + lastname.value;
        // console.log(username)
        try {
            await fire
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(function (result) {
                    result.user.updateProfile({
                        displayName: username
                    }).then(function () {
                        let currentUser = fire.auth().currentUser;
                        console.log(currentUser.displayName); 
                        // Update successful.
                        props.updatedUser(currentUser.displayName)
                        props.history.push("/");
                    });

                })

        } catch (error) {
            alert(error);

        }

    }, [props.history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        
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
                        <form onSubmit={handleSignUp}>

                            <h1>New User?</h1>
                            <p> * Get a FREE account in less than 2 minutes</p>
                            <p> * Access a personalized that allows to upload your projects or be a backer on a great idea!</p>
                            <h1>Join Now!</h1>

                            <label>
                                First Name
                                        <input type="firstname" name="firstname" placeholder="" />
                            </label>
                            <hr></hr>
                            <label>
                                Last Name
                                        <input type="lastname" name="lastname" placeholder="" />
                            </label>
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
                            <button type="submit" style={{ marginTop: '25px', marginLeft: '10px' }} className="btn btn-success">Signup</button>

                        </form>
                    </div>



                </Col>

                <Col size="md-2"></Col>
            </Row>

        </div >



    );

}

export default withRouter(Signup);