import { addDecorator, configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withThemes } from 'storybook-styled-components';

setAddon(JSXAddon);

// const themes = ['light', 'dark'];
// addDecorator(withThemesProvider(themes));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
