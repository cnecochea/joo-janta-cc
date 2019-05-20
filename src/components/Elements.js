import React from 'react'
import styled, { css } from 'styled-components';

export const P = styled.p`
  margin-bottom: 0;

  & + & {
    margin-top: 1rem;
  }
`;

export const Icon = styled.span`

`;

export const A = styled.a`
  color: ${props => props.theme.link};
  text-decoration: underline;

  &:hover, &:focus {
    text-decoration: none;
  }
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const UL = styled.ul`
  ${props => props.unstyled && css`
    list-style: none;
    margin: 0;
    padding: 0;
  `};

  > li {
    display: ${props => props.inline && 'inline-block'};

    & + li {
      margin-left: ${props => props.inline && '1ch'};
      margin-top: ${props => props.unstyled && !props.inline && '1rem'};
    }
  }
`;

export const Tabs = styled.div.attrs({
  role: 'tablist',
})`
  align-items: stretch;
  display: flex;
`;

export const Tab = styled.div.attrs({
  role: 'tab',
})`
  align-items: center;
  border-bottom: ${props => props['aria-selected'] ? `thick solid ${props.theme.highlight}` : 'thick solid transparent'};
  display: inline-flex;
  padding: 0 2rem;
  transition: border-bottom .15s ease-out;

  &:hover, &:focus {
    border-bottom: ${props => `thick solid ${props.theme.fg}`};
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const Td = styled.td`
  border-bottom: thin dotted currentColor;
  padding: 1rem 0;

  & + & {
    padding-left: 1rem;
  }
`;

export const Th = styled.th`
  border-bottom: medium dotted currentColor;
  padding: 1rem 0;
  text-align: left;

  & + & {
    padding-left: 1rem;
  }
`;

export const Tr = styled.tr`
  &:last-of-type > ${Td} {
    border-bottom: 0;
  }
`;

export const StyledFlexWrapper = styled.div`
  align-items: ${props => props.align};
  display: flex;
  justify-content: ${props => props.justify};
`;

export const FlexWrapper = ({
  children, align, justify, ...props
}) => (
  <StyledFlexWrapper
    {...props}
    align={align}
    justify={justify}
  >
    {children}
  </StyledFlexWrapper>
);