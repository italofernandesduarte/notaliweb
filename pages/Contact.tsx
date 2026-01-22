
import React from 'react';
import { Send, Instagram, Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log(`Sending interest from: ${email} to vendas@notaliweb.com`);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.541 4.189 1.57 6.04L0 24l6.117-1.605a11.845 11.845 0 005.925 1.586h.005c6.632 0 12.028-5.396 12.032-12.03a11.81 11.81 0 00-3.536-8.509z"/>
    </svg>
  );

  return (
    <div className="py-12 md:py-24 px-4 min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 text-center lg:text-left">Vamos escalar?</h2>
            <p className="text-slate-400 text-sm md:text-lg mb-8 max-w-md font-bold mx-auto lg:mx-0 text-center lg:text-left">
              Escolha o canal de sua preferência. Nossa equipe estratégica está pronta para analisar seu projeto.
            </p>
            
            <div className="space-y-3 md:space-y-4">
              <a 
                href="https://w.app/notaliweb" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 md:p-6 glass rounded-xl md:rounded-2xl group border border-green-500/10 shadow-lg shadow-green-500/5"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 mr-4 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="text-white font-bold group-hover:text-green-400 transition-colors text-sm md:text-base">WhatsApp Business</p>
                  <p className="text-slate-500 text-[10px] md:text-sm">Resposta imediata via link direto</p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-green-400 opacity-50" />
              </a>

              <a 
                href="https://www.instagram.com/notaliweb?igsh=dm9kamxiYjU1bHk3&utm_source=qr" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 md:p-6 glass rounded-xl md:rounded-2xl group border border-pink-500/10 shadow-lg shadow-pink-500/5"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400 mr-4 group-hover:bg-pink-500 group-hover:text-white transition-all">
                  <Instagram size={20} className="md:size-[24px]" />
                </div>
                <div>
                  <p className="text-white font-bold group-hover:text-pink-400 transition-colors text-sm md:text-base">Instagram</p>
                  <p className="text-slate-500 text-[10px] md:text-sm">@notaliweb</p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-pink-400 opacity-50" />
              </a>
            </div>
          </div>

          <div className="glass p-6 md:p-12 rounded-2xl md:rounded-[40px] border border-white/5 relative overflow-hidden">
            <h3 className="text-xl md:text-2xl font-black text-white mb-4 md:mb-8">Interesse Rápido</h3>
            <p className="text-slate-400 mb-6 md:mb-8 font-bold text-xs md:text-base">Deixe seu e-mail para que nosso time de vendas entre em contato em menos de 24h.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors lowercase text-sm"
              />
              
              <button 
                type="submit"
                disabled={submitted}
                className={`w-full p-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center transition-all text-xs md:text-sm ${
                  submitted ? 'bg-green-600 text-white' : 'btn-gradient text-white shadow-lg shadow-purple-900/20'
                }`}
              >
                {submitted ? (
                  <>E-mail Enviado! <Send size={16} className="ml-2" /></>
                ) : (
                  <>Enviar para Vendas <ArrowRight size={16} className="ml-2" /></>
                )}
              </button>
            </form>
            
            <p className="text-[9px] text-center text-slate-500 mt-6 uppercase tracking-[0.2em] font-black">
              vendas@notaliweb.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
