import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm pointer-events-none"
        >
          <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 pointer-events-auto flex flex-col gap-5 relative">
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 font-bold text-[0.95rem] uppercase tracking-wider">Aviso de Cookies</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nossa página utiliza cookies e tecnologias semelhantes para medir o desempenho, melhorar a sua experiência e personalizar o conteúdo que você vê. Ao continuar navegando neste site, você concorda plenamente com a nossa <Link to="/privacidade" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">Política de Privacidade</Link> e o uso restrito dessas tecnologias.
              </p>
            </div>
            <button
              onClick={handleAccept}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Concordar e Fechar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
