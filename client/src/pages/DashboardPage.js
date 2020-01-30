import { AnnouncementCard } from '../components/Card';
// import { Link } from 'react-router-dom';
import Page from '../components/Page';
import { NextMatchesWidget } from '../components/Widget';
import React, { Component } from 'react';
// import { MdThumbUp } from 'react-icons/md';
import {
  // Button,
  Col,
  Row,
} from 'reactstrap';
// import ReactPlayer from 'react-player';
import DashboardImag from '../assets/img/sidebar/sidebar-14.jpg';
import API from '../utils/API';
import { format } from 'timeago.js'
import { FaMapMarkerAlt } from 'react-icons/fa';





class DashboardPage extends Component {

  state = {
    events: [],
    noResults: false,
    matches: []
  }


  componentDidMount() {
    this.getSavedEvents();
    this.getSavedMatch();
  }

  getSavedEvents = () => {
    API.getAllEvents()
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            events: res.data,
          });
          console.log(this.state.events)
        } else {
          this.setState({
            noResults: true
          });
        }
      })
      .catch(err => console.log(err));
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

  render() {

    return (

      <Page >

        <Row>

          <Col lg={12} md={12} sm={12} xs={12} >
            {/* <ReactPlayer
              url='https://player.vimeo.com/external/312895181.sd.mp4?s=2d29fcdbc7b110e80d0cf3c8bee7a75843bb9625&profile_id=164&oauth2_token_id=57447761'
              className='react-player'
              playing
              width='100%'
              height='100%'
            /> */}
            <img
              src={DashboardImag}
              alt="DashboardImag"
              width='100%'
              height='100%'

            />
          </Col>

        </Row>

        <Row>
          {this.state.matches.map(match => (
            
            <Col lg={3} md={6} sm={6} xs={12} key={match._id}>
            <NextMatchesWidget
              title={match.month}
              location={match.location}
              date={match.date}
              localtime={match.time}
              avatar={match.logoTeamHome}
              subtitle1="Name team"
              avatar2={match.logoTeamAway}
              subtitle2="Name team"
              googleMapsLink={match.googleMapsLink}
              icon={<FaMapMarkerAlt/>}

              buttonProps={{
                children: 'Event Location',

              }}

            />
          </Col>

          ))}
          
          {/* <Col lg={3} md={6} sm={6} xs={12}>
            <NextMatchesWidget
              title="Next Match"
              location="Atlanta"
              date="00/00/000"
              localtime="00:00"
              avatar={user1Image}
              avatarSize1="15"
              subtitle1="Name team"
              avatar2={user2Image}
              avatarSize2="15"
              subtitle2="Name team"

            />
          </Col> */}
        </Row>

        {/* <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Link to="/calendar">
              <Button
                icon={MdThumbUp}
                color="info"
                outline active
                size="lg"
                block
                className="mt-5 mb-5"

              >
                Full Calendar Events
            </Button>
            </Link>

          </Col>
        </Row> */}
        <Row  >
        {
          this.state.events.map(event => (
          
              <Col  md={6} key={event._id} >
                  <AnnouncementCard
                    color="gradient-secondary"
                    header={event.title}
                    avatar={event.image}
                    avatarSize={200}
                    text={event.description}
                    date={format(event.date)}
                    name={"More Info: " + event.contactInfoEmail}
                    googleMapsLink={event.googlemapslinkplace}

                    buttonProps={{
                      children: 'Event Location',

                    }}
                    
                  />


                </Col>
          ))}

       </Row>
      </Page>
    );
  }
}
export default DashboardPage;
