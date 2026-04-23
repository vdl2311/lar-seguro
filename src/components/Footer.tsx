import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0b1120] text-slate-400 py-16 text-center text-sm border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-[0.8rem] text-slate-500 text-justify sm:text-center max-w-4xl mx-auto space-y-5">
          <p>
            <strong className="text-slate-400">AVISO LEGAL E DE PUBLICIDADE:</strong><br />
            Este site não faz parte do site do Facebook ou da Meta Platforms Inc. Além disso, este site não é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da META PLATFORMS, INC.
          </p>
          <p>
            O conteúdo aqui exposto é destinado a fornecer conhecimento e dicas residenciais, e não substitui o acompanhamento ou aconselhamento de um médico, geriatra ou profissional de saúde. As dicas visam promover a segurança e diminuir riscos, mas não podem garantir a ausência total de acidentes.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/80">
          <div className="flex flex-wrap justify-center gap-6 mb-8 font-medium">
            <Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
            <a href="mailto:vdlmaketdigital@gmail.com" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>

        <p className="text-xs opacity-50 tracking-wider mt-4">© 2026 Lar Seguro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
