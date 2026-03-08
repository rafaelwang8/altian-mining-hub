import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ChevronRight, Weight, Fuel, Gauge, ShieldCheck, Cog, Mountain } from "lucide-react";
import truckImg from "@/assets/truck-detail.jpg";
import excavatorImg from "@/assets/excavator.jpg";
import heroImg from "@/assets/hero-truck.jpg";

const Equipamentos = () => (
  <Layout>
    {/* Hero */}
    <section className="relative py-32 section-padding">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Caminhão de mineração" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Equipamentos</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Caminhões off-road de alta capacidade projetados para as condições mais exigentes da mineração a céu aberto.
        </p>
      </div>
    </section>

    {/* Truck Detail */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <img src={truckImg} alt="Caminhão off-road Boonray 91t" className="w-full aspect-square object-cover" />
          <div className="h-1 bg-primary" />
        </div>
        <div>
          <span className="text-primary font-heading text-xs font-semibold tracking-widest uppercase">Boonray</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            Caminhão Off-Road 91 Toneladas
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Projetado para transportar grandes volumes de material em terrenos acidentados, o caminhão off-road de 91 toneladas combina potência bruta com sistemas inteligentes de controle e segurança. Ideal para operações de larga escala em minas a céu aberto.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: Weight, label: "Capacidade", value: "91 toneladas" },
              { icon: Fuel, label: "Eficiência", value: "Baixo consumo/t" },
              { icon: Gauge, label: "Desempenho", value: "Alta potência" },
              { icon: ShieldCheck, label: "Segurança", value: "Freios avançados" },
              { icon: Cog, label: "Manutenção", value: "Acesso simplificado" },
              { icon: Mountain, label: "Terreno", value: "Off-road severo" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-card border border-border p-4">
                <Icon className="text-primary mb-2" size={20} />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                <p className="text-sm font-heading font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>

          <Link
            to="/contato"
            className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3.5 font-heading font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Solicitar ficha técnica <ChevronRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>

    {/* Advantages */}
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-12 text-center">Vantagens Operacionais</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Durabilidade Extrema", desc: "Estrutura reforçada para operação contínua em condições severas de temperatura, poeira e impacto." },
            { title: "Custo por Tonelada", desc: "Eficiência de combustível e manutenção reduzida resultam em menor custo operacional por tonelada transportada." },
            { title: "Integração Tecnológica", desc: "Sistemas de telemetria e monitoramento remoto integrados para gestão de frota em tempo real." },
          ].map(({ title, desc }) => (
            <div key={title} className="industrial-border pl-6">
              <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Equipamentos;
