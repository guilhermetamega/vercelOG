import styled from "styled-components";

const ColorViewerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ColorLabel = styled.label``;

const ColorSampler = styled.div`
  background-color: ${(props) => props.bgColor};
`;

export default function ColorViewer(props: any) {
  return (
    <ColorViewerContainer>
      <ColorLabel>{props.text}</ColorLabel>
      <ColorSampler />
    </ColorViewerContainer>
  );
}
