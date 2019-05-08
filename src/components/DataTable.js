import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import * as html from './Elements';

const StyledDataTable = styled.div`
  overflow-y: auto;
  width: 100%;
`;

export default ({ children, ...rest}) => (
  <StyledDataTable>
    <html.Table>{children}</html.Table>
  </StyledDataTable>
);