import styled from 'styled-components';

const SpanTextColorOnyx = styled.span`
  color: ${({ theme : { colors: { onyx }}}) => onyx ? onyx: black};
`;

export default SpanTextColorOnyx;
