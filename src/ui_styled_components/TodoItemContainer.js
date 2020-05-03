import styled from 'styled-components';

const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: -5px 5px 5px 2px gray;
  border-radius: 0.2rem;
  padding: 0.4rem 1rem;
  margin-bottom: 0.5rem;
  border-bottom: ${(props) =>
    new Date(props.createdAt) < new Date(Date.now() - 8640000 * 7) &&
    !props.isCompleted
      ? '2px solid red'
      : 'none'};
`;

export default TodoItemContainer;
