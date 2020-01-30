import React from 'react';
import Page from '../components/Page';
import {
    Col,
    Row,
} from 'reactstrap';

function DonatePage() {
    return(
        <Page>
            <Row>
                <Col>
                    
                    <form id="myContainer" method="post" action="/checkout"></form>
               
                </Col>
            </Row>
        </Page>
     )
    
}

export default DonatePage;