"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
// @ts-ignore
import Fade from "react-reveal/Fade";

export const CallBands = () => {
  return (
    <section className="bg-black text-white mt-32 pt-32 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-7xl font-extrabold text-primary">
        Tecnologia e Estilo
      </h1>
      <Fade bottom>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-20 w-full container_layout">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-4xl md:text-4xl">Mi Band 8</p>
            <button className="text-xs md:text-base text-black mt-5 bg-secundary px-5 py-2 rounded-md font-semibold flex items-center gap-3 hover:translate-y-2 hover:bg-slate-200 transition">
              Comprar
              <ArrowRight size={25} />
            </button>
          </div>
          <Image src="/miband08.png" width={600} height={600} alt="mi-band 7" />
        </div>
      </Fade>
    </section>
  );
};
