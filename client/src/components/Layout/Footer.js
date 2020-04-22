import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Navbar, Nav, NavItem } from 'reactstrap';



class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string
  };

  render(){

    const { copyright = "&copy; 2020 Atlanta Renegades Rugby Football Club"} = this.props;

    return(
      <Navbar>
    <Nav navbar>
      <NavItem>
        <p dangerouslySetInnerHTML={{__html: copyright }}/>
      </NavItem>
    </Nav>
      </Navbar >
    );

  }
  
};

export default Footer;
