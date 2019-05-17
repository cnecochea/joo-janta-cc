import React, { useState } from 'react';
import Heading from './components/Heading';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';
import { themes } from './shared/Themes';

const Nav = (
  <div>
    <Heading as="h1">Ahoy</Heading>
    <nav>
      These are some navigation items
    </nav>
  </div>
);

const App = props => {
  const [ theme, setTheme ] = useState(themes.home);

  // useEffect(() => {
  //   setTheme(themes[venue.theme]);
  // });

  return (
    <ThemeProvider theme={theme}>
      <Layout
        topContent={Nav}
      >
        Food goes in here!
      </Layout>
    </ThemeProvider>
  );
}

export default App;
