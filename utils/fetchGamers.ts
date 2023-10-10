export async function fetchGamers(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getGamers`);

  const data = await res.json();
  const gamers: Gamers[] = data.gamers

  return gamers
}