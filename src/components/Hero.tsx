import React from 'react';
import { Button } from '@/components/ui/button';
import { Truck, Shield, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('cotacao')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#003B5C] to-blue-800 text-white overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Principal */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/dbf22778-80eb-4351-8ef9-2b6033381e4e.png" 
              alt="Vem Transportadora" 
              className="h-32 md:h-40 w-auto mx-auto"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center bg-[#FF4E00]/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Truck className="w-4 h-4 mr-2" />
            Mais de 10 anos transportando com segurança
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Seu transporte <span className="text-[#FF4E00]">seguro e ágil</span>
            <br />
            entre o <span className="text-[#FF4E00]">Sudeste</span> e o <span className="text-[#FF4E00]">Nordeste</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in">
            <span className="font-semibold text-white">Frota própria</span>, 
            <span className="font-semibold text-white"> rede de parceiros</span>, 
            <span className="font-semibold text-white"> cobertura SP-Nordeste</span>, 
            <span className="font-semibold text-white"> seguro incluso</span> e 
            <span className="font-semibold text-white"> rastreamento 24h</span>
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            <div className="flex items-center justify-center md:justify-start text-blue-100">
              <div className="bg-[#FF4E00]/20 p-3 rounded-full mr-4">
                <Shield className="w-6 h-6 text-[#FF4E00]" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Economize até 40%</div>
                <div className="text-sm">no frete fracionado</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start text-blue-100">
              <div className="bg-[#FF4E00]/20 p-3 rounded-full mr-4">
                <Clock className="w-6 h-6 text-[#FF4E00]" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Rastreamento</div>
                <div className="text-sm">em tempo real</div>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start text-blue-100">
              <div className="bg-[#FF4E00]/20 p-3 rounded-full mr-4">
                <MapPin className="w-6 h-6 text-[#FF4E00]" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Cobertura completa</div>
                <div className="text-sm">Sudeste ↔ Nordeste</div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex justify-center animate-fade-in">
            <Button 
              onClick={scrollToForm}
              className="bg-[#FF4E00] hover:bg-[#FF4E00]/90 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              size="lg"
            >
              Solicitar Orçamento Agora
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20 animate-fade-in">
            <p className="text-blue-200 mb-4">Empresas que já confiam na Vem Transportadora:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="bg-white/10 px-6 py-3 rounded-lg">500+ Empresas</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">98% Entregas no Prazo</div>
              <div className="bg-white/10 px-6 py-3 rounded-lg">24/7 Rastreamento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
