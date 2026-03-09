import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Shield, Zap, Globe, Check } from "lucide-react";
import miningImg from "@/assets/mining-operation.jpg";
import heroImg from "@/assets/hero-mine.jpg";
import techImg from "@/assets/autonomous-tech.jpg";

const Sobre = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-44 section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={miningImg} alt="Operação de mineração Altian" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/88" />
      </div>
      <div className="absolute top-0 left-0 w-1 h-32 bg-primary" />
      <div className="absolute top-0 left-0 w-32 h-1 bg-primary" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-primary" />
          <span className="text-primary text-xs font-bold tracking-widest uppercase">Sobre a Altian</span>
        </div>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight max-w-3xl">
          Tecnologia industrial de mineração para o Brasil
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Representante brasileira de tecnologia e equipamentos de mineração de alta performance, com foco em segurança operacional e produtividade de larga escala.
        </p>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Nossa Missão</span>
          </div>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-8 leading-tight">
            Levar tecnologia autônoma e elétrica à mineração brasileira
          </h2>
          <div className="industrial-border pl-6 mb-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              A Altian atua como ponte entre a tecnologia global de ponta e as necessidades específicas das operações de mineração no Brasil.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Nosso compromisso é entregar soluções completas — do equipamento ao suporte técnico contínuo — que geram resultados mensuráveis em segurança, produtividade e custo operacional.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Trabalhamos lado a lado com engenheiros de operação e diretores de minas, com foco em implantações seguras, rápidas e de alto impacto.
          </p>

          <div className="space-y-3">
            {[
              "Caminhões autônomos elétricos para mineração",
              "Escavadeiras de controle remoto",
              "Sistemas inteligentes de despacho e frota",
              "Tecnologia operacional para minas mais seguras e produtivas",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center bg-primary/10 border border-primary/30 mt-0.5 shrink-0">
                  <Check className="text-primary" size={12} />
                </div>
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Target, title: "Foco em Resultados", desc: "Soluções orientadas por métricas operacionais e retorno sobre investimento." },
            { icon: Shield, title: "Segurança Primeiro", desc: "Cada decisão de engenharia prioriza a proteção de vidas e ativos operacionais." },
            { icon: Zap, title: "Inovação Aplicada", desc: "Tecnologia global de ponta adaptada às condições reais de operação no Brasil." },
            { icon: Globe, title: "Padrão Global", desc: "Equipamentos com validação internacional e suporte técnico local especializado." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card border border-border p-6 hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 mb-4">
                <Icon className="text-primary" size={18} />
              </div>
              <h3 className="font-heading text-sm font-bold text-foreground mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Technology */}
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <img src={techImg} alt="Tecnologia de percepção autônoma" className="w-full aspect-[16/9] object-cover" />
          <div className="absolute inset-0 border border-border" />
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Tecnologia</span>
          </div>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-6 leading-tight">
            Equipamentos e sistemas para operações de classe mundial
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Nossa tecnologia combina robustez mecânica com sistemas inteligentes de percepção, controle e comunicação — garantindo desempenho superior em condições severas de operação em minas a céu aberto.
          </p>

          <div className="space-y-4">
            {[
              { title: "Direção Autônoma L4", desc: "Caminhões que operam de forma completamente autônoma nas rotas da mina." },
              { title: "Propulsão 100% Elétrica", desc: "Zero emissões, menor custo de energia e operação mais silenciosa e sustentável." },
              { title: "Monitoramento em Tempo Real", desc: "Telemetria completa com visibilidade total da frota para a equipe de operação." },
            ].map(({ title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="h-px w-8 bg-primary mt-3 shrink-0" />
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-background/94" />
      </div>
      <div className="absolute top-0 right-0 w-1 h-24 bg-primary" />
      <div className="absolute top-0 right-0 w-24 h-1 bg-primary" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-primary" />
          <span className="text-primary text-xs font-bold tracking-widest uppercase">Próximos Passos</span>
          <div className="h-px w-8 bg-primary" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Pronto para uma conversa técnica?
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Entre em contato com nossa equipe de engenharia para uma avaliação detalhada sobre como a tecnologia Altian pode ser aplicada à sua operação.
        </p>
        <Link
          to="/contato"
          className="inline-flex items-center bg-primary text-primary-foreground px-10 py-4 font-heading font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
        >
          Fale com nossa equipe
          <ArrowRight size={16} className="ml-3" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Sobre;
