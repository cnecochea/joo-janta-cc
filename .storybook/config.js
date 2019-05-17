import React from 'react';
import { addDecorator, configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withThemes } from 'storybook-styled-components';
import { themes } from '../src/shared/Themes';
import { GlobalStyle } from '../src/shared/Styles';

setAddon(JSXAddon);

const THEME = {
  'Home theme': themes.home,
  'Away theme': themes.away,
  'Winter Classic theme': themes.winter,
}

const withGlobal = (s) => (
  <>
    <GlobalStyle />
    {s()}
  </>
);

addDecorator(withGlobal);

addDecorator(withThemes(THEME));

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
