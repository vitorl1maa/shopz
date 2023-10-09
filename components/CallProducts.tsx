"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCurrency } from "@/hooks/useFormatCurrency";
import { urlFor } from "@/sanity";
import { fetchIphones } from "@/utils/fetchIphones";
import { CaretRight } from "@phosphor-icons/react";

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
    <section className="container_layout pt-32 ">
      <h2 className="text-5xl text-center">Compre o iPhone 15</h2>
      <div className="flex flex-col items-center">
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
        <p className="mt-16 flex items-center font-semibold text-primary md:text-xl hover:underline cursor-pointer">
          Vizualizar outros modelos de iPhone
          <CaretRight size={20} />
        </p>
      </div>
    </section>
  );
};
