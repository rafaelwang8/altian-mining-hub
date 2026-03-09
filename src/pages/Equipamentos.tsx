import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, BatteryCharging, Gauge, Zap, Eye, Radio, Cpu, ShieldCheck, Mountain, Wrench } from "lucide-react";
import truckImg from "@/assets/autonomous-truck.jpg";
import excavatorImg from "@/assets/excavator.jpg";
import techImg from "@/assets/autonomous-tech.jpg";
import heroImg from "@/assets/hero-mine.jpg";

const Equipamentos = () =>
<Layout>
    {/* Hero */}
    <section className="relative py-44 section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Frota autônoma Altian" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-background/88" />
      </div>
      <div className="absolute top-0 left-0 w-1 h-32 bg-primary" />
      <div className="absolute top-0 left-0 w-32 h-1 bg-primary" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-primary" />
          <span className="text-primary text-xs font-bold tracking-widest uppercase">Tecnologia de ponta aplicada à mineração brasileira      </span>
        </div>
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight max-w-3xl">
          Caminhões Autônomos Elétricos para Mineração
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Equipamentos de nova geração projetados para operações de mineração de grande escala a céu aberto.
        </p>
      </div>
    </section>

    {/* Truck Detail */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 border border-border mb-px">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
            src={truckImg}
            alt="Caminhão autônomo elétrico de mineração"
            className="w-full h-full object-cover min-h-[560px]" />
          
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/10" />
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          </div>

          {/* Specs */}
          <div className="p-10 lg:p-14 bg-card">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">Produto Principal</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Caminhão Autônomo Elétrico
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Projetado para transportar grandes volumes de material em terrenos acidentados com operação 100% autônoma e propulsão elétrica. Ideal para operações de larga escala em minas a céu aberto.
            </p>

            <div className="space-y-0 border border-border divide-y divide-border mb-10">
              {[
            { label: "Capacidade de Carga", value: "Até 100 toneladas" },
            { label: "Capacidade da Bateria", value: "Até 800 kWh" },
            { label: "Sistema de Bateria", value: "Troca instantânea" },
            { label: "Autonomia de Condução", value: "Nível L4" },
            { label: "Sistema de Percepção", value: "LIDAR, Radar e Câmeras" },
            { label: "Propulsão", value: "100% Elétrica" },
            { label: "Aplicação", value: "Minas a Céu Aberto" }].
            map(({ label, value }) =>
            <div key={label} className="flex items-center justify-between px-5 py-3.5">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
                  <span className="text-sm font-heading font-bold text-foreground">{value}</span>
                </div>
            )}
            </div>

            <Link
            to="/contato"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-heading font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors w-full">
            
              Solicitar ficha técnica completa
              <ArrowRight size={16} className="ml-3" />
            </Link>
          </div>
        </div>

        {/* Battery Swap */}
        <div className="grid sm:grid-cols-3 gap-px bg-border border border-border border-t-0">
          {[
        { icon: BatteryCharging, title: "Troca em Minutos", desc: "Sistema de troca de bateria instantânea sem paradas prolongadas para recarga." },
        { icon: Gauge, title: "Uptime Máximo", desc: "Operação contínua 24/7 com baterias em rotação, maximizando a produtividade." },
        { icon: Zap, title: "100% Elétrico", desc: "Zero emissões de CO₂ na operação, com custo energético significativamente menor que diesel." }].
        map(({ icon: Icon, title, desc }) =>
        <div key={title} className="bg-secondary p-8">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 mb-4">
                <Icon className="text-primary" size={18} />
              </div>
              <h3 className="font-heading text-sm font-bold text-foreground mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
        )}
        </div>
      </div>
    </section>

    {/* Autonomous System */}
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Sistema Autônomo</span>
          </div>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-6 leading-tight">
            Sistema de Percepção e Controle Autônomo
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            O sistema de percepção combina LIDAR, radar e câmeras de alta resolução para criar um mapa 3D em tempo real do ambiente. Os algoritmos de IA tomam decisões autônomas para navegação segura em qualquer condição de mina.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
          { icon: Eye, label: "Percepção LIDAR", value: "360° / 200m range" },
          { icon: Radio, label: "Radar", value: "Clima adverso" },
          { icon: Cpu, label: "Processamento IA", value: "Decisão em ms" },
          { icon: ShieldCheck, label: "Segurança", value: "Fail-safe integrado" },
          { icon: Mountain, label: "Terreno", value: "Off-road severo" },
          { icon: Wrench, label: "Diagnóstico", value: "Manutenção preditiva" }].
          map(({ icon: Icon, label, value }) =>
          <div key={label} className="bg-card border border-border p-4 hover:border-primary/40 transition-colors">
                <Icon className="text-primary mb-2" size={18} />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                <p className="text-sm font-heading font-bold text-foreground">{value}</p>
              </div>
          )}
          </div>
        </div>

        <div className="relative">
          <img src={techImg} alt="Sistema de percepção autônoma" className="w-full aspect-[16/9] object-cover" />
          <div className="absolute inset-0 border border-border" />
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
        </div>
      </div>
    </section>

    {/* Escavadeira */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <img src={excavatorImg} alt="Escavadeira controlada remotamente" className="w-full aspect-square object-cover" />
          <div className="absolute inset-0 border border-border" />
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Controle Remoto</span>
          </div>
          <h2 className="font-heading text-4xl font-bold text-foreground mb-6 leading-tight">
            Escavadeira Controlada Remotamente
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Escavadeira com controle remoto, eliminando a exposição de operadores a ambientes de risco e aumentando a segurança operacional. Equipada com câmeras, sensores e sistemas de comunicação para operação segura e precisa à distância.
          </p>

          <div className="space-y-0 border border-border divide-y divide-border mb-10">
            {[
          { label: "Modo de Operação", value: "100% Remoto" },
          { label: "Capacidade de Escavação", value: "Larga escala" },
          { label: "Sistema Visual", value: "Câmeras HD + sensores" },
          { label: "Integração", value: "Gestão de frota" }].
          map(({ label, value }) =>
          <div key={label} className="flex items-center justify-between px-5 py-3.5">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
                <span className="text-sm font-heading font-bold text-foreground">{value}</span>
              </div>
          )}
          </div>

          <Link
          to="/contato"
          className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 font-heading font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors">
          
            Solicitar informações
            <ArrowRight size={16} className="ml-3" />
          </Link>
        </div>
      </div>
    </section>

    {/* Operational advantages */}
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Vantagens</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-heading text-4xl font-bold text-foreground">Vantagens Operacionais</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
        { title: "Durabilidade Extrema", desc: "Estrutura reforçada para operação contínua em condições severas de temperatura, poeira e impacto." },
        { title: "Custo por Tonelada", desc: "Eficiência elétrica e manutenção preditiva resultam em menor custo operacional por tonelada transportada." },
        { title: "Integração Tecnológica", desc: "Sistemas de telemetria e monitoramento remoto integrados para gestão de frota em tempo real." }].
        map(({ title, desc }) =>
        <div key={title} className="bg-card p-10">
              <div className="h-0.5 w-10 bg-primary mb-6" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
        )}
        </div>
      </div>
    </section>
  </Layout>;


export default Equipamentos;