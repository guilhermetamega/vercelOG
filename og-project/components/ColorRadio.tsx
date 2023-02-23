import styled from "styled-components";

const ColorRadio = styled.input`
  box-sizing: border-box;
  appearance: none;
  background: ${(props) => props.color};
  outline: 2px solid #333;
  border: 3px solid white;
  width: 16px;
  height: 16px;

  &:checked {
    background: #333;
  }
`;

export default ColorRadio;
