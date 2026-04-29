import { useState, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import {
  AlertTriangle,
  Moon,
  Bath,
  BedDouble,
  Heart,
  Check,
  ChevronDown,
  ShieldCheck,
  Lock,
  Download,
  Shield,
  BookOpen
} from 'lucide-react';
import { Footer } from './components/Footer';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { CookieConsent } from './components/CookieConsent';

declare global {
  interface Window {
    fbq: any;
  }
}

const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white mb-3 shadow-sm transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 bg-transparent border-none text-left font-semibold text-base text-slate-900 cursor-pointer flex justify-between items-center gap-3 transition-colors hover:bg-slate-50"
      >
        {question}
        <ChevronDown
          className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0 text-[0.95rem] text-slate-600 bg-white">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Home() {
  const chapters = [
    { num: "Capítulo 1", title: "Diagnóstico do Risco", desc: "Como identificar riscos invisíveis antes de qualquer compra." },
    { num: "Capítulo 2", title: "Iluminação Estratégica", desc: "Elimine quedas no escuro com iluminação inteligente." },
    { num: "Capítulo 3", title: "O Banheiro", desc: "Barras, altura do vaso, piso antiderrapante e espaço." },
    { num: "Capítulo 4", title: "Quarto Seguro", desc: "Altura da cama, apoios e organização com segurança." },
    { num: "Capítulo 5", title: "Cozinha & Área de Serviço", desc: "Ergonomia, segurança com fogo e autonomia." },
    { num: "Capítulo 6", title: "Circulação e Pisos", desc: "Tapetes, fios, soleiras e o piso ideal para cada ambiente." },
    { num: "Capítulo 7", title: "Tecnologia & Automação", desc: "Botão de pânico, sensores e monitoramento com dignidade." },
    { num: "Capítulo 8", title: "Áreas Externas", desc: "Corrimãos, rampas e iluminação para quintal e varanda." },
    { num: "Capítulo 9", title: "Aspecto Emocional", desc: "Como conversar sobre mudanças sem ferir a autonomia." }
  ];

  return (
    <div className="font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* HERO SECTION */}
      <header className="hero-bg pt-28 pb-20 sm:pt-[120px] sm:pb-24 relative">
        <div className="hero-blob-1"></div>
        <div className="hero-blob-2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 bg-blue-600/10 px-4 py-1.5 rounded-full mb-6">
                <BookOpen size={14} /> Guia Digital Completo
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif font-bold text-[2.5rem] sm:text-5xl md:text-6xl leading-[1.1] mb-6 text-gradient pb-2 tracking-tight">
                A casa que protege quem você <em className="italic font-serif" style={{WebkitTextFillColor: '#F97316', color: '#F97316'}}>mais ama</em>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Um guia prático, cômodo por cômodo, para adaptar o lar de um idoso e prevenir quedas — sem precisar de reforma.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="rounded-[24px] bg-gradient-to-br from-blue-600/20 via-orange-500/20 to-transparent p-[1px] shadow-2xl shadow-blue-600/10 max-w-sm mx-auto my-12 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white rounded-[23px] p-8 relative">
                  <div className="font-serif text-[1.35rem] leading-tight font-bold mb-1 text-slate-900">
                    Lar Seguro, Vida Ativa
                  </div>
                  <div className="text-[0.85rem] text-slate-500 mb-5 font-medium tracking-wide">
                    Guia de Adaptação do Lar para Idosos
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="text-[0.7rem] font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full tracking-wide">
                      ✓ Autonomia
                    </span>
                    <span className="text-[0.7rem] font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full tracking-wide">
                      ✓ Dignidade
                    </span>
                    <span className="text-[0.7rem] font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full tracking-wide">
                      ✓ Segurança
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <a
                href="https://pay.hotmart.com/U105515286T"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 font-semibold text-base px-8 py-4 rounded-xl text-center relative overflow-hidden w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98]"
              >
                Quero o Guia Agora — R$ 37,90
              </a>
            </FadeIn>
          </div>
        </div>
      </header>

      {/* TRUST BAR */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white/90 py-3.5 text-xs sm:text-sm font-medium text-center flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 px-4 tracking-wide shadow-inner">
        <div className="flex items-center gap-1.5"><Lock size={14} /> Compra 100% segura</div>
        <span className="opacity-50 hidden sm:inline px-2">·</span>
        <div className="flex items-center gap-1.5"><Download size={14} /> Acesso imediato</div>
        <span className="opacity-50 hidden sm:inline px-2">·</span>
        <div className="flex items-center gap-1.5"><ShieldCheck size={14} /> Garantia de 7 dias</div>
      </div>

      {/* STORY SECTION */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 bg-blue-600/10 px-4 py-1.5 rounded-full mb-5">Por que este guia existe</span>
            <h2 className="font-serif font-bold text-[2rem] sm:text-4xl mb-4 text-slate-900 leading-tight">
              Uma queda que eu nunca deveria ter deixado <em className="italic text-orange-500 font-serif">acontecer</em>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="bg-gradient-to-br from-blue-600/5 to-orange-500/5 border-l-4 border-orange-500 rounded-r-2xl p-8 sm:p-10 my-12 text-slate-600 text-lg leading-relaxed shadow-sm">
              <p>Meu pai tem 93 anos. Uma vida inteira construída com trabalho, dignidade e independência. Numa madrugada comum, ele se levantou para ir ao banheiro — e caiu. Ao tentar se apoiar, não encontrou nada: nenhuma barra, nenhum suporte, nenhuma superfície firme.</p>
              <p className="mt-5">Corri até o quarto e o encontrei no chão. O susto e a sensação de impotência daquele momento mudaram tudo. Comecei a olhar para cada canto da casa com olhos completamente diferentes — e vi riscos invisíveis que sempre estiveram ali.</p>
              <p className="mt-5 text-slate-800 font-medium">Esse guia nasceu dessa experiência. Escrevi para que você não precise esperar por um susto para agir.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="story-quote-marks font-serif text-[1.4rem] sm:text-3xl italic text-center px-4 py-8 mb-12 text-slate-800 relative max-w-2xl mx-auto leading-relaxed">
              Uma única barra ao lado da cama poderia ter evitado tudo.<br/>Não espere que isso aconteça na sua casa.
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">
              <div className="text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-serif text-5xl sm:text-6xl font-extrabold text-gradient-stat leading-none mb-4">30%</div>
                <div className="text-[0.95rem] text-slate-500 font-medium tracking-wide">idosos sofrem ≥1 queda/ano</div>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-serif text-5xl sm:text-6xl font-extrabold text-gradient-stat leading-none mb-4">60%</div>
                <div className="text-[0.95rem] text-slate-500 font-medium tracking-wide">das quedas ocorrem em casa</div>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-serif text-5xl sm:text-6xl font-extrabold text-gradient-stat leading-none mb-4">80%</div>
                <div className="text-[0.95rem] text-slate-500 font-medium tracking-wide">são prevenidos com adaptações</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROBLEMS SECTION */}
      <section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 bg-blue-600/10 px-4 py-1.5 rounded-full mb-5">Você reconhece alguma dessas situações?</span>
            <h2 className="font-serif font-bold text-[2rem] sm:text-4xl mb-4 text-slate-900 leading-tight">
              Sinais de que a casa precisa <em className="italic text-orange-500 font-serif">de atenção</em>
            </h2>
          </FadeIn>

          <div className="grid gap-4 mt-12">
            {[
              { icon: AlertTriangle, title: "Tapetes soltos, fios no chão, soleiras", text: "Armadilhas silenciosas que passam despercebidas até o acidente." },
              { icon: Moon, title: "Trajetos no escuro à noite", text: "O percurso quarto-banheiro é o mais perigoso — quando o corpo ainda não acordou." },
              { icon: Bath, title: "Banheiro sem apoio e piso escorregadio", text: "Ambiente com maior número de acidentes graves em idosos." },
              { icon: BedDouble, title: "Cama na altura errada", text: "Sair da cama sem apoio é um momento crítico de alto risco." },
              { icon: Heart, title: "Preocupação constante", text: "Saber que a casa está adaptada traz paz para toda a família." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-5 p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm transition-transform hover:translate-x-1 duration-300 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600 group-hover:scale-110 group-hover:bg-orange-500/15 transition-all">
                    <item.icon size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-[1.1rem] mb-1 font-semibold">{item.title}</strong>
                    <span className="text-slate-500 text-[0.95rem] leading-snug block">{item.text}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTERS SECTION */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 bg-blue-600/10 px-4 py-1.5 rounded-full mb-5">O que você vai aprender</span>
            <h2 className="font-serif font-bold text-[2rem] sm:text-4xl mb-4 text-slate-900 leading-tight">
              Tudo organizado para <em className="italic text-orange-500 font-serif">você agir</em>
            </h2>
            <p className="text-lg text-slate-500 mt-4 font-light">10 capítulos práticos cobrindo cada cômodo e situação de risco.</p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-14">
            {chapters.map((ch, i) => (
              <FadeIn key={i} delay={i * 0.05} className="bg-white rounded-2xl p-8 border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-blue-600/30 chapter-card-hover relative overflow-hidden group">
                <div className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-blue-600 mb-3 group-hover:text-orange-500 transition-colors">{ch.num}</div>
                <h3 className="font-serif font-bold text-xl mb-3 text-slate-900 leading-snug">{ch.title}</h3>
                <p className="text-slate-500 text-[0.95rem] leading-relaxed">{ch.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 bg-blue-600/10 px-4 py-1.5 rounded-full mb-5">O que você ganha</span>
            <h2 className="font-serif font-bold text-[2rem] sm:text-4xl mb-4 text-slate-900 leading-tight">
              Resultados <em className="italic text-orange-500 font-serif">concretos</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              "Mapeamento de riscos: saiba exatamente onde agir antes de um acidente.",
              "Prioridades claras: o que fazer primeiro, sem desperdício.",
              "Instruções técnicas: onde instalar barras, altura ideal, tipo de piso.",
              "Soluções para todo orçamento: do gratuito ao completo.",
              "Checklist prático: inspeção bimestral para segurança contínua.",
              "Comunicação respeitosa: como propor mudanças preservando a dignidade."
            ].map((benefit, i) => {
              const [bold, tail] = benefit.split(": ");
              return (
                <FadeIn key={i} delay={i * 0.05} className="group">
                  <div className="flex gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm transition-shadow hover:shadow-md h-full items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                      <Check size={14} strokeWidth={3.5} />
                    </div>
                    <p className="text-slate-600 text-[0.95rem] leading-snug">
                      <strong className="text-slate-900 font-semibold">{bold}: </strong>{tail}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 bg-blue-600/10 px-4 py-1.5 rounded-full mb-5">Quem já aplicou</span>
            <h2 className="font-serif font-bold text-[2rem] sm:text-4xl mb-4 text-slate-900 leading-tight">
              Resultados <em className="italic text-orange-500 font-serif">na prática</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {[
              { text: "Minha mãe de 82 anos escorregou no banheiro. O guia me mostrou exatamente o que instalar. Em um fim de semana fizemos tudo. Ela adorou!", author: "Roberta F.", role: "São Paulo" },
              { text: "Nunca pensei na altura da cama como risco. Coloquei os elevadores e agora meu pai se levanta sozinho, sem me chamar toda manhã.", author: "Carlos M.", role: "Belo Horizonte" },
              { text: "Sou cuidadora há 12 anos. Esse guia organizou tudo que aprendi na prática. Recomendo para quem cuida de idosos.", author: "Ana Paula S.", role: "Curitiba" },
            ].map((testi, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col items-start h-full">
                <div className="text-amber-400 text-xl tracking-[0.15em] mb-4 drop-shadow-sm">★★★★★</div>
                <p className="italic text-slate-600 text-[0.95rem] md:text-base leading-relaxed mb-6 font-medium flex-grow">"{testi.text}"</p>
                <div className="w-full pt-4 border-t border-slate-100">
                  <div className="font-semibold text-slate-900">{testi.author}</div>
                  <div className="text-sm text-slate-500">{testi.role}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="preco" className="py-20 sm:py-28 bg-pricing scroll-m-8">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <FadeIn className="text-center text-white mb-12">
            <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white bg-white/10 px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm border border-white/10">Acesso imediato</span>
            <h2 className="font-serif font-bold text-[2rem] sm:text-[2.75rem] mb-4 leading-tight text-white drop-shadow-md">
              Invista na segurança de quem <em className="italic text-orange-400 font-serif">você ama</em>
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-14 max-w-lg mx-auto text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100">
              <div className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">Ebook Digital — Acesso Vitalício</div>
              <div className="font-serif font-extrabold text-slate-900 leading-none mb-3 text-[3.5rem] sm:text-[4rem] flex items-start justify-center gap-1 drop-shadow-sm">
                <sup className="text-2xl sm:text-3xl mt-3 font-semibold text-slate-400">R$</sup>37<sub className="text-xl mt-auto mb-2 font-semibold text-slate-400">,90</sub>
              </div>
              <div className="text-slate-500 text-[0.85rem] mb-10 font-medium">Pagamento único • Acesso imediato após confirmação</div>

              <ul className="text-left flex flex-col gap-4 mb-10">
                {[
                  "Guia completo em PDF (formato A4)",
                  "10 capítulos + Checklist do Cuidador",
                  "História real + orientações emocionais",
                  "Acesso vitalício com atualizações",
                  "Leia no celular, tablet ou computador"
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3.5 text-[0.95rem] text-slate-600 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="https://pay.hotmart.com/U105515286T" target="_blank" rel="noopener noreferrer" className="btn-primary w-full flex items-center justify-center gap-2 font-bold text-[1.05rem] px-8 py-[1.15rem] rounded-xl text-center relative overflow-hidden transition-all shadow-lg shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98]">
                <ShieldCheck size={22} className="opacity-90" />
                Quero Proteger Minha Família
              </a>

              <div className="flex items-center justify-center gap-2 text-[0.8rem] text-slate-400 mt-6 font-medium">
                <Lock size={14} /> Pagamento 100% seguro • Pix, cartão ou boleto
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-6 mt-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-[1.5rem] p-8 max-w-lg mx-auto items-center sm:items-start text-center sm:text-left">
              <div className="w-16 h-16 flex-shrink-0 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-black/10">
                <Shield size={32} />
              </div>
              <div className="text-white">
                <h3 className="font-serif font-bold text-[1.35rem] mb-1.5 drop-shadow-sm">Garantia de 7 dias</h3>
                <p className="text-[0.95rem] text-white/80 leading-relaxed">Não ficou satisfeito? Envie um e-mail em até 7 dias e devolvemos 100% — sem fazer perguntas.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue-600 bg-blue-600/10 px-4 py-1.5 rounded-full mb-5">Dúvidas</span>
            <h2 className="font-serif font-bold text-[2rem] sm:text-4xl mb-4 text-slate-900 leading-tight">
              Perguntas <em className="italic text-orange-500 font-serif">respondidas</em>
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-2.5 text-left max-w-2xl mx-auto">
            {[
              { q: "Como recebo o ebook?", a: "Após o pagamento, você recebe o link de download no e-mail cadastrado. Acesso imediato, 24 horas por dia." },
              { q: "Precisa de reforma para aplicar as dicas?", a: "Não. A grande maioria das adaptações são simples, de baixo custo e não exigem quebra. O Capítulo 1 mostra exatamente por onde começar sem obra." },
              { q: "Funciona para idosos que usam andador?", a: "Sim. O guia contempla diferentes níveis de mobilidade, incluindo as medidas corretas de espaço livre, portas e áreas de giro para andadores e cadeiras." },
              { q: "Como funciona a garantia incondicional?", a: "Se você achar que o Guia não ajudou, basta enviar um e-mail para o suporte em até 7 dias corridos após a compra. Nós devolvemos 100% do valor pago imediatamente, sem questionamentos." }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <FaqItem question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-final py-24 sm:py-32 text-center overflow-hidden">
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="font-serif font-bold text-3xl sm:text-[2.5rem] mb-6 text-white leading-tight drop-shadow-md">
              A casa certa para envelhecer <em className="italic text-orange-400 font-serif">com dignidade</em>
            </h2>
            <p className="text-white/80 text-[1.05rem] sm:text-lg mb-10 leading-relaxed font-light">
              Cada dia sem adaptação é um dia a mais de risco na vida de quem você ama. O guia custa muito menos que uma barra de apoio — e mostra exatamente o que comprar, onde e como instalar.
            </p>
            <a href="https://pay.hotmart.com/U105515286T" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 font-bold text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-[1rem] inline-flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:bg-slate-50 w-full sm:w-auto active:scale-[0.98]">
              Quero o Guia Agora — R$ 37,90
            </a>
            <p className="mt-8 text-sm text-white/50 flex flex-wrap justify-center items-center gap-x-3 gap-y-2 font-medium">
              <span>🛡️ Garantia de 7 dias</span>
              <span className="hidden sm:inline opacity-30">•</span>
              <span>🔒 Pagamento seguro</span>
              <span className="hidden sm:inline opacity-30">•</span>
              <span>📥 Acesso imediato</span>
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Tracking() {
  const location = useLocation();

  useEffect(() => {
    // Rola para o topo quando a rota muda (opcional, mas bom pra UX)
    window.scrollTo(0, 0);
    // Dispara o evento PageView do Facebook
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Tracking />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos" element={<Terms />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}
