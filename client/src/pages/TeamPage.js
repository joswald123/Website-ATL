import React, { Component } from 'react';
import Page from '../components/Page';
import API from '../utils/API';
import Typography from '../components/Typography';
import {
    Col,
    Row,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardTitle,  
   
} from 'reactstrap';


export default class TeamPage extends Component {

    state = {

        TeamMembers: [],
        noResults: false,

    }

    componentDidMount() {
        this.getSavedTeamMember();
    }


    getSavedTeamMember = () => {
        API.getAllTeamMembers()
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        TeamMembers: res.data,
                    });
                } else {
                    this.setState({
                        noResults: true
                    });
                }
            })
            .catch(err => console.log(err));
    }



    render() {
        return (

            <Page>

                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <h1>Roster</h1>
                    </Col>
                </Row>

                <Row >
                    {this.state.TeamMembers.map(team => (

                        <Col lg={3} md={6} sm={6} xs={12} key={team._id}>

                            <Card>
                                <CardImg  src={team.picture} style={{ width: "100%", height: 250 }} alt="Card image cap" />
                                <CardBody>
                                <CardTitle><h3>{team.name}</h3></CardTitle>
                                    <CardSubtitle>{team.position}</CardSubtitle>
                                    <Typography className="mb-0 d-flex justify-content-end">
                                            <h3>{team.numberPosition}</h3>   
                                    </Typography>
                                </CardBody>
                            </Card>

                        </Col>

                    ))}
                </Row>
            </Page>

        )

    }
}





