import { SKILLS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-12 duration-500">
        <h2 className="text-3xl font-extrabold tracking-tight text-center sm:text-4xl mb-12">
          Skills & Expertise
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-center mb-6">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {SKILLS.technical.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <div>
                <h3 className="text-xl font-semibold text-center mb-6">Soft Skills</h3>
                <div className="flex flex-wrap justify-center gap-2">
                {SKILLS.soft.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                    </Badge>
                ))}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-center mb-6">Languages</h3>
                <div className="flex flex-wrap justify-center gap-4">
                {SKILLS.languages.map((lang) => (
                    <div key={lang.name} className="text-center">
                        <p className="font-semibold">{lang.name}</p>
                        <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
                    </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
