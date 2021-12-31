import styled from 'styled-components';

const Select = styled.select`
  margin: 1rem;
  padding: .5rem 1rem .5rem .4rem;
  // border: ${({ theme: { main: { colors: { softCharcoalBg }}}}) => softCharcoalBg ? `1px solid ${softCharcoalBg}` : '1px solid green'};
  border: none;
  font-size: 12px;

  background-color: ${({isPostGoalForm, theme: { colors: { lightBlue, powderWhite }}}) =>
    isPostGoalForm && lightBlue ? lightBlue :
    powderWhite ? powderWhite : 'white'};

  color: ${({ theme: { colors: { onyx }}}) => onyx ? onyx : 'black'};

  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

  option:first-of-type {
    color: ${({ theme: { main: { colors: { softWhiteBg }}}}) => softWhiteBg ? softWhiteBg : 'white'};
    background-color:  ${({ theme: { main: { colors: { softCharcoalBg }}}}) => softCharcoalBg ? softCharcoalBg : 'black'};
    padding-left: .4rem;
  }

  option {
    color: ${({ theme: { main: { colors: { softCharcoalBg }}}}) => softCharcoalBg ? softCharcoalBg : 'black'};
    background-color: ${({ theme: { colors: { powderWhite }}}) => powderWhite ? powderWhite : 'white'};
    padding-left: .4rem;
  }
`;

export default Select;
