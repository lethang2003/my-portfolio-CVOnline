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
  return (
    <div
      ref={ref}
      className="max-w-5xl mx-auto p-8 font-sans text-gray-800 bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-2xl rounded-3xl border border-white/20 backdrop-blur-sm relative overflow-hidden"
      style={{
        animation: 'fadeInScale 0.8s ease-out',
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 25%, #f1f5f9 50%, #e2e8f0 75%, #f8fafc 100%)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <img
            src={`http://localhost:3003/uploads/${cv.avatar}`}
            alt="Avatar"
            className="relative w-40 h-40 mx-auto rounded-full shadow-2xl object-cover border-4 border-white ring-4 ring-gradient-to-r from-blue-500 to-purple-500"
            style={{
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              padding: '4px',
            }}
          />
        </div>
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 tracking-tight mb-2">
          {cv.fullName}
        </h1>
      <div className="inline-flex items-center justify-center px-6 py-2 pt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
  <p className="text-xl text-white font-semibold text-center">{cv.position}</p>
</div>

        
        <div className="flex flex-wrap justify-center items-center gap-6 mt-6 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <Mail className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700">{cv.email}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <Phone className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">{cv.phone}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <MapPin className="w-4 h-4 text-red-600" />
            <span className="text-gray-700">{cv.address}</span>
          </div>
        </div>
        
        <a
          href={cv.github}
          target="_blank"
          className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Github className="w-4 h-4" />
          <span>GitHub Profile</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* About Me */}
      <GlassSection title="About Me" icon={<User className="w-6 h-6" />} gradient="from-blue-500 to-cyan-500">
        <p className="text-lg leading-relaxed text-gray-700 font-medium">{cv.aboutMe}</p>
      </GlassSection>

      {/* Skills */}
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

      {/* Soft Skills */}
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

      {/* Education */}
      <GlassSection title="Education" icon={<BookOpen className="w-6 h-6" />} gradient="from-amber-500 to-orange-500">
        <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200/50 shadow-inner">
          <p className="text-lg text-gray-700 leading-relaxed">{cv.education}</p>
        </div>
      </GlassSection>

      {/* Experience */}
      <GlassSection title="Experience" icon={<Briefcase className="w-6 h-6" />} gradient="from-rose-500 to-pink-500">
        <div className="p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border border-rose-200/50 shadow-inner">
          <p className="text-lg text-gray-700 leading-relaxed">{cv.experience}</p>
        </div>
      </GlassSection>

      {/* Projects */}
      <GlassSection title="Featured Projects" icon={<Settings2 className="w-6 h-6" />} gradient="from-violet-500 to-purple-500">
        <div className="grid gap-6">
          {cv.projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-purple-200/50 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                    {proj.name}
                  </h3>
                  <div className="flex gap-3">
                    {proj.link && (
                      <a
                        href={proj.link}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-md"
                        target="_blank"
                      >
                        <Globe className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={proj.github}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full text-sm hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-md"
                        target="_blank"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">{proj.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200/50 hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassSection>

      {/* Bottom Sections */}
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
        
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
});

CVContent.displayName = 'CVContent';
export default CVContent;

function SkillBlock({ title, skills, color }: { title: string; skills: string[]; color: string }) {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 border-blue-200',
    green: 'from-green-500 to-emerald-600 border-green-200',
    purple: 'from-purple-500 to-violet-600 border-purple-200',
    orange: 'from-orange-500 to-red-600 border-orange-200',
    red: 'from-red-500 to-pink-600 border-red-200',
    indigo: 'from-indigo-500 to-purple-600 border-indigo-200',
    pink: 'from-pink-500 to-rose-600 border-pink-200',
    teal: 'from-teal-500 to-cyan-600 border-teal-200',
  };

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