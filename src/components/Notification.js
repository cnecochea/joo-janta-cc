import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionBlock from './SectionBlock';

const NOTIFICATION_TYPES = {
  error: { fg: '#fff', bg: 'red' },
  warning: { fg: '#000', bg: 'yellow' },
  info: { fg: '#000', bg: 'lightblue' },
}; 

const StyledNotification = styled(SectionBlock)`
  background-color: ${props => NOTIFICATION_TYPES[use].bg};
  border: thick solid ${props => props.theme.fg};
  color: ${props => NOTIFICATION_TYPES[use].fg}
`;

const Notification = ({
  children,
  use,
  ...props
}) => (
  <StyledNotification
    {...props}
    role="alert"
  >
    {children}
  </StyledNotification>
);

Notification.propTypes = {
  use: PropTypes.oneOf(Object.keys(NOTIFICATION_TYPES)),
};

Notification.defaultProps = {
  use: 'error',
};

export default Notification;