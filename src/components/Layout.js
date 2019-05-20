import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLayout = styled.div`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'banner   banner    banner'
    'alert    alert     alert'
    'nav      main      aside'
    '.        footer    .';
  grid-template-columns: minmax(300px, 20%) 1fr minmax(300px, 20%);
  grid-template-rows: auto auto 1fr auto;
  margin: 0 auto;
  max-width: 1200px;
  min-height: 100vh;
  padding: 1rem;
  padding-top: 0;

  @media only screen and (max-width: 1100px) {
    grid-template-areas: 
      'banner   banner'
      'alert    alert'
      'nav      main '
      'nav      aside'
      '.        footer';
    grid-template-columns: minmax(250px, 20%) 1fr;
    grid-template-rows: auto auto 1fr auto auto;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const StyledAside = styled.aside`
  grid-area: aside;
`;

const StyledTopNavigation = styled.div`
  grid-area: banner;
`;

const StyledNotification = styled.div`
  grid-area: alert;
`;

const StyledSideNavigation = styled.div`
  grid-area: nav;
`;

const StyledMain = styled.main`
  display: block;
  grid-area: main;
`;

const StyledFooter = styled.footer`
  grid-area: footer;
`;

const Layout = ({
  Aside,
  asideContent,
  children,
  Footer,
  footerContent,
  Notification,
  notificationContent,
  SideNavigation,
  sideContent,
  TopNavigation,
  topContent,
  ...props
}) => (
  <StyledLayout {...props}>
    {topContent ? <TopNavigation>{topContent}</TopNavigation> : null}
    {notificationContent ? <Notification>{notificationContent}</Notification>: null}
    {sideContent ? <SideNavigation>{sideContent}</SideNavigation> : null}
    <StyledMain>{children}</StyledMain>
    {asideContent ? <Aside>{asideContent}</Aside> : null}
    {footerContent ? <Footer>{footerContent}</Footer> : null}
  </StyledLayout>
);

Layout.propTypes = {
  Aside: PropTypes.func,
  asideContent: PropTypes.node,
  children: PropTypes.node,
  Notification: PropTypes.func,
  notificationContent: PropTypes.node,
  SideNavigation: PropTypes.func,
  sideContent: PropTypes.node,
  TopNavigation: PropTypes.func,
  topContent: PropTypes.node,
  Footer: PropTypes.func,
  footerContent: PropTypes.node,
};

Layout.defaultProps = {
  Aside: StyledAside,
  Notification: StyledNotification,
  SideNavigation: StyledSideNavigation,
  TopNavigation: StyledTopNavigation,
  Footer: StyledFooter,  
};

export default Layout;