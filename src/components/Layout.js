import React from 'react'
import styled from 'styled-components';

const StyledLayout = styled.div`
`;

export default ({ children, Navigation }) => (
  <StyledLayout data-desc="A reusable layout component">
    <React.Fragment>
      {Navigation}
    </React.Fragment>
    <main>
      {children}
    </main>
  </StyledLayout>
);