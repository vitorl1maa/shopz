"use client";

import { useCurrency } from "@/hooks/useFormatCurrency";
import { urlFor } from "@/sanity";
import { fetchNotebooks } from "@/utils/fetchNotebooks";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function NotebooksComponent() {
  const [notebooks, setNotebooks] = useState<Notebooks[]>([]);

  useEffect(() => {
    async function getNotebooks() {
      const notebooks = await fetchNotebooks();

      setNotebooks(notebooks);
    }
    getNotebooks();
  }, []);

  return (
    <section className="container_layout pt-32">
      <h1 className="text-center text-2xl pb-20">
        Encontre o notebook ideal para você
      </h1>
      <div>
        {notebooks.map((notebook) => (
          <div
            className="bg-secundary shadow-2xl w-96 h-96 px-5 py-4 rounded-md"
            key={notebook._id}
          >
            <h2 className="text-2xl font-semibold">{notebook.title}</h2>
            <Image
              src={urlFor(notebook.image[0]).url()}
              width={250}
              height={250}
              alt="notebook"
            />
            <div className="flex pt-5 justify-between items-center">
              <span className="pt-2">
                A partir de {useCurrency(notebook.price)}
              </span>
              <button className="bg-primary rounded-full px-5 py-2">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
