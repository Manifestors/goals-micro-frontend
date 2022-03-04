import styled from 'styled-components';

const SpanTimeTag = styled.span`
  padding: .3rem;

  font-size: ${({ theme: { fontSizes: { small }}}) =>
    small ? small : '9.6px'
  };

  border-radius: 2px;

  display: flex;

  float: right;
  
  background-color: ${({ theme : { main: { colors: { softCharcoalBg }}}}) => softCharcoalBg ? softCharcoalBg: 'black'};

  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

export default SpanTimeTag;
