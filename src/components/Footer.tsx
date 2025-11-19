import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div>
            <h3 className="text-xl font-bold mb-4">Send Me Pls</h3>
            <p className="text-sm opacity-90">
              Shopping made simple, delivery made personal.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-semibold mb-4">IMPORTANT LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/become-runner" className="hover:text-secondary transition-colors">
                  Become a Runner
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Physical Address */}
          <div>
            <h4 className="font-semibold mb-4">PHYSICAL ADDRESS</h4>
            <p className="text-sm opacity-90">
              36 Sibaya Street Sitari Country Estate<br />
              Somerset West Western Cape 7130
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link to="/terms" className="hover:text-secondary transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/terms-customer" className="hover:text-secondary transition-colors">
                Customer
              </Link>
              <Link to="/terms-agent" className="hover:text-secondary transition-colors">
                Delivery Agent
              </Link>
            </div>
            <p className="opacity-90">
              © Copyright 2025 Send Me Pls. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
