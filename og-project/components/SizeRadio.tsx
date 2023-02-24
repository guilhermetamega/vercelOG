import styled from "styled-components";

const Radio = styled.input`
  box-sizing: border-box;
  appearance: none;
  background: ${(props) => props.color};
  outline: none;
  border-radius: 0.5rem;
  margin: 3px;
  width: 30px;
  height: 30px;

  :checked {
    outline: 10px solid #333;
    border: 3px solid red;
  }
  :hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Span = styled.span`
  font-family: var(--font-mono);
  font-size: 30px;
`;

export default function SizeRadio(props: any) {
  return (
    <Container>
      <Radio type="radio" />
      <Span>{props.text}</Span>
    </Container>
  );
}
