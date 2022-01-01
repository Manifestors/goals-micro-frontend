import styled from 'styled-components';

const SectionApp = styled.section`
  margin: auto;

  padding: 0;

  width: 95%;

  font-family: ${({ theme: { fonts }}) => fonts ? fonts[0] : fonts[1]};

  font-size: ${({ theme: { fontSizes: { medium }}}) =>
    medium ? medium : '12px'
  };
  
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

export default SectionApp;
