import styled from 'styled-components';

const TextAreaGoal = styled.textarea`
  width: 90%;
  resize: none;
  font-size: 12px;
  border: ${({ theme: { colors: { persianGreen }}}) => persianGreen ? `2x solid ${ persianGreen }` : '2px solid green' };
`;

export default TextAreaGoal;
