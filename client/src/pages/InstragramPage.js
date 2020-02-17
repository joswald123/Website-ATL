import React from 'react';
import Page from '../components/Page';
import InstagramEmbed from 'react-instagram-embed';
import {
    Col,
    Row,
    CardHeader
} from 'reactstrap';


function InstagramPage() {

    return(
       <Page>
            <Row>
                <Col md={12} lg={12} xs={12}>
                    <CardHeader>Instagram Page</CardHeader>
                </Col>
            </Row>
           <Row>
               <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <InstagramEmbed
                        
                        url='https://instagram.com/p/BmOgNjnHPAU/'
                         maxWidth={1000}
                         hideCaption={false}
                         containerTagName='div'
                         protocol=''
                         injectScript
                         onLoading={() => {}}
                         onSuccess={() => {}}
                         onAfterRender={() => {}}
                         onFailure={() => {}}
                       
                    />

               </Col>
           </Row>

           
       </Page>
    )
    
}

export default InstagramPage;