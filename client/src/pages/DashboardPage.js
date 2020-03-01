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
  CardHeader,
} from 'reactstrap';
// import ReactPlayer from 'react-player';
import DashboardImag from '../assets/img/sidebar/sidebar-14.jpg';
import API from '../utils/API';







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
           <Col lg={12} md={12} sm={12} xs={12}>
             <CardHeader><h2>Next Matches</h2></CardHeader>
            </Col>
        </Row>

        <Row>
          {this.state.matches && this.state.matches.map(match => (
            
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

            />
          </Col>

          ))}
          
      
        </Row>

        <Row>
           <Col lg={12} md={12} sm={12} xs={12}>
             <CardHeader><h2>Follow up our next events!</h2></CardHeader>
            </Col>
        </Row>

        <Row>
        {
          this.state.events && this.state.events.map(event => (
          
              <Col  md={6} key={event._id} >
                  <AnnouncementCard
                    color="gradient-secondary"
                    header={event.title}
                    avatar={event.image}
                    avatarSize={300}
                    text={event.description}
                    date={event.date}
                    moreInfo={event.contactInfoEmail}
                    googleMapsLink={event.googlemapslinkplace}
                  

                    badgeProps={{
                      children: 'More Info',

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
