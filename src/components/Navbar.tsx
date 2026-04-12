import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Adventures", href: "/adventures" },
  { label: "Custom Experience", href: "/custom-experience" },
  { label: "Calendar", href: "/calendar" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isHome = location.pathname === "/";
  const isTransparent = isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isTransparent ? "bg-transparent" : "bg-background/95 backdrop-blur-sm border-b border-border"
      }`}
    >
      <div className="section-padding flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className={`font-sans font-bold text-xl md:text-2xl tracking-tight ${
            isTransparent ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          Found Outdoors
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`body-sm uppercase tracking-widest transition-opacity hover:opacity-70 ${
                isTransparent ? "text-primary-foreground" : "text-foreground"
              } ${location.pathname === item.href ? "opacity-100" : "opacity-70"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${isTransparent ? "text-primary-foreground" : "text-foreground"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="section-padding py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="body-md text-foreground uppercase tracking-widest"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
