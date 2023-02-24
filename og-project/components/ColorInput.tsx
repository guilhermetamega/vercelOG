import styled from "styled-components";

const ColorInput = styled.input`
  height: 50px;
  margin: 20px;
  background: ${(props) => props.value};
  color: #000000;
  text-align: center;
  font-size: 30px;
  border-radius: 0.5rem;
  border-style: none;
  outline: none;
`;
export default ColorInput;
