import styled from 'styled-components';

const ButtonSubmit = styled.button`
  margin: .6rem 0px .3rem 3px;
  padding: 5px;
  background-color: ${({ theme: { colors: { persianGreen }}}) => persianGreen ? persianGreen : 'green'};
  border: ${({ theme: { colors: { onyx }}}) => onyx ? `1px solid ${onyx}` : '1px solid black'};
`;

export default ButtonSubmit;
