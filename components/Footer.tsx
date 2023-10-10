"use client";

import {
  FacebookLogo,
  InstagramLogo,
  Lightning,
  Storefront,
  TiktokLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black pt-52">
      <div className="text-white flex flex-col-reverse md:flex-row gap-20 items-center md:items-start justify-between container_layout py-10">
        <ul>
          <li className="footer-link">
            <Storefront size={32} />
            Retirar na Loja
          </li>
        </ul>
        <ul>
          <li className="footer-link">
            Tire sua Dúvida <br />e Fale Conosco
          </li>
        </ul>

        <ul className="text-center md:text-left">
          <h1 className="font-extrabold text-xl">Sitemap</h1>
          <div className="pt-5">
            <li className="footer-link">Home</li>
            <li className="footer-link">Celulares</li>
            <li className="footer-link">Notebooks</li>
            <li className="footer-link">Linha Gamer</li>
          </div>
        </ul>

        <ul>
          <h1 className="font-extrabold text-xl">Shopz nas Redes Sociais</h1>
          <div className="flex items-center justify-around pt-5">
            <li className="footer-link">
              <FacebookLogo size={32} />
            </li>
            <li className="footer-link">
              <InstagramLogo size={32} />
            </li>
            <li className="footer-link">
              <YoutubeLogo size={32} />
            </li>
            <li className="footer-link">
              <TiktokLogo size={32} />
            </li>
          </div>
          <div className="flex items-center justify-center md:justify-start pt-10">
            <Lightning size={40} weight="fill" color="#c1f753" />
            <h2 className="font-semibold text-4xl pr-2">Shopz</h2>
            <span>&copy;</span>
          </div>
        </ul>
      </div>
    </footer>
  );
};
