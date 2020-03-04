import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router"
import Page from '../components/Page';
import fire from '../config/Fire';
import { AuthContext } from '../Auth';
import { Button, Form, FormGroup, Input, Label, Col, Row, Card } from 'reactstrap';
import logo200Image from '../assets/img/logo/ATL-logo.PNG';



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

        <Page>
            <Row className="mt-5 mb-5">
                
                <Col sm="12" md={{ size: 7, offset: 3 }} className="mt-5 mb-5">
                    <Card >
                    <Form onSubmit={handleLogin} className="m-5">
                      
                      <div className="text-center pb-4">
                      <img
                          src={logo200Image}
                          className="rounded"
                          style={{ width: 100, height: 70, cursor: 'pointer' }}
                          alt="logo"
                          onClick={()=>{}}
                      
                      />
                      </div>
            

                  
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
                  <Button type="login" style={{ marginTop: '25px', marginLeft: '10px' }} className="btn btn-success">Login</Button>
                  </Form>

                    </Card>
                    
                </Col>
            </Row>
        </Page>


    );
        
    }
    
    export default withRouter (Login);
