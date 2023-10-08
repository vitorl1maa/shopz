"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCurrency } from "@/hooks/useFormatCurrency";
import { urlFor } from "@/sanity";
import { fetchIphones } from "@/utils/fetchIphones";

export const CallProducts = () => {
  const [iPhones, setIphones] = useState<Iphones[]>([]);

  useEffect(() => {
    async function getIphones() {
      const iPhones = await fetchIphones();

      setIphones(iPhones);
    }
    getIphones();
  }, []);

  return (
    <section className="container_layout pt-32">
      <h2 className="text-5xl text-center">
        Confira alguns de nossos produtos Apple
      </h2>
      <div className="w-full flex items-center justify-center gap-5 flex-wrap pt-20">
        {iPhones.map((iphone) => (
          <div
            className="bg-secundary shadow-2xl w-96 h-96 px-5 py-4 rounded-md"
            key={iphone._id}
          >
            <span className="text-primary">NOVO</span>
            <h2 className="text-2xl font-semibold">{iphone.title}</h2>
            <Image
              src={urlFor(iphone.image[0]).url()}
              width={300}
              height={300}
              alt="iPhone"
            />
            <div className="flex pt-5 justify-between items-center">
              <span className="pt-2">
                A partir de {useCurrency(iphone.price)}
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
};
