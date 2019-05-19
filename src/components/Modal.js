import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CloseButton from './CloseButton';
import { FlexWrapper } from './Elements';

const StyledCloseButton = styled(CloseButton)`
  color: ${props => props.theme.bg};
  grid-area: close;
`;

const StyledHeader = styled(props => <header {...props} />)`
  grid-area: header;
  padding: 1rem;
`;

const StyledMain = styled(props => <main {...props} />)`
  border-top: ${props => props.titleText && '1px solid currentColor'};
  grid-area: main;
  position: relative;
`;

const ScrollRegion = styled.div`
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: 100%;
  overflow: auto;
`;

const StyledFooter = styled(props => <footer {...props} />)`
  border-top: 1px solid currentColor;
  grid-area: footer;
  padding: 1rem;
`;

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
  background-color: ${props => props.theme.fg};
  color: ${props => props.theme.bg};
  display: grid;
  grid-template-areas:
    'header  close'
    'main    main'
    'footer  footer';
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr auto;
  position: absolute;
  max-width: 100%;
  width: 600px;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Modal = ({
  children,
  show,
  closeCallback,
  Footer,
  footerContent,
  Header,
  Main,
  titleText,
  ...props
}) => {
  return (
    <>
      <StyledOverlay hidden={!show} onClick={closeCallback} />
      <StyledModal
        {...props}
        aria-modal={true}
        role="dialog"
        hidden={!show}
      >
        {titleText && <StyledHeader>{titleText}</StyledHeader>}
        <StyledCloseButton onClick={closeCallback} />        
        <Main titleText={titleText}>
          <ScrollRegion>
            {children}
          </ScrollRegion>
        </Main>
        {footerContent && <Footer>{footerContent}</Footer>}
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

export default Modal;