import React from 'react';
import styled, { css } from 'styled-components';
import * as Styles from '../shared/Styles';
import PropTypes from 'prop-types';

const FIELD_MAX_WIDTH = '600px';

const StyledLabelFieldPair = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const StyledLabel = styled.label`
  display: block;
`;

const StyledSmall = styled.small`
  display: block;
  color: ${props => props.theme.help};
`;

const sharedInputStyles = css`
  border: ${Styles.CONTROL_BORDER_WIDTH} ${Styles.CONTROL_BORDER_STYLE} ${Styles.CONTROL_BORDER_COLOR};
  font-size: inherit;
  max-width: ${FIELD_MAX_WIDTH};
  padding: ${Styles.CONTROL_PADDING};
  width: 100%;

  &:focus {
    ${Styles.MixinFocusStyles};
  }

  &:invalid {
    border-color: ${Styles.ERROR_COLOR};
  }
`;

const StyledInput = styled.input`
  ${sharedInputStyles};
  line-height: ${Styles.CONTROL_HEIGHT};

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

const StyledTextarea = styled.textarea`
  ${sharedInputStyles};
  font-family: inherit;
  padding-top: calc(${Styles.CONTROL_HEIGHT} / 3);
`;

const StyledFieldWrapper = styled.div`
  display: inline-block;
  position: relative;
  max-width: ${FIELD_MAX_WIDTH};
  width: 100%;

  &::after {
    color: currentColor;
    content: '▾';
    display: ${props => !props.list && 'none'};
    pointer-events: none;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const LabeledControlContext = React.createContext();

class LabeledControl extends React.Component {
  render() {
    const { id, label, type, value, required, error, description, ...inputProps } = this.props;
    
    return (
      <LabeledControlContext.Provider value={{ id, label, type, value, required, error, description, ...inputProps }}>
        <StyledLabelFieldPair>
          <StyledLabel htmlFor={id}>{label} {required ? '*' : null}</StyledLabel>
          <StyledFieldWrapper {...inputProps}>
            {
              type === 'textarea'
                ? <ContextualTextarea {...inputProps} />
                : <ContextualInput {...inputProps} />
            }
          </StyledFieldWrapper>
          {
            description 
            ? <StyledSmall id={`${id}-desc`}>{description}</StyledSmall>
            : null
          }
        </StyledLabelFieldPair>
      </LabeledControlContext.Provider>
    );
  }
}

LabeledControl.propTypes = {
  id: PropTypes.string,
  label: PropTypes.node,
  type: PropTypes.string,
  required: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  description: PropTypes.string, 
  Slot: PropTypes.object,
  value: PropTypes.string,
};

LabeledControl.defaultProps = {
  required: false,
  type: 'text',
  error: false,
};

const ContextualInput = () => {
  return (
  // to be clear, this component knows nothing
  <LabeledControlContext.Consumer>
    {({ id, label, type, value, required, error, description, Slot, ...rest }) => (
      <>
        <StyledInput
          {...rest}
          type={type}
          id={id}
          required={required}
          data-error={error}
          aria-describedby={description ? `${id}-desc` : null}
          value={value}
        />
        {Slot}
      </>
    )}
  </LabeledControlContext.Consumer>
)};

const ContextualTextarea = () => (
  <LabeledControlContext.Consumer>
    {({ id, label, type, value, required, error, description, ...rest }) => (
      <StyledTextarea
        {...rest}
        id={id}
        required={required}
        rows={5}
        data-error={error}
        aria-describedby={description ? `${id}-desc` : null}
      >
        {value}
      </StyledTextarea>
    )}
  </LabeledControlContext.Consumer>
);

export default LabeledControl;