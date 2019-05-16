import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLayout = styled.div`
  display: grid;
  grid-gap: 1rem;

  > * {
    outline: 1px dotted red;
  }
`;

const StyledAside = styled.aside``;

const StyledTopNavigation = styled.div``;

const StyledNotification = styled.div``;

const StyledSideNavigation = styled.div``;

const StyledFooter = styled.footer``;

const Layout = ({ Aside, children, Footer, SideNavigation, TopNavigation }) => (
  <StyledLayout data-desc="A reusable layout component">
    <>{TopNavigation}</>
    <>{Notification}</>
    <>{SideNavigation}</>
    <main>{children}</main>
    <>{Aside}</>
  </StyledLayout>
);

Layout.propTypes = {
  Aside: PropTypes.func,
  children: PropTypes.node,
  Notification: PropTypes.func,
  SideNavigation: PropTypes.func,
  TopNavigation: PropTypes.func,
  Footer: PropTypes.func,
};

Layout.defaultProps = {
  Aside: StyledAside,
  Notification: StyledNotification,
  SideNavigation: StyledSideNavigation,
  TopNavigation: StyledTopNavigation,
  Footer: StyledFooter,  
};

export default Layout;