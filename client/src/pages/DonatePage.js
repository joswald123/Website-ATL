import React from 'react';
import Page from '../components/Page';

// import {
//     Card,
//     CardBody,
//     CardHeader,
//     CardImg,
//     CardText,
//     Col,
//     Row,
// } from 'reactstrap';

import PaypalCheckoutButton from '../components/PaypalCheckoutButton.js';
import { Button, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';


function DonatePage() {
    const order = {
        customer: '123456',
        total: '50.00',
        items: [
            {
                sku: '112',
                name: 'Donation',
                price: '50.00',
                quantity: 1,
                currency: 'USD'
            },
           
        ]

        // customer: '123456',
        // total: '550.00',
        // items: [
        //     {
        //         sku: '112',
        //         name: 'uniformes',
        //         price: '300.00',
        //         quantity: 1,
        //         currency: 'USD'
        //     },
        //     {
        //         sku: '99',
        //         name: 'Camiseta',
        //         price: '125.00',
        //         quantity: 2,
        //         currency: 'USD'
        //     }
        // ]
    };

    return (
        <Page>
            <Card>
            <Row>
                    <Col lg={12} md={12} xs={12}>
                        <CardHeader>
                            <h1>Donations</h1>
                            <h5>Choose the quantity of your preference.</h5>
                        </CardHeader>
                    </Col>
            </Row>
            <CardBody>
            <Row>
                <Col lg={6} md={6} xs={12}>
                <h2>$50.00 UDS</h2>
                <PaypalCheckoutButton 
                    order={order}
                />
                </Col>
                <Col lg={6} md={6} xs={12}>
                <h2>$100.00 UDS</h2>
                <PaypalCheckoutButton 
                    order={order}
                />
                </Col>
                
                
            </Row>
            <Row>
                <Col lg={6} md={6} xs={12}>
                <h2>$150.00 UDS</h2>
                <PaypalCheckoutButton 
                order={order}
                />
                </Col>
                <Col lg={6} md={6} xs={12}>
                <h2>$200.00 UDS</h2>
                <PaypalCheckoutButton 
                order={order}
                />
                </Col>
            </Row>

            </CardBody>
            

            </Card>      
           
        </Page >
    )

}

export default DonatePage;