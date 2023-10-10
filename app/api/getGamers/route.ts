import { groq } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";
import { sanityClient } from "../../../sanity";

const query = groq`*[_type == "gamers"] {
  _id,
  ...
}`
type Data = {
  gamers: Gamers[];
}

export async function GET(req: NextRequest, res: NextResponse<Data>) {
  try {
    const gamers = await sanityClient.fetch(query)

    if(gamers) {
      return NextResponse.json({gamers}, {status: 200})
    } else {
      return NextResponse.json({message: "Nenhma categoria encontrada"}, {status: 404})
    }
  } catch(error) {
    console.error("Nenhuma categoria encontrada", error)
    return NextResponse.json({error: "Erro interno no servidor"}, {status: 500})
  }
}