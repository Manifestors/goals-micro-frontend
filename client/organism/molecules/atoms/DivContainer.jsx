import styled from 'styled-components';

const DivContainer = styled.div`
  width: 100%;
  
  min-height: 400px;

  max-height: 400px;
  
  overflow-y: scroll;

  background-color: ${({ theme: { main: { colors: { softGreyBg }}}}) => softGreyBg ? softGreyBg : 'light-grey'};

  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

export default DivContainer;
