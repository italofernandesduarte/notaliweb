
import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 text-center">Sobre Nós</h2>
        
        <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-8 leading-relaxed">
          <div className="glass p-8 md:p-12 rounded-3xl">
            <p className="text-xl text-white font-medium mb-8">
              Somos uma empresa focada em agilidade, performance e integridade, pilares que sustentam cada solução que desenvolvemos. Para nós, tecnologia não é apenas visual ou funcional — é estratégia, crescimento e posicionamento de mercado.
            </p>
            
            <p>
              Nossa missão vai muito além de entregar um site ou uma campanha. Criamos soluções tecnológicas escaláveis, pensadas para resolver problemas reais, fortalecer marcas e impulsionar negócios no ambiente digital. Cada projeto é construído com foco em conversão, performance e alinhamento total aos objetivos do cliente.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="flex flex-col items-center text-center p-6 bg-slate-800/50 rounded-2xl">
                <Target size={40} className="text-purple-500 mb-4" />
                <h4 className="text-white font-bold mb-2">Resultados Reais</h4>
                <p className="text-sm">Trabalhamos com processos eficientes, comunicação clara e métricas reais.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-slate-800/50 rounded-2xl">
                <Lightbulb size={40} className="text-cyan-500 mb-4" />
                <h4 className="text-white font-bold mb-2">Inovação</h4>
                <p className="text-sm">Aplicamos boas práticas de desenvolvimento e design moderno.</p>
              </div>
            </div>

            <p>
              Aplicamos boas práticas de desenvolvimento, design moderno e estratégias digitais atualizadas para garantir segurança, estabilidade e alto desempenho.
            </p>

            <p>
              Acreditamos em parcerias de longo prazo. Nosso compromisso não termina na entrega: acompanhamos, otimizamos e evoluímos cada solução, sempre buscando inovação contínua e vantagem competitiva.
            </p>

            <p className="border-l-4 border-cyan-500 pl-6 italic text-slate-400">
              Em um cenário tecnológico em constante evolução, nossa proposta é clara: não apenas acompanhar o mercado, mas liderar transformações, entregando soluções que realmente fazem a diferença.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
