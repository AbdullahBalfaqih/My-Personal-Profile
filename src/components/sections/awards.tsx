"use client";
import { EDUCATION_TRAINING } from "@/lib/data";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/section-header";

const Awards = () => {
  const { certifications } = EDUCATION_TRAINING;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="awards" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-12">
            <SectionHeader
                subtitle="Certifications"
                title="My Awards & Recognitions"
                titleClasses="text-4xl md:text-5xl"
                align="start"
            />
        </div>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              className="relative flex items-start gap-6 group"
              variants={itemVariants}
            >
              <div className="absolute left-0 top-0 h-full w-px bg-border"></div>
              <div className="flex-shrink-0 h-28 flex items-center justify-center -translate-y-1/4">
                <h3 className="text-5xl font-bold text-muted-foreground transition-colors group-hover:text-accent transform -rotate-90 whitespace-nowrap">
                  {cert.date.includes(" ") ? new Date(cert.date).getFullYear() : cert.date}
                </h3>
              </div>
              <div className="pl-8 flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full border-2 border-dashed border-white/20 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                    <Award className="w-6 h-6 text-white/50 group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;