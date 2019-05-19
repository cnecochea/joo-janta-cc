import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import { Img, FlexWrapper } from './components/Elements';
import Heading from './components/Heading';
import Layout from './components/Layout';
import MediaObject from './components/MediaObject';
import Modal from './components/Modal';
import Tooltip from './components/Tooltip';
import { ThemeProvider } from 'styled-components';
import { themes } from './shared/Themes';

const CHIRPS = [
  { name: 'Marshie', avatar: 'http://placekitten.com/g/50/50', message: 'Chirp, chirp, chirp' },
  { name: 'Torts', avatar: 'http://placekitten.com/g/50/50', message: 'Make like a tree and get out of here' },
  { name: 'Thorty', avatar: 'http://placekitten.com/g/50/50', message: 'Does your coach know you\'re out here?' },
  { name: 'Kaner', avatar: 'http://placekitten.com/g/50/50', message: 'Can I borrow your hands? I need a stone for my skates' },
  { name: 'Giroux', avatar: 'http://placekitten.com/g/50/50', message: '(Pigeon sounds) 🐦🐦🐦🐦' },
];

const Avatar = styled(Img)`
  border-radius: .25rem;
  vertical-align: bottom;
`;

const Chirp = styled(MediaObject)`
  border: thin solid ${props => props.theme.fg};
  border-radius: .25rem;
  padding: .5rem;
`;

const ChirpAction = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  color: ${props => props.theme.fg};
  font-weight: 900;
`;

const ChirpActions = styled.div`
  margin-top: 1rem;
`;

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
          <FlexWrapper justify="flex-end">
            <Button onClick={toggleModal} use="primary">
              Chirp
            </Button>
          </FlexWrapper>

          {CHIRPS.map((item, index) => {
            return (
              <Chirp
                item={<Avatar src={item.avatar} alt={item.name} />}
                spacing="2rem"
              >
                <Heading as="h3" spacing={0}>{item.name}</Heading>
                {item.message}
                <ChirpActions>
                  <Tooltip text="Reply">
                    <ChirpAction aria-label="Reply">↰</ChirpAction>
                  </Tooltip>
                  <Tooltip text="Le mot juste">
                    <ChirpAction aria-label="Le mot juste">👩‍🍳💋</ChirpAction>
                  </Tooltip>
                  <Tooltip text="Re-chirp">
                    <ChirpAction aria-label="Re-chirp">🐦</ChirpAction>
                  </Tooltip>
                </ChirpActions>
              </Chirp>   
            );
          })}

        </Layout>
        <Modal show={showing} closeCallback={toggleModal}>
          Ahoy there
        </Modal>
      </>
    </ThemeProvider>
  );
}

export default App;
