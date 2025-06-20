
import React from 'react';
import { Truck, MapPin, Calendar, Award } from 'lucide-react';

const AboutUs = () => {
  const timeline = [
    {
      year: "2014",
      title: "Início de tudo",
      description: "A Vem iniciou suas atividades em Carpina/PE, transportando cargas indivisíveis e máquinas. Além disso, realizava o serviço de guincho 24h.",
      icon: Calendar
    },
    {
      year: "2016",
      title: "Transporte de Veículos",
      description: "Em 2016, iniciamos o serviço de transporte de veículos para todo o Brasil.",
      icon: Truck
    },
    {
      year: "2024",
      title: "Fracionados",
      description: "Migramos toda a nossa operação para o transporte de cargas fracionadas, lotação e armazenagem.",
      icon: Award
    }
  ];

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
              <div className="bg-red-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">10+ Anos de Experiência</div>
                <div className="text-sm text-gray-600">Conectando Sudeste ao Nordeste</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Nossa Linha Cronológica
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-red-100 p-3 rounded-full mr-4">
                          <item.icon className="w-6 h-6 text-red-600" />
                        </div>
                        <div className="text-3xl font-bold text-red-600">{item.year}</div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-gradient-to-r from-blue-900 to-red-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Nossa Localização
            </h3>
            <p className="text-blue-100">
              Estrategicamente posicionados para conectar Sudeste e Nordeste
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Carpina/PE</h4>
              <p className="text-blue-100">Matriz, Armazéns de Carga Geral e Centro de Distribuição</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">São Paulo/SP</h4>
              <p className="text-blue-100">Unidade de apoio para coleta de mercadorias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
