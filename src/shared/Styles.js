import { createGlobalStyle } from 'styled-components';

// Tokens

export const CONTROL_HEIGHT = '2.5rem';
export const CONTROL_PADDING = '0 1rem';
export const CONTROL_BORDER_STYLE = 'solid';
export const CONTROL_BORDER_WIDTH = 'thin';
export const CONTROL_BORDER_COLOR = 'currentColor';
export const ERROR_COLOR = 'red';
export const FOCUS_COLOR = 'lightgreen';
export const TOGGLE_OFF_COLOR = '#ccc';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.fg};
    font-family: sans-serif;
    line-height: 1.6;
  }
`;

// from: https://github.com/medialize/ally.js/blob/master/docs/tutorials/hiding-elements.md#2017-edition-of-visuallyhidden
export const MixinVisuallyHidden = `
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const MixinFocusStyles = `
  box-shadow: ${FOCUS_COLOR} 0 0 5px 1px;
`;