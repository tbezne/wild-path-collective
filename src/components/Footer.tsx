import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="section-padding py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-2xl mb-4">Terra</h3>
          <p className="body-sm opacity-70 max-w-xs">
            Small-group adventures in the world's most beautiful places. Less noise, more nature.
          </p>
        </div>
        <div>
          <h4 className="body-sm uppercase tracking-widest mb-4 opacity-50">Explore</h4>
          <div className="flex flex-col gap-2">
            <Link to="/adventures" className="body-sm opacity-70 hover:opacity-100 transition-opacity">Adventures</Link>
            <Link to="/calendar" className="body-sm opacity-70 hover:opacity-100 transition-opacity">Calendar</Link>
            <Link to="/about" className="body-sm opacity-70 hover:opacity-100 transition-opacity">About</Link>
          </div>
        </div>
        <div>
          <h4 className="body-sm uppercase tracking-widest mb-4 opacity-50">Connect</h4>
          <div className="flex flex-col gap-2">
            <span className="body-sm opacity-70">hello@terra.co</span>
            <span className="body-sm opacity-70">Instagram</span>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-primary-foreground/10">
        <p className="body-sm opacity-40">© 2026 Terra. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
