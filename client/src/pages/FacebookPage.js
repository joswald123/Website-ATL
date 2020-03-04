import React, { useState,  useEffect } from 'react';
import Page from '../components/Page';
import {
    Card,
    CardHeader,
    Col,
    Row,
} from 'reactstrap';


 function FacebookPage  () {

    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=759057677908707&autoLogAppEvents=1"
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
        

        console.log(script)

    });

    


        return (

            <Page>
                <Row>
                    <Col md={12} lg={12} xs={12}>
                        <CardHeader>Facebook Page</CardHeader>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 5, offset: 4 }}   >
                        
                                <div 
                                    className="fb-page"
                                    data-tabs="timeline,events,messages"
                                    data-href="https://www.facebook.com/Atlantarugby/"
                                    data-width="350px"
                                    data-height="800px"
                                    data-hide-cover="false"
                                    data-show-facepile="true"
                                    data-adapt-container-width="true"
                                ></div>
    
                            
                    </Col>
    
                </Row>
    
            </Page>
    
        )
   

}


export default FacebookPage;