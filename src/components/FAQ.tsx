import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Quais são os prazos de entrega?",
      answer:
        "Os prazos variam conforme origem, destino e modalidade. Para carga fracionada: 5 a 7 dias úteis. Para carga lotação: 4 a 6 dias úteis. Consulte nosso time comercial para prazos exatos."
    },
    {
      question: "Como funciona o seguro da carga?",
      answer:
        "Todas as cargas possuem seguro obrigatório RCTR-C (acidentes) incluso. Para cargas fracionadas, a cobertura é de até R$ 1 milhão por embarque. Também oferecemos cobertura adicional contra roubo (RCF-DC), conforme perfil da carga."
    },
    {
      question: "Posso rastrear minha carga em tempo real?",
      answer:
        "Sim — updates automáticos do carregamento à entrega. Solicite acesso ao nosso painel ou acompanhe via equipe de atendimento."
    },
    {
      question: "Qual o limite de peso e volume para carga fracionada?",
      answer:
        "Depende do produto, embalagem e roteirização. Podemos ofertar solução dedicada para volumes/pesos acima do padrão. Fale conosco para avaliar."
    },
    {
      question: "Fazem coleta em qualquer local de São Paulo?",
      answer:
        "Sim, cobrimos toda a Grande São Paulo e regiões próximas mediante agendamento."
    },
    {
      question: "Como funciona o pagamento?",
      answer:
        "Boleto ou transferência. Clientes com cadastro aprovado possuem condições e prazos diferenciados."
    },
    {
      question: "Transportam produtos perigosos ou frágeis?",
      answer:
        "Sim. Exigimos documentação ANTT para cargas perigosas (ficha de emergência e rótulo) e embalagem adequada para itens frágeis."
    },
    {
      question: "Oferecem desconto para cargas frequentes?",
      answer:
        "Sim. Volumes recorrentes têm condições comerciais especiais — solicite uma proposta personalizada."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003B5C] mb-4">
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
                className="bg-[#003B5C] rounded-lg shadow-sm border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-white hover:text-gray-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-200 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Contact CTA */}
          <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-[#003B5C] mb-4">
              Não encontrou sua dúvida?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe comercial está pronta para esclarecer qualquer questão específica sobre seu frete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5581996405005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                WhatsApp: (81) 99640-5005
              </a>
              <a 
                href="mailto:comercial@vemtransportadora.com.br"
                className="bg-[#003B5C] hover:bg-[#003B5C]/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Email: comercial@vemtransportadora.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
