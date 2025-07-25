import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo-vem-transportadora.png" 
              alt="Vem Transportadora" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#e52021] font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('quem-somos')}
              className="text-gray-700 hover:text-[#e52021] font-medium transition-colors"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-[#e52021] font-medium transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-[#e52021] font-medium transition-colors"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('cotacao')}
              className="bg-[#e52021] hover:bg-[#e52021]/90 text-white"
            >
              Solicitar Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-[#e52021] font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('quem-somos')}
                className="text-gray-700 hover:text-[#e52021] font-medium text-left"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-[#e52021] font-medium text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-[#e52021] font-medium text-left"
              >
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('cotacao')}
                className="bg-[#e52021] hover:bg-[#e52021]/90 text-white w-full"
              >
                Solicitar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
