import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router"
import fire from '../config/Fire';
import { Button, Form, FormGroup, Input, Label, Col, Row, Card } from 'reactstrap';
import { AuthContext } from '../Auth';
import Page from '../components/Page';
import logo200Image from '../assets/img/logo/ATL-logo.PNG';


const Signup = (props) => {
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

        <Page>
            <Row className="mt-5 mb-5">

                <Col sm="12" md={{ size: 9, offset: 2 }} className="mt-5 mb-5">
                    <Card >
                        <Form onSubmit={handleSignUp} className="m-5">

                            <div className="text-center pb-4">
                                <img
                                    src={logo200Image}
                                    className="rounded"
                                    style={{ width: 100, height: 70, cursor: 'pointer' }}
                                    alt="logo"
                                    onClick={() => { }}

                                />
                            </div>
                            <FormGroup>
                                <Label for="firstName" sm={2}>
                                    First Name
                                </Label>
                                <Input
                                    type="name"
                                    name="firstname"
                                    placeholder="Type your Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastName" sm={2}>
                                    Last Name
                                </Label>
                                <Input
                                    type="lastName"
                                    name="lastname"
                                    placeholder="Type your Last Name"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email" sm={2}>
                                    Email
                                </Label>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Type your email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password" sm={2}>
                                    Password
                                </Label>
                                <Input
                                    type="password"
                                    name="password"
                                    placeholder="Type your password"
                                />
                            </FormGroup>
                            <Button type="login" style={{ marginTop: '25px', marginLeft: '10px' }} className="btn btn-success">Signup</Button>
                        </Form>

                    </Card>

                </Col>
            </Row>
        </Page>



    );

}

export default withRouter(Signup);