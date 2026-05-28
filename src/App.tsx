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
import { Bridge } from './pages/Bridge';
import { CookieConsent } from './components/CookieConsent';

declare global {
  interface Window {
    fbq: any;
  }
}

const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string; key?: any }) => (
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
  const [isStickyVisible, setIsStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chapters = [
    { num: "01", title: "Diagnóstico do risco", desc: "Como identificar riscos invisíveis antes de qualquer compra." },
    { num: "02", title: "Iluminação estratégica", desc: "Elimine quedas no escuro com iluminação inteligente e econômica." },
    { num: "03", title: "O banheiro", desc: "Barras, altura do vaso, piso antiderrapante e espaço de circulação." },
    { num: "04", title: "Quarto seguro", desc: "Altura da cama, apoios e organização com segurança real." },
    { num: "05", title: "Cozinha e área de serviço", desc: "Ergonomia, segurança com fogo e autonomia preservada." },
    { num: "06", title: "Circulação e pisos", desc: "Tapetes, fios, soleiras e o piso ideal para cada ambiente." },
    { num: "07", title: "Tecnologia e automação", desc: "Botão de pânico, sensores e monitoramento com dignidade." },
    { num: "08", title: "Áreas externas", desc: "Corrimãos, rampas e iluminação para quintal e varanda." },
    { num: "09", title: "O aspecto emocional", desc: "Como conversar sobre mudanças sem ferir a autonomia do idoso." },
    { num: "10", title: "Checklist do cuidador", desc: "Mapa completo de inspeção bimestral para segurança contínua." },
  ];

  const handleCheckout = () => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'InitiateCheckout', { value: 37.90, currency: 'BRL' });
    }
  };

  return (
    <div className="font-sans bg-cream text-text-dark selection:bg-accent/20 transition-colors duration-300">
      {/* STICKY BAR */}
      <AnimatePresence>
        {isStickyVisible && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 z-50 bg-text-dark text-white py-3 px-6 flex items-center justify-between shadow-xl"
          >
            <div className="hidden sm:block">
              <strong className="block text-sm">Lar Seguro, Vida Ativa</strong>
              <p className="text-xs opacity-70">Guia completo de adaptação para idosos</p>
            </div>
            <a
              href="https://pay.hotmart.com/U105515286T"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCheckout}
              className="bg-accent-mid hover:bg-accent text-white px-5 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap"
            >
              Quero o guia — R$ 37,90
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header className="relative bg-text-dark text-white pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#3B2000_0%,transparent_70%)] pointer-events-none opacity-50" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <span className="inline-block text-[0.7rem] font-bold tracking-widest uppercase text-accent-mid border border-accent/40 px-4 py-1.5 rounded-full mb-8">
              Guia Digital Completo
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-[2.2rem] sm:text-[3.5rem] leading-[1.1] mb-6 font-semibold">
              Seu familiar vai se levantar <em className="italic text-yellow-300">esta noite.</em><br />A casa está pronta para ele?
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-light">
              Um guia prático, cômodo por cômodo, para adaptar o lar de um idoso e prevenir quedas — sem precisar de reforma e sem gastar uma fortuna.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {['Autonomia preservada', '10 capítulos práticos', '+30 adaptações detalhadas', 'Checklist bimestral incluso'].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs text-white/80">
                  <Check size={14} className="text-accent-mid" />
                  {badge}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col items-center gap-4">
              <a
                href="https://pay.hotmart.com/U105515286T"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCheckout}
                className="bg-accent-mid hover:bg-accent text-white text-lg font-bold px-10 py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(217,119,6,0.35)] hover:-translate-y-1 active:scale-[0.98] w-full sm:w-auto"
              >
                Proteger minha família — R$ 37,90
              </a>
              <div className="text-[0.75rem] text-white/40 flex flex-wrap justify-center gap-x-4 gap-y-1">
                <span>Compra 100% segura</span>
                <span className="hidden sm:inline opacity-30">•</span>
                <span>Acesso imediato</span>
                <span className="hidden sm:inline opacity-30">•</span>
                <span>Garantia de 7 dias</span>
                <span className="hidden sm:inline opacity-30">•</span>
                <span>Pix, cartão ou boleto</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* PROOF STRIP */}
      <div className="bg-warm-white border-b border-border-custom py-4 px-6 text-center">
        <p className="text-sm text-text-muted">
          Já ajudou <strong className="text-text-dark">centenas de famílias brasileiras</strong> a adaptarem o lar dos seus idosos com segurança e dignidade
        </p>
      </div>

      {/* STORY SECTION */}
      <section className="py-20 sm:py-32 bg-warm-white bg-[radial-gradient(circle_at_bottom_right,var(--color-accent-light),transparent_25%)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,340px] gap-16 items-start">
            <FadeIn className="lg:col-span-1">
              <span className="inline-block text-[0.7rem] font-bold tracking-widest uppercase text-accent mb-4">Por que este guia existe</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-text-dark font-semibold leading-tight mb-8">
                Uma queda que eu nunca deveria ter deixado acontecer
              </h2>
              <div className="space-y-6 text-text-mid leading-relaxed">
                <p className="text-lg">Meu pai tem 93 anos. Uma vida inteira construída com trabalho, dignidade e a independência que sempre foi parte de quem ele é. Ele acordava cedo, preparava o próprio café, caminhava pelo quintal.</p>
                <p>Numa madrugada comum, ele se levantou para ir ao banheiro — e caiu. Ao tentar se apoiar, não encontrou nada: nenhuma barra, nenhum suporte, nenhuma superfície firme ao alcance das mãos.</p>
                <blockquote className="border-l-4 border-accent-mid bg-accent-light/30 p-6 rounded-r-xl italic font-serif text-xl text-text-dark">
                  "Corri até o quarto e o encontrei no chão. O susto e a sensação de impotência daquele momento mudaram tudo."
                </blockquote>
                <p>Comecei a olhar para cada canto da casa com olhos completamente diferentes — e vi riscos invisíveis que sempre estiveram ali: a altura da cama, a ausência de barras, o piso liso do banheiro, os tapetes soltos no corredor.</p>
                <p><strong>Hoje, com barras de apoio instaladas, iluminação noturna e o vaso na altura correta, meu pai se levanta sozinho pela manhã. Com segurança. Com dignidade.</strong></p>
                <p>Escrevi este guia para que você não precise esperar por um susto para agir.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-cream border border-border-custom rounded-2xl p-8 sticky top-24 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-mid flex items-center justify-center text-white font-serif text-2xl font-bold mb-6">
                  MF
                </div>
                <div className="mb-6">
                  <h3 className="font-bold text-text-dark">Marcelo Ferreira</h3>
                  <p className="text-xs text-text-muted">Filho cuidador · Pesquisador de acessibilidade residencial</p>
                </div>
                <p className="text-sm text-text-mid leading-relaxed mb-8">
                  Após a queda do meu pai de 93 anos, passei meses pesquisando com fisioterapeutas, geriatras e arquitetos especializados em acessibilidade. Este guia reúne tudo que aprendi — e que gostaria de ter sabido antes.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'anos do meu pai', val: '93' },
                    { label: 'capítulos', val: '10' },
                    { label: 'adaptações', val: '+30' },
                    { label: 'garantia', val: '7 dias' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white border border-border-custom rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-accent font-serif leading-none mb-1">{stat.val}</div>
                      <div className="text-[0.65rem] text-text-muted uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-text-dark text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { val: '30%', label: 'dos idosos sofrem pelo menos uma queda por ano no Brasil' },
              { val: '60%', label: 'das quedas acontecem dentro de casa — no ambiente que deveria ser seguro' },
              { val: '80%', label: 'são completamente preveníveis com adaptações simples no lar' }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-5xl font-serif font-bold text-yellow-300 mb-2">{item.val}</div>
                <p className="text-sm text-white/60 leading-relaxed max-w-[200px] mx-auto">{item.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[0.7rem] font-bold tracking-widest uppercase text-accent mb-4">Você reconhece essas situações?</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-text-dark font-semibold">Sinais de que a casa precisa de atenção agora</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: AlertTriangle, title: 'Tapetes, fios e soleiras', text: 'Armadilhas silenciosas que passam despercebidas até o acidente acontecer.' },
              { icon: Moon, title: 'Trajetos no escuro à noite', text: 'O percurso quarto-banheiro é o mais perigoso — quando o corpo ainda não acordou.' },
              { icon: Bath, title: 'Banheiro sem apoio', text: 'O ambiente com maior número de acidentes graves em idosos — e o mais fácil de adaptar.' },
              { icon: BedDouble, title: 'Cama na altura errada', text: 'Sair da cama sem apoio é um momento crítico de alto risco — especialmente ao amanhecer.' },
              { icon: Heart, title: 'Preocupação constante', text: 'Saber que a casa está adaptada traz paz para toda a família — inclusive para quem mora longe.' }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white border border-border-custom rounded-xl p-8 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-red-soft flex items-center justify-center text-red-custom mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTERS SECTION */}
      <section className="py-24 bg-warm-white border-y border-border-custom">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[0.7rem] font-bold tracking-widest uppercase text-accent mb-4">O que você vai aprender</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-text-dark font-semibold">10 capítulos práticos — cada cômodo, cada situação de risco</h2>
            <p className="text-text-muted mt-4 max-w-2xl mx-auto">Organizado para você agir imediatamente, sem precisar de conhecimento técnico prévio.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((ch, i) => (
              <FadeIn key={i} delay={i * 0.05} className="flex gap-6 p-6 bg-cream border border-border-custom rounded-xl hover:border-accent-mid transition-colors group">
                <div className="font-serif text-2xl font-bold text-accent-mid leading-none group-hover:scale-110 transition-transform">{ch.num}</div>
                <div>
                  <h3 className="font-bold text-text-dark text-sm mb-1">{ch.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{ch.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[0.7rem] font-bold tracking-widest uppercase text-accent mb-4">O que você ganha</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-text-dark font-semibold">Resultados concretos desde a primeira leitura</h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              { b: 'Mapeamento de riscos', t: 'saiba exatamente onde agir antes de um acidente' },
              { b: 'Prioridades claras', t: 'o que fazer primeiro, sem desperdício de tempo ou dinheiro' },
              { b: 'Instruções técnicas', t: 'onde instalar barras, altura ideal, tipo de piso recomendado' },
              { b: 'Soluções para todo orçamento', t: 'do gratuito ao completo, sem excluir ninguém' },
              { b: 'Comunicação respeitosa', t: 'como propor mudanças preservando a dignidade do idoso' },
              { b: 'Acesso vitalício com atualizações', t: 'leia no celular, tablet ou computador' }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05} className="flex items-start gap-4 bg-white border border-border-custom p-5 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-green-light-custom flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <Check size={12} className="text-green-custom" strokeWidth={3} />
                </div>
                <p className="text-text-mid text-sm">
                  <strong className="text-text-dark">{item.b}</strong> — {item.t}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS SECTION */}
      <section className="py-24 bg-accent-light/50 border-y border-accent/10">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <span className="inline-block text-[0.7rem] font-bold tracking-widest uppercase text-accent mb-4">Bônus incluso</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-text-dark font-semibold">O Checklist do Cuidador</h2>
          </FadeIn>
          <FadeIn className="bg-white border-2 border-accent-mid rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-10 shadow-xl">
            <div className="w-20 h-20 bg-accent-light rounded-2xl flex items-center justify-center text-4xl shadow-sm text-accent">📋</div>
            <div className="text-center sm:text-left">
              <span className="inline-block text-[0.65rem] font-bold uppercase tracking-widest bg-accent text-white px-3 py-1 rounded-full mb-3">
                Incluso no guia · sem custo adicional
              </span>
              <h3 className="text-xl font-bold text-text-dark mb-3">Checklist bimestral de inspeção completa</h3>
              <p className="text-sm text-text-mid leading-relaxed max-w-lg">
                Ferramenta prática com todos os pontos críticos da casa organizados por cômodo. Imprima, fixe na geladeira e use a cada dois meses para garantir que nenhum risco ficou de fora. São mais de 40 itens verificáveis em menos de 20 minutos.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[0.7rem] font-bold tracking-widest uppercase text-accent mb-4">Quem já aplicou</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-text-dark font-semibold">Resultados reais de famílias reais</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { author: 'Roberta F.', color: '#B45309', bg: '#FEF3C7', role: 'São Paulo · filha cuidadora', text: 'Minha mãe de 82 anos escorregou no banheiro. O guia me mostrou exatamente o que instalar e onde. Em um fim de semana fizemos tudo. Ela adorou — disse que o banheiro ficou mais bonito!' },
              { author: 'Carlos M.', color: '#15803D', bg: '#DCFCE7', role: 'Belo Horizonte · filho cuidador', text: 'Nunca pensei na altura da cama como risco. Coloquei os elevadores de pé e agora meu pai se levanta sozinho toda manhã, sem me chamar. Isso mudou a rotina da nossa família.' },
              { author: 'Ana Paula S.', color: '#185FA5', bg: '#E6F1FB', role: 'Cuidadora profissional · 12 anos de experiência', text: 'Sou cuidadora profissional há 12 anos e já li muito sobre segurança de idosos. Este guia é o mais completo e prático que já vi — e por R$ 37,90 é quase criminoso não ter.' }
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-cream border border-border-custom rounded-2xl p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300">
                <div className="text-accent-mid text-lg mb-6">★★★★★</div>
                <p className="font-serif italic text-text-mid leading-relaxed mb-8 flex-grow">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: t.bg, color: t.color }}>
                    {t.author.split(' ')[0][0]}{t.author.split(' ')[1][0] || ""}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark text-sm">{t.author}</h4>
                    <p className="text-[0.65rem] text-text-muted uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="preco" className="py-24 bg-cream scroll-m-20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[0.7rem] font-bold tracking-widest uppercase text-accent mb-4">Acesso imediato</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-text-dark font-semibold leading-tight">Invista na segurança de quem você ama</h2>
          </FadeIn>
          <FadeIn className="max-w-xl mx-auto bg-warm-white border-2 border-border-dark-custom p-8 sm:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden text-center">
            <div className="text-[0.7rem] font-bold uppercase tracking-widest text-accent mb-4">Guia Digital — Acesso Vitalício</div>
            <p className="text-text-muted text-sm mb-6 uppercase tracking-wider">Lar Seguro, Vida Ativa — Guia Completo</p>
            <div className="font-serif text-6xl sm:text-7xl font-bold text-text-dark mb-4 flex items-start justify-center gap-1">
              <span className="text-2xl mt-4 font-semibold text-text-muted">R$</span>
              37<span className="text-3xl mt-auto mb-4 font-semibold text-text-muted">,90</span>
            </div>
            <p className="text-xs text-text-muted mb-8 font-medium">Pagamento único · Acesso imediato após confirmação</p>
            
            <ul className="text-left space-y-3 mb-10 inline-block mx-auto">
              {[
                "Guia completo em PDF — formato A4",
                "10 capítulos + Checklist do Cuidador",
                "História real + orientações emocionais",
                "Acesso vitalício com atualizações",
                "Leia no celular, tablet ou computador",
                "Menos do que custa uma barra de apoio"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-text-mid font-medium">
                  <Check size={16} className="text-green-custom" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://pay.hotmart.com/U105515286T"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCheckout}
              className="block w-full bg-accent-mid hover:bg-accent text-white font-bold py-5 rounded-2xl transition-all shadow-xl hover:-translate-y-1 mb-6 text-lg"
            >
              Proteger minha família — R$ 37,90
            </a>

            <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
              {['Pix', 'Visa', 'Mastercard', 'Boleto', '🔒 SSL'].map(p => (
                <span key={p} className="text-[0.65rem] font-bold uppercase tracking-widest border border-border-custom px-3 py-1 rounded text-text-muted">{p}</span>
              ))}
            </div>

            <div className="flex items-start gap-4 p-5 bg-green-light-custom/50 border border-green-custom/10 rounded-xl text-left">
              <ShieldCheck className="text-green-custom flex-shrink-0" size={24} />
              <div>
                <p className="text-[0.75rem] font-bold text-green-custom uppercase tracking-wider mb-1">Garantia de 7 dias</p>
                <p className="text-xs text-green-custom/80 leading-relaxed font-medium">Não ficou satisfeito por qualquer motivo? Receba 100% do seu dinheiro de volta.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-warm-white border-t border-border-custom">
        <div className="max-w-3xl mx-auto px-6 font-sans">
          <FadeIn className="text-center mb-16">
            <span className="inline-block text-[0.7rem] font-bold tracking-widest uppercase text-accent mb-4">Dúvidas</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-text-dark font-semibold">Perguntas respondidas</h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              { q: "Como recebo o guia?", a: "Após a confirmação do pagamento, você recebe um e-mail com o link para download imediato do arquivo PDF. O acesso é vitalício — você pode baixar quantas vezes quiser, a qualquer momento." },
              { q: "Precisa de reforma para aplicar as dicas?", a: "Não. A grande maioria das adaptações não exige obra nem profissional especializado. Coisas como remover tapetes, reorganizar a cozinha e instalar balizadores de LED não custam nada ou custam muito pouco." },
              { q: "Funciona para idosos que usam andador?", a: "Sim. O guia inclui medidas mínimas de circulação para andadores e orientações específicas sobre espaçamento em áreas críticas como o banheiro." },
              { q: "Como funciona a garantia incondicional?", a: "Se por qualquer motivo você não ficar satisfeito com o guia em até 7 dias após a compra, enviamos o reembolso total sem perguntas e sem burocracia." }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <FaqItem question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 bg-text-dark text-white text-center overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-[2.6rem] font-semibold leading-tight mb-8">
              Cada dia sem adaptação é um dia a mais de risco. Você pode mudar isso <em className="italic text-yellow-300 font-serif">hoje.</em>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto font-light">
              O guia custa menos do que uma barra de apoio — e mostra exatamente o que comprar, onde instalar e como conversar com quem você ama.
            </p>
            <a
              href="https://pay.hotmart.com/U105515286T"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCheckout}
              className="bg-accent-mid hover:bg-accent text-white font-bold text-xl px-12 py-5 rounded-2xl transition-all shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
            >
              Quero o Guia Agora — R$ 37,90
            </a>
            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[0.7rem] uppercase tracking-widest font-bold text-white/30">
              <span className="flex items-center gap-2 italic"><Lock size={12} /> Garantia de 7 dias</span>
              <span className="flex items-center gap-2 italic"><ShieldCheck size={12} /> Pagamento Seguro</span>
              <span className="flex items-center gap-2 italic"><Download size={12} /> Acesso Imediato</span>
            </div>
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
        <Route path="/" element={<Bridge />} />
        <Route path="/venda" element={<Home />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/bidge" element={<Bridge />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos" element={<Terms />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}
