import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 1px 1px 15px 5px rgba(134, 173, 245, 0.1);
  padding: 40 px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.cardbackground};
`;

export default Card;
