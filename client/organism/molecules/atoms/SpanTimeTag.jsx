import styled from 'styled-components';

const SpanTimeTag = styled.span`
  padding: 2px;
  font-size: 9px;
  border: ${({ theme : { colors: { onyx }}}) => onyx ? `1px solid ${onyx}`: '1px solid black'};
  border-radius: 3px;
  background-color: ${({ theme : { colors: { onyx }}}) => onyx ? onyx: 'black'};
  display: flex;
  float: left;
`;

export default SpanTimeTag;
