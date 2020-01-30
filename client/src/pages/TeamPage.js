import React from 'react';
import bg1Image from '../assets/img/bg/background_640-1.jpg';
import Page from '../components/Page';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Row,
  } from 'reactstrap';

function TeamPage() {

    return(

        <Page>
            <Row>
                <Col md={12} sm={12} xs={12} className="mb-3"><h1>Team</h1></Col>
            </Row>
            <Row>
                <Col md={6} sm={6} xs={12} className="mb-3">
                    <Card className="flex-row">
                        <CardImg
                            className="card-img-left"
                            src={bg1Image}
                            style={{ width: 'auto', height: 150 }}
                        />
                        <CardBody>
                            <CardTitle>Horizontal Image Card(Left)</CardTitle>
                            <CardText>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </CardText>
                        </CardBody>
                
                    </Card>
                </Col>

                <Col md={6} sm={6} xs={12} className="mb-3">
                    <Card className="flex-row">
                        <CardImg
                            className="card-img-left"
                            src={bg1Image}
                            style={{ width: 'auto', height: 150 }}
                        />
                        <CardBody>
                            <CardTitle>Horizontal Image Card(Left)</CardTitle>
                            <CardText>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </CardText>
                        </CardBody>
                
                    </Card>
                </Col>
        
            </Row>

            <Row>
                <Col md={6} sm={6} xs={12} className="mb-3">
                    <Card className="flex-row">
                        <CardImg
                            className="card-img-left"
                            src={bg1Image}
                            style={{ width: 'auto', height: 150 }}
                        />
                        <CardBody>
                            <CardTitle>Horizontal Image Card(Left)</CardTitle>
                            <CardText>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </CardText>
                        </CardBody>
                
                    </Card>
                </Col>

                <Col md={6} sm={6} xs={12} className="mb-3">
                    <Card className="flex-row">
                        <CardImg
                            className="card-img-left"
                            src={bg1Image}
                            style={{ width: 'auto', height: 150 }}
                        />
                        <CardBody>
                            <CardTitle>Horizontal Image Card(Left)</CardTitle>
                            <CardText>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                            </CardText>
                        </CardBody>
                
                    </Card>
                </Col>
        
            </Row>

        </Page>
        
    )
    
}

export default TeamPage;