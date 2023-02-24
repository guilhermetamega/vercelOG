import styled from "styled-components";

const ColorViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-family: var(--font-mono);
  margin: 0px -20px;
`;

const Label = styled.label`
  font-size: 30px;
  margin-left: 20px;
  color: #3b3b3b;
`;

export default function ColorViewer(props: any) {
  return (
    <ColorViewerContainer>
      <Label>{props.text}</Label>
      {props.children}
    </ColorViewerContainer>
  );
}
