import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logoImg from "@/assets/altian-logo.jpg";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="max-w-7xl mx-auto section-padding py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logoImg} alt="Altian" className="h-8 w-8 object-contain" />
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              ALT<span className="text-primary">IAN</span>
            </span>
          </div>
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            href=""
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
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
