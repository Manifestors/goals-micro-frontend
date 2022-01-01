import styled from 'styled-components';

const SpanTextColorOnyx = styled.span`
  color: ${({ theme : { main: { colors: { softCharcoalBg }}}}) =>
    softCharcoalBg ? softCharcoalBg: black
  };
`;

export default SpanTextColorOnyx;
