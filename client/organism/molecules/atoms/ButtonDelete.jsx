import styled from 'styled-components';

const ButtonDelete = styled.span`
  margin: 0rem .3rem;
  padding: .3rem;

  font-size: ${({ theme: { fontSizes: { small }}}) =>
    small ? small : '9.6px'
  };

  border-radius: 2px;

  float: right;

  background-color: ${({ theme : { main: { colors: { softRed }}}}) => softRed ? softRed: 'black'};

  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

  cursor: grab;
`;

export default ButtonDelete;
