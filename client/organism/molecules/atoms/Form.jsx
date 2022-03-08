import styled from 'styled-components';


const Form = styled.form`
  padding: 0;

  width: 100%;
  
  text-align: center;

  display: grid;

  align-content: center;

  min-height: ${({ isPostGoalForm, isPostSupportForm }) =>
    isPostGoalForm ?'400px' :
    isPostSupportForm ? '100%' : 'auto'
  }; 
  
  max-height: ${({ isPostGoalForm, isPostSupportForm }) => isPostGoalForm || isPostSupportForm ? '400px' : 'auto'};
  background-color: ${({isPostGoalForm, isPostSupportForm , theme: { main: { colors: { softGreyBg, softWhiteBg }}}}) =>
    isPostGoalForm || isPostSupportForm && softGreyBg ? softGreyBg :
    softWhiteBg ? softWhiteBg : 'white'
  };

  box-shadow: ${({ isPostGoalForm, isPostSupportForm }) =>
    isPostGoalForm || isPostSupportForm ? 'box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset' : 'none'};
`;

export default Form;
