import React from 'react';
import {
  Truck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Star,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        {/* --- Grade principal: 12 colunas --- */}
        <div className="grid gap-y-12 md:grid-cols-12 md:gap-x-8">
          {/* Company Info – 5/12 col. */}
          <div className="md:col-span-5">
            <div className="flex items-center mb-4">
              <Truck className="w-8 h-8 text-[#e52021] mr-2" />
              <span className="text-2xl font-bold">
                Vem Transportadora
              </span>
            </div>

            <p className="mb-6 leading-relaxed text-gray-300">
              Há mais de 10&nbsp;anos conectando o Sudeste e Nordeste com
              transporte seguro, ágil e econômico. Sua parceira logística de
              confiança.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="rounded bg-[#1f1f3e] px-3 py-1 text-sm">ANTT</span>
              <span className="rounded bg-[#e52021] px-3 py-1 text-sm">RNTRC</span>
              <span className="rounded bg-yellow-500 px-3 py-1 text-sm">Prêmio Excelência&nbsp;2023</span>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center">
                <Star className="mr-1 h-4 w-4 text-yellow-500" />4.9/5 avaliação
              </span>
              <span className="flex items-center">
                <Shield className="mr-1 h-4 w-4 text-green-500" />Seguro incluso
              </span>
            </div>
          </div>

          {/* Contact Info – 4/12 col. */}
          <div className="md:col-span-4">
            <h3 className="mb-4 text-xl font-semibold">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Phone className="mr-3 h-4 w-4 text-[#e52021]" />
                (81)&nbsp;99440-5005
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-4 w-4 text-[#e52021]" />
                comercial@vemtransportadora.com.br
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-0.5 h-4 w-4 text-[#e52021]" />
                Av.&nbsp;da&nbsp;Bandeira,&nbsp;564,&nbsp;564<br />
                Carpina&nbsp;-&nbsp;PE,&nbsp;55818-565
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 h-4 w-4 text-[#e52021]" />
                Seg à Sex:&nbsp;8h – 18h<br />
                Sáb:&nbsp;8h – 12h
              </li>
            </ul>
          </div>

          {/* Services & Routes – 3/12 col. */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-xl font-semibold">Nossos Serviços</h3>
            {/* Grade interna: 1 col. no mobile | 2 col. ≥ md */}
            <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
              <ul className="space-y-2 text-gray-300">
                <li className="transition-colors hover:text-[#e52021]">Carga Fracionada</li>
                <li className="transition-colors hover:text-[#e52021]">Carga Lotação</li>
                <li className="transition-colors hover:text-[#e52021]">Transporte Expresso</li>
                <li className="transition-colors hover:text-[#e52021]">Logística Reversa</li>
                <li className="transition-colors hover:text-[#e52021]">Armazenagem</li>
              </ul>
              <div>
                <h4 className="mb-3 text-lg font-semibold">Rotas Principais</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>SP → Recife</li>
                  <li>SP → Salvador</li>
                  <li>SP → Fortaleza</li>
                  <li>SP → Maceió</li>
                  <li>SP → João&nbsp;Pessoa</li>
                  <li>SP → Natal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-400 md:flex-row">
          <span>© 2025 Vem Transportadora. Todos os direitos reservados.</span>
          <nav className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Política de Privacidade</a>
            <a href="#" className="transition-colors hover:text-white">Termos de Uso</a>
            <a href="#" className="transition-colors hover:text-white">LGPD</a>
          </nav>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://api.whatsapp.com/send/?phone=5581994405005&text=Ol%C3%A1%2C+vim+pelo+site+e+quero+saber+mais+sobre+a+Vem+Transportadora&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex transform items-center rounded-full bg-green-500 p-4 text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-green-600"
        >
          <Phone className="h-6 w-6" />
          <span className="ml-2 hidden sm:inline">Falar no WhatsApp</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
