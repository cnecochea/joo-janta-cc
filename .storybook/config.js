import { addDecorator, configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

setAddon(JSXAddon);

// const themes = ['light', 'dark'];
// addDecorator(withThemesProvider(themes));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
