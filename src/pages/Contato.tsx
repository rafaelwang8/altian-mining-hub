import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contato = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada", description: "Nossa equipe entrará em contato em breve." });
    setForm({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <Layout>
      <section className="py-32 section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Contato</h1>
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl">
            Converse com nossa equipe de engenharia. Estamos prontos para avaliar como a tecnologia ALTian pode ser aplicada à sua operação.
          </p>

          <div className="grid lg:grid-cols-3 gap-16">
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nome</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Empresa</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                  <input
                    type="tel"
                    maxLength={20}
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={5}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Descreva sua necessidade ou operação"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3.5 font-heading font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Enviar mensagem
              </button>
            </form>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Informações</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="text-primary mt-0.5" size={18} />
                    <span className="text-sm text-muted-foreground">contato@altian.com.br</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-primary mt-0.5" size={18} />
                    <span className="text-sm text-muted-foreground">+55 (11) 0000-0000</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-0.5" size={18} />
                    <span className="text-sm text-muted-foreground">São Paulo, SP — Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
