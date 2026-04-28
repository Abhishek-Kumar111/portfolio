"use client";

import Image from "next/image";
import { Briefcase, Code, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <h2 className="mb-8 text-center text-4xl font-bold text-slate-900 dark:text-slate-100">About Me</h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Abhishek Kumar</CardTitle>
              <CardDescription>Full-Stack Developer & AI Engineer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 aspect-square overflow-hidden rounded-full">
                <Image src="/profile_img.jpg" alt="Profile" width={300} height={300} className="h-full w-full object-cover" />
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                CS undergrad at NIT Meghalaya building scalable full-stack apps and practical AI systems — from agentic pipelines to production-ready interfaces that solve real problems.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Node.js", "MongoDB", "Python", "LangChain", "LLMs", "RAG", "Tailwind CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-900/10 px-3 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              <TabsTrigger value="skills" className="flex items-center gap-2 cursor-pointer">
                <Code className="hidden h-4 w-4 md:block" />
                Skills
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex items-center gap-2 cursor-pointer">
                <Briefcase className="hidden h-4 w-4 md:block" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2 cursor-pointer">
                <GraduationCap className="hidden h-4 w-4 md:block" />
                Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="skills">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <SkillBar label="Full-Stack Development" value={65} />
                    <SkillBar label="React.js / Node.js" value={55} />
                    <SkillBar label="Generative AI & LLMs" value={50} />
                    <SkillBar label="LangChain & RAG" value={50} />
                    <SkillBar label="DSA & Problem Solving" value={75} />
                    <SkillBar label="Machine Learning" value={55} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience">
              <Card>
                <CardHeader>
                  <CardTitle>Work Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <ExperienceItem
                      title="Full-Stack Developer Intern"
                      company="Ransh Innovations Pvt. Ltd. (Remote)"
                      period="Jun 2025 – Nov 2025"
                      description="Built reusable React UI components for a doctor appointment booking system, reducing dev effort by ~20%. Developed the Staff Dashboard for managing appointments and schedules. Integrated Twilio SMS and Nodemailer notifications, boosting user engagement and appointment adherence."
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <ExperienceItem
                      title="B.Tech — Computer Science & Engineering"
                      company="National Institute of Technology Meghalaya"
                      period="Aug 2023 – May 2027"
                      description="CGPA: 8.54 / 10. Strong foundations in DSA, Full-Stack Web Development, OOP, DBMS, and Operating Systems."
                    />
                    <ExperienceItem
                      title="BSEB Class XII"
                      company="Sachchidanand Sinha College, Aurangabad"
                      period="2022"
                      description="Percentage: 81.8%"
                    />
                    <ExperienceItem
                      title="BSEB Class X"
                      company="Adarsh High School, Surkhi, Aurangabad, Bihar"
                      period="2020"
                      description="Percentage: 88.8%"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div className="h-full rounded-full bg-slate-900 dark:bg-slate-100" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function ExperienceItem({
  title,
  company,
  period,
  description,
}: {
  title: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <div className="border-l-2 border-slate-700 py-1 pl-4 dark:border-slate-300">
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="mb-2 flex flex-col text-sm text-slate-500 sm:flex-row sm:justify-between dark:text-slate-400">
        <span className="mb-1 sm:mb-0">{company}</span>
        <span>{period}</span>
      </div>
      <p className="text-sm text-slate-700 dark:text-slate-300">{description}</p>
    </div>
  );
}