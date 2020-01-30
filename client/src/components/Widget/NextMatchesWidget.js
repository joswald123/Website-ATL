import React from 'react';
import PropTypes from '../../utils/propTypes';
import { Button } from 'reactstrap';
import { Card, CardText, CardTitle } from 'reactstrap';
import Typography from '../Typography';
import  Avatar  from '../Avatar';




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
      <div className="d-flex justify-content-between">
        <CardText tag="div">
          <Typography className="mb-0">
            <strong>{title}</strong>
          </Typography>
          <Typography className="mb-0 ml-2 text-muted small">{location}</Typography>
          <Typography className="mb-0 ml-2 text-muted small">{localtime}</Typography>
        </CardText>
        <CardTitle className={`text-${color}`}>{date}</CardTitle>
      </div>
      {/* <Progress value={value} color={color} style={{ height: '8px' }} /> */}
      <CardText tag="div" className="d-flex justify-content-between">
        <Typography tag="span" className="text-left text-muted small">
          {label}
        </Typography>
      
        <Avatar src={avatar} size={100} className="mb-2 mt-2" label={subtitle1}/>
        <Typography tag="div" className="text-right text-muted small">
          VS
        </Typography>
        <Avatar src={avatar2} size={100} className="mb-2 mt-2" label={subtitle2}/>

      </CardText>

      <Button icon={icon} color="link" href={googleMapsLink} className="mt-3" {...buttonProps} /> 

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