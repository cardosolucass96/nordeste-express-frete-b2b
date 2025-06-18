
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Quais são os prazos de entrega?",
      answer: "Para carga fracionada: 3 a 5 dias úteis. Para carga lotação: 2 a 3 dias úteis. Os prazos podem variar conforme a distância e condições climáticas, mas sempre informamos o prazo exato na cotação."
    },
    {
      question: "Como funciona o seguro da carga?",
      answer: "Todas as cargas são automaticamente cobertas pelo nosso seguro. Cobrimos até R$ 50.000 para carga fracionada e até R$ 200.000 para lotação. Para valores superiores, oferecemos seguro adicional com custo baixo."
    },
    {
      question: "Posso rastrear minha carga em tempo real?",
      answer: "Sim! Assim que sua carga sair para entrega, você recebe um link de rastreamento por WhatsApp e email. Nosso sistema mostra a localização em tempo real e horário previsto de entrega."
    },
    {
      question: "Qual o limite de peso e volume para carga fracionada?",
      answer: "Para fracionada: até 1.000 kg ou 15m³ por envio. Acima disso, recomendamos carga lotação que oferece melhor custo-benefício e maior segurança."
    },
    {
      question: "Fazem coleta em qualquer local de São Paulo?",
      answer: "Coletamos em toda Grande São Paulo sem custo adicional. Para interior de SP, consulte taxa de coleta. Agendamento flexível de segunda a sábado."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Aceitamos pagamento à vista (PIX/boleto) com desconto, no cartão de crédito ou faturado para empresas aprovadas. Emitimos CTe e NFS-e para todas as operações."
    },
    {
      question: "Transportam produtos perigosos ou frágeis?",
      answer: "Sim, temos autorização para produtos perigosos (ANTT) e equipe especializada para cargas frágeis. Consulte nossa equipe para produtos específicos como eletrônicos, vidros, químicos, etc."
    },
    {
      question: "Oferecem desconto para cargas frequentes?",
      answer: "Sim! Empresas com envios regulares (semanal/mensal) têm condições especiais. Quanto maior a frequência, melhor o preço. Fale conosco para um plano personalizado."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de transporte
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Contact CTA */}
          <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Não encontrou sua dúvida?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe comercial está pronta para esclarecer qualquer questão específica sobre seu frete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                WhatsApp: (11) 99999-9999
              </a>
              <a 
                href="mailto:comercial@vemtransport.com.br"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Email: comercial@vemtransport.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
