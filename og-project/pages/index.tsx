/* eslint-disable @next/next/no-img-element */
import ButtonSubmit from "@/components/ButtonSubmit";
import ColorInput from "@/components/ColorInput";
import ColorRadio from "@/components/ColorRadio";
import ColorsContainer from "@/components/ColorsContainer";
import ColorViewer from "@/components/ColorViewer";
import Container from "@/components/Container";
import DownloadButton from "@/components/DownloadButton";
import Form from "@/components/Form";
import ImageContainer from "@/components/ImageContainer";
import Input from "@/components/Input";
import Image from "next/image";
import { useState } from "react";

const themes = [
  ["#4D84C4", "#C1D6EB"],
  ["#3C537C", "#8FA7CC"],
  ["#62A7DE", "#EEF5FB"],
  ["#9FBF38", "#D4E3A0"],
  ["#647733", "#ABC270"],
  ["#BFD05D", "#F9FBEF"],
  ["#807F7D", "#CDCDCB"],
  ["#585856", "#868683"],
  ["#C4C4C4", "#F5F5F5"],
];

export default function Home() {
  const [text, setText] = useState("Text");
  const [imageUri, setImageUri] = useState("");
  const [color, setColor] = useState(themes[4][0]);
  const [backgroundColor, setBackgroundColor] = useState(themes[4][1]);
  const [checked, setChecked] = useState("#F5F5F5");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const url = `/api/image?text=${encodeURIComponent(
      text
    )}&color=${encodeURIComponent(color)}&backgroundColor=${encodeURIComponent(
      backgroundColor.toUpperCase()
    )}`;

    setImageUri(url);
  };

  function loader() {
    return imageUri;
  }

  function handleChange(selectedColor: string) {
    themes.map(([color, bgColor]) => {
      if (selectedColor === bgColor) {
        setColor(color);
        setBackgroundColor(bgColor);
      }
    });
    setChecked(selectedColor);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <ColorsContainer>
          {themes.map(([_, bgColor]) => (
            <ColorRadio
              type="radio"
              checked={checked === bgColor}
              onChange={() => handleChange(bgColor)}
              color={bgColor}
              key={bgColor}
            />
          ))}
        </ColorsContainer>

        <ColorViewer text="Cor do Texto">
          <ColorInput
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </ColorViewer>
        <ColorViewer text="Cor do Fundo">
          <ColorInput
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </ColorViewer>

        <ButtonSubmit type="submit">Preview</ButtonSubmit>
      </Form>

      <ImageContainer>
        <Image
          loader={loader}
          src={imageUri}
          alt={imageUri == "" ? "" : "Imagem gerada pelo seletor"}
          width={900}
          height={600}
        />
        <DownloadButton href={imageUri} download={`${text}-${color}`}>
          Download
        </DownloadButton>
      </ImageContainer>
    </Container>
  );
}
