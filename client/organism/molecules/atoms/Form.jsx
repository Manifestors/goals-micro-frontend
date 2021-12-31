import styled from 'styled-components';

const Form = styled.form`
  padding: 0;
  width: 100%;
  text-align: center;
  display: grid;
  align-content: center;
  min-height: ${({ isPostGoalForm }) => isPostGoalForm ? '400px' : 'auto'};
  max-height: ${({ isPostGoalForm }) => isPostGoalForm ? '400px' : 'auto'};
  background-color: ${({isPostGoalForm , theme: { colors: { lightBlue, powderWhite }}}) =>
    isPostGoalForm && powderWhite ? powderWhite :
    lightBlue ? lightBlue : 'light-grey'
  };

  box-shadow: ${({ isPostGoalForm }) =>
    isPostGoalForm ? 'box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset' : 'none'};
`;

export default Form;
