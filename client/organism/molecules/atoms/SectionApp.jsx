import styled from 'styled-components';

const SectionApp = styled.section`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: ${({ theme: { fonts }}) => fonts ? fonts[0] : fonts[1]};
  font-size: 10.5px;
  display: grid;
  grid-template-rows: 1fr 8fr 3fr;
`;

export default SectionApp;
