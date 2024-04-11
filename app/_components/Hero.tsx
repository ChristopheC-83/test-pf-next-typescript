import Image from "next/image";
import Section from "./Section";

export default function Hero() {
  return (
    <Section className="flex flex-col lg:flex-rox items-start">
      <div className="flex-[2]">
        <h2 className="text-2xl font-bold text-center ">Christophe C.</h2>
        <h3>Développeur Web et Mobile</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, alias. Voluptatibus a minus culpa, facilis, dicta mollitia eligendi earum sunt, consequatur asperiores excepturi! Eligendi, debitis.</p>
      </div>
      <div className="flex-1">
        <Image
        width={200}
        height={200}
        alt="avatar"
        src="https://mycloud.barpat.fun/public/assets/Images/Bibliotheque/perso_rpg/sorcier.jpg"
        className="rounded-full w-full h-auto"

/>
      </div>
    </Section>
  );
}
