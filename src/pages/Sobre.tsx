import { Link } from "react-router-dom";
import {
  Shield,
  Zap,
  Globe,
  Check,
  ArrowRight,
  HardHat,
  Building2,
  CircleDot,
} from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-mine-new.jpg";
import miningImg from "@/assets/mining-operation-new.jpg";
import truckImg from "@/assets/truck-rear.jpg";
import lidarImg from "@/assets/LIDAR RADAR CAM.png";
import miningTechImg from "@/assets/mining-operation-new.jpg";

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Operação de mineração a céu aberto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/70" />
        </div>
        <div className="relative max-w-6xl mx-auto section-padding py-28">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-5 text-white">Sobre a Altian</h1>
            <p className="text-lg md:text-2xl text-slate-100 leading-relaxed mb-6 font-semibold">
              Tecnologia para a próxima geração da mineração.
            </p>
            <p className="text-base md:text-lg text-slate-200 max-w-2xl">
              A Altian traz tecnologia de última geração para operações de mineração que buscam mais segurança,
              produtividade e eficiência operacional.
            </p>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="section-padding bg-slate-950 text-slate-200">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">Quem Somos</h2>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              A Altian é uma empresa focada em trazer tecnologias avançadas para operações de mineração de grande escala.
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Nosso objetivo é apoiar mineradoras na evolução de suas operações por meio da adoção de equipamentos autônomos,
              eletrificação da frota e sistemas inteligentes de gestão operacional.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Combinamos engenharia industrial, tecnologia de ponta e conhecimento das operações de mineração para oferecer
              soluções que aumentam a segurança, reduzem riscos e melhoram a produtividade.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-700">
            <img src={miningImg} alt="Operação de mineração" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Missão / Visão */}
      <section className="section-padding bg-[#0f172a] text-slate-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-red-500 mb-2">Nossa Missão</p>
            <p className="text-sm leading-relaxed">
              Acelerar a adoção de tecnologias avançadas na mineração que protejam vidas, aumentem a produtividade e permitam
              operações mais eficientes.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-red-500 mb-2">Nossa Visão</p>
            <p className="text-sm leading-relaxed">
              Ser referência na introdução e implantação de tecnologias avançadas de mineração em operações de grande escala.
            </p>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="section-padding bg-slate-950 text-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Nossos Valores</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[{
              icon: Shield,
              title: "Segurança em Primeiro Lugar",
              desc: "A tecnologia deve reduzir riscos e proteger as pessoas que trabalham nas operações de mineração.",
            }, {
              icon: HardHat,
              title: "Excelência em Engenharia",
              desc: "Soluções robustas projetadas para ambientes industriais exigentes.",
            }, {
              icon: Zap,
              title: "Eficiência Operacional",
              desc: "Tecnologia aplicada para aumentar produtividade e reduzir custos operacionais.",
            }, {
              icon: Globe,
              title: "Parcerias de Longo Prazo",
              desc: "Trabalhamos lado a lado com nossos clientes para construir operações mais seguras e eficientes.",
            }].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-900 border border-slate-700 p-6 rounded-xl hover:border-red-500 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500/10 text-red-400 mb-3">
                  <Icon size={18} />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologia e Inovação */}
      <section className="section-padding bg-[#0b1223] text-slate-200">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Tecnologia e Inovação</h2>
            <p className="text-base leading-relaxed mb-6">
              A Altian atua na introdução de tecnologias avançadas para operações de mineração, incluindo:
            </p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2"><CircleDot size={14} className="mt-1 text-red-500"/> caminhões de mineração autônomos</li>
              <li className="flex items-start gap-2"><CircleDot size={14} className="mt-1 text-red-500"/> equipamentos elétricos de grande porte</li>
              <li className="flex items-start gap-2"><CircleDot size={14} className="mt-1 text-red-500"/> sistemas inteligentes de gestão de frota</li>
              <li className="flex items-start gap-2"><CircleDot size={14} className="mt-1 text-red-500"/> operação remota de equipamentos</li>
              <li className="flex items-start gap-2"><CircleDot size={14} className="mt-1 text-red-500"/> sistemas de dados e inteligência operacional</li>
            </ul>
            <p className="text-base leading-relaxed mt-4 text-slate-300">
              Essas tecnologias permitem operações mais seguras, eficientes e sustentáveis.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-700">
            <img src={miningTechImg} alt="Operação de mineração com caminhões de alta capacidade" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Parcerias Tecnológicas */}
      <section className="section-padding bg-slate-950 text-slate-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Parcerias Tecnológicas Globais</h2>
            <p className="text-base leading-relaxed mb-4">
              A Altian trabalha em colaboração com parceiros tecnológicos internacionais para trazer ao Brasil equipamentos e sistemas avançados.
            </p>
            <p className="text-base leading-relaxed">
              Nosso papel é adaptar e integrar essas tecnologias à realidade das operações de mineração brasileiras, com foco em confiabilidade e escala.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-700">
            <img src={truckImg} alt="Caminhão autônomo na mina" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Setor de Mineração */}
      <section className="section-padding bg-[#0f172a] text-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Foco no Setor de Mineração</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300 leading-relaxed">
            <div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><Check size={14} className="text-red-500 mt-1"/> mineração a céu aberto</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-red-500 mt-1"/> transporte de grande volume de material</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-red-500 mt-1"/> automação de operações de mina</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><Check size={14} className="text-red-500 mt-1"/> aumento da segurança operacional</li>
                <li className="flex items-start gap-2"><Check size={14} className="text-red-500 mt-1"/> otimização de produtividade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher Altian */}
      <section className="section-padding bg-slate-950 text-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Por que escolher a Altian?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[{
              title: "Tecnologia de Mineração Avançada",
              desc: "Equipamentos autônomos e elétricos para operações modernas.",
            }, {
              title: "Sistemas Orientados à Segurança",
              desc: "Tecnologia projetada para reduzir riscos operacionais.",
            }, {
              title: "Eficiência Operacional",
              desc: "Melhoria de produtividade e otimização de ciclos de transporte.",
            }, {
              title: "Suporte Técnico Especializado",
              desc: "Equipe focada na implantação e integração de tecnologias de mineração.",
            }].map(({ title, desc }) => (
              <div key={title} className="bg-slate-900 border border-slate-700 p-6 rounded-xl">
                <h3 className="font-heading text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusão */}
      <section className="section-padding bg-[#0b1223] text-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Construindo o Futuro da Mineração</h2>
          <p className="max-w-3xl mx-auto text-base leading-relaxed mb-8">
            A Altian está comprometida em apoiar mineradoras na adoção da próxima geração de tecnologia industrial.
            Por meio de equipamentos avançados, sistemas inteligentes e conhecimento técnico, ajudamos a construir operações
            de mineração mais seguras, produtivas e eficientes.
          </p>
          <Link
            to="/contato#formulario"
            className="inline-flex items-center justify-center bg-red-500 text-white px-8 py-3 uppercase text-xs tracking-[0.15em] font-bold hover:bg-red-400 transition-colors"
          >
            Fale com nossa equipe
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
