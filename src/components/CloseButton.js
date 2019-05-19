import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCloseButton = styled.button`
  appearance: none;
  border: 0;
  padding: 0;
`;

const CloseAffordance = () => (
  // SVG here
);

const CloseButton = props => (
  <StyledCloseButton
    {...props}
    onClick={closeCallback}
  >
    <CloseAffordance />
  </StyledCloseButton>
);

export default CloseButton;