
import Section from "./Section";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import { navLinks } from "@/customTypes/navLinks";
import { socialLinks } from "@/customTypes/socialLinks";

export default function Header() {
  const navLinks: navLinks[] = [
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
  const socialLinks:socialLinks[] = [
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
    <header className="sticky top-0 py-4 bg-background">
      <Section className="flex items-center justify-between">
        <ul className="flex gap-x-5">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.id}
              href={navLink.url}
              className="text-xl font-bold hover:text-primary"
            >
              <p>{navLink.name}</p>
            </Link>
          ))}
        </ul>
        <ul className="flex gap-x-3">
          {socialLinks.map((socialLink) => (
            <Link
              key={socialLink.id}
              href={socialLink.url}
              className="size-9 p-0 hover:text-primary scale-90"
            >
              {socialLink.icon}
            </Link>
          ))}
        </ul>
      </Section>
    </header>
  );
}
