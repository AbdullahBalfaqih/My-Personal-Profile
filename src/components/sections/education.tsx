import { EDUCATION_TRAINING } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Briefcase, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Education = () => {
    const { degree, internship, certifications } = EDUCATION_TRAINING;
  return (
    <section id="education" className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 animate-in fade-in slide-in-from-bottom-12 duration-500">
        <h2 className="text-3xl font-extrabold tracking-tight text-center sm:text-4xl mb-12">
          Education & Training
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Degree and Internship */}
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-start gap-3">
                            <div className="mt-1"><GraduationCap className="h-5 w-5 text-accent"/></div>
                            <div>
                                {degree.title}
                                <CardDescription>{degree.institution}</CardDescription>
                                <CardDescription className="text-xs mt-1">{degree.graduation} | {degree.gpa}</CardDescription>
                            </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{degree.project}</p>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader>
                         <CardTitle className="flex items-start gap-3">
                            <div className="mt-1"><Briefcase className="h-5 w-5 text-accent"/></div>
                             <div>
                                {internship.role}
                                <CardDescription>{internship.company}</CardDescription>
                                <CardDescription className="text-xs mt-1">{internship.period}</CardDescription>
                             </div>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                            {internship.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                         {internship.githubLink && (
                            <Button variant="link" asChild className="p-0 h-auto mt-2">
                                <Link href={internship.githubLink} target="_blank">
                                    <Github className="h-4 w-4 mr-2"/> GitHub Project
                                </Link>
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Certifications */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-accent"/>
                        Certifications
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {certifications.map(cert => (
                            <li key={cert.name} className="flex flex-col">
                                <span className="font-semibold">{cert.name}</span>
                                <span className="text-sm text-muted-foreground">{cert.issuer} - {cert.date}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
