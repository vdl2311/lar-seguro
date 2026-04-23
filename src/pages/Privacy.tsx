import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export function Privacy() {
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
          <h1 className="font-serif font-bold text-3xl sm:text-4xl mb-8 text-slate-900">Política de Privacidade</h1>
          
          <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg">
            <p>Nós valorizamos muito a sua privacidade. Esta seção detalha como coletamos, usamos, armazenamos e protegemos as suas informações pessoais, de acordo com a Lei Geral de Proteção de Dados (LGPD).</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 font-serif">1. Coleta de Dados Pessoais</h2>
            <p>Coletamos informações solicitadas ao realizar a compra de nosso infoproduto (como nome, endereço de e-mail e dados de pagamento) e ao interagir com nossas páginas na internet. Essas informações visam garantir a entrega do material e o suporte adequado.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 font-serif">2. Uso das Informações</h2>
            <p>Os seus dados serão utilizados exclusivamente para processamento do seu pedido, envio do material adquirido, atualizações relacionadas ao produto e suporte. Eventualmente, poderemos enviar novidades ou ofertas que consideramos úteis para o seu cenário.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 font-serif">3. Proteção e Segurança</h2>
            <p>Implementamos medidas de segurança técnicas e organizacionais para proteger as informações pessoais. Os dados financeiros (como informações de cartão de crédito) não são armazenados em nossos servidores, sendo processados por plataformas de pagamento terceirizadas de extrema confiança.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 font-serif">4. Compartilhamento de Dados</h2>
            <p>Não vendemos, trocamos ou cedemos dados pessoais para terceiros, sob nenhuma hipótese. Seus dados só são compartilhados estritamente com os parceiros necessários para que o processamento do pagamento e aprovação do pedido sejam realizados (plataformas como Hotmart, Kiwify ou similares).</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 font-serif">5. Direitos do Usuário</h2>
            <p>Você tem o total direito de solicitar a alteração, remoção ou conferência dos dados que mantemos em nossa base. Qualquer solicitação desse tipo (ou para a exclusão de lista de e-mails de comunicação) pode ser feita via e-mail.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4 font-serif">6. Alterações da Política</h2>
            <p>Podemos modificar esta política a qualquer momento. Em caso de mudanças significativas, deixaremos destacado em nossa página para garantir transparência nas tratativas referentes aos dados e segurança dos usuários.</p>

            <div className="mt-12 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <strong className="block text-slate-900 mb-2">Contato Encarregado LGPD / Dúvidas:</strong>
              E-mail: <a href="mailto:vdlmaketdigital@gmail.com" className="text-blue-600 font-medium hover:underline">vdlmaketdigital@gmail.com</a>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
