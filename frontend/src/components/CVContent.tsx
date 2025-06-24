'use client';

import { forwardRef } from 'react';
import { CV } from '@/lib/api';
import {
  User, Briefcase, BookOpen, Code,
  Users, Globe, Settings2, Lightbulb, ExternalLink, Github,
  Mail, Phone, MapPin, Star, Zap,
} from 'lucide-react';

interface CVContentProps {
  cv: CV;
}

const CVContent = forwardRef<HTMLDivElement, CVContentProps>(({ cv }, ref) => {
     const API_URL = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div
      ref={ref}
      className="max-w-5xl mx-auto p-8 font-sans text-gray-800 bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-2xl rounded-3xl border border-white/20 backdrop-blur-sm relative overflow-hidden"
      style={{
        animation: 'fadeInScale 0.8s ease-out',
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 25%, #f1f5f9 50%, #e2e8f0 75%, #f8fafc 100%)',
      }}
    >
      {/* Avatar và tiêu đề */}
      <div className="text-center mb-12 relative z-10">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <img
            src={`${API_URL}/uploads/${cv.avatar}`}
            alt="Avatar"
            className="relative w-40 h-40 mx-auto rounded-full shadow-2xl object-cover border-4 border-white ring-4 ring-gradient-to-r from-blue-500 to-purple-500"
            style={{ background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)', padding: '4px' }}
          />
        </div>
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 tracking-tight mb-2">
          {cv.fullName}
        </h1>
        <div className="inline-flex items-center justify-center px-6 py-2 pt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
          <p className="text-xl text-white font-semibold text-center">{cv.position}</p>
        </div>

        {/* Liên hệ */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-sm">
          <ContactItem icon={<Mail className="w-4 h-4 text-blue-600" />} text={cv.email} />
          <ContactItem icon={<Phone className="w-4 h-4 text-green-600" />} text={cv.phone} />
          <ContactItem icon={<MapPin className="w-4 h-4 text-red-600" />} text={cv.address} />
        </div>

        {cv.github && (
          <a
            href={cv.github}
            target="_blank"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Các section nội dung */}
      <GlassSection title="About Me" icon={<User className="w-6 h-6" />} gradient="from-blue-500 to-cyan-500">
        <p className="text-lg leading-relaxed text-gray-700 font-medium">{cv.aboutMe}</p>
      </GlassSection>

      <GlassSection title="Technical Skills" icon={<Code className="w-6 h-6" />} gradient="from-purple-500 to-pink-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillBlock title="Programming Languages" skills={cv.programmingLanguages} color="blue" />
          <SkillBlock title="Markup & Styling" skills={cv.markupLanguages} color="green" />
          <SkillBlock title="Frontend" skills={cv.frontend} color="purple" />
          <SkillBlock title="Backend" skills={cv.backend} color="orange" />
          <SkillBlock title="Database" skills={cv.database} color="red" />
          <SkillBlock title="DevOps & Tools" skills={cv.devopsTools} color="indigo" />
          <SkillBlock title="UI/UX" skills={cv.uiux} color="pink" />
          <SkillBlock title="Others" skills={cv.others} color="teal" />
        </div>
      </GlassSection>

      <GlassSection title="Soft Skills" icon={<Users className="w-6 h-6" />} gradient="from-emerald-500 to-teal-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cv.softSkills.map((skill, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-gray-700 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </GlassSection>

      <GlassSection title="Education" icon={<BookOpen className="w-6 h-6" />} gradient="from-amber-500 to-orange-500">
        <p className="text-lg text-gray-700 leading-relaxed">{cv.education}</p>
      </GlassSection>

      <GlassSection title="Experience" icon={<Briefcase className="w-6 h-6" />} gradient="from-rose-500 to-pink-500">
        <p className="text-lg text-gray-700 leading-relaxed">{cv.experience}</p>
      </GlassSection>

      <GlassSection title="Featured Projects" icon={<Settings2 className="w-6 h-6" />} gradient="from-violet-500 to-purple-500">
        <div className="grid gap-6">
          {cv.projects.map((proj, idx) => (
            <div key={idx} className="group relative p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-[1.02]">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700">{proj.name}</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200/50">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  {proj.link && (
                    <a href={proj.link} target="_blank" className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600">
                      <Globe className="inline w-4 h-4 mr-1" />
                      Live
                    </a>
                  )}
                  {proj.github && (
                    <a href={proj.github} target="_blank" className="px-4 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-900">
                      <Github className="inline w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassSection>

      {/* Bottom section */}
      <div className="grid md:grid-cols-3 gap-6">
        <GlassSection title="Languages" icon={<Globe className="w-6 h-6" />} gradient="from-cyan-500 to-blue-500">
          <p className="text-gray-700 leading-relaxed">{cv.languageSkill}</p>
        </GlassSection>

        <GlassSection title="Teamwork" icon={<Users className="w-6 h-6" />} gradient="from-green-500 to-emerald-500">
          <p className="text-gray-700 leading-relaxed">{cv.teamwork}</p>
        </GlassSection>

        <GlassSection title="Problem Solving" icon={<Lightbulb className="w-6 h-6" />} gradient="from-yellow-500 to-orange-500">
          <p className="text-gray-700 leading-relaxed">{cv.problemSolving}</p>
        </GlassSection>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
});

CVContent.displayName = 'CVContent';
export default CVContent;

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300">
      {icon}
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

type SkillColor = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'indigo' | 'pink' | 'teal';

const colorClasses: Record<SkillColor, string> = {
  blue: 'from-blue-500 to-blue-600 border-blue-200',
  green: 'from-green-500 to-emerald-600 border-green-200',
  purple: 'from-purple-500 to-violet-600 border-purple-200',
  orange: 'from-orange-500 to-red-600 border-orange-200',
  red: 'from-red-500 to-pink-600 border-red-200',
  indigo: 'from-indigo-500 to-purple-600 border-indigo-200',
  pink: 'from-pink-500 to-rose-600 border-pink-200',
  teal: 'from-teal-500 to-cyan-600 border-teal-200',
};

function SkillBlock({ title, skills, color }: { title: string; skills: string[]; color: SkillColor }) {
  return (
    <div className="group p-5 bg-white/60 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-white/50 hover:scale-105">
      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colorClasses[color]} text-white rounded-full mb-4 shadow-md`}>
        <Zap className="w-4 h-4" />
        <h3 className="font-bold text-sm">{title}</h3>
      </div>
      <div className="space-y-2">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-2 p-2 bg-white/50 rounded-lg hover:bg-white/70 transition-colors">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses[color]}`}></div>
            <span className="text-gray-700 font-medium text-sm">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GlassSection({
  title,
  icon,
  gradient,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  gradient: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10 group">
      <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${gradient} text-white rounded-2xl shadow-lg mb-6 hover:shadow-xl transition-all duration-300 hover:scale-105`}>
        {icon}
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/30 hover:bg-white/50 transition-all duration-300">
          {children}
        </div>
      </div>
    </section>
  );
}
