import { NextResponse } from "next/server";

export const GET = (req, res) => {
  return NextResponse.json({ message: "Hello world!" });
};
