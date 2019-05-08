import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AbstractControlGroup from './AbstractControlGroup';

const StyledCheckboxToggle = styled(AbstractControlGroup.defaultProps.ToggleControl)`
`;

const RadioGlyph = ({ selected }) => (
  <svg viewBox="0 0 155 155" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" d="M-1-1h157v157H-1z"/>
    <g>
      <ellipse ry="60.5" rx="60.5" cy="77.5" cx="77.5" stroke-width="34" stroke="currentColor" fill={selected ? '#000' : 'currentColor'} />
    </g>
  </svg>
);

const RadioToggle = () => (
  <StyledCheckboxToggle>
    <RadioGlyph selected={true} />
    <RadioGlyph />
  </StyledCheckboxToggle>
);



class RadioGroup extends React.Component {
  render() {
    const { id, legend, options, ...rest } = this.props;
    return (
      <AbstractControlGroup
        {...rest}
        id={id}
        legend={legend}
        options={options}
        ToggleControl={RadioToggle()}
        type="radio"
      />
    );
  }
}

RadioGroup.propTypes = {
  id: PropTypes.string,
  legend: PropTypes.node,
  options: PropTypes.array,
}

export default RadioGroup;