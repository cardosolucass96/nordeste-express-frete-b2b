
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const Coverage = () => {
  const routes = [
    { from: "São Paulo", to: "Recife", time: "3-4 dias" },
    { from: "São Paulo", to: "Salvador", time: "2-3 dias" },
    { from: "São Paulo", to: "Fortaleza", time: "4-5 dias" },
    { from: "São Paulo", to: "Maceió", time: "3-4 dias" },
    { from: "São Paulo", to: "João Pessoa", time: "4-5 dias" },
    { from: "São Paulo", to: "Natal", time: "4-5 dias" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossa Cobertura Geográfica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectamos o principal centro econômico do país às capitais nordestinas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Map Visualization */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Rotas Principais
              </h3>
              
              {/* Simple Map Representation */}
              <div className="relative h-80 bg-gradient-to-b from-blue-50 to-green-50 rounded-xl p-6 overflow-hidden">
                {/* São Paulo (Origin) */}
                <div className="absolute bottom-16 left-8">
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    São Paulo
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Origem Principal</div>
                </div>
                
                {/* Northeastern Destinations */}
                <div className="absolute top-8 right-8">
                  <div className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Fortaleza
                  </div>
                </div>
                
                <div className="absolute top-16 right-16">
                  <div className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Natal
                  </div>
                </div>
                
                <div className="absolute top-20 right-24">
                  <div className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    João Pessoa
                  </div>
                </div>
                
                <div className="absolute top-32 right-12">
                  <div className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Recife
                  </div>
                </div>
                
                <div className="absolute top-40 right-20">
                  <div className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Maceió
                  </div>
                </div>
                
                <div className="absolute top-48 right-16">
                  <div className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Salvador
                  </div>
                </div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle fill="#3b82f6" cx="10" cy="10" r="1"></circle>
                    </pattern>
                  </defs>
                  <path d="M 60 280 Q 200 100 280 80" stroke="url(#dots)" strokeWidth="2" fill="none" />
                  <path d="M 60 280 Q 250 120 300 60" stroke="url(#dots)" strokeWidth="2" fill="none" />
                  <path d="M 60 280 Q 280 140 320 100" stroke="url(#dots)" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Routes List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Principais Rotas e Prazos
            </h3>
            
            {routes.map((route, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-blue-600 font-semibold">{route.from}</div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="text-orange-600 font-semibold">{route.to}</div>
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                    {route.time}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">Outras Cidades</h4>
              <p className="text-blue-800 text-sm">
                Atendemos também cidades do interior através de nossa rede de parceiros. 
                Consulte disponibilidade para sua região específica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
