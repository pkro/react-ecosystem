import styled from 'styled-components';

const TodoFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: -5px 5px 5px 2px gray;
  border-radius: 0.2rem;
  padding: 0.4rem 1rem;
  margin-bottom: 1rem;

  input,
  input:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    width: 80%;
  }
`;

export default TodoFormContainer;
