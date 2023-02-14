import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("Text");
  const [imageUris, setImageUris] = useState<string[]>([]);

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        flexWrap: "nowrap",
      }}
    >
      <form onSubmit={handleSubmit} style={{ margin: 50, display: "flex" }}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            height: 30,
            borderRadius: "2rem",
            borderStyle: "none",
            textAlign: "center",
          }}
        />

        <button
          type="submit"
          style={{
            height: 30,
            width: 50,
            borderRadius: "2rem",
            borderStyle: "none",
          }}
        >
          Submit
        </button>
      </form>
      {imageUris.map((imageUri, i) => {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <img src={imageUri} key={i} />;
      })}
    </div>
  );
}
