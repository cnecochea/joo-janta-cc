import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.section`
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, .3);
  padding: 1rem;
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>

export default Card;