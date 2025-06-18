
import React, { useState } from 'react';
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
    volume: '',
    observacoes: ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio ao CRM
    setTimeout(() => {
      console.log('Dados enviados:', formData);
      toast({
        title: "Cotação enviada com sucesso!",
        description: "Entraremos em contato em até 2 horas. Verifique seu WhatsApp e email.",
      });
      setIsSubmitting(false);
      
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
        volume: '',
        observacoes: ''
      });
    }, 2000);
  };

  return (
    <section id="cotacao" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Peça sua Cotação em Menos de 1 Minuto
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Resposta garantida em até 2 horas, mesmo aos sábados!
            </p>
            
            {/* Benefits Row */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center text-blue-100">
                <Clock className="w-5 h-5 mr-2 text-orange-400" />
                <span>Resposta em 2h</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Shield className="w-5 h-5 mr-2 text-orange-400" />
                <span>Seguro Incluso</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Truck className="w-5 h-5 mr-2 text-orange-400" />
                <span>Frota Própria</span>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Info */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Dados da Empresa
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="empresa">Razão Social / Nome da Empresa *</Label>
                    <Input
                      id="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => handleInputChange('empresa', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="Ex: Distribuidora ABC Ltda"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cnpj">CNPJ *</Label>
                    <Input
                      id="cnpj"
                      type="text"
                      value={formData.cnpj}
                      onChange={(e) => handleInputChange('cnpj', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="00.000.000/0000-00"
                    />
                  </div>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Dados de Contato
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="contato">Nome do Responsável *</Label>
                    <Input
                      id="contato"
                      type="text"
                      value={formData.contato}
                      onChange={(e) => handleInputChange('contato', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone / WhatsApp *</Label>
                    <Input
                      id="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail Corporativo *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="seuemail@empresa.com"
                    />
                  </div>
                </div>
              </div>
              
              {/* Shipping Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-blue-600" />
                  Detalhes do Frete
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="origem">Origem da Carga *</Label>
                    <Input
                      id="origem"
                      type="text"
                      value={formData.origem}
                      onChange={(e) => handleInputChange('origem', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="Ex: São Paulo, SP"
                    />
                  </div>
                  <div>
                    <Label htmlFor="destino">Destino da Carga *</Label>
                    <Input
                      id="destino"
                      type="text"
                      value={formData.destino}
                      onChange={(e) => handleInputChange('destino', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="Ex: Recife, PE"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="tipo">Tipo de Transporte *</Label>
                    <Select onValueChange={(value) => handleInputChange('tipo', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fracionada">Carga Fracionada (até 15m³)</SelectItem>
                        <SelectItem value="lotacao">Carga Lotação (acima de 15m³)</SelectItem>
                        <SelectItem value="nao-sei">Não sei qual escolher</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="volume">Volume/Peso Aproximado</Label>
                    <Input
                      id="volume"
                      type="text"
                      value={formData.volume}
                      onChange={(e) => handleInputChange('volume', e.target.value)}
                      className="mt-1"
                      placeholder="Ex: 4 m³ ou 600 kg"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="observacoes">Observações Adicionais</Label>
                  <Textarea
                    id="observacoes"
                    value={formData.observacoes}
                    onChange={(e) => handleInputChange('observacoes', e.target.value)}
                    className="mt-1"
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
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
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
            <p className="text-blue-100 mb-4">
              Precisa falar conosco agora? Chame no WhatsApp:
            </p>
            <Button
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10"
              size="lg"
            >
              (11) 99999-9999
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
