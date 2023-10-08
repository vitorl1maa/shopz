import { groq } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";
import { sanityClient } from "@/sanity";

const query = groq`*[_type == "product"] {
  _id,
  ...
} `

type Data = {
  products: Product[]
}

export async function GET(req: NextRequest, res: NextResponse<Data>) {
  try {
    const products = await sanityClient.fetch(query);
    if(products) {
      return NextResponse.json({products}, {status: 200})
    } else {
      return NextResponse.json({message: "Erro ao buscar produtos"}, {status: 404})
    }
  } catch(error) {
    console.error("Erro interno no servidor", error);
    
  }
}