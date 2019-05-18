import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Indicator = ({ ...rest }) => (
  <span {...rest} aria-label=" Information " tabIndex={0}>ⓘ</span>
);



const StyledTooltip = styled.span`
  background: ${props => props.theme.fg};
  color: ${props => props.theme.bg};
  display: block;
  filter: drop-shadow(0 0 3px ${props => props.theme.bg});
  font-weight: normal;
  max-width: 400px;
  opacity: 0;
  padding: 1rem;
  pointer-events: none;
  position: absolute;
  left: ${props => props.align === 'right' && '100%'};
  left: ${props => props.align === 'left' && '0'};
  right: ${props => props.align === 'center' && '-100%'};
  top: 1rem;
  transform: translate(-1rem, 1rem);
  transition: opacity .25s ease-out;
  width: auto;
  z-index: 1;

  &::after {
    content: '';
    border: .5rem solid transparent;
    border-bottom-color: ${props => props.theme.fg};
    position: absolute;
    top: -1rem;
    left: 50%;
    left: ${props => props.align === 'left' && 'calc(100% - .5rem)'};
    left: ${props => props.align === 'right' && '.5rem'};
    transform: translateX(${props => props.align === 'center' && '-50%'});
    transform: translateX(${props => props.align === 'left' && '-100%'});
  }
`;

const StyledIndicator = styled(Indicator)`
  margin-left: .5rem;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 40px;
    width: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledTooltipOpener = styled.span`
  align-items: center;
  cursor: ${props => !props.showIndicator && 'help'};
  display: inline-flex;
  position: relative;

  &:hover, &:focus-within {
    ${StyledTooltip} {
      opacity: 1;
    }
  }
`;

const Tooltip = ({ align, children, showIndicator, text, ...rest }) => (
  <StyledTooltipOpener {...rest} showIndicator={showIndicator}>
    {children}
    {showIndicator ? <StyledIndicator showIndicator={showIndicator} /> : null}
    <StyledTooltip align={align}>{text}</StyledTooltip>
  </StyledTooltipOpener>
);

Tooltip.propTypes = {
  align: PropTypes.oneOf(['center', 'right', 'left']),
};

Tooltip.defaultProps = {
  align: 'center',
};

export default Tooltip;