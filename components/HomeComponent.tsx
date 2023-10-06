"use client";

import { ArrowRight, GameController, PlayCircle } from "@phosphor-icons/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// @ts-ignore
import Fade from "react-reveal/Fade";

export const HomeComponent = () => {
  return (
    <div>
      <section className="container_layout h-screen flex items-center">
        <div className="md:w-1/2 flex flex-col items-start justify-center">
          <span className="font-semibold">NOVO</span>
          <h1 className="text-7xl font-extrabold py-5">iPhone 15 Pro</h1>
          <p className="md:w-4/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            corporis, cumque impedit fugit dolorem officiis dolor quia
            perferendis tempora recusandae itaque delectus eveniet ut sunt
            dolorum quasi quo. Amet, corrupti.
          </p>
          <div className="flex gap-5 pt-10">
            <button className="text-xs md:text-base bg-primary px-5 py-2 rounded-md font-semibold flex items-center gap-3 hover:translate-y-2 hover:bg-primary/75 transition">
              Compre agora
              <ArrowRight size={25} />
            </button>
            <Link
              href="https://youtu.be/xqyUdNxWazA?si=0vfswXgcWyfDvr5g"
              target="_blank"
            >
              <button className="text-xs md:text-base bg-secundary px-5 py-2 rounded-md font-semibold flex items-center gap-3 hover:translate-y-2 hover:bg-slate-200 transition">
                Assistir video
                <PlayCircle size={25} weight="fill" />
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 hidden md:flex flex-col items-start justify-center">
          <video autoPlay muted loop className="rounded-lg">
            <source src="/iphone_banner.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="px-5 md:px-20 flex flex-col md:flex-row items-center justify-center">
        <div className="w-[350px] h-full md:w-[600px] md:h-[520px] block_product">
          <Image
            src="/notebook_banner.png"
            width={800}
            height={800}
            alt="Notebook"
          />
          <p className="p-5 font-semibold text-xl">Notebooks</p>
        </div>
        <div className="flex flex-col mt-5 md:mt-0">
          <div className="flex flex-wrap">
            <div className="block_product md:ml-5 w-full my-5 md:my-0  md:w-[300px] md:h-[250px]">
              <Image
                src="/smartphone_banner.png"
                width={150}
                height={200}
                alt="Smartphone"
              />
              <p className="p-5 font-semibold text-xl">Smartphones</p>
            </div>
            <div className="block_product md:ml-5 w-full md:w-[300px] md:h-[250px]">
              <Image
                src="/applewatch_banner.png"
                width={150}
                height={100}
                alt="Smartphone"
              />
              <p className="p-5 font-semibold text-xl">Apple Watchs</p>
            </div>
          </div>
          <div className="block_product md:w-[620px] md:h-[250px] md:ml-5 mt-5">
            <Image
              src="/pcgamer_banner.png"
              width={300}
              height={200}
              alt="PC Gamer"
            />
            <p className="font-semibold text-xl">PC Gamer</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center fill-slate-950 bg-hero-banner bg-cover bg-top max-w-screen h-screen mt-32 px-5 md:px-20 pt-32">
        <Fade bottom>
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-primary">
              Bora jogar!?
            </h2>
            <p className="text-2xl md:text-3xl md:w-1/2 py-10 text-white">
              Aqui na Shopz você encontra todo o que você precisa para passar
              para a próxima fase do seu jogo. Conheça a nossa linha gamer.
            </p>

            <button className="text-xs md:text-base bg-secundary px-5 py-2 rounded-md font-semibold flex items-center gap-3 hover:translate-y-2 hover:bg-slate-200 transition">
              Saiba mais
              <GameController size={32} weight="fill" />
            </button>
          </div>
        </Fade>
      </section>
    </div>
  );
};
