import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Become a Runner", path: "/become-runner" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-primary text-primary-foreground sticky top-0 z-40 shadow-premium">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center group">
            <span className="text-3xl font-bold tracking-tight transition-all duration-300 group-hover:text-secondary">
              Send Me Pls
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-base font-semibold transition-all duration-300 hover:text-secondary ${
                  isActive(link.path) ? "text-secondary" : ""
                } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-secondary after:left-0 after:-bottom-2 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  isActive(link.path) ? "after:scale-x-100" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 hover:text-secondary transition-colors ${
                  isActive(link.path) ? "text-secondary" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
