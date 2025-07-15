import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Truck, Clock, Shield, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    empresa: '',
    cnpj: '',
    contato: '',
    telefone: '',
    email: '',
    origem: '',
    destino: '',
    tipo: '',
    m3: '',
    peso: '',
    observacoes: ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Captura UTM params da URL
    const urlParams = new URLSearchParams(window.location.search);
    const utms = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
    };

    try {
      // Enviar para o webhook n8n
      const response = await fetch('https://webhook-n8n.grupovorp.com/webhook/vem-tranportadora', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ...utms,
        }),
      });

      console.log('Dados enviados para o webhook:', { ...formData, ...utms });

      toast({
        title: "Cotação enviada com sucesso!",
        description: "Entraremos em contato em até 2 horas. Verifique seu WhatsApp e email.",
      });

      // Redirecionar para WhatsApp
      window.open('https://wa.me/5581996405005?text=Olá%20Vem%20Transportadora,%20enviei%20uma%20cotação%20via%20site.', '_blank');

      // Reset form
      setFormData({
        empresa: '',
        cnpj: '',
        contato: '',
        telefone: '',
        email: '',
        origem: '',
        destino: '',
        tipo: '',
        m3: '',
        peso: '',
        observacoes: ''
      });
    } catch (error) {
      console.error('Erro ao enviar cotação:', error);
      toast({
        title: "Erro ao enviar cotação",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cotacao" className="py-20 bg-gradient-to-br from-[#1f1f3e] via-[#1f1f3e] to-[#e52021]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Peça sua Cotação em Menos de 1 Minuto
            </h2>
            <p className="text-xl text-[#ffffff]/80 mb-8">
              Resposta garantida em até 2 horas, mesmo aos sábados!
            </p>
            
            {/* Benefits Row */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center text-[#ffffff]/80">
                <Clock className="w-5 h-5 mr-2 text-[#e52021]" />
                <span>Resposta em 2h</span>
              </div>
              <div className="flex items-center text-[#ffffff]/80">
                <Shield className="w-5 h-5 mr-2 text-[#e52021]" />
                <span>Seguro Incluso</span>
              </div>
              <div className="flex items-center text-[#ffffff]/80">
                <Truck className="w-5 h-5 mr-2 text-[#e52021]" />
                <span>Frota Própria</span>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Info */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold text-[#1f1f3e] mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-[#e52021]" />
                  Dados da Empresa
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="empresa" className="text-gray-700">Razão Social / Nome da Empresa *</Label>
                    <Input
                      id="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => handleInputChange('empresa', e.target.value)}
                      required
                      className="mt-1 border-gray-300 focus:border-[#e52021] focus:ring-[#e52021]"
                      placeholder="Ex: Distribuidora ABC Ltda"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cnpj" className="text-gray-700">CNPJ *</Label>
                    <InputMask
                      mask="99.999.999/9999-99"
                      value={formData.cnpj}
                      onChange={(e) => handleInputChange('cnpj', e.target.value)}
                    >
                      {(inputProps: any) => (
                        <Input
                          {...inputProps}
                          id="cnpj"
                          type="text"
                          required
                          className="mt-1 border-gray-300 focus:border-[#e52021] focus:ring-[#e52021]"
                          placeholder="00.000.000/0000-00"
                        />
                      )}
                    </InputMask>
                  </div>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold text-[#1f1f3e] mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-[#e52021]" />
                  Dados de Contato
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="contato" className="text-gray-700">Nome do Responsável *</Label>
                    <Input
                      id="contato"
                      type="text"
                      value={formData.contato}
                      onChange={(e) => handleInputChange('contato', e.target.value)}
                      required
                      className="mt-1 border-gray-300 focus:border-[#e52021] focus:ring-[#e52021]"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefone" className="text-gray-700">Telefone / WhatsApp *</Label>
                    <InputMask
                      mask="(99) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                    >
                      {(inputProps: any) => (
                        <Input
                          {...inputProps}
                          id="telefone"
                          type="tel"
                          required
                          className="mt-1 border-gray-300 focus:border-[#e52021] focus:ring-[#e52021]"
                          placeholder="(11) 99999-9999"
                        />
                      )}
                    </InputMask>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">E-mail Corporativo *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                          className="mt-1 border-gray-300 focus:border-[#e52021] focus:ring-[#e52021]"
                      placeholder="seuemail@empresa.com"
                    />
                  </div>
                </div>
              </div>
              
              {/* Shipping Details */}
              <div>
                <h3 className="text-xl font-semibold text-[#1f1f3e] mb-4 flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-[#e52021]" />
                  Detalhes do Frete
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="origem" className="text-gray-700">Origem da Carga *</Label>
                    <Input
                      id="origem"
                      type="text"
                      value={formData.origem}
                      onChange={(e) => handleInputChange('origem', e.target.value)}
                      required
                      className="mt-1 border-gray-300 focus:border-[#e52021] focus:ring-[#e52021]"
                      placeholder="Ex: São Paulo, SP"
                    />
                  </div>
                  <div>
                    <Label htmlFor="destino" className="text-gray-700">Destino da Carga *</Label>
                    <Input
                      id="destino"
                      type="text"
                      value={formData.destino}
                      onChange={(e) => handleInputChange('destino', e.target.value)}
                      required
                      className="mt-1 border-gray-300 focus:border-[#e52021] focus:ring-[#e52021]"
                      placeholder="Ex: Recife, PE"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <Label htmlFor="tipo" className="text-gray-700">Tipo de Transporte *</Label>
                    <Select onValueChange={(value) => handleInputChange('tipo', value)}>
                      <SelectTrigger className="mt-1 border-gray-300 focus:border-[#FF4E00] focus:ring-[#FF4E00]">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fracionada">Carga Fracionada</SelectItem>
                        <SelectItem value="lotacao">Carga Dedicada (Lotação)</SelectItem>
                        <SelectItem value="nao-sei">Não sei qual escolher</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="m3" className="text-gray-700">m³ da carga (opcional)</Label>
                    <Input
                      id="m3"
                      type="number"
                      min="0"
                      step="0.01"
                      value={formData.m3}
                      onChange={(e) => handleInputChange('m3', e.target.value.replace(/[^0-9.,]/g, ''))}
                      className="mt-1 border-gray-300 focus:border-[#e52021] focus:ring-[#e52021]"
                      placeholder="Ex: 4"
                    />
                  </div>
                  <div>
                    <Label htmlFor="peso" className="text-gray-700">Peso total (kg)</Label>
                    <Input
                      id="peso"
                      type="number"
                      min="0"
                      step="0.01"
                      value={formData.peso}
                      onChange={(e) => handleInputChange('peso', e.target.value.replace(/[^0-9.,]/g, ''))}
                      className="mt-1 border-gray-300 focus:border-[#e52021] focus:ring-[#e52021]"
                      placeholder="Ex: 600"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="observacoes" className="text-gray-700">Observações Adicionais</Label>
                  <Textarea
                    id="observacoes"
                    value={formData.observacoes}
                    onChange={(e) => handleInputChange('observacoes', e.target.value)}
                  className="mt-1 border-gray-300 focus:border-[#e52021] focus:ring-[#e52021]"
                    placeholder="Informe detalhes sobre sua carga, urgência, frequência de envio, etc."
                    rows={3}
                  />
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e52021] hover:bg-[#e52021]/90 text-white py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                  size="lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando Cotação...
                    </div>
                  ) : (
                    'Solicitar Orçamento Gratuito'
                  )}
                </Button>
                
                <p className="text-center text-sm text-gray-600 mt-4">
                  Seus dados estão seguros. Não enviamos spam.
                </p>
              </div>
            </form>
          </div>
          
          {/* Post-form CTA */}
          <div className="mt-8 text-center text-white">
            <p className="text-[#fffff]/80 mb-4">
              Precisa falar conosco agora? Chame no WhatsApp:
            </p>
            <Button
              variant="outline"
              className="border-2 border-white/30 text-white bg-white/10 hover:bg-white/10"
              size="lg"
              asChild
            >
              <a
                href="https://wa.me/558194405005?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20a%20Vem%20Transportadora"
                target="_blank"
                rel="noopener noreferrer"
              >
                (81) 99440-5005
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
