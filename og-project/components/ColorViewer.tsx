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

const ColorLabel = styled.label`
  font-size: 30px;
  color: #3b3b3b;
`;

export default function ColorViewer(props: any) {
  const ColorSampler = styled.div`
    height: 50px;
    margin: 20px;
    background: ${props.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
  `;

  return (
    <ColorViewerContainer>
      <Label>{props.text}</Label>
      <ColorSampler>
        <ColorLabel>{props.colorHex}</ColorLabel>
      </ColorSampler>
    </ColorViewerContainer>
  );
}
