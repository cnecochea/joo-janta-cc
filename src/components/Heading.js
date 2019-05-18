import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BoxModel from './BoxModel';

const StyledHeading = styled(BoxModel)`
  color: ${props => props.theme.heading};
  text-shadow:
    1px 0px 1px ${props => props.theme.highlight},
    0px 1px 1px ${props => props.theme.highlight},
    -1px -1px 1px ${props => props.theme.highlight};
  font-weight: 900;
  margin: ${props => props.spacing };
`;

const Heading = ({ as, children, className, spacing, ...rest }) => (
  <StyledHeading {...rest} as={as} className={className} spacing={spacing}>
    {children}
  </StyledHeading>
);

Heading.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  // ...BoxModel.propTypes,
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Heading.defaultProps = {
  spacing: '0 0 1rem 0',
};

export default Heading;