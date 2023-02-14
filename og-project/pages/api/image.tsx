import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const inter = fetch(new URL("../assets/Inter-Bold.ttf", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

export default async function handler(req: NextRequest) {
  const interData = await inter;

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
            fontFamily: '"Inter"',
            fontWeight: "900",
            fontSize: 180,
            textTransform: "uppercase",
            color,
            lineHeight: 1,
            marginBottom: -30,
          }}
        >
          {text}
        </span>
      </div>
    ),
    {
      height: 600,
      width: 900,
      fonts: [
        {
          name: "Inter",
          data: await interData,
          style: "normal",
        },
      ],
    }
  );
}
