import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBoxModel = styled.div`
  outline: 1px dashed red;
  margin: 
    ${props =>
      typeof props.spacing === 'number' 
      ? `${props.spacing}rem` 
      : props.spacing}
    !important;
`;

// @todo: figure out why these get absorbed by Heading

const BoxModel = ({ as, children, className, spacing, ...rest}) => (
  <StyledBoxModel {...rest} as={as} className={className} spacing={spacing}>
    {children}
  </StyledBoxModel>
);

BoxModel.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  spacing: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
};

export default BoxModel;