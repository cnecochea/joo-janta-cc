import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FlexWrapper } from './Elements';

const StyledMediaWrapper = styled(FlexWrapper)`
  flex-wrap: ${props => props.responsive && 'wrap'};

  & > * + * {
    margin-left: ${props => props.gap};
  }

  & + & {
    margin-top: ${props => props.spacing};
  }
`;

const StyledMediaBody = styled.div`
  flex-grow: 1;
  min-width: 0;
`;

const StyledMediaItem = styled.div`
  flex-shrink: 0;
`;

const MediaObject = ({
  align,
  children,
  item,
  position,
  ...props,
}) => (
  <StyledMediaWrapper {...props}>
    {position === 'start' && <StyledMediaItem>{item}</StyledMediaItem>}
    <StyledMediaBody>{children}</StyledMediaBody>
    {position === 'end' && <StyledMediaItem>{item}</StyledMediaItem>}
  </StyledMediaWrapper>
);

MediaObject.propTypes = {
  align: PropTypes.string,
  gap: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  item: PropTypes.node,
  position: PropTypes.oneOf(['start', 'end']),
  responsive: PropTypes.bool.isRequired,
  spacing: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
};

MediaObject.defaultProps = {
  align: 'center',
  gap: '1rem',
  position: 'start',
  responsive: false,
  spacing: '1rem',
};

export default MediaObject;