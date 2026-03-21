import { Link } from "react-router-dom";
import {
  Shield,
  Gauge,
  Wrench,
  ChevronRight,
  HardHat,
  Headphones,
  Settings,
  Truck,
  Zap,
  Eye,
  Brain,
  Radio,
  BatteryCharging,
  ArrowRight,
  Check,
} from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-mine-new.jpg";
import truckImg from "@/assets/truck-rear.jpg";
import techImg from "@/assets/radar lidar caminhao camera.png";
import excavatorImg from "@/assets/excavator-new.jpg";
import supportImg from "@/assets/support-team-new.jpg";
import miningImg from "@/assets/mining-operation-new.jpg";
import miningProvenImg from "@/assets/mining-proven.jpg";
import altianLogo from "@/assets/reduzido-fundo.png";


const Index = () => {
  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Frota autônoma de mineração operando em mina a céu aberto"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>

        {/* corner accent line */}
        <div className="absolute top-0 left-0 w-1 h-32 bg-primary" />
        <div className="absolute top-0 left-0 w-32 h-1 bg-primary" />

        <div className="relative z-10 max-w-7xl mx-auto section-padding w-full">
          <div className="max-w-3xl">
            <img
              src={altianLogo}
              alt="Logo Altian"
              className="h-20 md:h-24 mb-4 object-contain"
            />
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                Tecnologia aplicada na Mineração do Brasil
              </span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 tracking-tight text-primary">
              Tecnologia que <span className="text-primary">protege vidas</span>{" "}
              e aumenta a produtividade na mineração
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl">
              Caminhões autônomos elétricos e sistemas inteligentes para
              operações de mineração de grande escala.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contato#formulario"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-heading font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                Falar com nossa equipe
                <ArrowRight size={16} className="ml-3" />
              </Link>
              <Link
                to="/contato#formulario"
                className="inline-flex items-center justify-center border border-metallic/40 text-foreground px-8 py-4 font-heading font-bold text-xs tracking-widest uppercase hover:border-primary hover:text-primary transition-colors"
              >
                Solicitar apresentação técnica
              </Link>
            </div>
          </div>
        </div>


      </section>

      {/* ── SOBRE ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                Sobre a Altian
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Tecnologia de mineração de próxima geração para o Brasil
            </h2>
            <div className="industrial-border pl-6 mb-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                A Altian é a empresa brasileira que traz equipamentos e sistemas
                operacionais de mineração de próxima geração ao setor nacional.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Com expertise em operações de mineração de grande escala,
              disponibilizamos tecnologia global de ponta adaptada à realidade
              das minas brasileiras. Nosso portfólio inclui caminhões autônomos
              elétricos, escavadeiras controladas remotamente e sistemas
              inteligentes de gestão de frota.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Trabalhamos com as principais mineradoras do mundo para entregar
              operações mais seguras, produtivas e sustentáveis — eliminando a
              exposição de operadores a ambientes de risco e reduzindo custos
              operacionais por tonelada.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Caminhões autônomos elétricos",
                "Sistemas de percepção LIDAR e radar",
                "Despacho inteligente de frota",
                "Operação remota segura",
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

          <div className="relative">
            <img
              src={miningImg}
              alt="Operação de mineração a céu aberto"
              className="w-full aspect-[4/3] object-cover"
            />

            <div className="absolute inset-0 border border-border" />
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-border bg-background/80 flex items-center justify-center">
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-primary">
                  24/7
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  Operação
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTONOMOUS MINING TECH ────────────────────────────────── */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                Sistema de Tecnologia
              </span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Autônomo L4 - Tecnologia de Mineração Autônoma
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sistemas avançados que eliminam o risco humano e maximizam a
              eficiência operacional da mina.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src={techImg}
                alt="Sistema LIDAR e radar do caminhão autônomo"
                className="w-full aspect-[16/9] object-cover"
              />

              <div className="h-0.5 bg-primary" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Gauge,
                  label: "Direção Autônoma L4",
                  desc: "Operação autônoma completa sem intervenção humana em rotas de mina.",
                },
                {
                  icon: Eye,
                  label: "Percepção LIDAR & Radar",
                  desc: "Mapeamento 3D em tempo real do ambiente para navegação precisa e segura.",
                },
                {
                  icon: Brain,
                  label: "Tomada de Decisão por IA",
                  desc: "Algoritmos de inteligência artificial para decisões autônomas em campo.",
                },
                {
                  icon: Radio,
                  label: "Despacho Inteligente",
                  desc: "Otimização automática de ciclos de transporte e alocação de frota.",
                },
                {
                  icon: Truck,
                  label: "Operação Remota",
                  desc: "Centro de controle remoto com visibilidade total da operação.",
                },
                {
                  icon: BatteryCharging,
                  label: "Troca de Bateria",
                  desc: "Sistema de troca instantânea para operação contínua 24/7 sem paradas.",
                },
              ].map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-card border border-border p-5 hover:border-primary/40 transition-colors group"
                >
                  <Icon className="text-primary mb-3" size={20} />
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">
                    {label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3 pilars */}
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                icon: Shield,
                title: "Segurança",
                metric: "Zero",
                metricSub: "operadores em risco",
                desc: "Remove completamente os operadores de ambientes perigosos, eliminando acidentes fatais nas operações de carga e transporte.",
              },
              {
                icon: Gauge,
                title: "Produtividade",
                metric: "24/7",
                metricSub: "operação contínua",
                desc: "Ciclos ininterruptos com despacho otimizado por IA, eliminando tempo de espera e maximizando o volume transportado.",
              },
              {
                icon: Zap,
                title: "Redução de Custos",
                metric: "−40%",
                metricSub: "custo por tonelada",
                desc: "Menor custo de energia elétrica versus diesel, redução de mão de obra e manutenção preditiva integrada.",
              },
            ].map(({ icon: Icon, title, metric, metricSub, desc }) => (
              <div key={title} className="bg-card p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <div className="font-heading text-3xl font-bold text-primary">
                      {metric}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {metricSub}
                    </div>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPMENT ─────────────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Equipamentos
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Caminhão Autônomo Elétrico
          </h2>
          <div className="grid lg:grid-cols-2 gap-0 border border-border">
            {/* image */}
            <div className="relative overflow-hidden">
              <img
                src={truckImg}
                alt="Caminhão autônomo elétrico de mineração"
                className="w-full h-full object-cover min-h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            </div>

            {/* specs */}
            <div className="p-10 lg:p-14 bg-card">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-primary text-xs font-bold tracking-widest uppercase">
                  Próxima Geração
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-10">
                Projetado para operações de mineração de grande escala em minas
                a céu aberto. Combina alta capacidade de carga com tecnologia de
                condução autônoma L4 e propulsão totalmente elétrica.
              </p>

              <div className="space-y-0 border border-border divide-y divide-border mb-10">
                {[
                  { label: "Capacidade de Carga", value: "100+ toneladas" },
                  { label: "Bateria", value: "Até 800 kWh" },
                  { label: "Sistema de Bateria", value: "Troca instantânea" },
                  { label: "Autonomia", value: "Direção L4 autônoma" },
                  { label: "Percepção", value: "LIDAR, radar e câmeras" },
                  { label: "Aplicação", value: "Minas a céu aberto" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between px-5 py-3.5"
                  >
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                      {label}
                    </span>
                    <span className="text-sm font-heading font-bold text-foreground">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/equipamentos"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 font-heading font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors w-full"
              >
                Ver especificações completas
                <ArrowRight size={16} className="ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROVEN TECHNOLOGY ─────────────────────────────────────── */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={miningProvenImg}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-background/92" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                Confiabilidade Comprovada
              </span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tecnologia de Mineração Comprovada
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A tecnologia Altian já está implantada em operações de mineração
              de grande escala ao redor do mundo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border mb-16">
            {[
              { stat: "500+", label: "Caminhões Autônomos Implantados" },
              { stat: "50M+", label: "Quilômetros de Operação Autônoma" },
              { stat: "10+", label: "Frotas de Grande Escala em Operação" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-card p-10 text-center">
                <div className="stat-number mb-3">{stat}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Validado em Campo",
                desc: "Tecnologia testada e validada nas condições mais severas de operação em minas a céu aberto.",
              },
              {
                title: "Padrão Internacional",
                desc: "Equipamentos com certificação para operação em grandes mineradoras globais.",
              },
              {
                title: "Suporte Contínuo",
                desc: "Time de engenharia dedicado para suporte técnico 24/7 em operação.",
              },
              {
                title: "Integração Comprovada",
                desc: "Integração com sistemas de gestão de mina e despacho operacional já utilizados.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-card border border-border p-6">
                <div className="h-0.5 w-8 bg-primary mb-4" />
                <h3 className="font-heading text-sm font-bold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPLOYMENT PROCESS ────────────────────────────────────── */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                Implementação
              </span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Processo de Implantação
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Metodologia estruturada para implantação de operações autônomas
              com o mínimo de impacto na operação atual.
            </p>
          </div>

          <div className="relative">
            {/* connecting line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-border hidden lg:block" />

            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  icon: Gauge,
                  title: "Avaliação da Operação",
                  desc: "Avaliação das necessidades de transporte e condições operacionais da mina.",
                },
                {
                  step: "02",
                  icon: Settings,
                  title: "Preparação de Infraestrutura",
                  desc: "Preparação para operações autônomas e sistema de troca de baterias.",
                },
                {
                  step: "03",
                  icon: Truck,
                  title: "Entrega dos Equipamentos",
                  desc: "Entrega e instalação dos caminhões autônomos na operação.",
                },
                {
                  step: "04",
                  icon: Radio,
                  title: "Integração de Sistemas",
                  desc: "Integração com os sistemas de despacho e gestão operacional da mina.",
                },
                {
                  step: "05",
                  icon: Headphones,
                  title: "Suporte Operacional",
                  desc: "Treinamento, monitoramento contínuo e suporte técnico especializado.",
                },
              ].map(({ step, icon: Icon, title, desc }) => (
                <div key={step} className="relative">
                  <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-card border border-border relative z-10">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <div className="text-center">
                    <span className="text-primary font-heading font-bold text-xs tracking-widest">
                      {step}
                    </span>
                    <h3 className="font-heading text-base md:text-lg font-bold text-foreground mt-1 mb-2">
                      {title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OPERATIONAL SUPPORT ───────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              src={supportImg}
              alt="Equipe técnica de suporte Altian"
              className="w-full aspect-[4/3] object-cover"
            />

            <div className="absolute inset-0 border border-border" />
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase">
                Suporte
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              Suporte Operacional Completo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Acompanhamos cada etapa da operação com serviços técnicos
              especializados para garantir máxima disponibilidade e desempenho
              dos equipamentos.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: HardHat,
                  title: "Treinamento de Operadores",
                  desc: "Capacitação técnica completa da equipe para operação dos sistemas autônomos.",
                },
                {
                  icon: Headphones,
                  title: "Suporte Técnico 24/7",
                  desc: "Time de engenharia disponível a qualquer momento para resolução de ocorrências.",
                },
                {
                  icon: Wrench,
                  title: "Manutenção Preventiva e Corretiva",
                  desc: "Programas de manutenção estruturados para maximizar a disponibilidade da frota.",
                },
                {
                  icon: Settings,
                  title: "Integração com a Operação da Mina",
                  desc: "Conexão com sistemas de gestão e despacho já utilizados na mina.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-5 bg-secondary border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 shrink-0">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-foreground mb-1">
                      {title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA CONTACT ───────────────────────────────────────────── */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            className="w-full h-full object-cover object-top"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-background/95" />
        </div>
        {/* corner accents */}
        <div className="absolute top-0 right-0 w-1 h-24 bg-primary" />
        <div className="absolute top-0 right-0 w-24 h-1 bg-primary" />
        <div className="absolute bottom-0 left-0 w-1 h-24 bg-primary" />
        <div className="absolute bottom-0 left-0 w-24 h-1 bg-primary" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">
              Contato
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Leve a tecnologia autônoma para a sua operação de mineração
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Entre em contato com a Altian para avaliar como os caminhões
            autônomos elétricos podem melhorar a segurança e a produtividade na
            sua mina.
          </p>
          <Link
            to="/contato#formulario"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-12 py-4 font-heading font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors glow-yellow"
          >
            Entrar em contato com a Altian
            <ArrowRight size={16} className="ml-3" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
