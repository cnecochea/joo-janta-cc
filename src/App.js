import React, { useState } from 'react';
import Button from './components/Button';
import Heading from './components/Heading';
import Layout from './components/Layout';
import Modal from './components/Modal';
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
  const [ showing, showModal ] = useState(false);

  const toggleModal = () => {
    showing ? showModal(false) : showModal(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Layout
          topContent={Nav}
        >
          Food goes in here!
          <Button onClick={toggleModal}>
            Show modal
          </Button>
        </Layout>
        <Modal show={showing} closeCallback={toggleModal}>
          Ahoy there
        </Modal>
      </>
    </ThemeProvider>
  );
}

export default App;
