import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#111] text-white/40 py-16 text-center text-[0.75rem] leading-relaxed border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center gap-8 mb-8 font-medium">
          <Link to="/privacidade" className="hover:text-white/80 transition-colors">Política de Privacidade</Link>
          <Link to="/termos" className="hover:text-white/80 transition-colors">Termos de Uso</Link>
          <a href="mailto:contato@larseguro.com.br" className="hover:text-white/80 transition-colors">Contato</a>
        </div>
        
        <p className="mb-8">© 2026 Lar Seguro. Todos os direitos reservados.</p>

        <div className="max-w-2xl mx-auto space-y-4 pt-8 border-t border-white/5">
          <p>
            <strong className="text-white/60">AVISO LEGAL:</strong> Este site não faz parte do site do Facebook ou da Meta Platforms Inc. Além disso, este site não é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da META PLATFORMS, INC.
          </p>
          <p>
            O conteúdo aqui exposto é destinado a fornecer conhecimento e dicas residenciais, e não substitui o acompanhamento ou aconselhamento de um médico, geriatra ou profissional de saúde. As dicas visam promover a segurança e diminuir riscos, mas não podem garantir a ausência total de acidentes.
          </p>
        </div>
      </div>
    </footer>
  );
}
