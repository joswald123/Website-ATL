import React, { useState, useRef, useEffect } from 'react';
import Page from '../components/Page';
import duesPic from '../assets/img/products/product_640-1.jpg';
import thanks from '../assets/img/products/thankyou-pic.PNG';
import {
    Card,
    CardBody,
    CardHeader,
    CardImg,
    CardText,
    Col,
    Row,
} from 'reactstrap';



function DuesPage() {

    const [paidFor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);

    let paypalRef = useRef();

    const product = {
        price: 200.00,
        description: "Make a payment for your dues",
        image: "../assets/img/products/thankyou-pic.PNG"
    };
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://www.paypal.com/sdk/js?client-id=AcFx8E4ubOjOdlZGaxDVS0DX4IC38V-HDRPWFVWx6eEATLD54XksSUlufzQ8tStiZLfsPhr5aK4S__6C"
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);

        if (loaded) {
            setTimeout(() => {
                window.paypal
                    .Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        description: product.description,
                                        amount: {
                                            currency_code: "USD",
                                            value: product.price
                                        }
                                    }
                                ]
                            });
                        },
                        onApprove: async (data, actions) => {
                            const order = await actions.order.capture();

                            setPaidFor(true);

                            console.log(order);
                        },
                    })
                    .render(paypalRef);
            });
        }
    });

    return (
        <Page>

            {paidFor ? (

                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Card>
                            <CardImg top width="100%" src={duesPic} alt="Card image cap"/>  
                            <CardBody>
                                <CardText><h2>Congrats, You just donated to support this team!</h2></CardText>
                                <CardImg src={thanks} />
                            </CardBody>
                        </Card>
                        
                    </Col>
                </Row>
            ) : (

                <Card>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                           
                                <CardHeader>
                                    <h5>{product.description} for ${product.price}</h5>
                                </CardHeader>
                                <CardImg src={duesPic} width="200" height="400"/>
                        </Col>
                        <Col  sm="12" xm="12" md={{ size: 6, offset: 3 }}>
                                <CardBody>
                                    <div ref={v => (paypalRef = v)} />
                                </CardBody>

                        </Col>

                    </Row>
                </Card>    
                )}
        </Page >
    )

}

export default DuesPage;