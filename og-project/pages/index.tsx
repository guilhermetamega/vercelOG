import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("ST.I");
  const [color, setColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [imageUri, setImageUri] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const url = `http://localhost:3000/api/image?text=${encodeURIComponent(
      text
    )}&color=${encodeURIComponent(color)}&backgroundColor=${encodeURIComponent(
      backgroundColor
    )}`;
    setImageUri(url);
  };

  const themes = [
    ["#000000", "#ffffff"],
    ["#ffffff", "#000000"],
    ["#ff0000", "#000000"],
    ["#00ff00", "#000000"],
    ["#0000ff", "#000000"],
    ["#ffff00", "#000000"],
    ["#00ffff", "#000000"],
  ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          name="backgroundColor"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <img src={imageUri} />
    </>
  );
}
