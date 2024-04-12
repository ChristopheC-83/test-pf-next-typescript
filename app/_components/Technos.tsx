/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/ui/card";
import Section from "./Section";
import { Badge } from "@/components/ui/badge";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiPauseLine } from "react-icons/ri";
import { LiaPhp } from "react-icons/lia";
import { GrMysql } from "react-icons/gr";
import Link from "next/link";
import { sideProject } from "@/customTypes/sideProject";


 export default function Technos() {

    const usedTechnos:sideProject[] = [
        {
            id:1,
            logo: <FaReact />,
            title : "React",
            description: "Cette librairie Javascript me permet de créer des interfaces utilisateurs interactives et dynamiques. Sa modularité et sa communauté en font un outil de choix pour mes projets. Le développement en React est un plaisir qui me rappelle mon enfance devant ma grosse boîtes de Lego. Bref, j'adore !",
        }
    
    
    
    ]


    return (
        <Section className="flex flex-col sm:justify-between gap-6">
          <Card className="w-full flex-col h-fit p-4 bg-secondary-foreground">
            <h4 className="text-lg text-foreground mb-4">Les technos que j'aime utiliser, et pourquoi !</h4>
            {usedTechnos.map((techno) => (
              <Link
                href={techno.url || "/"}
                key={techno.id}
                className="rounded-xl bg-background text-foreground flex border border-neutral-500 w-full h-fit py-1 mb-4 hover:border-neutral-200 hover:bg-muted duration-300"
              >
                <div className="flex justify-center p-0 items-center h-full w-[80px] md:w-[100px]  my-auto text-xl sm:text-2xl border border-red-500 ">
                  {techno.logo}
                </div>
    
                <div className="flex flex-col gap-y-2">
                  <p className="text-foreground">{techno.title}</p>
                  <p className="text-foreground">{techno.description}</p>
                </div>
              </Link>
            ))}
          </Card>
          
        </Section>
      );
    }
    