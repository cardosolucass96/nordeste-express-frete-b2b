
import React from 'react';
import { MapPin, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="quem-somos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quem Somos?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            A Vem Transportadora é uma empresa de logística fundada em 2014, na cidade de Carpina/PE. 
            Iniciamos nossas operações com o transporte de cargas indivisíveis, máquinas e veículos. 
            Em 2024, expandiremos nossos serviços para atender a cadeia logística de produtos fracionados, 
            cargas dedicadas e armazenamento.
          </p>
        </div>

        {/* Company Description */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nossa Missão
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Nossa missão é oferecer soluções logísticas eficientes, com excelência e responsabilidade, 
              sempre priorizando a satisfação de nossos clientes e parceiros. Conduzimos nossos negócios 
              com integridade, honestidade e respeito mútuo.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-[#e52021]/10 p-3 rounded-full">
                <Award className="w-6 h-6 text-[#e52021]" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">10+ Anos de Experiência</div>
                <div className="text-sm text-gray-600">Conectando Sudeste ao Nordeste</div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Nossa Sede
            </h3>
            <p className="text-blue-100">
              Estrategicamente posicionados para atender Sudeste e Nordeste
            </p>
          </div>

          <div className="flex justify-center">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Carpina/PE</h4>
              <p className="text-blue-100">Matriz, Armazéns de Carga Geral e Centro de Distribuição</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
