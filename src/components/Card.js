import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: ${props => props.theme.bg};
  border-radius: .3rem;
  box-shadow: 0 0 8px 0 ${props => props.theme.highlight};
  margin: 1rem;
  padding: ${props => !props.flush && '1rem'};
`;

const Card = ({ children, flush }) => (
  <StyledCard flush={flush}>{children}</StyledCard>
);

export default Card;