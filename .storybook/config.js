import { addDecorator, configure, setAddon } from '@storybook/react';
import React from 'react';
import JSXAddon from 'storybook-addon-jsx';
// import { withThemesProvider } from 'storybook-addon-styled-component-theme';
// import GlobalStyles from '../src/shared/Styles';

setAddon(JSXAddon);

// const themes = ['light', 'dark'];
// addDecorator(withThemesProvider(themes));

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  )
}

// addDecorator(withGlobalStyles);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
