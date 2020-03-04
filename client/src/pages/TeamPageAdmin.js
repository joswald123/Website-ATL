import React, { Component } from 'react';
import Page from '../components/Page';
import API from '../utils/API';
import Typography from '../components/Typography';
import { MdDelete } from 'react-icons/md';
import {
    Button,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Card,
    CardImg,
    CardSubtitle,
    CardTitle,
    Row,
    CardFooter
} from 'reactstrap';


export default class TeamPageAdmin extends Component {

    state = {

        TeamMembers: [],
        name: "",
        position: "",
        numberPosition: "",
        picture: "",
        noResults: false,

    }

    handleFormSubmit = e => {
        e.preventDefault();

        API.addTeamMember(this.state)
            .then(res => {
                this.setState({
                    name: "",
                    position: "",
                    numberPosition: "",
                    picture: "",
                });
                this.getSavedTeamMember();
            });
        alert("New Team Member profile, added")
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

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleDeleteButton = id => {

        API.deleteTeamMember(id)
            .then(res => this.componentDidMount())
            .then(res => this.getSavedTeamMember)
            .catch(err => console.log(err))
    }


    render() {
        return (

            <Page>
                <Row >
                    <Col lg="12" md="12" sm="12" xs="12" className="mt-3 mb-5" >
                        <Card>
                            <CardHeader>Team Members Profile</CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleFormSubmit}>
                                    <FormGroup row>
                                        <Label for="name" sm={2}>
                                            Player Name
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="text"
                                                value={this.state.name}
                                                name="name"
                                                placeholder="Player name"
                                                onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="picture" sm={2}>
                                            Player's picture
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="img"
                                                value={this.state.picture}
                                                name="picture"
                                                placeholder="Player's Photo"
                                                onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="position" sm={2}>
                                            Position
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="text"
                                                value={this.state.position}
                                                name="position"
                                                placeholder="Position of player"
                                                onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="number" sm={2}>
                                            Position number
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="number"
                                                value={this.state.numberPosition}
                                                name="numberPosition"
                                                placeholder="Player's number position"
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
                        <h1>Roster</h1>
                    </Col>
                </Row>

                <Row >
                    {this.state.TeamMembers.map(team => (

                        <Col lg={3} md={6} sm={6} xs={12} key={team._id}>

                            <Card>
                                <CardImg  src={team.picture} style={{ width: "100%", height: 450 }} alt="Card image cap" />
                                <CardBody>
                                <CardTitle><h2>{team.name}</h2></CardTitle>
                                    <CardSubtitle>{team.position}</CardSubtitle>
                                    <Typography className="mb-0 d-flex justify-content-end">
                                            <strong>{team.numberPosition}</strong>   
                                    </Typography>
                                </CardBody>
                                <CardFooter className="d-flex flex-end">
                                    <Button
                                        type="delete"
                                        color="danger"
                                        className="mr-1"
                                        onClick={() => this.handleDeleteButton(team._id)}
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
}





