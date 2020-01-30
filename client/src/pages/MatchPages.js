import React, { Component } from 'react';
import Page from '../components/Page';
import { MdDelete } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Typography from '../components/Typography';
import API from '../utils/API';
import {
    Button,
    Card,
    CardBody,
    CardText,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    CardFooter,
    CardTitle
} from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
import Avatar from '../components/Avatar';
import { format } from 'timeago.js'



export default class MatchPage extends Component {
    
    state = {
        matches: [],
        month: "",
        location: "",
        date: "",
        time: "",
        logoTeamHome: "",
        logoTeamAway: "",
        googleMapsLink: "",
        noResults: false,


    }

    handleFormSubmit = e => {
        e.preventDefault();

        API.addMatch(this.state)
            .then(res => {
                this.getSavedMatch();

            })

        alert("Your Match has been saved!");

    }


    componentDidMount() {

        this.getSavedMatch();

    }

    getSavedMatch = () => {
        API.getAllMatches()
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        matches: res.data,
                    });
                } else {
                    this.setState({
                        noResults: true
                    });
                    console.log(this.state.matches)
                }

            })
            .catch(err => console.log(err));
    }

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });

    }

    handleDeleteButton = id => {

        API.deleteMatch(id)
            .then(res => this.componentDidMount())
            .then(res => this.getSavedMatch)
            .catch(err => console.log(err))
    }



    render() {
      
        return (
            <Page>
                <Row >
                    <Col lg="12" md="12" sm="12" xs="12" className="mt-3 mb-5" >
                        <Card>
                            <CardHeader>Schedule - Next Matches</CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleFormSubmit}>
                                    <FormGroup row>
                                        <Label for="month" sm={2}>
                                            Month
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="text"
                                                value={this.state.month}
                                                name="month"
                                                placeholder="Month of your next match"
                                                onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="location" sm={2}>
                                            Address
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="address"
                                                value={this.state.location}
                                                name="location"
                                                placeholder="Address of your next match"
                                                onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="img" sm={2}>
                                            Logo Team Home
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="img"
                                                value={this.state.logoTeamHome}
                                                name="logoTeamHome"
                                                placeholder="Link of the logo img team home"
                                                onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="img" sm={2}>
                                            Logo Team Away
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="img"
                                                value={this.state.logoTeamAway}
                                                name="logoTeamAway"
                                                placeholder="Link of the logo img team away"
                                                onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="link" sm={2}>
                                            Google Maps Link
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="link"
                                                value={this.state.googleMapsLink}
                                                name="googleMapsLink"
                                                placeholder="Google maps link of the event"
                                                onChange={this.handleInputChange}

                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label for="date" sm={2}>
                                            Date
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="date"
                                                value={this.state.date}
                                                name="date"
                                                placeholder="Date of the match"
                                                onChange={this.handleInputChange}


                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="time" sm={2}>
                                            Local time
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="time"
                                                value={this.state.time}
                                                name="time"
                                                placeholder="Local time of the match"
                                                onChange={this.handleInputChange}


                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup check row>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                            <Button type="submit" >Submit</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>


                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <h1>List of the next Matches</h1>
                    </Col>
                </Row>

                <Row >
                    {this.state.matches.map(match => (

                        <Col lg={3} md={6} sm={6} xs={12} key={match._id}>
                            <Card >
                                <div className="d-flex justify-content-between">
                                    <CardHeader tag="div">
                                        <Typography className="mb-0">
                                            <strong>{match.month}</strong>
                                        </Typography>
                                        <Typography className="mb-0 ml-1 text-muted small">{match.location}</Typography>
                                        <Typography className="mb-0 ml-1 text-muted small">{`local time: ${match.time}`}</Typography>
                                    </CardHeader>
                                    <CardTitle className="mr-2 mt-2" >{format(match.date)}</CardTitle>
                                </div>
                                <CardText tag="div" className="d-flex justify-content-between ml-5 mr-5">

                                    <Avatar width="100%" src={match.logoTeamHome} size={100} className="mb-2 mt-2" label="Home" />
                                    <Typography tag="div" className="text-right text-muted small">
                                        VS
                                    </Typography>
                                    <Avatar width="100%" src={match.logoTeamAway} size={100} className="mb-2 mt-2" label="Away" />

                                </CardText>

                                <Button 
                                    type="submit" 
                                    color="light"
                                    href={match.googleMapsLink} 
                                    className="mt-3"
                                    >
                                    <FaMapMarkerAlt />   Google Maps
                                    </Button>
                                
                                <CardFooter className="d-flex flex-end">
                                <Button 
                                    type="delete"
                                    color="danger" 
                                    className="mr-1" 
                                    onClick={() => this.handleDeleteButton(match._id)}
                                    >
                                    <MdDelete /> Delete
                                    </Button>

                                </CardFooter>
                                

                            </Card>

                        </Col>

                    ))}
                </Row>
            </Page>
        )
    }

};
