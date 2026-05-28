import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface SymItem {
  id: number;
  level: number;
  points: number;
  text: string;
}

export function Bridge() {
  const [selectedItems, setSelectedItems] = useState<{ [key: number]: boolean }>({});
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const hookRef = useRef<HTMLDivElement>(null);

  // Dynamic Font Loading
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,700;0,900;1,400&family=Source+Sans+3:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Sticky Bar Scroll Detector
  useEffect(() => {
    const handleScroll = () => {
      if (hookRef.current) {
        const bottom = hookRef.current.getBoundingClientRect().bottom;
        setIsStickyVisible(bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items: SymItem[] = [
    // Nível 1
    { id: 1, level: 1, points: 1, text: 'Há tapetes soltos no corredor ou na sala' },
    { id: 2, level: 1, points: 1, text: 'O percurso quarto-banheiro é feito no escuro à noite' },
    { id: 3, level: 1, points: 1, text: 'Há soleiras ou degraus entre cômodos' },
    { id: 4, level: 1, points: 1, text: 'O idoso se apoia em móveis para caminhar pela casa' },
    // Nível 2
    { id: 5, level: 2, points: 2, text: 'O banheiro não tem barras de apoio instaladas' },
    { id: 6, level: 2, points: 2, text: 'O piso do banheiro ou cozinha é liso quando molhado' },
    { id: 7, level: 2, points: 2, text: 'A altura da cama exige esforço para levantar ou deitar' },
    { id: 8, level: 2, points: 2, text: 'Já houve ao menos um susto ou quase-queda nos últimos meses' },
    // Nível 3
    { id: 9, level: 3, points: 3, text: 'O idoso já sofreu uma queda dentro de casa' },
    { id: 10, level: 3, points: 3, text: 'Ele se levanta sozinho de madrugada sem nenhum apoio seguro' },
    { id: 11, level: 3, points: 3, text: 'A família não inspecionou o lar com olhar de segurança' },
    { id: 12, level: 3, points: 3, text: 'Você sente que algo pode acontecer — e essa sensação não passa' }
  ];

  const toggleItem = (id: number) => {
    setSelectedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getScore = () => {
    return items.reduce((sum, item) => {
      return sum + (selectedItems[item.id] ? item.points : 0);
    }, 0);
  };

  const score = getScore();
  const maxScore = 24; // 4*1 + 4*2 + 4*3
  const fillWidth = Math.min((score / maxScore) * 100, 100);

  const getFillBackground = () => {
    if (score === 0) return '#94a3b8';
    if (score <= 3) return '#d97706';
    if (score <= 7) return '#ea580c';
    return '#c0392b';
  };

  const getCtaConfig = () => {
    if (score === 0) return null;
    if (score <= 3) {
      return {
        className: 'st1',
        text: 'Esses sinais podem ser um alerta — Veja a análise',
        micro: ''
      };
    }
    if (score <= 7) {
      return {
        className: 'st2',
        text: 'O ambiente pede atenção — Entenda a causa',
        micro: ''
      };
    }
    if (score <= 12) {
      return {
        className: 'st3',
        text: '⚠️ Risco elevado identificado — Veja o que fazer agora',
        micro: 'Mais de 47.000 famílias já tomaram essa decisão.'
      };
    }
    return {
      className: 'st4',
      text: '🚨 Múltiplos fatores críticos — Ação imediata recomendada',
      micro: 'O risco acumulado torna a próxima queda uma questão de tempo, não de sorte.'
    };
  };

  const ctaConfig = getCtaConfig();

  return (
    <div className="bridge-page">
      <style>{`
        .bridge-page {
          --navy:        #0a1628;
          --navy-mid:    #112240;
          --blue:        #1d6fa4;
          --blue-dark:   #1a3a6b;
          --teal:        #0e8c7a;
          --teal-light:  #12a892;
          --amber:       #d4820a;
          --red:         #c0392b;
          --red-dark:    #922b21;
          --white:       #ffffff;
          --off:         #f7f9fb;
          --border:      #d1d9e6;
          --gray-100:    #eef0f4;
          --gray-400:    #8a95a8;
          --gray-600:    #4a5568;
          --text:        #2d3748;
          --serif:       'Merriweather', Georgia, serif;
          --sans:        'Source Sans 3', sans-serif;
          --mono:        'DM Mono', monospace;
          
          font-family: var(--sans);
          background: var(--off);
          color: var(--text);
          font-size: 17px;
          line-height: 1.7;
          min-height: 100vh;
        }

        .bridge-page .topbar {
          background: var(--navy);
          color: #7a9ab8;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-align: center;
          padding: 8px 16px;
        }
        .bridge-page .topbar span { color: var(--teal-light); }

        .bridge-page .site-header {
          background: var(--white);
          border-bottom: 3px solid var(--blue);
          padding: 13px 0;
          position: sticky; top: 0; z-index: 100;
          box-shadow: 0 2px 12px rgba(10,22,40,.07);
        }
        .bridge-page .hinner {
          max-width: 760px; margin: 0 auto; padding: 0 20px;
          display: flex; align-items: center; gap: 12px;
        }
        .bridge-page .logo-badge {
          background: var(--blue); color: white;
          font-family: var(--mono); font-size: 10px;
          letter-spacing: .12em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 3px;
        }
        .bridge-page .header-label {
          font-size: 12px; font-weight: 600;
          color: var(--gray-600); letter-spacing: .04em;
          text-transform: uppercase;
        }
        .bridge-page .header-time {
          margin-left: auto; font-family: var(--mono);
          font-size: 11px; color: var(--gray-400);
        }

        .bridge-page .wrap { max-width: 760px; margin: 0 auto; padding: 0 20px; }

        .bridge-page .s-hook {
          background: var(--white);
          padding: 56px 0 48px;
          border-bottom: 1px solid var(--border);
        }

        .bridge-page .tag {
          display: inline-flex; align-items: center; gap: 7px;
          background: #e8f4fd; color: var(--blue);
          font-family: var(--mono); font-size: 11px;
          letter-spacing: .1em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 3px;
          border-left: 3px solid var(--blue);
          margin-bottom: 26px;
        }
        .bridge-page .tag::before {
          content: ''; width: 6px; height: 6px;
          background: var(--blue); border-radius: 50%;
          animation: bridge-blink 1.4s ease-in-out infinite;
        }
        @keyframes bridge-blink { 0%,100%{opacity:1} 50%{opacity:.3} }

        .bridge-page h1 {
          font-family: var(--serif);
          font-size: clamp(26px, 4.5vw, 40px);
          font-weight: 900; line-height: 1.22;
          color: var(--navy); margin-bottom: 20px;
        }
        .bridge-page h1 em { font-style: italic; color: var(--blue); }

        .bridge-page .sub {
          font-size: 18px; color: var(--gray-600);
          max-width: 620px; line-height: 1.65;
          margin-bottom: 36px;
        }

        .bridge-page .cta-main {
          display: inline-block;
          background: var(--blue); color: white;
          padding: 17px 36px; border-radius: 6px;
          font-size: 17px; font-weight: 700;
          text-decoration: none; letter-spacing: .02em;
          transition: all .2s ease;
          border: none; cursor: pointer;
          font-family: var(--sans);
        }
        .bridge-page .cta-main:hover { background: var(--navy); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(10,22,40,.18); }
        .bridge-page .cta-note { font-family: var(--mono); font-size: 11px; color: var(--gray-400); margin-top: 10px; }

        .bridge-page .s-risk {
          padding: 64px 0;
          background: var(--off);
          border-bottom: 1px solid var(--border);
        }

        .bridge-page .sec-label {
          display: block; font-family: var(--mono);
          font-size: 11px; letter-spacing: .14em;
          text-transform: uppercase; color: var(--blue);
          margin-bottom: 8px;
        }
        .bridge-page .sec-title {
          font-family: var(--serif);
          font-size: clamp(21px, 3.2vw, 28px);
          font-weight: 900; color: var(--navy);
          line-height: 1.3; margin-bottom: 10px;
        }
        .bridge-page .sec-intro { font-size: 16px; color: var(--gray-600); margin-bottom: 32px; max-width: 580px; }

        .bridge-page .risk-box {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 10px; overflow: hidden;
          box-shadow: 0 2px 16px rgba(10,22,40,.06);
        }

        .bridge-page .risk-header {
          background: var(--navy);
          padding: 16px 24px;
          display: flex; align-items: center; gap: 12px;
          text-align: left;
        }
        .bridge-page .risk-header-text { color: #c8dae8; font-size: 13px; }
        .bridge-page .risk-header-text strong { color: white; display: block; font-size: 15px; margin-bottom: 2px; }

        .bridge-page .risk-body { padding: 24px; }

        .bridge-page .level-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--mono); font-size: 10px;
          letter-spacing: .1em; text-transform: uppercase;
          font-weight: 500; padding: 3px 10px;
          border-radius: 3px; margin-bottom: 12px;
        }
        .bridge-page .lv1 { background:#fefce8; color:#a16207; border:1px solid #fde68a; }
        .bridge-page .lv2 { background:#fff7ed; color:#c2410c; border:1px solid #fed7aa; }
        .bridge-page .lv3 { background:#fef2f2; color:#b91c1c; border:1px solid #fecaca; }

        .bridge-page .sym-list { list-style: none; margin-bottom: 24px; }
        .bridge-page .sym-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 10px 0; border-bottom: 1px solid var(--gray-100);
          cursor: pointer; user-select: none;
        }
        .bridge-page .sym-item:last-child { border-bottom: none; }

        .bridge-page .sym-check {
          width: 22px; height: 22px; flex-shrink: 0;
          border: 2px solid var(--border); border-radius: 4px;
          margin-top: 1px; display: flex;
          align-items: center; justify-content: center;
          background: white; transition: all .2s ease;
        }
        .bridge-page .sym-item.lv1-i.checked .sym-check { background:#d97706; border-color:#d97706; }
        .bridge-page .sym-item.lv2-i.checked .sym-check { background:#ea580c; border-color:#ea580c; }
        .bridge-page .sym-item.lv3-i.checked .sym-check { background:var(--red); border-color:var(--red); }
        .bridge-page .sym-item.checked .sym-check::after { content:'✓'; color:white; font-size:13px; font-weight:700; }

        .bridge-page .sym-text { font-size: 15px; color: var(--text); line-height: 1.5; text-align: left; }
        .bridge-page .sym-pts {
          margin-left: auto; flex-shrink: 0;
          font-family: var(--mono); font-size: 11px;
          color: var(--gray-400); padding-top: 3px;
        }

        .bridge-page .score-bar { background: var(--gray-100); border-radius: 6px; height: 8px; margin-bottom: 18px; overflow: hidden; }
        .bridge-page .score-fill { height: 100%; border-radius: 6px; width: 0; background: var(--blue); transition: width .5s ease, background .5s ease; }

        .bridge-page .dyn-cta {
          width: 100%;
          padding: 16px 24px; border: none; border-radius: 6px;
          font-size: 16px; font-weight: 700;
          font-family: var(--sans); cursor: pointer;
          text-align: center; text-decoration: none;
          transition: all .3s ease; letter-spacing: .01em;
        }
        .bridge-page .st1 { background:#64748b; color:white; display:block; }
        .bridge-page .st2 { background:var(--amber); color:white; display:block; animation: bridge-po 2s ease-in-out infinite; }
        .bridge-page .st3 { background:var(--red); color:white; display:block; animation: bridge-shake .5s ease-in-out; }
        .bridge-page .st4 { background:var(--red-dark); color:white; display:block; box-shadow:0 4px 20px rgba(192,57,43,.4); }

        @keyframes bridge-po    { 0%,100%{opacity:1} 50%{opacity:.85} }
        @keyframes bridge-shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }

        .bridge-page .dyn-micro { text-align:center; font-size:12px; color:var(--gray-400); margin-top:10px; font-family:var(--mono); min-height:18px; }

        .bridge-page .s-cause {
          padding: 64px 0;
          background: var(--navy);
        }
        .bridge-page .s-cause .sec-label { color: var(--teal-light); }
        .bridge-page .s-cause .sec-title { color: white; margin-bottom: 28px; text-align: left; }

        .bridge-page .cause-body {
          font-size: 17px; color: #8aadcc;
          line-height: 1.8; max-width: 660px;
          margin-bottom: 20px;
          text-align: left;
        }
        .bridge-page .cause-body strong { color: white; }

        .bridge-page .cause-gap {
          margin-top: 36px;
          padding: 28px 28px;
          background: rgba(255,255,255,.04);
          border: 1px dashed rgba(29,111,164,.5);
          border-radius: 8px;
          text-align: center;
        }
        .bridge-page .cause-gap p {
          font-family: var(--serif);
          font-size: 18px; font-style: italic;
          color: #8aadcc; line-height: 1.6;
          margin-bottom: 24px;
          text-align: center;
        }
        .bridge-page .cause-gap p strong { color: white; font-style: normal; }

        .bridge-page .cta-teal {
          display: inline-block;
          background: var(--teal); color: white;
          padding: 16px 38px; border-radius: 6px;
          font-size: 17px; font-weight: 700;
          text-decoration: none; font-family: var(--sans);
          letter-spacing: .02em;
          transition: all .2s ease;
        }
        .bridge-page .cta-teal:hover { background: var(--teal-light); transform: translateY(-2px); }
        .bridge-page .cta-gap-note { font-size:11px; color:#3d5a75; margin-top:12px; font-family:var(--mono); }

        .bridge-page footer {
          background: #060e1c;
          padding: 36px 0;
          color: #3d5a75; font-size: 11px; line-height: 1.7;
        }
        .bridge-page .footer-links { display:flex; gap:18px; margin-bottom:16px; flex-wrap:wrap; }
        .bridge-page .footer-links a { color:#3d5a75; text-decoration:none; transform: none; }
        .bridge-page .footer-links a:hover { color:#5a7a99; }
        .bridge-page .footer-disc { max-width:660px; text-align: left; }
        .bridge-page .footer-disc p { margin-bottom:8px; }

        .bridge-page #sticky {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          background: var(--blue); z-index: 999;
          padding: 14px 20px;
          box-shadow: 0 -4px 20px rgba(10,22,40,.25);
        }
        .bridge-page #sticky a {
          display: block; text-align: center;
          color: white; font-size: 16px; font-weight: 700;
          text-decoration: none; font-family: var(--sans);
        }
        .bridge-page #sticky .s-sub { font-size:11px; opacity:.75; font-family:var(--mono); margin-top:2px; }

        @media (max-width: 767px) {
          .bridge-page { padding-bottom: 80px; }
          .bridge-page .s-hook { padding: 36px 0 32px; }
        }
      `}</style>

      <div className="topbar">
        Conteúdo educativo · <span>Segurança Domiciliar para Idosos</span> · 2026
      </div>

      <header className="site-header">
        <div className="hinner">
          <span className="logo-badge">Saúde &amp; Segurança</span>
          <span className="header-label">Prevenção de Quedas</span>
          <span className="header-time">Leitura: ~2 min</span>
        </div>
      </header>

      {/* SEÇÃO 1 — HOOK */}
      <section ref={hookRef} className="s-hook">
        <div className="wrap">
          <span className="tag">Avaliação · Risco Domiciliar</span>

          <h1>
            O lar que parece seguro pode ser <em>o maior risco</em> para o seu familiar idoso — e quase ninguém percebe até ser tarde
          </h1>

          <p className="sub">
            Fisioterapeutas e geriatras identificaram um padrão silencioso que conecta a maioria das quedas em idosos no Brasil. O ponto de partida é sempre o mesmo: a própria casa.
          </p>

          <Link to="/venda" className="cta-main">
            Descobrir o Que Está Por Trás das Quedas →
          </Link>
          <p className="cta-note">acesso imediato · sem cadastro</p>
        </div>
      </section>

      {/* SEÇÃO 2 — AVALIAÇÃO DE RISCO */}
      <section className="s-risk">
        <div className="wrap">
          <span className="sec-label">Avaliação de risco</span>
          <h2 className="sec-title">A casa do seu familiar apresenta esses sinais de alerta?</h2>
          <p className="sec-intro">Marque as situações que você reconhece. O nível de risco é calculado automaticamente.</p>

          <div className="risk-box">
            <div className="risk-header">
              <span style={{ fontSize: '20px' }}>🔬</span>
              <div className="risk-header-text">
                <strong>Avaliação de Risco Domiciliar</strong>
                Identifique os pontos críticos no ambiente do seu idoso
              </div>
            </div>

            <div className="risk-body">
              {/* NÍVEL 1 */}
              <span className="level-badge lv1">⚠ Nível 1 — Atenção</span>
              <ul className="sym-list">
                {items.filter(i => i.level === 1).map(item => (
                  <li
                    key={item.id}
                    className={`sym-item lv1-i ${selectedItems[item.id] ? 'checked' : ''}`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="sym-check"></div>
                    <span className="sym-text">{item.text}</span>
                    <span className="sym-pts">+{item.points}</span>
                  </li>
                ))}
              </ul>

              {/* NÍVEL 2 */}
              <span className="level-badge lv2">🔶 Nível 2 — Moderado</span>
              <ul className="sym-list">
                {items.filter(i => i.level === 2).map(item => (
                  <li
                    key={item.id}
                    className={`sym-item lv2-i ${selectedItems[item.id] ? 'checked' : ''}`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="sym-check"></div>
                    <span className="sym-text">{item.text}</span>
                    <span className="sym-pts">+{item.points}</span>
                  </li>
                ))}
              </ul>

              {/* NÍVEL 3 */}
              <span className="level-badge lv3">🔴 Nível 3 — Urgente</span>
              <ul className="sym-list">
                {items.filter(i => i.level === 3).map(item => (
                  <li
                    key={item.id}
                    className={`sym-item lv3-i ${selectedItems[item.id] ? 'checked' : ''}`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="sym-check"></div>
                    <span className="sym-text">{item.text}</span>
                    <span className="sym-pts">+{item.points}</span>
                  </li>
                ))}
              </ul>

              {/* BARRA + CTA DINÂMICO */}
              <div className="score-bar">
                <div
                  className="score-fill"
                  style={{
                    width: `${fillWidth}%`,
                    backgroundColor: getFillBackground()
                  }}
                />
              </div>

              {ctaConfig && (
                <Link
                  to="/venda"
                  className={`dyn-cta ${ctaConfig.className}`}
                  style={{ display: 'block' }}
                >
                  {ctaConfig.text}
                </Link>
              )}

              <p className="dyn-micro">{ctaConfig?.micro || ''}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — CAUSA + CTA FINAL */}
      <section className="s-cause">
        <div className="wrap">
          <span className="sec-label">O culpado invisível</span>
          <h2 className="sec-title">A verdadeira causa não está no idoso — está no ambiente</h2>

          <p className="cause-body">
            O que fisioterapeutas e geriatras constatam repetidamente é direto: <strong>a grande maioria dos lares brasileiros nunca foi avaliada com olhar de segurança para idosos.</strong> Os riscos estão presentes há anos, invisíveis, esperando o momento em que o corpo já não consegue compensá-los.
          </p>
          <p className="cause-body">
            E quando esse momento chega, acontece de madrugada, no corredor, no banheiro — nos lugares mais comuns da casa. <strong>Não é falta de cuidado. É falta de informação sobre o que olhar — e em qual ordem agir.</strong>
          </p>

          <div className="cause-gap">
            <p>
              Mas o que exatamente esses profissionais recomendam avaliar — <strong>cômodo por cômodo</strong> — para agir antes que aconteça?
            </p>
            <Link to="/venda" className="cta-teal">
              Ver o Que Fazer Agora →
            </Link>
            <p className="cta-gap-note">acesso imediato · sem cadastro prévio</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-links">
            <Link to="/privacidade">Política de Privacidade</Link>
            <Link to="/termos">Termos de Uso</Link>
            <a href="mailto:contato@larseguro.com.br">Contato</a>
          </div>
          <div className="footer-disc">
            <p>© 2026 Saúde &amp; Segurança Editorial. Todos os direitos reservados.</p>
            <p>AVISO LEGAL: Este site não faz parte do site do Facebook ou da Meta Platforms Inc. FACEBOOK é uma marca comercial da META PLATFORMS, INC.</p>
            <p>O conteúdo aqui exposto é destinado a fornecer informações educativas sobre segurança residencial para idosos e não substitui o acompanhamento de médico, geriatra ou profissional de saúde.</p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE */}
      {isStickyVisible && (
        <div id="sticky" className="md:hidden">
          <Link to="/venda">
            Ver o Que Fazer Agora →
            <div className="s-sub">acesso imediato</div>
          </Link>
        </div>
      )}
    </div>
  );
}
