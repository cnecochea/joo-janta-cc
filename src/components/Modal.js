import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FlexWrapper } from './Elements';

const StyledOverlay = styled(FlexWrapper).attrs({
  align: 'center',
  justify: 'center',
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5)
`;

const StyledModal = styled.div`
  border: 1px solid currentColor;
  background: #fff;
  display: grid;
  grid-template-areas:
    'header  close'
    'main    main'
    'footer  footer';
  grid-template-columns: 1fr auto;
  position: absolute;
  max-width: 100%;
  width: 600px;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledHeader = styled(props => {
  return <header {...props} />
})`
  border-bottom: 1px solid currentColor;
  grid-area: header;
  padding: 1rem;
`;

const StyledMain = styled(props => {
  return <main {...props} />
})`
  grid-area: main;
  padding: 1rem;
`;

const StyledFooter = styled(props => {
  return <footer {...props} />
})`
  border-top: 1px solid currentColor;
  grid-area: footer;
  padding: 1rem;
`;

const Modal = (props) => {
  const { children, show, closeCallback, ...rest } = props;
  return (
    <>
      <StyledOverlay hidden={!show} onClick={closeCallback} />
      <StyledModal
        {...rest}
        aria-modal={true}
        role="dialog"
        hidden={!show}
      >
        <Main>
          {children}
        </Main>
        <button onClick={closeCallback}>&times;</button>        
      </StyledModal>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  Footer: PropTypes.func,
  Main: PropTypes.func,
  Header: PropTypes.func,
  titleText: PropTypes.node,
  show: PropTypes.bool,
  closeCallback: PropTypes.func,
};

Modal.defaultProps = {
  children: <div>Empty</div>,
  show: false,
  closeCallback: () => (false),
  Footer: StyledFooter,
  Header: StyledHeader,
  Main: StyledMain,
};

