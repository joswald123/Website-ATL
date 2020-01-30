import React from 'react';
import PropTypes from '../../utils/propTypes';
import { Card, CardHeader, CardBody, CardText, Button } from 'reactstrap';
import Avatar from '../../components/Avatar';
import classNames from 'classnames';



const AnnouncementCard = ({
  color,
  header,
  avatar,
  avatarSize,
  name,
  date,
  text,
  googleMapsLink,
  className,
  buttonProps,
  deleteButtonProps,
  editButtonProps,
  
  ...restProps
}) => {

  const bgColor = `bg-${color}`;
  const classes = classNames(bgColor, className);
  return (
    <Card inverse className={classes} {...restProps} >
      {header && typeof header === 'string' ? (
        <CardHeader className={bgColor}>{header}</CardHeader>
      ) : (
        header
      )}
      <CardBody className="d-flex flex-wrap flex-column align-items-center ">
        <Avatar size={avatarSize} src={avatar} />
        <CardText className="text-center">
          <small className="text-muted">{date}</small>
        </CardText>
        <CardText className="text-center mt-3">{text}</CardText>
          <strong className="d-block mb-3">{name}</strong>
        
        <Button type="submit" href={googleMapsLink} color="primary" {...buttonProps} />
        
      </CardBody>
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
