import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";


const query = groq`*[_type == "notebooks"] {
  id,
  _title,
  ...
}`

type Data = {
  notebooks: Notebooks
}

export async function GET(
  req: NextRequest,
  res: NextResponse<Data>
){
  try {
    const notebooks = await sanityClient.fetch(query)
    if(notebooks) {
      return NextResponse.json({notebooks}, {status: 200})
    } else {
      return NextResponse.json({message: "Erro ao buscar produtos"}, {status: 404})
    }
  } catch(error) {
    console.error("Erro interno no servidor", error);
  }
}
