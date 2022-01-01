import styled from 'styled-components';

const Select = styled.select`
  margin: 1rem;

  padding: .5rem 1rem .5rem .4rem;

  font-size: ${({ theme: { fontSizes: { medium }}}) =>
    medium ? medium : '12px'
  };

  border: none;

  background-color: ${({isPostGoalForm, theme: { main: { colors: { softGreyBg, softWhiteBg }}}}) =>
    isPostGoalForm && softWhiteBg ? softWhiteBg :
    softGreyBg ? softGreyBg : 'white'};

  color: ${({ theme: { main: { colors: { softCharcoalBg }}}}) => softCharcoalBg ? softCharcoalBg : 'black'};

  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

  option:first-of-type {
    color: ${({ theme: { main: { colors: { softWhiteBg }}}}) => softWhiteBg ? softWhiteBg : 'white'};
    background-color:  ${({ theme: { main: { colors: { softCharcoalBg }}}}) => softCharcoalBg ? softCharcoalBg : 'black'};
    padding-left: .4rem;
  }

  option {
    color: ${({ theme: { main: { colors: { softCharcoalBg }}}}) => softCharcoalBg ? softCharcoalBg : 'black'};
    background-color: ${({ theme: { main: { colors: { softWhiteBg }}}}) => softWhiteBg ? softWhiteBg : 'white'};
  }
`;

export default Select;
