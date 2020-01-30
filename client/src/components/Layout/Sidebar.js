import sidebarBgImage from '../../assets/img/sidebar/sidebar-14.jpg';
// import SourceLink from 'components/SourceLink';
import React from 'react';
// import { FaFacebook } from 'react-icons/fa';
import {
  MdAccountCircle,
  MdBorderAll,
  MdDashboard,
  MdKeyboardArrowDown,
  MdPages,
  MdEvent,
  // MdTextFields,
  MdPermContactCalendar,
  MdHistory,
  MdPeople
} from 'react-icons/md';
import { 
  FaFacebookSquare, 
  FaTwitter, 
  FaInstagram, 
  FaDonate, 
  FaNetworkWired,
  FaHandsHelping
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  // Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from '../../utils/bemnames';



const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navContents = [
  { to: '/facebook', name: 'FaceBook', exact: true, Icon: FaFacebookSquare },
  { to: '/instagram', name: 'Instagram', exact: true, Icon: FaInstagram },
  { to: '/donate', name: 'Donate', exact: true, Icon: FaDonate },
  { to: '/sponsor-page', name: 'Become a sponsor', exact: true, Icon: FaHandsHelping },
];

const pageContents = [
  { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
  { to: '/events', name: 'events', exact: false, Icon: MdEvent },
  { to: '/match', name: 'schedule', exact: false, Icon: MdEvent },

];

const navItems = [
  { to: '/', name: 'home', exact: true, Icon: MdDashboard },
  { to: '/history', name: 'about us', exact: true, Icon: MdHistory },
  { to: '/team', name: 'team', exact: true, Icon: MdPeople },
  { to: '/calendar', name: 'calendar', exact: true, Icon: MdPermContactCalendar },  
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    
    isOpenContents: false,
    isOpenPages: false,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          {/* <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="70"
                height="40"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
                ATL TEAM <FaFacebook />
              </span>
            </SourceLink>
          </Navbar> */}
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <FaNetworkWired className={bem.e('nav-item-icon')} />
                  <span className="">SOCIAL MEDIA</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">ADMIN ACCESS</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
