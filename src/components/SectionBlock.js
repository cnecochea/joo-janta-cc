import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './Heading';
import { P, A } from './Elements';
import { HEADING_SIZES } from '../shared/Constants';

const StyledSection = styled.section`
  ${P} {
    font-family: ${props => props.use === 'prose' && 'Georgia, serif'};

    ${props => props.use === 'prose' && css`
      font-family: 'Garamond', 'Georgia', serif;
      line-height: 1.8;
    `};
  }

  & + & {
    margin-top: ${props => props.spacing};
  }
`;

const SectionBlock = ({
  children,
  titleText,
  headingTag,
  spacing,
  ...props
}) => (
  <StyledSection {...props}>
    {titleText ? <Heading as={headingTag}>{titleText}</Heading> : null}
    {children}
  </StyledSection>
);

SectionBlock.propTypes = {
  children: PropTypes.node,
  titleText: PropTypes.node,
  headingTag: PropTypes.oneOf(HEADING_SIZES),
  spacing: PropTypes.number,
  use: PropTypes.oneOf(['normal', 'prose']),
}

SectionBlock.defaultProps = {
  headingTag: 'h2',
  spacing: '1rem',
  use: 'normal',
};

export default SectionBlock;