export async function fetchIphones() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getiPhones`)

  const data = await res.json()
  const iPhones: Iphones[] = data.iPhones

  return iPhones
}