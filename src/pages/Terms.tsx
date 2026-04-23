import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-medium mb-8 hover:underline">
          <ArrowLeft size={18} /> Voltar para a página inicial
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200"
        >
          <h1 className="font-serif font-bold text-3xl sm:text-4xl mb-8 text-slate-900">Termos de Uso</h1>
          
          <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg">
            <p>Ao navegar pelo nosso site ou adquirir nosso infoproduto ("Lar Seguro, Vida Ativa"), você concorda com os termos estabelecidos aqui. Recomendamos que leia com atenção.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 font-serif">1. Objeto</h2>
            <p>Este termo possui como finalidade regulamentar o uso e as diretrizes relacionadas à aquisição do material digital (Guia em PDF) comercializado diretamente pela nossa página. O material tem cunho educacional e informativo.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 font-serif">2. Direitos de Propriedade Intelectual</h2>
            <p>Todo o conteúdo deste site, do Ebook oferecido, bônus, textos, vídeos, layouts, sistemas e afins, pertencem aos autores e são protegidos pelas leis de Direitos Autorais internacionais e nacionais. É estritamente proibida qualquer forma de pirataria, distribuição não autorizada, compartilhamento gratuito, plágio, reprodução mecânica ou revenda indevida.</p>
            <p>A compra garante acesso individual e de uso pessoal ("uma licença") para consumir as informações, não garantindo de forma alguma autorização de uso comercial ou de replicação do conhecimento para lucro próprio.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 font-serif">3. Isenção de Responsabilidade</h2>
            <p>Como explicitado nos Avisos Legais do rodapé da nossa página inicial:<br/>
            O conteúdo é destinado a providenciar conhecimentos básicos e ideias. Ele NÃO substitui, de nenhuma forma, o contato ou direcionamento do cuidado da saúde atestado por um médico ou terapeuta ocupacional oficial acompanhando o caso presencialmente. A aplicação das sugestões não assegura a imunidade a eventuais acidentes e quedas futuras, visto as intempéries incertas relativas ao cotidiano orgânico e à fatalidades estruturais.</p>
            
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 font-serif">4. Política de Compra e Garantia</h2>
            <p>O produto possui uma garantia incondicional legal e estendida de 7 (sete) dias a contar do dia da aprovação/liberação do pagamento.</p>
            <p>Caso haja insatisfação com a qualidade, ou o consumidor acredite não haver congruência para a sua necessidade, bastará o envio de um e-mail para o endereço de suporte com a solicitação da devolução integral (cancelamento sem burocracias) do valor despendido, com as mesmas condições impostas e regulamentadas pelas plataformas de pagamento digital oficiais.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 font-serif">5. Aceitação e Vinculação</h2>
            <p>Ao clicar no botão de prosseguimento na tela que antecede o processador de pagamentos, bem como pela contínua utilização de nosso website, é compreendida aceitação prévia quanto a este documento juntamente com a Política de Privacidade estipulada em nossa subpágina.</p>

            <div className="mt-12 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <strong className="block text-slate-900 mb-2">Canal de Atendimento Legal:</strong>
              E-mail: <a href="mailto:vdlmaketdigital@gmail.com" className="text-blue-600 hover:underline font-medium">vdlmaketdigital@gmail.com</a>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
