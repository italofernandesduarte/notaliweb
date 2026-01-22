
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Globe, BarChart3, Package, Crown, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const packages = [
    {
      title: "Long Page de Alta Conversão",
      icon: <Layout className="text-purple-400" />,
      for: "Ideal para lançamento de produtos e campanhas específicas.",
      benefits: ["Foco total em vendas", "Design persuasivo", "Carregamento ultra-rápido"],
      description: "Páginas otimizadas para guiar o usuário em uma jornada de compra sem distrações."
    },
    {
      title: "Site Interativo / Completo",
      icon: <Globe className="text-cyan-400" />,
      for: "Empresas que precisam de autoridade e presença sólida.",
      benefits: ["SEO Avançado", "Gerenciamento de conteúdo", "Design responsivo premium"],
      description: "Uma estrutura digital robusta que representa a grandeza da sua marca 24h por dia."
    },
    {
      title: "Marketing Digital Estratégico",
      icon: <BarChart3 className="text-blue-400" />,
      for: "Negócios focados em ROI e crescimento acelerado.",
      benefits: ["Tráfego qualificado", "Análise de métricas", "Gestão de performance"],
      description: "Estratégias agressivas baseadas em dados para dominar seu nicho de mercado."
    },
    {
      title: "Combo Site + Marketing",
      icon: <Package className="text-indigo-400" />,
      for: "Pequenas e médias empresas buscando eficiência máxima.",
      benefits: ["Sinergia total", "Unificação de canais", "Custo-benefício otimizado"],
      description: "A solução integrada definitiva para quem não quer perder tempo gerenciando múltiplos fornecedores."
    },
    {
      title: "Combo SaaS Premium",
      icon: <Crown className="text-yellow-500" />,
      for: "Líderes de mercado que exigem o topo da performance.",
      benefits: ["Hospedagem VIP", "Suporte prioritário 24/7", "Evolução contínua inclusa"],
      description: "Presença digital completa e inabalável. O máximo que a tecnologia pode oferecer para o seu negócio."
    }
  ];

  return (
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Soluções SaaS Sob Medida</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Não entregamos modelos prontos. Construímos ferramentas de crescimento personalizadas para o seu ecossistema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <div key={idx} className="glass group p-8 rounded-3xl flex flex-col h-full border border-white/5 hover:border-cyan-500/50 transition-all">
              <div className="mb-6 w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-3xl">
                {pkg.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">{pkg.for}</p>
              <p className="text-slate-400 text-sm mb-6 flex-grow">{pkg.description}</p>
              
              <ul className="space-y-3 mb-8">
                {pkg.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-center text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-slate-500 mb-4">
                  Valores personalizados fechados diretamente com nossa consultoria, garantindo investimento abaixo da média de mercado.
                </p>
                <Link to="/contato" className="block text-center py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">
                  Solicitar Proposta
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contato" className="inline-flex items-center px-10 py-5 text-xl font-bold text-white btn-gradient rounded-full">
            QUERO CRESCER COM A NOTALIWEB
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
