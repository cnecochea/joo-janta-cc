import React from 'react';
import styled from 'styled-components';
import * as Styles from '../shared/Styles'
import PropTypes from 'prop-types';

const GLYPH_SIZE = '20px';
const GLYPH_GAP = '1ch';

const StyledFieldset = styled.fieldset`
  border: 0;

  & + & {
    margin-top: 1rem;
  }
`;

const StyledToggleWrapper = styled.div`
  & + & {
    margin-top: .5rem;
  }
`;

const StyledToggleControl = styled.span`
  color: ${Styles.TOGGLE_OFF_COLOR};
  display: inline-block;
  margin-right: ${GLYPH_GAP};
  pointer-events: none;
  position: relative;
  height: ${GLYPH_SIZE};
  width: ${GLYPH_SIZE};
  vertical-align: text-bottom;

  > * {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity .15s ease-out;
    vertical-align: bottom;
  }
`;

const StyledInput = styled.input`
  ${Styles.MixinVisuallyHidden};

  &:checked ~ ${StyledToggleControl} > *:last-child {
    opacity: 0;
  }

  &:focus ~ ${StyledToggleControl} {
    > * {
      color: ${Styles.FOCUS_COLOR};
    }
  }
`;

const StyledLabel = styled.label`
  cursor: pointer;
  padding-left: calc(${GLYPH_SIZE} + ${GLYPH_GAP});
  margin-left: calc((${GLYPH_SIZE} + ${GLYPH_GAP}) * -1);
`;

const getOptions = (options, name, ToggleControl, type) => {
  return (
    <React.Fragment>
      {options.map((item, index) => (
        <StyledToggleWrapper key={index}>
          <StyledInput
            name={name}
            id={`${name}-radio-${index}`}
            type={type}
            value={item}
          />
          {ToggleControl}
          <StyledLabel htmlFor={`${name}-radio-${index}`}>
            {item}
          </StyledLabel>
        </StyledToggleWrapper>
      ))}
    </React.Fragment>
  );
};


class AbstractControlGroup extends React.Component {
  render() {
    const { id, legend, options, ToggleControl, type, ...rest } = this.props;
    return (
      <StyledFieldset {...rest}>
        <legend>{legend}</legend>
        {getOptions(options, id, ToggleControl, type)}
      </StyledFieldset>
    );
  }
}

AbstractControlGroup.propTypes = {
  id: PropTypes.string,
  legend: PropTypes.node,
  options: PropTypes.array,
  ToggleControl: PropTypes.func,
  type: PropTypes.oneOf(['radio', 'checkbox']),
}

AbstractControlGroup.defaultProps = {
  ToggleControl: StyledToggleControl,
};

export default AbstractControlGroup;