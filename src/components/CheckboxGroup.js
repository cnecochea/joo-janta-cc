import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AbstractControlGroup from './AbstractControlGroup';

const StyledCheckboxToggle = styled(AbstractControlGroup.defaultProps.ToggleControl)`
`;

//SVG Created by Arthur Shlain from the Noun Project

const CheckboxGlyph = ({ selected }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
    <path fill="currentColor" d="M80 10H20c-5.523 0-10 4.477-10 10v60c0 5.523 4.477 10 10 10h60c5.523 0 10-4.477 10-10V20c0-5.523-4.477-10-10-10zm0 70H20V20h60v60z"/>
    <path fill={selected ? '#000' : 'currentColor'} d="M72.07 40L65 32.93l-20 20-10-10L27.93 50 45 67.07z"/>
  </svg>
);

const CheckboxToggle = () => (
  <StyledCheckboxToggle>
    <CheckboxGlyph selected={true} />
    <CheckboxGlyph />
  </StyledCheckboxToggle>
);



class CheckboxGroup extends React.Component {
  render() {
    const { id, legend, options, ...rest } = this.props;
    return (
      <AbstractControlGroup
        {...rest}
        id={id}
        legend={legend}
        options={options}
        ToggleControl={CheckboxToggle()}
        type="checkbox"
      />
    );
  }
}

CheckboxGroup.propTypes = {
  id: PropTypes.string,
  legend: PropTypes.node,
  options: PropTypes.array,
}

export default CheckboxGroup;