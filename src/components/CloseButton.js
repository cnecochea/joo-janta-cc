import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CONTROL_HEIGHT } from '../shared/Styles';

const StyledCloseButton = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  height: ${CONTROL_HEIGHT};
  padding: 0;
  width: ${CONTROL_HEIGHT};
`;

const CloseAffordance = () => (
  // SVG by Andrew Patton
  // @link: https://codepen.io/acusti/pen/PwzBZv
  <svg width="12" height="12" viewPort="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <line x1="1" y1="11" x2="11" y2="1" stroke="currentColor" stroke-width="2" />
    <line x1="1" y1="1" x2="11" y2="11" stroke="currentColor" stroke-width="2" />
  </svg>
);

const CloseButton = ({
  closeCallback,
  ...props
}) => (
  <StyledCloseButton
    {...props}
    onClick={closeCallback}
  >
    <CloseAffordance />
  </StyledCloseButton>
);

export default CloseButton;