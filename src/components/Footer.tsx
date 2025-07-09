import React from 'react';
import { Truck, Phone, Mail, MapPin, Clock, Shield, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-orange-500 mr-2" />
              <span className="text-2xl font-bold">Vem Transportortadora</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Há mais de 10 anos conectando o Sudeste e Nordeste com transporte seguro, 
              ágil e econômico. Sua parceira logística de confiança.
            </p>
            
            {/* Certifications */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-600 px-3 py-1 rounded text-sm">ANTT</div>
              <div className="bg-orange-500 px-3 py-1 rounded text-sm">RNTRC</div>
              {/* Adicione aqui outras licenças que Vital enviar */}
              {/* Exemplo: */}
              {/* <div className="bg-green-600 px-3 py-1 rounded text-sm">Licença Ambiental</div> */}
              {/* Prêmios e reconhecimentos */}
              <div className="bg-yellow-500 px-3 py-1 rounded text-sm">Prêmio Excelência 2023</div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span>4.9/5 avaliação</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-1" />
                <span>Seguro incluso</span>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-orange-500" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-orange-500" />
                <span>comercial@vemtransport.com.br</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-orange-500 mt-0.5" />
                <span>Rua dos Transportes, 123<br />São Paulo - SP, 01234-567</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-3 text-orange-500" />
                <span>Seg à Sex: 7h às 18h<br />Sáb: 8h às 12h</span>
              </div>
            </div>
          </div>
          
          {/* Services and Main Routes Side by Side */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nossos Serviços</h3>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <ul className="space-y-2 text-gray-300 mb-6 md:mb-0">
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Carga Fracionada</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Carga Lotação</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Transporte Expresso</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Logística Reversa</li>
                <li className="hover:text-orange-500 cursor-pointer transition-colors">Armazenagem</li>
              </ul>
              <div>
                <h4 className="text-lg font-semibold mb-3">Rotas Principais</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>SP → Recife</li>
                  <li>SP → Salvador</li>
                  <li>SP → Fortaleza</li>
                  <li>SP → Maceió</li>
                  <li>SP → João Pessoa</li>
                  <li>SP → Natal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              © 2024 Vem Transport. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">LGPD</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://api.whatsapp.com/send/?phone=5581996405005&text=Ol%C3%A1%2C+vim+pelo+site+e+quero+saber+mais+sobre+a+Vem+Transportadora&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200 flex items-center"
        >
          <Phone className="w-6 h-6" />
          <span className="ml-2 hidden sm:inline">Falar no WhatsApp</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
