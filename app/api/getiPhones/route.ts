import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";
import { type } from "os";

const query = groq`*[_type == "iphones"] {
  _id,
  ...
}`

type Data = {
  iPhone: Iphones
}

export async function GET(
  req: NextRequest,
  res: NextResponse,
){
  try {
    const iPhones = await sanityClient.fetch(query);
    if(iPhones) {
      return NextResponse.json({iPhones}, {status: 200})
    } else {
      return NextResponse.json({message: "Erro ao buscar produtos"}, {status: 404})
    }
  } catch(error) {
    console.error("Erro interno no servidor", error);
    
  }
}