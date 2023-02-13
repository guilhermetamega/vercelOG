// eslint-disable-next-line @next/next/no-document-import-in-page
import { Head } from "next/document";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [imageUri, setImageUri] = useState("");

  useEffect(() => {
    const url = `http://localhost:3000/api/image?text=${encodeURIComponent(
      text
    )}&color=${encodeURIComponent(color)}&backgroundColor=${encodeURIComponent(
      backgroundColor
    )}`;
    setImageUri(url);
  }, [text, color, backgroundColor]);

  return (
    <>
      <form>
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
      </form>
      <img src={imageUri} />
    </>
  );
}
