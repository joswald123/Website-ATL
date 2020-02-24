import React from 'react';
import PropTypes from '../../utils/propTypes';
import { Card, CardHeader, CardBody, CardText, Button } from 'reactstrap';
import Avatar from '../../components/Avatar';
import classNames from 'classnames';
import Moment from 'react-moment';
import { FaMapMarkerAlt } from 'react-icons/fa';

const AnnouncementCard = ({
  color,
  header,
  avatar,
  avatarSize,
  avatarForm,
  moreInfo,
  date,
  text,
  googleMapsLink,
  className,
  buttonProps,
  badgeProps,
  deleteButtonProps,
  editButtonProps,
  
  ...restProps
}) => {

  const bgColor = `bg-${color}`;
  const classes = classNames(bgColor, className);
  return (
    
    <Card inverse className={classes} {...restProps} >
      {header && typeof header === 'string' ? (
        <CardHeader className={bgColor}>{header}
          <h6 className="text-muted d-flex justify-content-end"><Moment format="D MMM YYYY" withTitle>{date}</Moment></h6>
        </CardHeader>
      ) : (
        header
      )}
      <CardBody className="row d-flex">
        <Avatar  className="col" size={avatarSize} src={avatar}  />
        <CardText className="text-justify m-3">{text}</CardText>
        
      </CardBody>
     <div className="d-flex justify-content-between m-3">
          <Button className="p-2" type="submit" href={googleMapsLink} color="success" >
          <FaMapMarkerAlt/> Event Location
          </Button> 
          <Button  className="p-2" type="submit" href={moreInfo} color="secondary" {...badgeProps}/>
     
     </div>
     
          
    </Card>
  );
};

AnnouncementCard.propTypes = {
  color: PropTypes.string,
  header: PropTypes.node,
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.date,
  className: PropTypes.string,
  children: PropTypes.element,
};

AnnouncementCard.defaultProps = {
  color: 'gradient-secondary',
  avatarSize: 60,
};

export default AnnouncementCard;
