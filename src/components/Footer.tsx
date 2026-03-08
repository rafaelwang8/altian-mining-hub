import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () =>
<footer className="bg-secondary border-t border-border">
    <div className="max-w-7xl mx-auto section-padding py-12">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-3">
            Alt<span className="text-primary">​</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">Empresa brasileira de tecnologias para mineração.

        </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Navegação</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Início</Link>
            <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre</Link>
            <Link to="/equipamentos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Equipamentos</Link>
            <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Contato</h4>
          <p className="text-sm text-muted-foreground mb-2">contato@altian.com.br</p>
          <a

          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" href="">
          
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Altian. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>;


export default Footer;