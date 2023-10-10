"use client";

import { useCurrency } from "@/hooks/useFormatCurrency";
import { urlFor } from "@/sanity";
import { fetchGamers } from "@/utils/fetchGamers";
import { CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const GamerComponent = () => {
  const [gamersKit, setGamersKit] = useState<Gamers[]>([]);

  useEffect(() => {
    async function getGamersKit() {
      const gamersKit = await fetchGamers();

      setGamersKit(gamersKit);
    }
    getGamersKit();
  }, []);
  return (
    <section className="container_layout pt-32">
      <div className="flex flex-col flex-wrap md:flex-row justify-center w-full gap-5 ">
        {gamersKit.map((gamerKit) => (
          <div
            className="bg-secundary shadow-2xl w-96 h-96 px-5 py-4 rounded-md"
            key={gamerKit._id}
          >
            <h2 className="text-2xl font-semibold">{gamerKit.title}</h2>
            <div className="flex justify-center">
              <Image
                src={urlFor(gamerKit.image[0]).url()}
                width={200}
                height={200}
                alt="gamerKit"
              />
            </div>
            <div className="flex pt-5 justify-between items-center">
              <span className="pt-2">
                A partir de {useCurrency(gamerKit.price)}
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
