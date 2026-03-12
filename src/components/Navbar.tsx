import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/altian-logo.png";

const navLinks = [
{ href: "/", label: "Início" },
{ href: "/sobre", label: "Sobre" },
{ href: "/equipamentos", label: "Equipamentos" },
{ href: "/contato", label: "Contato" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Altian" className="h-10 w-10 object-contain rounded" />
          <span className="text-lg font-bold tracking-wider uppercase text-foreground">Altian</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <Link
            key={link.href}
            to={link.href}
            className={`text-xs font-medium tracking-widest uppercase transition-colors hover:text-primary ${
            location.pathname === link.href ? "text-primary" : "text-muted-foreground"}`
            }>
            
              {link.label}
            </Link>
          )}
          <Link
            to="/contato"
            className="bg-primary text-primary-foreground px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">
            
            Fale Conosco
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open &&
      <div className="md:hidden bg-background border-t border-border px-6 pb-6">
          {navLinks.map((link) =>
        <Link
          key={link.href}
          to={link.href}
          onClick={() => setOpen(false)}
          className="block py-3 text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
          
              {link.label}
            </Link>
        )}
          <Link
          to="/contato"
          onClick={() => setOpen(false)}
          className="inline-block mt-2 bg-primary text-primary-foreground px-6 py-2.5 text-xs font-bold tracking-widest uppercase">
          
            Fale Conosco
          </Link>
        </div>
      }
    </nav>);

};

export default Navbar;