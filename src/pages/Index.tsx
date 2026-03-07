import { Link } from "react-router-dom";
import { Shield, Gauge, Wrench, ChevronRight, HardHat, Headphones, Settings, Truck } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-truck.jpg";
import truckImg from "@/assets/truck-detail.jpg";
import miningImg from "@/assets/mining-operation.jpg";
import supportImg from "@/assets/support-team.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Caminhão de mineração operando em mina a céu aberto" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto section-padding">
          <div className="max-w-2xl">
            <div className="inline-block bg-primary/10 border border-primary/30 px-3 py-1 mb-6">
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">CAMIHÕES AUTÔNOMOS ELÉTRICOS NO BRASIL</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Tecnologia que protege vidas e aumenta a produtividade na mineração
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">Caminhões off-road de alta capacidade e tecnologia avançada para operações de mineração.

            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 font-heading font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity">
                
                Falar com nossa equipe
                <ChevronRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center border border-border text-foreground px-8 py-3.5 font-heading font-semibold text-sm tracking-wide hover:bg-secondary transition-colors">
                
                Solicitar apresentação
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a Altian
            </h2>
            <div className="industrial-border pl-6 mb-6">
              <p className="text-muted-foreground leading-relaxed">
                A Altian é a parceira brasileira que traz equipamentos de mineração de próxima geração e tecnologia operacional ao setor de mineração nacional.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">Com expertise em operações de mineração e compromisso com a confiabilidade operacional, aplicamos tecnologia global de ponta adaptada à realidade das operações de mineração brasileiras.

            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nosso foco é entregar soluções que combinam robustez mecânica com sistemas inteligentes de monitoramento e controle, garantindo desempenho superior em condições severas de operação.
            </p>
          </div>
          <div className="relative">
            <img src={miningImg} alt="Operação de mineração a céu aberto" className="w-full aspect-video object-cover" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
          </div>
        </div>
      </section>

      {/* Tecnologia e Segurança */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tecnologia e Segurança
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Soluções projetadas para reduzir riscos e maximizar a produtividade operacional em ambientes de mineração.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
            { icon: Shield, title: "Segurança", desc: "Sistemas avançados de monitoramento e proteção que reduzem incidentes e protegem operadores em campo." },
            { icon: Gauge, title: "Eficiência", desc: "Tecnologia que otimiza ciclos de transporte, consumo de combustível e tempo de operação." },
            { icon: Wrench, title: "Robustez", desc: "Equipamentos projetados para suportar as condições mais severas de operação em minas a céu aberto." }].
            map(({ icon: Icon, title, desc }) =>
            <div key={title} className="bg-card border border-border p-8 group hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 mb-6">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img src={truckImg} alt="Caminhão off-road de mineração 91 toneladas" className="w-full aspect-square object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Caminhão Off-Road 91t
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              O caminhão off-road de 91 toneladas Boonray é projetado para operações de mineração de grande escala, combinando alta capacidade de carga com eficiência operacional.
            </p>
            <ul className="space-y-4 mb-8">
              {[
              "Capacidade de carga: 91 toneladas",
              "Motor de alta potência para terrenos íngremes",
              "Sistema de frenagem avançado para segurança",
              "Baixo custo operacional por tonelada transportada"].
              map((item) =>
              <li key={item} className="flex items-start gap-3">
                  <ChevronRight className="text-primary mt-0.5 shrink-0" size={18} />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              )}
            </ul>
            <Link
              to="/equipamentos"
              className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:underline">
              
              Ver especificações completas <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Processo de Implantação */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
            Processo de Implantação
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
            { step: "01", title: "Avaliação da operação", icon: Gauge },
            { step: "02", title: "Preparação de infraestrutura", icon: Settings },
            { step: "03", title: "Treinamento das equipes", icon: HardHat },
            { step: "04", title: "Entrega e comissionamento", icon: Truck },
            { step: "05", title: "Suporte operacional", icon: Headphones }].
            map(({ step, title, icon: Icon }) =>
            <div key={step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 border border-primary/30">
                  <Icon className="text-primary" size={24} />
                </div>
                <span className="text-primary font-heading font-bold text-xs tracking-widest">{step}</span>
                <h3 className="font-heading text-sm font-semibold text-foreground mt-2">{title}</h3>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Suporte Operacional */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Suporte Operacional
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Acompanhamos cada etapa da operação com serviços técnicos especializados para garantir máxima disponibilidade e desempenho dos equipamentos.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
              "Treinamento de operadores",
              "Suporte técnico especializado",
              "Manutenção preventiva e corretiva",
              "Integração com operação da mina"].
              map((item) =>
              <div key={item} className="bg-secondary border border-border p-4">
                  <p className="text-sm text-foreground font-medium">{item}</p>
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <img src={supportImg} alt="Equipe técnica de suporte" className="w-full aspect-square object-cover" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="section-padding bg-card border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Converse com nossa equipe de engenharia
          </h2>
          <p className="text-muted-foreground mb-8">
            Entre em contato para avaliar como a tecnologia Altian pode ser aplicada à sua operação de mineração.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 font-heading font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity">
            
            Falar com nossa equipe técnica
            <ChevronRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </Layout>);

};

export default Index;