export async function fetchNotebooks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getNotebooks`);

  const data = await res.json();
  const notebooks: Notebooks[] = data.notebooks

  return notebooks
}