/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/ui/card";
import Section from "./Section";
import { GiCartwheel } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { SiMicrodotblog } from "react-icons/si";
import { MdCloudUpload } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import Link from "next/link";
import { sideProject } from "@/customTypes/sideProject";
import { Badge } from "@/components/ui/badge";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiPauseLine } from "react-icons/ri";
import { LiaPhp } from "react-icons/lia";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";import { SiPhp } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";


export default function Status() {
  const workProjects: sideProject[] = [
    {
      id: 1,
      logo: <GiCartwheel />,
      title: "Vélo Expresso",
      description: "Site administrable pour un magasin de vélos.",
      url: "https://velo-expresso.com/",
    },
    {
      id: 2,
      logo: <BsTools />,
      title: "Poseur de cuisine",
      description: "Site statique en React pour un poseur de cuisines.",
      url: "https://christophe-cuisine.fr/",
    },
  ];

  const sideProjects: sideProject[] = [
    {
      id: 3,
      logo: <SiMicrodotblog />,
      title: "Blog personnel",
      description: "Blog administrable en php et mysql.",
      url: "https://blog.barpat.fun/",
    },
    {
      id: 4,
      logo: <MdCloudUpload />,
      title: "My Cloud",
      description:
        "Un cloud personnel pour stocker ses fichiers en php et mysql.",
      url: "https://mycloud.barpat.fun/",
    },
    {
      id: 5,
      logo: <AiFillApi />,
      title: "MyApis",
      description: "Un site pour tester des apis personnels en php et mysql.",
      url: "https://myapis.barpat.fun/",
    },
  ];

  const usedTechnos: sideProject[] = [
    {
      id: 6,
      logo: <SiNextdotjs />,
      title: "NextJS",
      description:
        "Cette boîte à outils est indispensable pour moi. Elle me permet de créer des sites web rapides, performants et optimisés pour le référencement. C'est un outil que j'adore et que je recommande.",
    },
    {
      id: 10,
      logo: <FaReact />,
      title: "React",
      description:
        "Cette librairie Javascript me permet de créer des interfaces utilisateurs interactives et dynamiques. Le développement en React est un plaisir qui me rappelle mon enfance devant ma grosse boîtes de Lego. Bref, j'adore !",
    },
    {
      id: 12,
      logo: <TbBrandMysql />,
      title: "mySQL",
      description:
        "Inforamtique ? oui l'information automatique nécessite une base de données. mySQL est une base de données relationnelle qui permet de stocker, trier, rechercher, filtrer, etc. des données. C'est un outil indispensable pour les sites web dynamiques et les outils que nous proposons.",
    },
    {
      id: 14,
      logo: <SiPhp />,
      title: "php",
      description:
        "On le déclare toujours en disparition, mais il est toujours là ! Il est simple à utiliser et permet de faire des sites dynamiques. Lire, créer, modifier et effacer des données... c'est son truc ça !.",
    },
    {
      id: 16,
      logo: <IoLogoJavascript />,
      title: "Javascript",
      description:
        "Qu'un site serait triste sans Javascript ! C'est le langage qui permet de rendre les sites dynamiques et interactifs. Il est indispensable pour les animations, les appels aux bases de données, les formulaires, etc.",
    },
    {
      id: 18,
      logo: <FaCss3Alt />,
      title: "CSS 3 ",
      description:
        "On peut utiliser Tailwind, voir Bootstrap, mais la connaissance de CSS est indispensable pour personnaliser les styles et les animations. ",
    },
    {
      id: 20,
      logo: <FaHtml5 />,
      title: "HTML 5",
      description:
        "Evidemment, sans cette techno, pas de page web ! Ce n'est peut être pas de la programmation, mais c'est la base et sa sémantique est importante pour le référencement.",
    },
  ];

  return (
    <Section className="flex flex-col sm:justify-between gap-6">
      <Card className="w-full flex-col h-fit p-4 bg-secondary-foreground">
        <h4 className="text-lg text-foreground mb-4">Side, fun projects</h4>
        {sideProjects.map((project) => (
          <Link
            href={project.url || "/"}
            key={project.id}
            className="rounded-xl bg-background text-foreground flex border border-neutral-500 w-full h-fit py-1 mb-4 hover:border-neutral-200 hover:bg-muted duration-300"
          >
            <div className="flex justify-center p-0 items-center h-full w-[50px] md:w-[60px]  my-auto text-xl sm:text-2xl ">
              {project.logo}
            </div>

            <div className="flex flex-col gap-y-2">
              <p className="text-foreground">{project.title}</p>
              <p className="text-foreground">{project.description}</p>
            </div>
          </Link>
        ))}
      </Card>
      <Card className="p-4 w-full">
        <h5 className="text-lg text-foreground mb-4">Work</h5>

        {workProjects.map((project) => (
          <Link
            href={project.url || "/"}
            key={project.id}
            className="rounded-xl bg-background text-foreground flex border border-neutral-500 w-full h-fit py-1 mb-4 hover:border-neutral-200 hover:bg-muted duration-300"
          >
            <div className="flex justify-center p-0 items-center h-full w-[50px] md:w-[60px]  my-auto text-xl sm:text-2xl ">
              {project.logo}
            </div>

            <div className="flex flex-col gap-y-2">
              <p className="text-foreground">{project.title}</p>
              <p className="text-foreground">{project.description}</p>
            </div>
          </Link>
        ))}
      </Card>
      <Card className="w-full flex-col h-fit p-4 bg-secondary-foreground">
        <h4 className="text-lg text-foreground mb-4">
          Les technos que j'aime utiliser, et pourquoi !
        </h4>
        {usedTechnos.map((technos) => (
          <Link
            href={technos.url || "/"}
            key={technos.id}
            className="rounded-xl bg-background text-foreground flex border border-neutral-500 w-full h-fit py-1 mb-4 hover:border-neutral-200 hover:bg-muted duration-300"
          >
            <div className="flex justify-center p-0 items-center h-full min-w-[50px] md:min-w-[60px]  my-auto text-xl sm:text-2xl ">
              {technos.logo}
            </div>

            <div className="flex flex-col gap-y-2 py-2">
              <p className="text-foreground">{technos.title}</p>
              <p className="text-foreground">{technos.description}</p>
            </div>
          </Link>
        ))}
      </Card>
    </Section>
  );
}
