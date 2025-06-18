
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Gerente de Logística",
      company: "TechDistrib Ltda",
      content: "A Vem Transport revolucionou nossa operação. Conseguimos reduzir 35% dos custos de frete e ainda ganhamos previsibilidade nas entregas. O rastreamento em tempo real nos dá total controle.",
      rating: 5,
      savings: "35% de economia"
    },
    {
      name: "Ana Rodrigues",
      role: "Diretora Comercial",
      company: "MegaSupply Corp",
      content: "Parceria sólida há 3 anos. A equipe é super profissional e sempre resolve qualquer questão rapidamente. Para nossas cargas lotação, não existe melhor opção no mercado.",
      rating: 5,
      highlight: "3 anos de parceria"
    },
    {
      name: "Roberto Santos",
      role: "Proprietário",
      company: "Santos & Filhos ME",
      content: "Como empresa familiar, precisávamos de um parceiro que entendesse nossas necessidades. A Vem Transport não é só uma transportadora, é uma parceira de negócios que cresce conosco.",
      rating: 5,
      highlight: "Parceria de crescimento"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 500 empresas já confiam na Vem Transport para suas operações logísticas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              
              {/* Content */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Highlight Badge */}
              {testimonial.savings && (
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {testimonial.savings}
                </div>
              )}
              {testimonial.highlight && (
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {testimonial.highlight}
                </div>
              )}
              
              {/* Author */}
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-orange-100 px-8 py-4 rounded-full">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4.9/5</div>
                <div className="text-sm text-gray-600">Avaliação Média</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">98%</div>
                <div className="text-sm text-gray-600">Entregas no Prazo</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
