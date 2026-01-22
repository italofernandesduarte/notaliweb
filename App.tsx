
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';

const BrandIcon = ({ className = "w-10 h-10 md:w-14 md:h-14" }: { className?: string }) => (
  <div className="relative flex items-center justify-center">
    <img 
      src="apple-touch-icon.png" 
      alt="Notaliweb Logo" 
      className={`${className} object-contain brand-glow rounded-lg md:rounded-xl`}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        const parent = e.currentTarget.parentElement;
        if (parent && !parent.querySelector('.fallback-icon')) {
          const div = document.createElement('div');
          div.className = 'fallback-icon w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg md:rounded-xl flex items-center justify-center';
          div.innerHTML = '<span class="text-white font-black text-lg md:text-xl">N</span>';
          parent.prepend(div);
        }
      }}
    />
  </div>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.541 4.189 1.57 6.04L0 24l6.117-1.605a11.845 11.845 0 005.925 1.586h.005c6.632 0 12.028-5.396 12.032-12.03a11.81 11.81 0 00-3.536-8.509z"/>
  </svg>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre nós', path: '/sobre-nos' },
    { name: 'Contato', path: '/contato' },
    { name: 'Suporte', path: '/suporte' },
  ];

  const socialLinks = [
    { name: 'WhatsApp', icon: <WhatsAppIcon />, url: 'https://w.app/notaliweb', hoverClass: 'hover:text-green-400' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/notaliweb?igsh=dm9kamxiYjU1bHk3&utm_source=qr', hoverClass: 'hover:text-pink-400' },
    { name: 'Email', icon: <Mail size={20} />, url: 'mailto:vendas@notaliweb.com', hoverClass: 'hover:text-cyan-400' },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 h-16 md:h-24 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
          <div className="flex justify-between items-center h-full">
            <Link to="/" className="flex items-center space-x-3 group" onClick={() => setIsMenuOpen(false)}>
              <BrandIcon className="w-9 h-9 md:w-14 md:h-14" />
              <div className="flex flex-col -space-y-1">
                <span className="text-lg md:text-3xl font-black tracking-tighter text-white">
                  Notali<span className="text-cyan-400">web</span>
                </span>
                <span className="text-[5px] md:text-[8px] uppercase tracking-[0.2em] md:tracking-[0.4em] font-extrabold text-slate-500">Technology for Business</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-10">
              <nav className="flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-extrabold uppercase tracking-widest transition-colors hover:text-cyan-400 ${
                      location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center space-x-6 border-l border-white/10 pl-10">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`text-slate-400 transition-all hover:scale-125 ${social.hoverClass}`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white p-2" aria-label="Menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div className={`lg:hidden fixed inset-0 top-16 bg-slate-950/98 backdrop-blur-2xl z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <nav className="flex flex-col p-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl font-black p-4 rounded-xl transition-all ${
                  location.pathname === link.path ? 'bg-white/5 text-cyan-400 pl-8' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-white/5 flex justify-center space-x-10">
               {socialLinks.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 scale-125">
                  {social.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-16 md:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/suporte" element={<Support />} />
        </Routes>
      </main>

      <footer className="bg-slate-950 border-t border-white/5 py-10 md:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-4 md:mb-6">
              <BrandIcon className="w-9 h-9 md:w-12 md:h-12" />
              <span className="text-xl md:text-2xl font-bold text-white">Notali<span className="text-cyan-400">web</span></span>
            </div>
            <p className="text-slate-400 text-xs md:text-sm max-w-xs mx-auto md:mx-0 leading-relaxed font-medium">
              Especialistas em infraestrutura digital de alta performance. Entregamos resultados escaláveis através de tecnologia de ponta.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-white font-black mb-4 md:mb-6 text-[10px] uppercase tracking-[0.3em]">Explorar</h4>
            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-slate-400 font-bold">
              {navLinks.map(l => <Link key={l.path} to={l.path} className="hover:text-cyan-400 transition-colors">{l.name}</Link>)}
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-white font-black mb-4 md:mb-6 text-[10px] uppercase tracking-[0.3em]">Canais de Contato</h4>
            <div className="flex flex-col space-y-2 mb-6">
              <a href="mailto:vendas@notaliweb.com" className="text-slate-400 font-bold hover:text-cyan-400 transition-colors lowercase text-sm tracking-wide">vendas@notaliweb.com</a>
              <a href="mailto:suporte@notaliweb.com" className="text-slate-400 font-bold hover:text-cyan-400 transition-colors lowercase text-sm tracking-wide">suporte@notaliweb.com</a>
            </div>
            <div className="flex space-x-6 md:space-x-8">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`text-slate-400 transition-all hover:scale-125 ${social.hoverClass}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 md:mt-16 pt-8 border-t border-white/5 text-center text-slate-600 text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-black">
          © 2026 Notaliweb
        </div>
      </footer>
    </div>
  );
};

export default App;
