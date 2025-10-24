import { PERSONAL_INFO } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SectionContainer = ({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) => (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-4">
            {children}
        </div>
    </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-extrabold tracking-tight text-center sm:text-4xl mb-12">
        {children}
    </h2>
);

const Summary = () => {
    return (
        <SectionContainer id="summary" className="bg-card/50">
            <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-12 duration-500">
                <SectionTitle>About Me</SectionTitle>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {PERSONAL_INFO.summary}
                </p>
            </div>
        </SectionContainer>
    );
}

export default Summary;
