import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => (
  <footer className="bg-charcoal text-primary-foreground">
    <div className="section-padding py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Logo theme="light" className="mb-6" />
          <p className="body-sm opacity-70 max-w-xs">
            Community-driven outdoor adventures. Move together, discover together.
          </p>
        </div>
        <div>
          <h4 className="body-sm uppercase tracking-widest mb-4 opacity-50">Explore</h4>
          <div className="flex flex-col gap-2">
            <Link to="/adventures" className="body-sm opacity-70 hover:opacity-100 transition-opacity">Adventures</Link>
            <Link to="/unfamiliar-places" className="body-sm opacity-70 hover:opacity-100 transition-opacity">Unfamiliar Places</Link>
            <Link to="/custom-experience" className="body-sm opacity-70 hover:opacity-100 transition-opacity">Custom Experience</Link>
          </div>
        </div>
        <div>
          <h4 className="body-sm uppercase tracking-widest mb-4 opacity-50">Info</h4>
          <div className="flex flex-col gap-2">
            <Link to="/calendar" className="body-sm opacity-70 hover:opacity-100 transition-opacity">Calendar</Link>
            <Link to="/about" className="body-sm opacity-70 hover:opacity-100 transition-opacity">About</Link>
            <Link to="/contact" className="body-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="body-sm uppercase tracking-widest mb-4 opacity-50">Connect</h4>
          <div className="flex flex-col gap-2">
            <span className="body-sm opacity-70">hello@foundoutdoors.com</span>
            <span className="body-sm opacity-70">Instagram</span>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-primary-foreground/10">
        <p className="body-sm opacity-40">© 2026 Found Outdoors. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
