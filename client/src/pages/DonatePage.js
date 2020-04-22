import React, { useState, useRef, useEffect } from 'react';
import Page from '../components/Page';
import teampic from '../assets/img/team-pics/440889_Renegades_South_Championship__SoPi.jpg';
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



function DonatePage() {

    const [paidFor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);

    let paypalRef = useRef();

    const product = {
        price: 25.00,
        description: "Make a donation to support this Rugby Football Team, starting",
        image: "../assets/img/products/product_640-2.jpg"
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
                            alert(`Tu donacion fue procesada correctamente!`)
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
                            <CardImg top width="100%" src={teampic} alt="Card image cap"/>  
                            <CardBody>
                                <CardText><h2>Congrats, You just donated to support this cause</h2></CardText>
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
                                <CardImg src={teampic} width="200" height="300" />
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

export default DonatePage;