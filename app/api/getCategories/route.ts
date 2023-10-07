import { groq } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";
import { sanityClient } from "../../../sanity";

const query = groq`*[_type == "category"] {
  _id,
  ...
}`
type Data = {
  categories: Category[];
}

export async function GET(req: NextRequest, res: NextResponse<Data>) {
  try {
    const categories = await sanityClient.fetch(query)

    if(categories) {
      return NextResponse.json({categories}, {status: 200})
    } else {
      return NextResponse.json({message: "Nenhma categoria encontrada"}, {status: 404})
    }
  } catch(error) {
    console.error("Nenhuma categoria encontrada", error)
    return NextResponse.json({error: "Erro interno no servidor"}, {status: 500})
  }
}