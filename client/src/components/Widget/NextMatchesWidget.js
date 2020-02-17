import React from 'react';
import PropTypes from '../../utils/propTypes';
import { Button } from 'reactstrap';
import { Card, CardText, CardTitle, CardHeader, CardSubtitle } from 'reactstrap';
import Typography from '../Typography';
import  Avatar  from '../Avatar';
import Moment from 'react-moment';
import { FaMapMarkerAlt } from 'react-icons/fa';


const NextMatchesWidget = ({
  title,
  location,
  date,
  localtime,
  avatar,
  avatar2,
  subtitle1,
  subtitle2,
  color,
  icon,
  googleMapsLink,
  deleteButtonProps,
  buttonProps,
  progress: { value, label },
  ...restProps

}) => {
  return (
    <Card body {...restProps} >
      <div >
        <CardHeader tag="div" className="d-flex justify-content-between">
          <Typography >
            <strong>{title}</strong>
          </Typography>
          <CardTitle className={`text-${color}`}><Moment format="D MMM YYYY" withTitle>{date}</Moment></CardTitle>
        </CardHeader>
        
      </div>
          <Typography className="mb-0 ml-2 mt-2 text-muted small">{location}</Typography>
          <Typography className="mb-0 ml-2 mt-2 text-muted small">{localtime}</Typography>
      {/* <Progress value={value} color={color} style={{ height: '8px' }} /> */}
      <CardText tag="div" className="d-flex justify-content-between">
        <Typography tag="span" className="text-left text-muted small">
          {label}
        </Typography>
      
        <Avatar src={avatar} size={100} className="mb-2 mt-2"/>
        
        <Typography tag="div" className="text-right text-muted small">
          VS
        </Typography>
        <Avatar src={avatar2} size={100} className="mb-2 mt-2" label={subtitle2}/>    
     
      </CardText>
      
        <CardSubtitle className="d-flex justify-content-between">
          <Typography tag="div" className="text-right text-muted small">{subtitle1}</Typography>
          <Typography tag="div" className="text-right text-muted small">{subtitle2}</Typography>
        </CardSubtitle>

      <Button color="link" href={googleMapsLink} className="mt-3" >
      <FaMapMarkerAlt/> Event Location
      </Button> 

    </Card>
  );

};

NextMatchesWidget.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ]),
  progress: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),
};

NextMatchesWidget.defaultProps = {
  title: '',
  subtitle: '',
  number: 0,
  color: 'primary',
  progress: {
    value: 0,
    label: '',
  },
};

export default NextMatchesWidget;
