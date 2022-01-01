import styled from 'styled-components';

const TextAreaGoal = styled.textarea`
  width: 90%;

  margin: auto;

  resize: none;

  font-size: ${({ theme: { fontSizes: { medium }}}) =>
    medium ? medium : '12px'
  };

  border: none;

  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

export default TextAreaGoal;
