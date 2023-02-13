import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "Lorem Ipsum";
  const backgroundColor = searchParams.get("backgroundColor") || "lightblue";
  const color = searchParams.get("color") || "black";
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor,
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "right",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          flexDirection: "column",
          flexWrap: "nowrap",
          padding: "60px",
        }}
      >
        <p
          style={{
            fontSize: 180,
            textTransform: "uppercase",
            color,
          }}
        >
          {text}
        </p>
      </div>
    )
  );
}
