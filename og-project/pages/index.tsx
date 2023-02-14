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

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const theme = themes.find((theme) => theme[0] === e.target.value);
    setColor(theme![1]);
    setBackgroundColor(theme![2]);
  };
  const themes = [
    ["Orange", "#AD6D56", "#e2d0ca"],
    ["Yellow", "#BFA85E", "#F2EDDA"],
    ["Blue", "#668FC2", "#DDE8F6"],
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
        <select name="theme" id="theme" onChange={handleThemeChange}>
          {themes.map((theme) => (
            <option key={theme[0]} value={theme[0]}>
              {theme[0]}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
      <img src={imageUri} />
    </>
  );
}
