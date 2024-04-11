import { Card } from "@/components/ui/card";
import Section from "./Section";
import { FiTwitter } from "react-icons/fi";

export default function Status() {
  const sideProjects = [
    {
      id: 1,
      logo: <FiTwitter />,
      title: "Project 1",
      description: "Description of project 1",
    },
  ];

  return (
    <Section className="flex flex-col sm:flex-row sm:justify-between gap-6">
      <Card className="w-full flex flex-col h-fit p-4">
        <h4 className="text-lg text-muted-foreground mb-4">
          Side, fun projects
        </h4>
        {sideProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl bg-muted-foregroung flex border boder-neutral-500 w-full h-fit"
          >
            <div className="flex items-center h-full w-[30px] mr-3 border border-red-500">
              {project.logo}
            </div>

            <div className="flex flex-col">
              <p className="text-muted">{project.title}</p>
              <p className="text-muted">{project.description}</p>
            </div>
          </div>
        ))}
      </Card>
      <div className="sm:w-[250px] gap-4 h-full flex flex-col items-end justify-end">
        <Card className="p-4 w-full sm:w-[250px]">work</Card>
        <Card className="p-4 w-full sm:w-[250px]">contact</Card>
      </div>
    </Section>
  );
}
