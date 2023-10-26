import connectMDB from "@/libs/mongodb";
import ResponseData from "@/schemas/ResponseData";
import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    message: "Vanakam da maapla !!",
  });
}

export async function POST(request) {
  try {
    const data = await request.json();
    const array = data.surveyData;

    await connectMDB();

    await ResponseData.create({ array });

    return NextResponse.json({
      array,
    });
  } catch (error) {
    console.log(error);
  }
}
