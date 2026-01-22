
import React from 'react';
import { Send, ShieldQuestion, ArrowRight, CheckCircle } from 'lucide-react';

const Support: React.FC = () => {
  const [formData, setFormData] = React.useState({ email: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending support request to suporte@notaliweb.com', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="py-12 md:py-24 px-4 flex items-center justify-center min-h-[70vh]">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 glass rounded-2xl md:rounded-[2.5rem] text-cyan-400 mb-6 md:mb-8 border border-cyan-500/20 shadow-xl shadow-cyan-500/5">
            <ShieldQuestion size={32} className="md:size-[48px]" />
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6">Canal de Suporte</h2>
          <p className="text-slate-400 font-bold text-sm md:text-lg">
            Dificuldades técnicas ou dúvidas operacionais? Nossa equipe de suporte está pronta para te ajudar.
          </p>
        </div>

        <div className="glass p-6 md:p-14 rounded-2xl md:rounded-[3.5rem] border border-white/5 shadow-2xl shadow-cyan-950/20">
          {submitted ? (
            <div className="text-center py-8 md:py-12 animate-in fade-in zoom-in">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mx-auto mb-4 md:mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Mensagem Recebida!</h3>
              <p className="text-slate-400 font-medium text-xs md:text-base">Analisaremos sua solicitação e responderemos em seu e-mail o mais rápido possível.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-cyan-400 font-black hover:underline uppercase tracking-tighter text-sm"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div>
                <label className="block text-[9px] font-black text-slate-500 mb-2 ml-1 uppercase tracking-[0.3em]">Seu E-mail</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="exemplo@dominio.com"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl md:rounded-2xl p-4 md:p-5 text-white focus:outline-none focus:border-cyan-500 transition-colors lowercase font-medium text-sm"
                />
              </div>
              
              <div>
                <label className="block text-[9px] font-black text-slate-500 mb-2 ml-1 uppercase tracking-[0.3em]">Como podemos ajudar?</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  placeholder="Descreva seu problema ou dúvida com detalhes..."
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl md:rounded-3xl p-4 md:p-5 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none font-medium text-sm"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full p-4 md:p-6 rounded-xl md:rounded-2xl font-black text-white btn-gradient flex items-center justify-center uppercase tracking-widest shadow-xl shadow-purple-900/20 text-xs md:text-base"
              >
                Abrir Ticket de Suporte <Send size={16} className="ml-2 md:ml-3" />
              </button>
              
              <p className="text-center text-[8px] md:text-[10px] text-slate-600 font-black uppercase tracking-[0.2em]">
                suporte@notaliweb.com
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;
