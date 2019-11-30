import styled from 'styled-components';

const OutlinedButton = styled.div`
  border-color: ${(props) => props.theme.maincolor};
  border-width: 1px;
  border-style: solid;
  line-height: 40px;
  padding-left: 25px;
  padding-right: 25px;
  vertical-align: middle;
  width: 200px;
  text-align: center;
  border-radius: 12px;
  font-size: 18px
  color: ${(props) => props.theme.maincolor};
`;

export default OutlinedButton;
