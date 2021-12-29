import styled from 'styled-components';

const SectionApp = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: ${({ theme: { fonts }}) => fonts ? fonts[0] : fonts[1]};
  font-size: 12px;
`;

export default SectionApp;
