import styled from 'styled-components';

const Select = styled.select`
  margin: 0px auto;
  width: 50%;
  padding: 5px 5px 5px 1rem;
  border: ${({ theme: { colors: { persianGreen }}}) => persianGreen ? `2px solid ${persianGreen}` : '2px solid white'};
  font-size: 11px;
  background-color: ${({ theme: { colors: { powderWhite }}}) => powderWhite ? powderWhite : 'white'};
  color: ${({ theme: { colors: { onyx }}}) => onyx ? onyx : 'black'};

  option:first-of-type {
    color: ${({ theme: { colors: { powderWhite }}}) => powderWhite ? powderWhite : 'white'};
    background-color: ${({ theme: { colors: { persianGreen }}}) => persianGreen ? persianGreen : 'black'};
    padding-left: 1rem;
  }

  option {
    color:  ${({ theme: { colors: { onyx }}}) => onyx ? onyx : 'black'};
    background-color: ${({ theme: { colors: { powderWhite }}}) => powderWhite ? powderWhite : 'white'};
    padding-left: 1rem;
  }
`;

export default Select;
