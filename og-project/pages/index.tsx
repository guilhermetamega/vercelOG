import ButtonSubmit from "@/components/ButtonSubmit";
import ColorRadio from "@/components/ColorRadio";
import Container from "@/components/Container";
import Input from "@/components/Input";
import { SetStateAction, useEffect, useState } from "react";

const themes = [
  ["Azul", "#4D84C4", "#C1D6EB"],
  ["Azul Escuro", "#3C537C", "#8FA7CC"],
  ["Azul Claro", "#62A7DE", "#EEF5FB"],
  ["Verde", "#9FBF38", "#D4E3A0"],
  ["Verde Escuro", "#647733", "#ABC270"],
  ["Verde Claro", "#BFD05D", "#F9FBEF"],
  ["Cinza", "#807F7D", "#CDCDCB"],
  ["Cinza Escuro", "#585856", "#868683"],
  ["Cinza Claro", "#C4C4C4", "#F5F5F5"],
];

export default function Home() {
  const [text, setText] = useState("Text");
  const [imageUri, setImageUri] = useState("");
  const [color, setColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [checked, setChecked] = useState("#F5F5F5");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const url = `/api/image?text=${encodeURIComponent(
      text
    )}&color=${encodeURIComponent(color)}&backgroundColor=${encodeURIComponent(
      backgroundColor
    )}`;

    setImageUri(url);
  };

  function handleClick(selectedColor: string) {
    themes.map(([_, color, bgColor]) => {
      if (selectedColor === bgColor) {
        setColor(color);
        setBackgroundColor(bgColor);
      }
    });
    setChecked(selectedColor);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} style={{ margin: 50, display: "flex" }}>
        <Input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {themes.map(([_, __, bgColor]) => (
          <ColorRadio
            type="radio"
            checked={checked === bgColor}
            onChange={() => handleClick(bgColor)}
            color={bgColor}
            key={bgColor}
          />
        ))}

        <ButtonSubmit type="submit">Preview</ButtonSubmit>
      </form>
      <img src={imageUri} />
    </Container>
  );
}
