import React from 'react';
import Page from '../components/Page';
import {
    Card,
    CardBody,
    CardHeader,
    CardImg,
    Col,
    Row,
} from 'reactstrap';
import bg1Image from '../assets/img/team-pics/cover-pic-fb.jpg';


function FacebookPage() {


    return (

        <Page>
            <Row>
                <Col md={12} lg={12} xs={12}>
                    <CardHeader>Facebook Page</CardHeader>
                </Col>
            </Row>
            <Row>
                <Col md={5} lg={5} xs={12}   >
                    <Card className="flex-row">
                        <CardBody>
                            <div className="fb-page" data-href="https://www.facebook.com/Atlantarugby/"
                                data-tabs="timeline, events, messages" data-width="600" data-height="800" data-small-header="false"
                                data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                <blockquote cite="https://www.facebook.com/Atlantarugby/" className="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/Atlantarugby/">Atlanta Renegades Rugby Football Club</a>
                                </blockquote>
                            </div>

                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <CardImg md={7} lg={7} xs={0}  
                            className="card-img-left"
                            src={bg1Image}
                            style={{ width: '100%', height: "100%" }}
                        />
                </Col>
              
            </Row>

        </Page>

            


       





    )

}

export default FacebookPage;