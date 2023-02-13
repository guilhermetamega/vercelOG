import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { sortAndDeduplicateDiagnostics } from "typescript";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const hasTitle = searchParams.has("title");
    const hasBgColor = searchParams.has("BgColor");
    const hasColor = searchParams.has("Color");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Lorem Ipsum";
    const BgColor = hasBgColor ? searchParams.get("BgColor") : "lightblue";
    const Color = hasColor ? searchParams.get("Color") : "black";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: `${BgColor}`,
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: `${Color}`,
              marginTop: 30,
              padding: "0 120px",
            }}
          >
            {title}
          </div>
        </div>
      )
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, { status: 500 });
  }
}
