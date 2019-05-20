import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Card from './components/Card';
import CardGrid from './components/CardGrid';
import { A, Img, FlexWrapper, P, UL } from './components/Elements';
import Heading from './components/Heading';
import Layout from './components/Layout';
import MediaObject from './components/MediaObject';
import Modal from './components/Modal';
import SectionBlock from './components/SectionBlock';
import Tooltip from './components/Tooltip';
import { ThemeProvider } from 'styled-components';
import { themes } from './shared/Themes';
import { GlobalStyle } from './shared/Styles';

const CHIRPS = [
  { name: 'Pasta', avatar: 'http://placekitten.com/g/40/40', message: '🦓 Check your voicemail. You missed some calls.', timestamp: 'May 19, 2018' },
  { name: 'Marshie', avatar: 'http://placekitten.com/g/40/40', message: 'Chirp, chirp, chirp', timestamp: 'May 4, 2019' },
  { name: 'Torts', avatar: 'http://placekitten.com/g/40/40', message: 'Make like a tree and get out of here', timestamp: 'Apr 15, 2019' },
  { name: 'Thorty', avatar: 'http://placekitten.com/g/40/40', message: 'Does your coach know you\'re out here?', timestamp: 'Feb 29, 2019' },
  { name: 'Kaner', avatar: 'http://placekitten.com/g/40/40', message: 'Can I borrow your hands? I need a stone for my skates', timestamp: 'Dec 7, 2018' },
  { name: 'Giroux', avatar: 'http://placekitten.com/g/40/40', message: '(Pigeon sounds) 🐦🐦🐦🐦', timestamp: 'Jul 4, 2018' },
];

/**
"I've seen better hands on a clock."
"I've seen bigger hits in Little League."
"I've got more ice in my drink than you've seen all game."
You should switch to Geico. You'll save more.
 * 
 *  */


const Avatar = styled(Img)`
  border-radius: .25rem;
  vertical-align: bottom;
`;

const Hero = styled(FlexWrapper).attrs({
  align: 'flex-end',
})`
  background-image: url(https://i.ytimg.com/vi/t3KfOBPOmTo/maxresdefault.jpg);
  background-position: center;
  background-size: cover;
  height: 10.25rem;
  margin: 0 calc(50% - 50vw);
  overflow: hidden;
  padding: 0 1rem;
`;

const Chirp = styled(Card)`
`;

const ChirpAction = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  color: ${props => props.theme.fg};
  font-size: 1.5rem;
  font-weight: 900;
`;

const ChirpActions = styled.div`
  color: ${props => props.theme.help};
  margin-top: 1rem;

  & * + * {
    margin-left: 1rem;
  }
`;

const StyledNav = styled.nav`
  padding: .5rem;
`;

const CustomFooter = styled(props => <Layout.defaultProps.Footer {...props} />)`
  text-align: center;
`;

const Nav = callback => (
  <>
    <Hero>
      <Heading as="h1">Chirper</Heading>
    </Hero>
    <StyledNav>
      <FlexWrapper justify="flex-end">
        <Button onClick={callback} use="primary">Chirp</Button>
      </FlexWrapper>
    </StyledNav>
  </>
);

const About = (
  <SectionBlock titleText="About" use="prose">
    <Heading as="h3">
      <A href="https://www.purehockey.com/c/what-is-chirping-in-hockey" target="_blank">What is chirping? </A></Heading>

    <P><q>In any sport, there's an element of trash-talking designed to unnerve the
    opponent and get him thinking about something other than the game at hand.
    Hockey insults are known as "chirps," and players use the best hockey chirps
    on ice rinks all across North America. Hockey chirps are common from peewee
    hockey all the way through the NHL, and the funniest chirps are told and
    retold, just like good jokes.</q></P>

  </SectionBlock>
);

const Trending = (
  <SectionBlock titleText="Trending">
    dlskd;lksdl sdk;lsdk;sk ;lsdk;lsdk
  </SectionBlock>
);

const Copyright = (
  <SectionBlock>
    <small>
      <UL unstyled={true}>
        <li>Copyright &copy; 2019</li>
        <li><A>Privacy policy</A></li>
        <li><A>About us</A></li>
        <li><A>Contact us</A></li>
      </UL>
    </small>
  </SectionBlock>
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
        <GlobalStyle />
        <Layout
          topContent={Nav(toggleModal)}
          asideContent={Trending}
          Footer={CustomFooter}
          footerContent={Copyright}
          sideContent={About}
        >

          <CardGrid columns={1}>
            {CHIRPS.map((item, index) => {
              return (
                <Card>
                  <MediaObject
                    item={<Avatar src={item.avatar} alt={item.name} />}
                    spacing="2rem"
                  >
                    <Heading as="h3" spacing={0}>{item.name}</Heading>
                    <strong>@{item.name.toLowerCase()}{(index + 3) * 63}</strong>
                    <br />
                    <br />
                    <div>{item.message}</div>
                    <ChirpActions>
                      <small><time>{item.timestamp}</time></small>
                      <Tooltip text="Pass">
                        <ChirpAction aria-label="Pass" onClick={toggleModal}>🏒</ChirpAction>
                      </Tooltip>
                      <Tooltip text="Le&nbsp;mot&nbsp;juste">
                        <ChirpAction aria-label="Le mot juste" onClick={toggleModal}>👩‍🍳💋</ChirpAction>
                      </Tooltip>
                      <Tooltip text="Re-&zwj;chirp">
                        <ChirpAction aria-label="Re-chirp" onClick={toggleModal}>🐦</ChirpAction>
                      </Tooltip>
                    </ChirpActions>
                  </MediaObject>
                </Card>
              );
            })}
          </CardGrid>

        </Layout>
        <Modal show={showing} closeCallback={toggleModal}>
          Ahoy there
        </Modal>
      </>
    </ThemeProvider>
  );
}

export default App;
