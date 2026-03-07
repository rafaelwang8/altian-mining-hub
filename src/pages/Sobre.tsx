import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ChevronRight, Target, Shield, Zap, Globe } from "lucide-react";
import miningImg from "@/assets/mining-operation.jpg";

const Sobre = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-32 section-padding">
      <div className="absolute inset-0">
        <img src={miningImg} alt="Operação de mineração" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre a Altian</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Representante brasileira de tecnologia e equipamentos de mineração de alta performance, com foco em segurança operacional e produtividade.
        </p>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Nossa Missão</h2>
          <div className="industrial-border pl-6 mb-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Levar ao mercado brasileiro de mineração equipamentos e tecnologias que elevam o padrão de segurança e eficiência operacional.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Altian atua como ponte entre a tecnologia global de ponta da Boonray e as necessidades específicas das operações de mineração no Brasil. Nosso compromisso é entregar soluções completas — do equipamento ao suporte técnico contínuo.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Trabalhamos lado a lado com engenheiros de operação e diretores de minas para garantir que cada solução implementada gere resultados mensuráveis em segurança, produtividade e custo operacional.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Target, title: "Foco em Resultados", desc: "Soluções orientadas por métricas operacionais e retorno sobre investimento." },
            { icon: Shield, title: "Segurança Primeiro", desc: "Cada decisão de engenharia prioriza a proteção de vidas e ativos." },
            { icon: Zap, title: "Inovação Aplicada", desc: "Tecnologia de ponta adaptada às condições reais de operação." },
            { icon: Globe, title: "Padrão Global", desc: "Equipamentos com certificação internacional e suporte técnico local." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card border border-border p-6">
              <Icon className="text-primary mb-4" size={24} />
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Quer saber mais?</h2>
        <p className="text-muted-foreground mb-8">Entre em contato com nossa equipe para uma conversa técnica sobre sua operação.</p>
        <Link to="/contato" className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3.5 font-heading font-semibold text-sm hover:opacity-90 transition-opacity">
          Fale Conosco <ChevronRight size={18} className="ml-2" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Sobre;
