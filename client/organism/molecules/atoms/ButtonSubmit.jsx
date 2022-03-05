import styled from 'styled-components';

const ButtonSubmit = styled.button`
  margin: 1rem auto;

  padding: .5rem 1.4rem;

  color: ${({isCancelBtn, isSupportBtn}) =>
    isCancelBtn || isSupportBtn ? 'white': 'black'
  };

  background-color: ${({isPostGoalFormBtn, isPostGoalBtn, isCancelBtn, isSupportBtn, theme: { main: { colors: { softSweetYellow, softRed, softBlue }}}}) =>
    isPostGoalFormBtn || isPostGoalBtn ? softSweetYellow :
    isCancelBtn ? softRed :
    isSupportBtn ? softBlue : 'yellow'
  };

  border: none;

  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

export default ButtonSubmit;
