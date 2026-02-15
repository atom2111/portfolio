import React from "react";
import Link from "next/link";
import {BlurFade} from "@/components/ui/blur-fade";
import {WordRotate} from "@/components/ui/word-rotate";
import { Dock, DockIcon } from "@/components/ui/dock";
import SpotlightCard from "@/components/ui/spotlight-card";
import { Meteors } from "@/components/ui/meteors"; // <-- Импорт
import { 
  Code2, 
  Terminal, 
  Globe, 
  Smartphone, 
  Database, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-white/20 font-sans pb-24 overflow-hidden relative">
      
      {/* 1. ФОН С МЕТЕОРАМИ */}
      <div className="absolute inset-0 h-full w-full pointer-events-none z-0">
          <Meteors number={30} />
      </div>
      
      {/* Дополнительный статический градиент для глубины (как в Raycast) */}
      <div className="fixed top-[-10%] left-[50%] translate-x-[-50%] w-[1000px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        
        {/* HEADER */}
        <section className="mb-20 mt-10">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 mb-8 backdrop-blur-sm">
               <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"/>
               <span className="text-xs font-medium text-gray-400 tracking-wide uppercase">Готов к работе</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 text-white">
              Anvar Kurbanov
            </h1>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <div className="text-2xl md:text-3xl text-gray-400 font-light">
              Создаю <WordRotate words={["Backends", "Fast Mobile Apps", "Modern Web"]} className="text-white font-medium inline-block" />
            </div>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
              Full Stack developer (C# .NET). Я создаю идеальные, производительные и доступные интерфейсы.
            </p>
          </BlurFade>
        </section>

        {/* BENTO GRID */}
        <section>
          <BlurFade delay={0.5} inView>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">

              {/* 1. MAIN SKILL */}
              <SpotlightCard className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between group bg-card/50 backdrop-blur-sm">
                <div className="flex justify-between items-start">
                   <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                      <Terminal className="w-8 h-8 text-white" />
                   </div>
                   <span className="text-xs text-gray-500 font-mono border border-white/10 px-2 py-1 rounded-full">ОСНОВНОЙ СТЕК</span>
                </div>
                
                <div className="relative z-20">
                  <h3 className="mt-3 text-3xl font-bold mb-2 text-white">Backend Systems</h3>
                  <p className="text-gray-400 mb-6 max-w-sm">
                    Масштабируемые архитектуры с использованием ASP.NET Core, MSSQL и Docker.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <TechTag>C#</TechTag>
                    <TechTag>.NET</TechTag>
                    <TechTag>Microservices</TechTag>
                  </div>
                </div>

                <div className="absolute right-[-20px] bottom-[-40px] opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500">
                   <Code2 className="w-80 h-80 rotate-12" />
                </div>
              </SpotlightCard>

              {/* 2. WEB DEV */}
              <SpotlightCard className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between group bg-card/50 backdrop-blur-sm">
                 <div className="flex justify-between items-start">
                    <Globe className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                 </div>
                 <div>
                    <h4 className="mt-3 text-xl font-bold text-white">Frontend</h4>
                    <p className="text-sm text-gray-500 mt-1">Next.js & React</p>
                 </div>
              </SpotlightCard>

              {/* 3. MOBILE DEV */}
              <SpotlightCard className="md:col-span-1 md:row-span-1 p-6 flex flex-col justify-between group bg-card/50 backdrop-blur-sm">
                 <div className="flex justify-between items-start">
                    <Smartphone className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                 </div>
                 <div>
                    <h4 className="mt-3 text-xl font-bold text-white">Mobile</h4>
                    <p className="text-sm text-gray-500 mt-1">Flutter & Dart</p>
                 </div>
              </SpotlightCard>

              {/* 4. DATABASE */}
              <SpotlightCard className="md:col-span-3 md:row-span-1 p-6 flex items-center justify-between group bg-card/50 backdrop-blur-sm">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl">
                      <Database className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold text-white">Data Engineering</h4>
                       <p className="text-gray-400 text-sm">Оптимизация, Индексация, Хранимые процедуры</p>
                    </div>
                 </div>
                 <div className="mt-3 h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                 </div>
              </SpotlightCard>

            </div>
          </BlurFade>
        </section>

      </div>

      {/* DOCK FOOTER */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center z-50">
        <div className="bg-[#131313]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
           <Dock iconMagnification={60} iconDistance={100}>
              <DockIcon className="bg-transparent hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                <Link href="https://github.com/atom2111" target="_blank"><Github className="w-6 h-6" /></Link>
              </DockIcon>
              <DockIcon className="bg-transparent hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                <Link href="https://www.linkedin.com/in/atomcode21/" target="_blank"><Linkedin className="w-6 h-6" /></Link>
              </DockIcon>
              <DockIcon className="bg-transparent hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                <Link href="mailto:atowcode@gmail.com"><Mail className="w-6 h-6" /></Link>
              </DockIcon>
            </Dock>
        </div>
      </div>

    </main>
  );
}

// Мини-компонент для тегов
function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/5 rounded-lg">
      {children}
    </span>
  );
}