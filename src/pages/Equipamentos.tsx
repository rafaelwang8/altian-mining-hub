import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BatteryCharging,
  Gauge,
  HardHat,
  Truck,
  Zap,
} from "lucide-react";
import truckImg from "@/assets/truck-rear.jpg";
import excavatorImg from "@/assets/excavator-new.jpg";
import heroImg from "@/assets/hero-mine-new.jpg";

const truckHighlights = [
  "Operação autônoma nível L4 para rotas de mina",
  "Propulsão 100% elétrica com troca rápida de bateria",
  "Sistema de percepção com LIDAR, radar e câmeras",
  "Aplicação em transporte de grande volume a céu aberto",
];

const truckSpecs = [
  { label: "Capacidade de carga", value: "Até 100 toneladas" },
  { label: "Capacidade da bateria", value: "Até 800 kWh" },
  { label: "Sistema de bateria", value: "Troca instantânea" },
  { label: "Autonomia de condução", value: "Nível L4" },
  { label: "Sistema de percepção", value: "LIDAR, radar e câmeras" },
  { label: "Propulsão", value: "100% elétrica" },
];

const excavatorHighlights = [
  "Operação remota com operadores fora da área de risco",
  "Sistema visual com câmeras HD e sensores embarcados",
  "Controle preciso para carga e escavação em larga escala",
  "Integração com gestão operacional e telemetria da mina",
];

const excavatorSpecs = [
  { label: "Modo de operação", value: "100% remoto" },
  { label: "Aplicação", value: "Escavação de larga escala" },
  { label: "Sistema visual", value: "Câmeras HD + sensores" },
  { label: "Comunicação", value: "Link dedicado de operação" },
  { label: "Integração", value: "Gestão de frota e telemetria" },
  { label: "Objetivo", value: "Segurança e continuidade operacional" },
];

const comparison = [
  {
    title: "Caminhão Autônomo Elétrico",
    focus: "Transporte autônomo de material",
    ideal: "Rotas repetitivas e alta produtividade 24/7",
  },
  {
    title: "Escavadeira Remota",
    focus: "Carga e escavação com operador fora da área de risco",
    ideal: "Frentes com maior criticidade operacional",
  },
];

const Equipamentos = () => (
  <Layout>
    <section className="relative py-28 section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Equipamentos de mineração Altian" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/75" />
      </div>
      <div className="absolute top-0 left-0 w-1 h-32 bg-primary" />
      <div className="absolute top-0 left-0 w-32 h-1 bg-primary" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-primary" />
          <span className="text-primary text-xs font-bold tracking-widest uppercase">Equipamentos</span>
        </div>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight max-w-4xl">
          Soluções para transporte autônomo e operação remota na mineração
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
          A Altian estrutura seu portfólio em duas frentes complementares: caminhões autônomos elétricos para movimentação
          de material e escavadeiras remotas para atuação segura em frentes críticas.
        </p>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
          <a href="#caminhao-autonomo" className="bg-card/90 border border-border p-6 hover:border-primary/40 transition-colors">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">01</p>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Caminhão Autônomo Elétrico</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transporte inteligente de grande volume com direção autônoma e propulsão elétrica.
            </p>
          </a>
          <a href="#escavadeira-remota" className="bg-card/90 border border-border p-6 hover:border-primary/40 transition-colors">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">02</p>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Escavadeira Remota</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Escavação de larga escala com operador em ambiente controlado e seguro.
            </p>
          </a>
        </div>
      </div>
    </section>

    <section className="pt-0 pb-16 section-padding bg-secondary">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-px bg-border">
        {comparison.map(({ title, focus, ideal }) => (
          <div key={title} className="bg-card p-8 md:p-10">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{title}</h3>
            <p className="text-xs text-primary font-bold tracking-widest uppercase mb-2">Foco</p>
            <p className="text-sm text-muted-foreground mb-5">{focus}</p>
            <p className="text-xs text-primary font-bold tracking-widest uppercase mb-2">Ideal para</p>
            <p className="text-sm text-muted-foreground">{ideal}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="caminhao-autonomo" className="py-20 section-padding bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Caminhão Autônomo</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Transporte elétrico autônomo para operações de alta escala
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Desenvolvido para operações de mina a céu aberto, o caminhão autônomo elétrico combina capacidade de carga,
              direção autônoma e arquitetura energética voltada para uptime máximo. A proposta é reduzir exposição humana,
              elevar previsibilidade operacional e diminuir custo por tonelada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {truckHighlights.map((item) => (
              <div key={item} className="border border-border bg-card p-5">
                <div className="w-8 h-8 flex items-center justify-center border border-primary/30 bg-primary/10 mb-3">
                  <Truck size={16} className="text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="space-y-4">
          <div className="relative">
            <img src={truckImg} alt="Caminhão autônomo elétrico de mineração" className="w-full aspect-[5/4] object-cover" />
            <div className="absolute inset-0 border border-border" />
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          </div>

          <div className="space-y-0 border border-border divide-y divide-border bg-card">
            {truckSpecs.map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between px-5 py-3.5 gap-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
                <span className="text-sm font-heading font-bold text-foreground text-right">{value}</span>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-border border border-border">
            {[
              { icon: BatteryCharging, title: "Troca rápida", desc: "Bateria substituída em minutos para manter a operação contínua." },
              { icon: Gauge, title: "Uptime", desc: "Arquitetura pensada para turnos extensos e alta disponibilidade." },
              { icon: Zap, title: "Energia limpa", desc: "Propulsão elétrica para reduzir emissões e custo energético." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-secondary p-6">
                <Icon className="text-primary mb-3" size={18} />
                <h3 className="font-heading text-sm font-bold text-foreground mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="escavadeira-remota" className="py-20 section-padding bg-secondary scroll-mt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <img src={excavatorImg} alt="Escavadeira controlada remotamente" className="w-full aspect-[5/4] object-cover" />
            <div className="absolute inset-0 border border-border" />
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Escavadeira Remota</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Escavação remota para frentes com maior exigência de segurança
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A escavadeira remota foi pensada para retirar o operador da cabine e transferir a operação para um ambiente
              controlado. O resultado é mais segurança nas frentes de lavra, melhor ergonomia para a equipe e mais controle
              sobre a operação em cenários complexos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {excavatorHighlights.map((item) => (
              <div key={item} className="border border-border bg-card p-5">
                <div className="w-8 h-8 flex items-center justify-center border border-primary/30 bg-primary/10 mb-3">
                  <HardHat size={16} className="text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="space-y-0 border border-border divide-y divide-border bg-card">
            {excavatorSpecs.map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between px-5 py-3.5 gap-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
                <span className="text-sm font-heading font-bold text-foreground text-right">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="pt-0 pb-20 section-padding bg-background">
      <div className="max-w-7xl mx-auto border border-border bg-card p-10 md:p-14">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
          <div>
            <p className="text-xs text-primary font-bold tracking-widest uppercase mb-3">Portfólio Altian</p>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-5 leading-tight">
              Duas soluções, uma mesma direção: mais segurança e produtividade na mina
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              O caminhão autônomo elétrico atua no transporte contínuo com inteligência embarcada. A escavadeira remota
              atua na frente de escavação, mantendo pessoas afastadas de áreas críticas. Juntas, as soluções ampliam o
              controle operacional e preparam a operação para uma mineração mais tecnológica.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              to="/contato#formulario"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-heading font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              Solicitar apresentação técnica
              <ArrowRight size={16} className="ml-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Equipamentos;
