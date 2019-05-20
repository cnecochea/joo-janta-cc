import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const StyledCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(${props => (100 / props.columns)}% - ${props => props.gap}), 1fr) ) ;
  grid-gap: ${props => props.gap};
  padding: calc(${props => props.gap} / 2);

  && > * {
    margin: 0;
  }
`;

const CardGrid= ({ children, columns, gap, ...rest }) => (
  <StyledCardGrid
    data-component="CardGrid"
    {...rest}
    columns={columns}
    gap={gap}
  >
    {children}
  </StyledCardGrid>
);

CardGrid.propTypes = {
  columns: PropTypes.number,
  gap: PropTypes.string,
}

CardGrid.defaultProps = {
  columns: 3,
  gap: '2rem',
}

export default CardGrid;