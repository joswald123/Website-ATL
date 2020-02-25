import React from 'react';
import { MdClearAll } from 'react-icons/md';
import {
  Button,
  // ListGroup,
  // ListGroupItem,
  // NavbarToggler,
  Nav,
  Navbar,
  // NavItem,
  // NavLink,
  // Popover,
  // PopoverBody,
} from 'reactstrap';


// const MdNotificationsActiveWithBadge = withBadge({
//   size: 'md',
//   color: 'primary',
//   style: {
//     top: -10,
//     right: -10,
//     display: 'inline-flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   children: <small>5</small>,
// })(MdNotificationsActive);

class Header extends React.Component {
  state = {
    isOpenNotificationPopover: false,
    isNotificationConfirmed: false,
    isOpenUserCardPopover: false,
  };

  toggleNotificationPopover = () => {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
    });

    if (!this.state.isNotificationConfirmed) {
      this.setState({ isNotificationConfirmed: true });
    }
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  render() {
   

    return (

      <Navbar style={{
        backgroundColor: 'black',
       
      }}>
        <Nav navbar className="mr-2">
          <Button outline onClick={this.handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
        <Nav navbar>
          <h4 style={{color: 'white'}}>
            ATLANTA RENEGADES
          </h4>
        </Nav>

    
      </Navbar>
    );
  }
}

export default Header;
