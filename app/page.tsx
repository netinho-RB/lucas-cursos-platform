"use client";

import { useState } from "react";
import {
  ChevronRight, Activity, ShieldPlus, Stethoscope,
  GraduationCap, BookOpen, CheckCircle2, Award,
} from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";

/* ─── Animation Variants ─── */
const blurFadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } // Adicionado 'as const'
  },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.94, y: 20, filter: "blur(6px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } // Adicionado 'as const'
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -48, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } // Adicionado 'as const'
  },
};

const VP = { once: true, margin: "-60px" } as const;

const specialties = [
  { icon: Activity, title: "Cirurgia Ortognática", desc: "Correção de deformidades dentofaciais, devolvendo não apenas a estética harmônica, mas a função mastigatória e respiratória ideal." },
  { icon: ShieldPlus, title: "Implantes Dentários", desc: "Reabilitação oral de alta complexidade com implantes zigomáticos e convencionais, recuperando a segurança ao sorrir e mastigar." },
  { icon: Stethoscope, title: "Traumatologia Facial", desc: "Atendimento especializado em fraturas e lesões do complexo maxilofacial, unindo técnicas precisas para reconstrução estética e funcional." },
];

const diferenciais = [
  { title: "Atendimento Humanizado", desc: "Compreendemos que por trás de cada procedimento existe uma pessoa. O acolhimento é o alicerce de todo tratamento cirúrgico." },
  { title: "Tecnologia de Ponta", desc: "Empregamos o que há de mais moderno: planejamento virtual 3D, piezo-cirurgia e biomateriais biocompatíveis de última geração." },
  { title: "Medicina Baseada em Evidências", desc: "Nossas decisões clínicas são rigorosamente fundamentadas nas pesquisas mais respeitadas e recentes da literatura mundial." },
];

const stats = [
  { value: "10+", label: "Anos de Atuação" },
  { value: "500+", label: "Cirurgias" },
  { value: "Mestre", label: "& Doutorando" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  const bfu = reduce ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : blurFadeUp;
  const pi  = reduce ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : popIn;
  const sl  = reduce ? { hidden: { opacity: 0 }, visible: { opacity: 1 } } : slideLeft;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary-hover">

      <Navbar
        mobileOpen={mobileMenuOpen}
        onMobileOpen={() => setMobileMenuOpen(true)}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      {/* ══ 1. HERO ══ */}
      <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 px-5 sm:px-6 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
          <motion.div className="lg:w-1/2 flex flex-col items-start text-left z-10 w-full" initial="hidden" animate="visible" variants={stagger(0.11)}>
            <motion.div variants={bfu} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface shadow-sm border border-border mb-6 md:mb-8 text-xs font-semibold text-primary tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Cirurgião Buco-Maxilo-Facial &amp; Professor
            </motion.div>

            <motion.h1 variants={bfu} className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-5 md:mb-6 text-foreground leading-[1.08] md:leading-[1.1]">
              Excelência em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#D4AF37]">Cirurgia</span>{" "}
              e Traumatologia Facial.
            </motion.h1>

            <motion.p variants={bfu} className="text-base md:text-xl text-zinc-500 max-w-xl mb-8 md:mb-10 leading-relaxed font-light">
              Unindo a mais avançada prática clínica baseada em evidências científicas com a paixão pela docência e formação de novos profissionais.
            </motion.p>

            <motion.div variants={bfu} className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <button className="h-12 md:h-14 px-7 md:px-8 rounded-full bg-primary text-white font-semibold text-sm md:text-lg hover:bg-primary-hover transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/25 active:scale-[0.97] flex items-center justify-center gap-2">
                Agendar Consulta <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="h-12 md:h-14 px-7 md:px-8 rounded-full border border-border bg-surface hover:bg-surface-light hover:border-zinc-300 transition-all hover:scale-[1.02] active:scale-[0.98] text-foreground font-medium text-sm md:text-lg flex items-center justify-center">
                Conheça meus Cursos
              </button>
            </motion.div>
          </motion.div>

          <motion.div className="lg:w-1/2 w-full" initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
            <div className="w-full h-[420px] sm:h-[520px] lg:h-[700px] rounded-[2rem] overflow-hidden relative shadow-2xl shadow-zinc-200/60 group bg-zinc-100">
              <Image src="/foto-branca.png" alt="Dr. Lucas — Cirurgião Buco-Maxilo-Facial" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-1000 ease-out" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 2. ESPECIALIDADES ══ */}
      <section id="especialidades" className="py-20 md:py-32 bg-surface-light px-5 sm:px-6 border-y border-border/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={bfu} className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground tracking-tight">Especialidades Clínicas</h2>
            <p className="text-zinc-500 text-sm md:text-xl font-light leading-relaxed">Procedimentos de alta complexidade executados com precisão técnica milimétrica, foco na segurança do paciente e recuperação humanizada.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={stagger(0.14)} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {specialties.map((item, i) => (
              <motion.div key={i} variants={pi} className="group relative overflow-hidden bg-surface rounded-2xl md:rounded-[2rem] p-7 md:p-10 border border-border shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(197,160,89,0.13),0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:border-primary/35 transition-all duration-500 ease-out">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.04] rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 ease-out" />
                <div className="w-12 md:w-16 h-12 md:h-16 bg-surface-light border border-border rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-8 group-hover:bg-primary group-hover:border-primary transition-all duration-500 relative z-10">
                  <item.icon className="w-6 md:w-8 h-6 md:h-8 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-foreground relative z-10">{item.title}</h3>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light mb-5 md:mb-8 relative z-10">{item.desc}</p>
                <div className="flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-widest group-hover:gap-3 transition-all duration-300 relative z-10 cursor-pointer">
                  Descobrir Mais <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 3. SOBRE ══ */}
      <section id="sobre" className="py-20 md:py-32 px-5 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={sl} className="lg:w-5/12 w-full relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.09)] group">
              <Image src="/foto-essenza.png" alt="Dr. Lucas na Clínica Essenza" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-36 md:w-40 h-36 md:h-40 border border-primary/20 rounded-full -z-10" />
            <div className="absolute top-10 -left-10 w-20 h-20 bg-accent-blue/10 rounded-full blur-xl -z-10" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={stagger(0.13)} className="lg:w-7/12 flex flex-col items-start">
            <motion.h2 variants={bfu} className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-foreground tracking-tight">Dr. Lucas</motion.h2>
            <motion.p variants={bfu} className="text-primary font-semibold mb-6 md:mb-10 uppercase text-xs tracking-[0.12em]">Especialista · Mestre · Doutorando</motion.p>

            {/* Mobile: short single paragraph + stats */}
            <motion.div variants={bfu} className="md:hidden">
              <p className="text-zinc-500 text-base font-light leading-relaxed max-w-lg mb-8">
                Cirurgião buco-maxilo-facial com trajetória acadêmica sólida e atuação na Clínica Essenza. Une rigor científico e atendimento humanizado para entregar resultados de excelência.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border w-full">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-bold text-foreground tracking-tight mb-0.5">{s.value}</div>
                    <div className="text-zinc-400 text-xs font-medium leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Desktop: full 3 paragraphs + destaque blocks */}
            <motion.div variants={bfu} className="hidden md:block space-y-6 text-zinc-500 text-lg font-light leading-relaxed">
              <p>Com uma trajetória marcada pela constante busca por excelência e atualização científica, dedico minha carreira à resolução de casos de alta complexidade na Cirurgia Buco-Maxilo-Facial.</p>
              <p>Minha filosofia baseia-se na união indissociável entre a prática clínica meticulosa e a docência. Acredito que o rigor do ambiente acadêmico, quando trazido para o consultório, garante tratamentos substancialmente mais seguros, modernos e previsíveis para meus pacientes.</p>
              <p>Atuando na Clínica Essenza, priorizamos o atendimento humanizado: a tecnologia de ponta atua como o meio, mas o cuidado empático e a escuta genuína são sempre o fim.</p>
            </motion.div>

            <motion.div variants={bfu} className="hidden md:grid grid-cols-2 gap-8 mt-12 w-full border-t border-border pt-12">
              <div>
                <div className="text-xl font-bold text-foreground mb-3">[Destaque ou Valor 1]</div>
                <div className="text-zinc-500 text-sm font-light leading-relaxed">Espaço reservado para um diferencial da sua carreira ou filosofia.</div>
              </div>
              <div>
                <div className="text-xl font-bold text-foreground mb-3">[Destaque ou Valor 2]</div>
                <div className="text-zinc-500 text-sm font-light leading-relaxed">Espaço reservado para outro destaque importante da sua formação.</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ 4. ACADEMIA & CURSOS ══ */}
      <section id="cursos" className="py-20 md:py-32 bg-surface-light border-y border-border/50 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">

          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={stagger(0.13)} className="lg:w-1/3 w-full">
            <motion.div variants={bfu} className="w-12 md:w-16 h-12 md:h-16 bg-surface shadow-sm rounded-xl md:rounded-2xl flex items-center justify-center border border-border mb-6 md:mb-8">
              <GraduationCap className="w-6 md:w-8 h-6 md:h-8 text-primary" />
            </motion.div>
            <motion.h2 variants={bfu} className="text-3xl md:text-5xl font-bold mb-3 md:mb-6 text-foreground tracking-tight">Academia &amp; Docência</motion.h2>
            <motion.p variants={bfu} className="text-zinc-500 text-sm md:text-lg mb-7 md:mb-10 font-light leading-relaxed">
              Elevando o nível da especialidade através do compartilhamento de conhecimento. Formações exclusivas com altíssimo rigor técnico e embasamento literário atualizado.
            </motion.p>
            <motion.button variants={bfu} className="h-11 md:h-14 px-6 md:px-8 rounded-full bg-foreground text-surface hover:bg-zinc-800 transition-all hover:scale-[1.03] hover:shadow-lg active:scale-95 font-semibold text-sm flex items-center gap-2">
              Acessar Currículo Lattes <ChevronRight className="w-4 md:w-5 h-4 md:h-5" />
            </motion.button>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={stagger(0.15)} className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 w-full">
            <motion.div variants={pi} className="group flex flex-col justify-between bg-surface rounded-2xl md:rounded-[2rem] p-7 md:p-10 border border-border shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(197,160,89,0.13),0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:border-primary/40 transition-all duration-500">
              <div>
                <div className="w-11 md:w-14 h-11 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/15 transition-colors">
                  <Activity className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-foreground">Imersão em Cirurgia Ortognática</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed mb-6 md:mb-8">Curso prático e intensivo para cirurgiões buscando refinamento em osteotomias complexas e planejamento virtual 3D.</p>
              </div>
              <span className="self-start text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">Inscrições Abertas</span>
            </motion.div>

            <motion.div variants={pi} className="group flex flex-col justify-between bg-surface rounded-2xl md:rounded-[2rem] p-7 md:p-10 border border-border shadow-[0_2px_8px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 hover:border-zinc-300 transition-all duration-500">
              <div>
                <div className="w-11 md:w-14 h-11 md:h-14 bg-zinc-100 rounded-full flex items-center justify-center mb-5 md:mb-6">
                  <BookOpen className="w-5 md:w-6 h-5 md:h-6 text-zinc-400" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-foreground">Mentoria em Traumatologia</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed mb-6 md:mb-8">Discussão aprofundada de artigos e condutas padrão-ouro para traumas de face. Grupo fechado e acompanhamento de casos.</p>
              </div>
              <span className="self-start text-xs font-bold text-zinc-400 uppercase tracking-wider bg-zinc-100 px-3 py-1 rounded-full">Vagas Esgotadas</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══ 5. DIFERENCIAIS — desktop only ══ */}
      <section className="hidden md:block py-32 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={stagger(0.15)} className="max-w-6xl mx-auto text-center">
          <motion.div variants={bfu} className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-8">
            <Award className="w-10 h-10 text-primary" />
          </motion.div>
          <motion.h2 variants={bfu} className="text-4xl md:text-5xl font-bold mb-20 text-foreground tracking-tight">O Padrão de Excelência</motion.h2>

          <div className="grid grid-cols-3 gap-12 text-center">
            {diferenciais.map((d, i) => (
              <motion.div key={i} variants={pi} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-border shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-colors duration-500">
                  <CheckCircle2 className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{d.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="bg-[#111111] text-white py-16 md:py-20 px-5 sm:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fadeIn} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-b border-white/10 pb-10 md:pb-12 mb-8">
          <div className="sm:col-span-2">
            <div className="text-xl md:text-2xl font-bold tracking-tight mb-2">Dr. Lucas</div>
            <div className="text-primary text-xs font-semibold uppercase tracking-widest mb-4 md:mb-6">Cirurgia Facial</div>
            <p className="text-zinc-400 font-light leading-relaxed max-w-sm text-sm">Excelência, precisão e humanização no tratamento de deformidades faciais, traumas e reabilitação oral avançada.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 md:mb-6 text-sm md:text-lg">Contato</h4>
            <ul className="space-y-3 md:space-y-4 text-zinc-400 font-light text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">(11) 99999-9999</li>
              <li className="hover:text-primary transition-colors cursor-pointer">contato@drlucas.com.br</li>
              <li className="text-zinc-500 text-xs">Clínica Essenza · São Paulo, SP</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 md:mb-6 text-sm md:text-lg">Navegação</h4>
            <ul className="space-y-3 md:space-y-4 text-zinc-400 font-light text-sm">
              <li><a href="#especialidades" className="hover:text-primary transition-colors">Especialidades Clínicas</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre o Dr. Lucas</a></li>
              <li><a href="#cursos" className="hover:text-primary transition-colors">Cursos e Mentorias</a></li>
            </ul>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
          <p className="text-zinc-500 font-light text-xs md:text-sm">© {new Date().getFullYear()} Dr. Lucas. Todos os direitos reservados.</p>
          <div className="flex gap-2.5 md:gap-4">
            {["in", "ig"].map((s) => (
              <a key={s} href="#" className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 text-xs font-bold hover:text-white hover:bg-primary hover:border-primary transition-all duration-300">{s}</a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
