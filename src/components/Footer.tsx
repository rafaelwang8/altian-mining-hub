import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="max-w-7xl mx-auto section-padding py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Tecnologia autônoma e elétrica para mineração de grande escala. Segurança, produtividade e eficiência operacional.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-xs font-bold text-foreground mb-4 uppercase tracking-widest">Navegação</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Início</Link>
            <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre</Link>
            <Link to="/equipamentos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Equipamentos</Link>
            <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-xs font-bold text-foreground mb-4 uppercase tracking-widest">Contato</h4>
          <p className="text-sm text-muted-foreground mb-3">contato@altian.com.br</p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Altian. Todos os direitos reservados.
        </p>
        <div className="h-0.5 w-12 bg-primary" />
      </div>
    </div>
  </footer>
);

export default Footer;
