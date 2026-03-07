import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/equipamentos", label: "Equipamentos" },
  { href: "/contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-heading text-2xl font-bold tracking-tight text-foreground">
          ALT<span className="text-primary">ian</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Fale Conosco
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contato"
            onClick={() => setOpen(false)}
            className="inline-block mt-2 bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold"
          >
            Fale Conosco
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
