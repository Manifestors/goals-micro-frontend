import styled from 'styled-components';

const Select = styled.select`
  margin: ${({ goalPostForm }) => goalPostForm ? '0px 10px 0px auto' : '0'};
  padding: 5px 1rem 5px .4rem;
  border: ${({ theme: { colors: { persianGreen }}}) => persianGreen ? `1px solid ${persianGreen}` : '1px solid green'};
  font-size: 12px;
  background-color: ${({ theme: { colors: { powderWhite }}}) => powderWhite ? powderWhite : 'white'};
  color: ${({ theme: { colors: { onyx }}}) => onyx ? onyx : 'black'};

  option:first-of-type {
    color: ${({ theme: { colors: { powderWhite }}}) => powderWhite ? powderWhite : 'white'};
    background-color: ${({ theme: { colors: { persianGreen }}}) => persianGreen ? persianGreen : 'black'};
    padding-left: .4rem;
  }

  option {
    color:  ${({ theme: { colors: { onyx }}}) => onyx ? onyx : 'black'};
    background-color: ${({ theme: { colors: { powderWhite }}}) => powderWhite ? powderWhite : 'white'};
    padding-left: .4rem;
  }
`;

export default Select;
