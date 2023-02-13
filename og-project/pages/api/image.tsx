import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "";
  const backgroundColor = searchParams.get("backgroundColor") || "lightblue";
  const color = searchParams.get("color") || "black";
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor,
          height: 600,
          width: 900,
          display: "flex",
          textAlign: "right",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          flexDirection: "column",
          flexWrap: "nowrap",
          padding: 40,
        }}
      >
        <span
          style={{
            fontSize: 100,
            textTransform: "uppercase",
            color,
            fontWeight: 700,
          }}
        >
          {text}
        </span>
      </div>
    )
  );
}
