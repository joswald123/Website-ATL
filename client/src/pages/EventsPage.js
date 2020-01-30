import React, { Component } from 'react';
import Page from '../components/Page';
import { MdDelete } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
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
} from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
import Avatar from '../components/Avatar';
import { format } from 'timeago.js'



export default class EventsPage extends Component {
    state = {
        events: [],
        id: "",
        title: "",
        image: "",
        description: "",
        date: "",
        contactInfoEmail: "",
        googlemapslinkplace: "",
        noResults: false,
     
        
    }
    

    handleFormSubmit = e => {
        e.preventDefault();
        
        API.addEvent(this.state)
        .then(res => {
            this.getSavedEvents();

        })
        // this.handleEditButton();
        console.log(this.state)
        alert("Your Event has been saved!");
        
    }


    componentDidMount() {
       
        this.getSavedEvents();
        
    }

    getSavedEvents = () => {
        API.getAllEvents()
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        events: res.data,
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
        });

    }

    handleDeleteButton = id => {

        API.deleteEvent(id)
            .then(res => this.componentDidMount())
            .then(res => this.getSavedEvents)
            .catch(err => console.log(err))
    }


// *****   Pendiente Conectar esta funcion para habilitar el boton de editar ****
   
// handleEditButton = id => {

    //     API.updateEvent(id)
    //         .then(res => {
    //             this.setState({

    //                 title: res.data.title,
    //                 image: res.data.image,
    //                 description: res.data.description,
    //                 date: res.data.date,
    //                 contactInfoEmail: res.data.contactInfoEmail,
    //                 googlemapslinkplace: res.data.googleMapsLink,
                   
        
    //             })
    //             console.log(this.state.events)
    //         })
    //         .then(res => this.getSavedEvents())
    //         .catch(err => console.log(err));
    // }


    render() {
        
        return (
            <Page>
                <Row >
                    <Col lg="12" md="12" sm="12" xs="12" className="mt-3 mb-5" >
                        <Card>
                            <CardHeader>New Events</CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleFormSubmit}>
                                    <FormGroup row>
                                        <Label for="title" sm={2}>
                                            Title of the event
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="title"
                                                value={this.state.title}
                                                name="title"
                                                placeholder="Title of your next event"
                                                onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="img" sm={2}>
                                            Imagen
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="img"
                                                value={this.state.image}
                                                name="image"
                                                placeholder="Link of your img"
                                                onChange={this.handleInputChange}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="description" sm={2}>
                                            Description
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="textarea"
                                                value={this.state.description}
                                                name="description"
                                                placeholder="Description of your event"
                                                onChange={this.handleInputChange}

                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="email" sm={2}>
                                            Contact Info
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type="email"
                                                value={this.state.contactInfoEmail}
                                                name="contactInfoEmail"
                                                placeholder="Email or URL for more info about the event"
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
                                                value={this.state.googlemapslinkplae}
                                                name="googlemapslinkplace"
                                                placeholder="Google maps link of the event address"
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
                                                placeholder="Date of your event"
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
                        <h1>List of your Events</h1>
                    </Col>
                </Row>

                <Row >
                    {this.state.events.map(event => (

                        <Col md={6} key={event._id}>

                            <Card>
                            
                                <CardHeader className="d-flex justify-content-between mt-3"> 
                                    <h5>{event.title}</h5>

            {/* Falta Implementar la funcion de editar para habilitar este boton ********/}
                                    {/* <Button 
                                            type="submit" 
                                            id={event._id} 
                                            onClick={() => this.handleEditButton (event._id)} 
                                            color="warning"
                        
                                        > 
                                            <MdEdit /> Edit
                                    </Button> */}
                                </CardHeader>
                              
                                <CardBody width="100%" className="d-flex flex-wrap flex-column align-items-center">
                                    <Avatar width="100%"  src={event.image} size={250} />
                                    <CardText className="text-center">
                                        <small className="text-muted">{format(event.date)} </small>
                                    </CardText>
                                    <CardText className="text-center mt-3">{event.description}</CardText>
                                    <strong className="d-block mb-3">{`More info: ${event.contactInfoEmail}`}</strong>
                                    
                                    <Button 
                                        type="submit" 
                                        href={event.googlemapslinkplace} 
                                        color="light"
                                        > 
                                        <FaMapMarkerAlt /> Event Location 
                                    </Button>

                                </CardBody>

                                    <CardFooter className="d-flex flex-end">
                                        <Button 
                                            type="delete" 
                                            id={event._id} 
                                            onClick={() => this.handleDeleteButton(event._id)}
                                            color="danger"
                                            className="d-flex flex-end"
                                        
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
