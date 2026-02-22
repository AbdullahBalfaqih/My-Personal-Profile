import { PERSONAL_INFO, SKILLS, AWARDS, EDUCATION_TRAINING } from '@/lib/data';

const CVPage = () => {
  return (
    <div className="bg-white text-gray-800 p-8 sm:p-12 md:p-16 max-w-4xl mx-auto font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-wider">ABDULLAH BALFAQIH</h1>
        <p className="text-lg mt-2">IT Specialist | Full Stack Engineer | Front-End & Back-End Developer</p>
        <p className="text-md mt-1">Riyadh, Saudi Arabia</p>
        <div className="flex justify-center items-center space-x-4 mt-2 text-sm">
          <a href={`mailto:abdullahbalfaqih0@gmail.com`} className="hover:text-blue-600">abdullahbalfaqih0@gmail.com</a>
          <span>|</span>
          <a href="https://www.linkedin.com/in/abdullah-balfaqih-31b006303" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
          <span>|</span>
          <a href="https://github.com/AbdullahBalfaqih" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
          <span>|</span>
          <span>+967776097665</span>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">SUMMARY</h2>
        <p className="text-base leading-relaxed">
          Forward-thinking IT Specialist and Full Stack Engineer with strong experience building and maintaining scalable, 
          production-ready web and desktop applications. Specialized in modern JavaScript frameworks (Next.js, React), 
          robust backend systems, and database-driven architectures (PostgreSQL, SQL Server), with a solid foundation in 
          IT systems, integration, and operational reliability. Actively keeping pace with emerging technologies, including AI-powered features and Web3 development on Solana. Proven ability to deliver measurable business impact 
          through performance optimization, automation, and user-focused system design, supported by continuous learning 
          and technical excellence.
        </p>
      </section>

      {/* Experience and Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">EXPERIENCE AND PROJECTS</h2>
        <div className="space-y-6">
          {/* CurioGrid */}
          <div>
            <h3 className="text-xl font-semibold">CurioGrid | Founder & Full-Stack Developer</h3>
            <p className="text-sm text-gray-600 italic">11/2025</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-base">
              <li>Built a Web3 platform for AI-generated trending content with on-chain verification on Solana, serving over 
500 users in the first month.</li>
              <li>Developed Rust/Anchor smart contracts, enabling secure decentralized content authentication and  
reducing fraudulent content by 100%.</li>
              <li>Engineered full stack with Next.js, TypeScript, Solana RPC, and wallet integrations; deployed to production 
with 99.9% uptime.</li>
            </ul>
          </div>
          {/* Batool Store */}
          <div>
            <h3 className="text-xl font-semibold">Batool Contact Lenses Store | Full Stack Developer</h3>
            <p className="text-sm text-gray-600 italic">12/2025</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-base">
              <li>Built a production-ready e-commerce platform with Next.js, React, and PostgreSQL, supporting bilingual 
users (Arabic/English).</li>
              <li>Developed responsive UI/UX with Framer Motion animations, improving user engagement and interaction, 
Integrated AI virtual try-on for contact lenses, optimized site performance, and deployed to production.</li>
            </ul>
          </div>
          {/* Shaliha */}
          <div>
            <h3 className="text-xl font-semibold">Web Developer | Shaliha Platform</h3>
            <p className="text-sm text-gray-600 italic">07/2025 – 08/2025</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-base">
                <li>Developed a full-stack, scalable web booking platform for villas, pools, and apartments, integrating 
property management and reporting features with a user-friendly interface.</li>
                <li>Ensured full mobile responsive and SEO-optimized structure, enhancing accessibility and search visibility.</li>
                <li>Delivered efficient and reliable solutions, reducing booking errors and saving operational time, while 
boosting client satisfaction.</li>
            </ul>
          </div>
           {/* Crisper */}
          <div>
            <h3 className="text-xl font-semibold">Freelance Software Developer | Crisper Restaurant</h3>
             <p className="text-sm text-gray-600 italic">Seiyun, Hadhramaut, Yemen | 11/2024</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-base">
                <li>Developed a full-stack desktop with C# restaurant management system with POS, inventory, HR, and 
accounting modules.</li>
                <li>Developed and integrated an online ordering website with real-time RESTful APIs for order processing, 
payments, and reporting.</li>
                <li>Optimized operations, reducing losses, improving reliability, and boosting customer satisfaction.</li>
            </ul>
          </div>
           {/* Logistics */}
          <div>
            <h3 className="text-xl font-semibold">Freelance Web Developer (Logistics System)</h3>
             <p className="text-sm text-gray-600 italic">Remote | 03/2025</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-base">
                <li>Designed and implemented a comprehensive logistics management system with role-based dashboards, 
simplifying workflow, improving operational visibility, and enhancing user access control.</li>
                <li>Developed modules for parcel tracking, payroll, branch operations, and expense management, integrating 
real-time data to streamline processes, facilitate delivery, and enable efficient parcel tracking and 
indexing.</li>
                <li>Enhanced coordination, delivery accuracy, and overall efficiency across multiple branches, reducing 
errors, improving service reliability, and making daily operations easier for staff.</li>
            </ul>
          </div>
            {/* Cleanup */}
          <div>
            <h3 className="text-xl font-semibold">Web Developer | Community Cleanup Platform</h3>
            <p className="text-sm text-gray-600 italic">05/2025 – 07/2025</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-base">
                <li>Developed full-stack web platform for reporting and managing local waste issues, increasing reporting by 50%.</li>
                <li>Implemented task reporting and visualization, reducing issue resolution time by 40%.</li>
                <li>Streamlined waste management processes, boosting community participation by 35%.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">EDUCATION AND TRAINING</h2>
         <div className="space-y-6">
            <div>
                <h3 className="text-xl font-semibold">Bachelor’s Degree in Information Technology | GPA: Very Good</h3>
                <p className="text-sm text-gray-600 italic">Seiyun University, Seiyun, Yemen | Graduated: 2024</p>
                <p className="mt-2"><strong>Graduation Project – “Mroor Care”:</strong> Developed a smart traffic management and appointment booking 
system in collaboration with the Traffic Department of Hadhramaut. The system streamlined scheduling for 
driver’s license renewals, vehicle inspections, and other services, reducing overcrowding and wait times.</p>
            </div>
             <div>
                <h3 className="text-xl font-semibold">Intern – Python Developer | Odoo Systems</h3>
                <p className="text-sm text-gray-600 italic">03/2024 – 05/2024</p>
                 <ul className="list-disc list-inside mt-2 space-y-1 text-base">
                    <li>Developed a custom car archiving module using Python and the Odoo framework, contributing to ERP 
system functionality and improving data management workflows.</li>
                    <li>Gained hands-on experience in ERP systems, module integration, and database management. 
[GitHub Project: Car Archiving Module] .</li>
                 </ul>
            </div>
        </div>
      </section>
      
       {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-semibold mb-2">TECHNICAL SKILLS</h3>
                <div className="space-y-3">
                    <p><strong>Programming & Development:</strong> Python, C#, C++, TypeScript, HTML, CSS, JavaScript, 
Solana Web3 Development (RPC, wallets), Smart Contract Interaction, Rust basics</p>
                    <p><strong>Web & Desktop Applications:</strong> ASP.NET, Next.js, React, 
Web3 Integrations, On-chain Authentication Dashboards, AI-driven backend pipelines</p>
                    <p><strong>Databases & Backend Tools:</strong> MS SQL Server, Oracle DB, PostgreSQL, Firebase, Supabase, 
Redis (caching), Queue Workers, Background Jobs, On-chain Data Indexing</p>
                    <p><strong>ERP & Workflow Tools:</strong> Odoo ERP, ERP Systems, n8n, API Integration, 
Blockchain API integration (Solana RPC), Automated content verification workflows</p>
                    <p><strong>Cloud & Deployment:</strong> Firebase Hosting, Docker, GitHub, Entity Framework, 
Cloudflare (DNS, security, CDN, Workers), CI/CD pipelines, Serverless Functions, Scalable Web3 backend 
deployment</p>
                    <p><strong>Design & Multimedia:</strong> Adobe Photoshop, Adobe Illustrator, 
UI/UX design for Web dashboards, Figma, Framer, Spline</p>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">SOFT SKILLS</h3>
                 <ul className="list-disc list-inside space-y-1">
                    <li>Critical Thinking, Problem Solving, Adaptability</li>
                    <li>Time Management, Collaboration, Teamwork</li>
                    <li>Strong Leadership, Communication</li>
                 </ul>
                 <h3 className="text-xl font-semibold mb-2 mt-6">LANGUAGES</h3>
                 <ul className="list-disc list-inside space-y-1">
                    <li>Arabic – Native</li>
                    <li>English – Proficient</li>
                 </ul>
            </div>
        </div>
      </section>

      {/* Certifications and Hackathons */}
      <section>
         <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">Hackathons & Achievements</h2>
          <div className="space-y-4">
             {AWARDS.map((award, index) => (
                <div key={index}>
                    <p>• <strong>{award.award}</strong> - {award.title} – {award.location}</p>
                 </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default CVPage;
