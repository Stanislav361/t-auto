import { NextResponse } from "next/server"
import { getReviews } from "@/lib/data-loader"

export async function GET() {
  const reviews = getReviews()
  return NextResponse.json(reviews)
}


