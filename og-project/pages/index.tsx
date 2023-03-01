/* eslint-disable @next/next/no-img-element */
import ButtonSubmit from "@/components/ButtonSubmit";
import ColorInput from "@/components/ColorInput";
import ColorRadio from "@/components/ColorRadio";
import OptionsContainer from "@/components/OptionsContainer";
import ColorViewer from "@/components/ColorViewer";
import Container from "@/components/Container";
import DownloadButton from "@/components/DownloadButton";
import Form from "@/components/Form";
import ImageContainer from "@/components/ImageContainer";
import Input from "@/components/Input";
import Image from "next/image";
import { useState } from "react";
import SizeRadio from "@/components/SizeRadio";

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

const sizes = [
  ["Small", 900, 600],
  ["Medium", 1080, 720],
  ["Big", 1920, 1080],
];

export default function Home() {
  const [text, setText] = useState("Text");
  const [imageUri, setImageUri] = useState("");
  const [color, setColor] = useState(themes[4][0]);
  const [backgroundColor, setBackgroundColor] = useState(themes[4][1]);
  const [checkedColor, setCheckedColor] = useState("#ABC270");
  const [width, setWidth] = useState(sizes[0][1]);
  const [height, setHeight] = useState(sizes[0][2]);
  const [checkedSize, setCheckedSize] = useState("Small");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const url = `/api/image?text=${encodeURIComponent(
      text
    )}&color=${encodeURIComponent(
      color.toUpperCase()
    )}&backgroundColor=${encodeURIComponent(
      backgroundColor.toUpperCase()
    )}&width=${width}&height=${height}`;

    setImageUri(url);
  };

  function handleChangeColorInput(e: any) {
    if (e.target.value.startsWith("#")) {
      setColor(e.target.value);
    }
  }

  function handleChangeBgColorInput(e: any) {
    if (e.target.value.startsWith("#")) {
      setBackgroundColor(e.target.value);
    }
  }

  function handleChange(selectedColor: string) {
    themes.map(([color, bgColor]) => {
      if (selectedColor === bgColor) {
        setColor(color);
        setBackgroundColor(bgColor);
      }
    });
    setCheckedColor(selectedColor);
  }

  function handleChangeSize(selectedSize: any) {
    sizes.map(([text, w, h]) => {
      if (selectedSize === text) {
        setWidth(w);
        setHeight(h);
      }
    });
    setCheckedSize(selectedSize);
  }

  function loader() {
    return imageUri;
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

        <OptionsContainer>
          {themes.map(([_, bgColor]) => (
            <ColorRadio
              type="radio"
              checked={checkedColor === bgColor}
              onChange={() => handleChange(bgColor)}
              color={bgColor}
              key={bgColor}
            />
          ))}
        </OptionsContainer>

        <OptionsContainer>
          {sizes.map(([text]) => (
            <SizeRadio
              checked={checkedSize === text}
              onChange={() => handleChangeSize(text)}
              text={text}
              color={"#d9d9d9"}
              key={text}
            />
          ))}
        </OptionsContainer>

        <ColorViewer text="Text Color">
          <ColorInput value={color} onChange={handleChangeColorInput} />
        </ColorViewer>
        <ColorViewer text="Background Color">
          <ColorInput
            value={backgroundColor}
            onChange={handleChangeBgColorInput}
          />
        </ColorViewer>

        <ButtonSubmit type="submit">Preview</ButtonSubmit>
      </Form>

      {imageUri ? (
        <ImageContainer>
          <Image
            loader={loader}
            src={imageUri}
            alt={imageUri == "" ? "" : "Imagem gerada pelo seletor"}
            width={900}
            height={600}
          />
          <DownloadButton
            href={imageUri}
            download={`${text}-${color}-${width}`}
          >
            Download
          </DownloadButton>
        </ImageContainer>
      ) : (
        ""
      )}
    </Container>
  );
}
