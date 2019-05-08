import React from 'react'
import styled from 'styled-components'

const StyledCardGrid = styled.div`
  display: grid;
  outline: 1px dotted red;
  grid-template-columns: repeat(minmax(1fr, auto), 3);
  grid-gap: 1rem;
`;

const CardGrid= ({ children }) => <StyledCardGrid>{children}</StyledCardGrid>;

export default CardGrid;