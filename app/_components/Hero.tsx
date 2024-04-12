/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Section from "./Section";
import { Badge } from "@/components/ui/badge";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiPauseLine } from "react-icons/ri";
import { LiaPhp } from "react-icons/lia";
import { GrMysql } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [technos, setTechnos] = useState<boolean>(false);

  return (
    <Section className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-top">
      <div className="flex-[2] flex flex-col h-fit py-4">
        <h2 className="text-4xl font-bold text-center  mb-auto">
          Christophe C.
        </h2>
        <h3 className=" text-2xl flex-1 flex items-center py-6">
          Développeur Web et Mobile
        </h3>
        <p className="text-xl mb-4">
          Je réalise vos projets de site internet ou d'outils web, de la
          conception à la mise en ligne. <br /><br /> Les dernières technologies sont
          utilisées pour vous garantir un produit de qualité.
        </p>
        <div
          onClick={() => {
            setTechnos(!technos);
          }}
          className="cursor-pointer text-end text-primary"
        >
          <p>{!technos && "Découvrir les technologies utilisées ⏬"}</p>
        </div>
        <AnimatePresence>
          {technos && (
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: -50, opacity: 0 }}
              className="border bg-card border-neutral-500 p-4 rounded-xl mt-4 text-card-foreground"
            >
              <p className="text-lg mb-4">
                <Badge variant="tertiary">
                  <SiNextdotjs className="text-neutral-50 mr-1  text-lg" />
                  Nextjs
                </Badge>{" "}
                et{" "}
                <Badge variant="tertiary">
                  <FaReact className="text-blue-500 mr-1 text-lg" />
                  React
                </Badge>
                sont évidemment dans ma boîte à outils.
              </p>
              <p className="text-lg mb-4">
                <Badge variant="tertiary">
                  <SiTypescript className="text-blue-500 mr-1 text-lg" />
                  Typescript
                </Badge>
                sécurise mes développements.
              </p>
              <p className="text-lg mb-4">
                <Badge variant="tertiary">
                  <LiaPhp className="text-blue-500 mr-1 text-lg" />
                  Php
                </Badge>{" "}
                et{" "}
                <Badge variant="tertiary">
                  <GrMysql className="text-neutral-50  mr-1 text-lg" />
                  MySQL
                </Badge>
                permettent une administration simple de vos données.
              </p>
              <p className="text-lg mb-4">
                <Badge variant="tertiary">
                  <SiTailwindcss className="text-blue-500 mr-1 text-lg" />
                  Tailwind
                </Badge>{" "}
                et{" "}
                <Badge variant="tertiary">
                  <RiPauseLine className="text-neutral-50 mr-1 rotate-45 text-lg" />
                  Shadcn/UI
                </Badge>
                homogénéisent les visuels.
              </p>
              <div
                onClick={() => {
                  setTechnos(!technos);
                }}
                className="cursor-pointer text-end text-destructive-foreground"
              >
                <p>{technos && "Masquer les technologies utilisées ⏫"}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex-1 flex justify-center md:justify-end min-w-[250px] min-h-[250px]">
        <Image
          width={200}
          height={200}
          alt="avatar"
          src="https://mycloud.barpat.fun/public/assets/Images/Bibliotheque/perso_rpg/sorcier.jpg"
          className="rounded-full w-[250px] h-[250px]"
        />
      </div>
    </Section>
  );
}
