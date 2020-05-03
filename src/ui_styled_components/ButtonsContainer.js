import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: space-between;
  height: 3rem;
`;

export default ButtonsContainer;
