import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, ArrowRight, Building2, User, AtSign, PhoneCall, Landmark, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    empresa: "",
    nome: "",
    email: "",
    telefone: "",
    localizacao: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada",
      description: "Nossa equipe de engenharia entrará em contato em breve.",
    });
    setForm({ empresa: "", nome: "", email: "", telefone: "", localizacao: "", mensagem: "" });
  };

  const inputClass =
    "w-full bg-secondary border border-border px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-32 section-padding overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-32 bg-primary" />
        <div className="absolute top-0 left-0 w-32 h-1 bg-primary" />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Contato</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Leve a tecnologia autônoma<br />
            <span className="text-primary">para a sua operação</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Entre em contato com a Altian para avaliar como os caminhões autônomos elétricos podem melhorar a segurança e a produtividade na sua mina.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-secondary pt-0">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-widest">
                  Empresa *
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  className={inputClass}
                  placeholder="Nome da empresa"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-widest">
                  Nome *
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className={inputClass}
                  placeholder="Seu nome completo"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-widest">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-widest">
                  Telefone
                </label>
                <input
                  type="tel"
                  maxLength={20}
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className={inputClass}
                  placeholder="+55 (11) 00000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-widest">
                Localização da Mina
              </label>
              <input
                type="text"
                maxLength={200}
                value={form.localizacao}
                onChange={(e) => setForm({ ...form, localizacao: e.target.value })}
                className={inputClass}
                placeholder="Estado / País"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-widest">
                Mensagem *
              </label>
              <textarea
                required
                maxLength={1000}
                rows={6}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="Descreva sua operação e necessidades"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 font-heading font-bold text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors w-full"
            >
              Entrar em Contato com a Altian
              <ArrowRight size={16} className="ml-3" />
            </button>
          </form>

          {/* Info sidebar */}
          <div className="space-y-10">
            <div>
              <h3 className="font-heading text-xs font-bold text-foreground mb-6 uppercase tracking-widest">
                Informações de Contato
              </h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "contato@altian.com.br" },
                  { icon: Phone, label: "Telefone", value: "+55 (11) 0000-0000" },
                  { icon: MapPin, label: "Endereço", value: "São Paulo, SP — Brasil" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20 shrink-0">
                      <Icon className="text-primary" size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{label}</div>
                      <div className="text-sm text-foreground font-medium">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border p-6">
              <div className="h-0.5 w-8 bg-primary mb-4" />
              <h3 className="font-heading text-sm font-bold text-foreground mb-3">
                Empresas que confiam na tecnologia Altian
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Nossa tecnologia é referência para grandes mineradoras globais que exigem o mais alto padrão de segurança, eficiência e disponibilidade operacional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
