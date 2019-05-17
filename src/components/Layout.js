import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLayout = styled.div`
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  display: grid;
  grid-gap: 1rem;
  min-height: 100vh;

  > * {
    outline: 1px dotted ${props => props.theme.highlight};
  }
`;

const StyledAside = styled.aside``;

const StyledTopNavigation = styled.div`
  grid-area: top;
`;

const StyledNotification = styled.div``;

const StyledSideNavigation = styled.div``;

const StyledFooter = styled.footer``;

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
    <main>{children}</main>
    {asideContent ? <Aside>{asideContent}</Aside> : null}
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