import styled from "styled-components";

const ColorRadio = styled.input`
  box-sizing: border-box;
  appearance: none;
  background: ${(props) => props.color};
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  margin: 3px;

  &:checked {
    outline: 2px solid #333;
    border: 3px solid red;
  }
`;

export default ColorRadio;
