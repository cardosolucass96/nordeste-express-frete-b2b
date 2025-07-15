
import React from 'react';
import { Shield, Zap, MapPin, Headphones, FileText, TrendingDown, Truck } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Economize até 40%",
      description: "Reduza custos de frete com nossa modalidade fracionada. Pague só pelo espaço que usar.",
      color: "bg-[#e52021]/10"
    },
    {
      icon: Truck,
      title: "Frota Própria + Parceiros",
      description: "Caminhões dedicados para grandes lotes e rede confiável para cargas fracionadas.",
      color: "bg-[#e52021]/10"
    },
    {
      icon: Shield,
      title: "Seguro Incluso",
      description: "Sua carga protegida com seguro completo e emissão de CTe por nossa conta.",
      color: "bg-[#e52021]/10"
    },
    {
      icon: Zap,
      title: "Rastreamento 24h",
      description: "Acompanhe sua carga em tempo real através do nosso sistema online.",
      color: "bg-[#e52021]/10"
    },
    {
      icon: MapPin,
      title: "Cobertura Completa",
      description: "Atendemos toda a rota SP → PE/SE/AL/RN/PB/CE com regularidade.",
      color: "bg-[#e52021]/10"
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Equipe comercial e operacional em horário comercial para resolver qualquer questão.",
      color: "bg-[#e52021]/10"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que Escolher a Vem Transportadora?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de uma década de experiência transportando cargas com segurança e eficiência
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group">
              <div className={`${benefit.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <benefit.icon className="w-6 h-6 text-[#e52021]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#122456] to-[#1e3a8a] rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Números que Comprovam Nossa Qualidade
            </h3>
            <p className="text-blue-200">
              Resultados construídos ao longo de mais de 10 anos de mercado
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#e52021] mb-2">10+</div>
              <div className="text-blue-200">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#e52021] mb-2">500+</div>
              <div className="text-blue-200">Empresas Atendidas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#e52021] mb-2">98%</div>
              <div className="text-blue-200">Entregas no Prazo</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#e52021] mb-2">24/7</div>
              <div className="text-blue-200">Rastreamento Online</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
