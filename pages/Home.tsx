
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Cpu, Rocket, ChevronRight, CheckCircle2, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full bg-[#020617]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-[95vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-16 pb-40 md:py-12">
        {/* Layer 1: The Grid (Visible everywhere) */}
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.2] md:opacity-[0.15]"></div>
        
        {/* Layer 2: The Radial Glow/Mask (Consistent with PC) */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_80%)]"></div>
        
        {/* Animated Background Tech Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 md:opacity-25">
           <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 150L300 150L350 200L700 200L750 150L1200 150L1250 200L1440 200" stroke="#a855f7" strokeWidth="2" strokeDasharray="10 10" />
              <path d="M1440 650L1100 650L1050 600L700 600L650 650L200 650L150 600L0 600" stroke="#06b6d4" strokeWidth="2" strokeDasharray="10 10" />
           </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 text-center max-w-5xl w-full">
          <div className="animate-in fade-in zoom-in duration-1000">
            <h1 className="text-6xl sm:text-7xl md:text-[9rem] font-black mb-6 md:mb-12 leading-[0.85] tracking-tighter drop-shadow-[0_15px_35px_rgba(0,0,0,1)]">
              <span className="text-gradient">Notaliweb</span>
            </h1>
            
            <div className="mb-12 md:mb-16 space-y-8 md:space-y-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-slate-100 md:text-slate-400 font-extrabold text-[11px] md:text-sm tracking-[0.15em] md:tracking-widest uppercase drop-shadow-md">
                <p className="flex items-center"><CheckCircle2 className="mr-2 text-cyan-400 h-4 w-4 md:h-6 md:w-6" /> Soluções de Impacto</p>
                <div className="hidden md:block w-px h-6 bg-slate-800"></div>
                <p className="flex items-center"><CheckCircle2 className="mr-2 text-purple-400 h-4 w-4 md:h-6 md:w-6" /> Tecnologia Escalável</p>
                <div className="hidden md:block w-px h-6 bg-slate-800"></div>
                <p className="flex items-center"><CheckCircle2 className="mr-2 text-indigo-400 h-4 w-4 md:h-6 md:w-6" /> Foco em Resultados</p>
              </div>

              <div className="px-2">
                <Link 
                  to="/contato" 
                  className="w-full md:w-auto inline-flex items-center justify-center px-10 md:px-14 py-5 md:py-6 text-xl md:text-2xl font-black text-white btn-gradient rounded-2xl md:rounded-[2.5rem] shadow-[0_25px_60px_rgba(168,85,247,0.5)] group transition-all"
                >
                  Expandir Negócio <Rocket className="ml-3 md:ml-4 h-6 w-6 md:h-8 md:w-8 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Icons */}
        <div className="absolute top-20 right-4 md:right-40 animate-float opacity-10 md:opacity-20 hidden sm:block">
          <Cpu size={80} className="md:size-[180px] text-purple-500 brand-glow" />
        </div>
        <div className="absolute bottom-40 left-4 md:left-40 animate-float opacity-10 md:opacity-20 hidden sm:block" style={{ animationDelay: '2.5s' }}>
          <TrendingUp size={60} className="md:size-[160px] text-cyan-500 brand-glow" />
        </div>
      </section>

      {/* Highlights Section - Começa em cima do final do Hero para efeito de encaixe */}
      <section className="-mt-32 md:mt-0 py-12 md:py-32 relative px-4 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
            {/* Card 1 */}
            <div className="glass p-7 md:p-12 rounded-2xl md:rounded-[3.5rem] border-t border-purple-500/30 hover:scale-[1.01] transition-all group shadow-2xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500/10 rounded-xl md:rounded-xl flex items-center justify-center mb-5 md:mb-8 text-purple-400">
                <Zap size={24} className="md:size-[28px]" />
              </div>
              <h3 className="text-xl md:text-3xl font-black text-white mb-3 md:mb-6 tracking-tight">Nossos Serviços</h3>
              <p className="text-slate-400 text-[14px] md:text-base leading-relaxed font-bold opacity-90 group-hover:opacity-100 transition-opacity">
                Desenvolvemos soluções digitais completas. Criamos sites interativos, long pages de alta conversão e estratégias de marketing digital.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass p-7 md:p-12 rounded-2xl md:rounded-[3.5rem] border-t border-cyan-500/30 hover:scale-[1.01] transition-all group shadow-2xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-cyan-500/10 rounded-xl md:rounded-xl flex items-center justify-center mb-5 md:mb-8 text-cyan-400">
                <TrendingUp size={24} className="md:size-[28px]" />
              </div>
              <h3 className="text-xl md:text-3xl font-black text-white mb-3 md:mb-6 tracking-tight">Por que escolher</h3>
              <p className="text-slate-400 text-[14px] md:text-base leading-relaxed font-bold opacity-90 group-hover:opacity-100 transition-opacity">
                Não entregamos apenas projetos, entregamos resultados. Foco em velocidade e conversão para garantir o crescimento do seu negócio.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass p-7 md:p-12 rounded-2xl md:rounded-[3.5rem] border-t border-indigo-500/30 hover:scale-[1.01] transition-all group shadow-2xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-500/10 rounded-xl md:rounded-xl flex items-center justify-center mb-5 md:mb-8 text-indigo-400">
                <ShieldCheck size={24} className="md:size-[28px]" />
              </div>
              <h3 className="text-xl md:text-3xl font-black text-white mb-3 md:mb-6 tracking-tight">Infraestrutura</h3>
              <p className="text-slate-400 text-[14px] md:text-base leading-relaxed font-bold opacity-90 group-hover:opacity-100 transition-opacity">
                Tecnologia segura para armazenamento, backup e identidade digital. Estabilidade total para sua marca dominar o mercado.
              </p>
            </div>
          </div>

          {/* Banner Oferta */}
          <div className="mt-12 md:mt-32 glass p-px rounded-[2rem] md:rounded-[4.5rem] overflow-hidden relative group">
            <div className="absolute inset-0 btn-gradient opacity-5 group-hover:opacity-10 transition-opacity"></div>
            <div className="bg-[#020617] rounded-[calc(2rem-1px)] md:rounded-[calc(4.5rem-1px)] p-8 md:p-24 text-center relative z-10 border border-white/5">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-black text-[10px] md:text-xs uppercase tracking-widest">
                Oferta de Lançamento
              </div>
              <h2 className="text-3xl md:text-7xl font-black text-white mb-4 md:mb-10 tracking-tighter leading-tight md:leading-none">
                O primeiro mês é <br/><span className="text-gradient">por nossa conta</span>
              </h2>
              <p className="text-slate-300 md:text-xl max-w-3xl mx-auto mb-8 md:mb-14 font-bold leading-relaxed drop-shadow-sm">
                Experimente o ecossistema Notaliweb com risco zero e suporte total durante a transição.
              </p>
              <Link 
                to="/contato" 
                className="inline-flex items-center text-cyan-400 font-black text-sm md:text-xl hover:text-purple-400 transition-all uppercase tracking-[0.2em]"
              >
                Ativar período <ChevronRight className="ml-1 h-5 w-5 md:h-8 md:w-8" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
