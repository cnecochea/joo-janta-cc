import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { FlexWrapper } from './Elements';
import * as Styles from '../shared/Styles';

const StyledButton = styled.button`
  appearance: none;
  background: rgba(255, 255, 255, 0.15);
  border: thin solid currentColor;
  border: ${Styles.CONTROL_BORDER_WIDTH} ${Styles.CONTROL_BORDER_STYLE} ${Styles.CONTROL_BORDER_COLOR};
  color: currentColor;
  display: inline-block;
  font-size: inherit;
  line-height: ${Styles.CONTROL_HEIGHT};
  overflow: hidden;
  padding: 0;
  position: relative;
  text-decoration: none;

  & + & {
    margin-left: .5rem;
  }

  &:first-child {
    border-radius: 2.5rem 0 0 2.5rem;

    &:last-child {
      border-radius: 2.5rem;
    }
  }

  &:last-child {
    border-radius: 0 2.5rem 2.5rem 0;
  }

  &::before {
    content: '';
    background: rgba(255, 255, 255, 0.25);
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all .25s ease-out;
    transform: scale(0);
  }

  &:hover {
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:focus {
    &::before {
      opacity: 1;
      transform: scale(1);
    }
  }

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

const StyledButtonInner = styled(FlexWrapper)`
  align-items: center;
  margin: ${Styles.CONTROL_PADDING};

  & * + * {
    margin-left: .5rem;
  }
`;

const Button = ({ as, children, use, ...rest }) => (
  <StyledButton {...rest} as={as} use={use}>
    <StyledButtonInner>{children}</StyledButtonInner>
  </StyledButton>
);

Button.propTypes = {
  use: PropTypes.oneOf(['default', 'primary']),
}

export default Button;