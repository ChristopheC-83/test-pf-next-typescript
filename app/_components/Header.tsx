import { Button, buttonVariants } from "@/components/ui/button";
import Section from "./Section";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";

export default function Header() {
  const navLinks = [
    {
      id: 1,
      name: "Accueil",
      url: "/",
    },
    {
      id: 2,
      name: "Services",
      url: "/Services",
    },
    {
      id: 3,
      name: "Partage",
      url: "/blog",
    },
  ];
  const socialLinks = [
    {
      id: 1,
      name: "Github",
      url: "https://github.com/ChristopheC-83",
      icon: <FaGithub className="size-9" />,
    },
    {
      id: 2,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/christophe-chiappetta-b3623b262/",
      icon: <SiLinkedin className="size-9" />,
    },
    {
      id: 3,
      name: "Twitter",
      url: "https://twitter.com/83ChristopheC",
      icon: <RiTwitterXLine className="size-9" />,
    },
  ];

  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-center justify-between">
        <ul className="flex gap-x-5">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.id}
              href={navLink.url}
              className="text-xl font-bold hover:text-primary"
            >
              {navLink.name}
            </Link>
          ))}
        </ul>
        <ul className="flex gap-x-5">
          {socialLinks.map((socialLink) => (
            <Link
              key={socialLink.id}
              href={socialLink.url}
              className="size-6 p-0 hover:text-primary"
            >
              {socialLink.icon}
            </Link>
          ))}
        </ul>
      </Section>
      <Section className="flex justify-end py-12 px-1">
        <h1 className="text-2xl font-bold text-center ">Christophe C.</h1>
      </Section>
    </header>
  );
}
