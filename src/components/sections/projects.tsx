import { PROJECTS } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const getImageForProject = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-12 duration-500">
        <h2 className="text-3xl font-extrabold tracking-tight text-center sm:text-4xl mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECTS.map((project) => {
            const projectImage = getImageForProject(project.id);
            return (
              <Card key={project.name} className="flex flex-col overflow-hidden group">
                {projectImage && (
                   <div className="overflow-hidden">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  {project.githubUrl && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" asChild>
                       <Link href={project.liveUrl} target="_blank">
                        Live Demo <ArrowUpRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
