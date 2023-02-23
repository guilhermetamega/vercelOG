import ButtonSubmit from "@/components/ButtonSubmit";
import ColorRadio from "@/components/ColorRadio";
import Container from "@/components/Container";
import Input from "@/components/Input";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("Text");
  const [imageUris, setImageUris] = useState<string[]>([]);
  const [check, setCheck] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const urls = themes.map(([_, color, backgroundColor]) => {
      return `/api/image?text=${encodeURIComponent(
        text
      )}&color=${encodeURIComponent(
        color
      )}&backgroundColor=${encodeURIComponent(backgroundColor)}`;
    });

    setImageUris(urls);
  };

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

  return (
    <Container>
      <form onSubmit={handleSubmit} style={{ margin: 50, display: "flex" }}>
        <Input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <ColorRadio
          type="radio"
          checked={check}
          onClick={() => setCheck(!check)}
          color="red"
        />

        <ButtonSubmit type="submit">Preview</ButtonSubmit>
      </form>
      {imageUris.map((imageUri, i) => {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <img src={imageUri} key={i} />;
      })}
    </Container>
  );
}
