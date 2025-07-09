import React from 'react';
import { Package, Truck, Users, Clock } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona Nosso Transporte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos duas modalidades para atender perfeitamente as necessidades da sua empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Carga Fracionada */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Carga Fracionada</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Ideal para pequenos e médios volumes. Você paga apenas pelo espaço que usar, 
              compartilhando o caminhão com outras cargas.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Volumes de 1m³ até 10m³</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Economia de até 40% no frete</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Coletas programadas 3x por semana</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Prazo: 3 a 5 dias úteis</span>
              </div>
            </div>
          </div>
          
          {/* Carga Lotação */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-4 rounded-full mr-4">
                <Truck className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Carga Lotação</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Caminhão dedicado exclusivamente para sua carga. Máxima segurança e 
              agilidade para grandes volumes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Volumes acima de 15m³</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Caminhão exclusivo para sua carga</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Coleta e entrega sob demanda</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Prazo: 2 a 3 dias úteis</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Processo Simples em 4 Passos
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Solicite Cotação</h4>
              <p className="text-gray-600 text-sm">Preencha nosso formulário com os detalhes da sua carga</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Orçamento Rápido</h4>
              <p className="text-gray-600 text-sm">Receba sua cotação em até 2 horas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Coleta Agendada</h4>
              <p className="text-gray-600 text-sm">Coletamos sua carga no local e horário combinado</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Entrega Segura</h4>
              <p className="text-gray-600 text-sm">Acompanhe em tempo real até a entrega final</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

<section id="contato" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Fale Conosco
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Estamos aqui para ajudar você a encontrar a melhor solução em transporte.
      </p>
    </div>
    
    <div className="max-w-md mx-auto">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Precisa falar conosco agora? Chame no WhatsApp:
      </h3>
      
      <a href="https://api.whatsapp.com/send?phone=5511999998888" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition-all duration-300">
        <i className="fab fa-whatsapp mr-2"></i> Conversar pelo WhatsApp
      </a>
    </div>
  </div>
</section>
