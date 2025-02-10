import { NextResponse } from "next/server";

export type MembershipData = { current_total: number };

export async function GET(): Promise<NextResponse> {
  const API_URL = new URL("https://pro-worker.reformparty.uk/ticker/count");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      return NextResponse.json({
        status: response.status,
        error: "Failed to fetch membership data",
      });
    }

    const data: MembershipData = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 500, error: "Internal server error" });
  }
}
