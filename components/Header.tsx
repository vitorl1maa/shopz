"use client";

import {
  Lightning,
  List,
  MagnifyingGlass,
  ShoppingCartSimple,
  User,
  X,
} from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { sign } from "crypto";

export const Header = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const session = false;
  const [fix, setFix] = useState<boolean>(false);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  const changeFixed = () => {
    if (process.browser && window.scrollY >= 80) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeFixed);
    return () => {
      window.removeEventListener("scroll", changeFixed);
    };
  }, []);

  return (
    <header
      className={`${
        fix ? "sticky-navbar" : ""
      }  w-full h-20 sticky top-0 z-30 flex items-center container_layout bg-white`}
    >
      <div className="flex items-center gap-20 w-full ">
        <Link href="/">
          <span className="flex text-xl items-center cursor-pointer opacity-100 transition hover:opacity-75 font-bold text-DarkBlue">
            <Lightning size={32} weight="fill" color="#c1f753" />
            Shopz
          </span>
        </Link>
        <nav
          className="flex flex-col md:flex-row items-center justify-center gap-20 menu w-full"
          ref={navRef}
        >
          {session ? (
            <div className="flex flex-col items-center justify-center">
              Olá Vitor <User size={32} />{" "}
            </div>
          ) : (
            <span className="rounded-full md:hidden">Entrar</span>
          )}
          <ul className="flex flex-col items-center md:flex-row gap-5">
            <Link href="/">
              <li className="nav-link">Home</li>
            </Link>
            <li className="nav-link">Celulares</li>
            <Link href="/notebooks">
              <li className="nav-link">Notebooks</li>
            </Link>
            <Link href="/linha-gamer">
              <li className="nav-link">Linha Gamer</li>
            </Link>
          </ul>
          <button onClick={showNavbar}>
            <X className="cursor-pointer nav-close-btn text-4xl lg:text-2xl text-DarkBlue" />
          </button>
        </nav>
      </div>
      <div className=" flex gap-3 pr-5 md:p-0 md:justify-between items-center md:w-[200px] ">
        <span>
          <MagnifyingGlass size={25} color="#1D1A39" />
        </span>
        <Link href="/pagamento">
          <div className="relative cursor-pointer md:p-0">
            <span className="font-semibold absolute left-4 -top-2 bg-primary text-DarkBlue rounded-full w-5 h-5 flex items-center justify-center">
              5
            </span>
            <ShoppingCartSimple size={25} color="#1D1A39" />
          </div>
        </Link>
        {!session ? (
          <p className="md:flex hidden  items-center text-sm">
            Olá, Vitor <User size={25} />{" "}
          </p>
        ) : (
          <span className="hidden cursor-pointer md:block pl-3">Entrar</span>
        )}
      </div>
      <button onClick={showNavbar}>
        <List size={35} className="cursor-pointer nav-open-btn text-DarkBlue" />
      </button>
    </header>
  );
};
