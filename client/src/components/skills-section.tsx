import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Python", icon: "🐍", color: "text-blue-500" },
  { name: "C++ / C", icon: "⚡", color: "text-blue-600" },
  { name: "C#", icon: "🔷", color: "text-purple-600" },
  { name: "Java", icon: "☕", color: "text-red-600" },
  { name: "SQL / NoSQL", icon: "🗃️", color: "text-green-600" },
  { name: "3D Tasarım", icon: "🎨", color: "text-orange-600" },
  { name: "ROS", icon: "🤖", color: "text-indigo-600" },
  { name: "Arduino", icon: "🔧", color: "text-teal-600" },
];

const certificates = [
  {
    title: "Veri Bilimi İçin Python",
    provider: "GMKA",
    year: "2022",
  },
  {
    title: "İleri Seviye Python",
    provider: "BTK Akademi",
    year: "2022",
  },
  {
    title: "Veri Mühendisi AI",
    provider: "TrAi Academy",
    year: "2023",
  },
  {
    title: "DeepTech AI",
    provider: "Arvis Teknoloji",
    year: "2023",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Yeteneklerim</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={skill.name} className="skill-card animate-on-scroll smooth-transition" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certificates */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Sertifikalarım</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="smooth-transition hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Award className="text-yellow-500 mr-3 h-5 w-5" />
                    <h4 className="font-semibold text-foreground">{cert.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {cert.provider} • {cert.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
