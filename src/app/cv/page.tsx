import { PERSONAL_INFO, PROFESSIONAL_EXPERIENCE, EDUCATION_TRAINING, SKILLS } from "@/lib/data";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `CV - ${PERSONAL_INFO.name}`,
  description: `Curriculum Vitae of ${PERSONAL_INFO.name}`,
};

const CVPage = () => {
  return (
    <>
        <style>{`
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f8f9fa;
                margin: 0;
                padding: 0;
            }
            .cv-container {
                max-width: 800px;
                margin: 2rem auto;
                background: #fff;
                padding: 2.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }
            h1, h2, h3 {
                color: #2C3E50; /* Midnight Blue */
                border-bottom: 2px solid #3498DB; /* Sky Blue */
                padding-bottom: 8px;
                margin-top: 1.5rem;
                margin-bottom: 1rem;
            }
            h1 {
                text-align: center;
                border-bottom: none;
                font-size: 2.8rem;
                margin-bottom: 0.5rem;
                color: #2C3E50;
            }
            h2 {
                font-size: 1.6rem;
            }
            h3 {
                font-size: 1.2rem;
                font-weight: bold;
                border-bottom: none;
                margin-bottom: 0.5rem;
                color: #2C3E50;
            }
            .contact-info {
                text-align: center;
                margin-bottom: 2rem;
                color: #555;
                font-size: 0.9rem;
            }
            .contact-info a {
                color: #3498DB;
                text-decoration: none;
                margin: 0 10px;
            }
            .contact-info a:hover {
                text-decoration: underline;
            }
            ul {
                list-style-type: none;
                padding-left: 0;
            }
            li {
                margin-bottom: 1.2rem;
            }
            .section-title {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
            .job-title {
                font-weight: bold;
                font-size: 1.1rem;
            }
            .job-period {
                font-style: italic;
                color: #777;
                font-size: 0.9rem;
            }
            .job-description {
                padding-left: 20px;
                list-style-type: disc;
                color: #555;
            }
            .skills-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: center;
            }
            .skill-badge {
                background-color: #F0F4F8; /* Light Gray */
                color: #2C3E50; /* Midnight Blue */
                padding: 6px 12px;
                border-radius: 15px;
                font-size: 0.95rem;
                font-weight: 500;
            }
            .education-item {
                margin-bottom: 1.5rem;
            }
            .cert-item {
                margin-bottom: 0.8rem;
            }
            .lang-item {
                 font-size: 1rem;
            }
             .lang-item .proficiency {
                color: #777;
                font-style: italic;
            }

        `}</style>
        <div className="cv-container">
            <header>
                <h1>{PERSONAL_INFO.name}</h1>
                <p className="contact-info">
                    {PERSONAL_INFO.location} | <a href={`tel:${PERSONAL_INFO.phone}`}>{PERSONAL_INFO.phone}</a> | <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
                </p>
            </header>

            <section>
                <h2>Summary</h2>
                <p>{PERSONAL_INFO.summary}</p>
            </section>

            <section>
                <h2>Professional Experience</h2>
                <ul>
                    {PROFESSIONAL_EXPERIENCE.map((job, index) => (
                        <li key={index}>
                            <h3>{job.role} - {job.company}</h3>
                            <p className="job-period">{job.period} | {job.location}</p>
                            <ul className="job-description">
                                {job.description.map((desc, i) => <li key={i}>{desc}</li>)}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Education & Training</h2>
                <div className="education-item">
                    <h3>{EDUCATION_TRAINING.degree.title}</h3>
                    <p>{EDUCATION_TRAINING.degree.institution}</p>
                    <p className="job-period">{EDUCATION_TRAINING.degree.graduation} | {EDUCATION_TRAINING.degree.gpa}</p>
                </div>
                <div className="education-item">
                    <h3>{EDUCATION_TRAINING.internship.role}</h3>
                    <p>{EDUCATION_TRAINING.internship.company}</p>
                    <p className="job-period">{EDUCATION_TRAINING.internship.period}</p>
                </div>
                <h3>Certifications</h3>
                <ul>
                    {EDUCATION_TRAINING.certifications.map((cert, index) => (
                        <li key={index} className="cert-item"><strong>{cert.name}</strong>, {cert.issuer} ({cert.date})</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Skills</h2>
                <h3>Technical Skills</h3>
                <div className="skills-list">
                    {SKILLS.technical.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
                </div>
                
                <h3 style={{marginTop: '2rem'}}>Soft Skills</h3>
                <div className="skills-list">
                    {SKILLS.soft.map(skill => <span key={skill} className="skill-badge">{skill}</span>)}
                </div>

                <h3 style={{marginTop: '2rem'}}>Languages</h3>
                 <div className="skills-list">
                    {SKILLS.languages.map(lang => (
                        <p key={lang.name} className="lang-item">
                            <strong>{lang.name}:</strong> <span className="proficiency">{lang.proficiency}</span>
                        </p>
                    ))}
                </div>
            </section>
        </div>
    </>
  );
};

export default CVPage;
