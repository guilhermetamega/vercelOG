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
      <div style={{ backgroundColor: `${BgColor}` }}></div>
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, { status: 500 });
  }
}
