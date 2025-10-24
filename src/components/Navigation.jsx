
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/proof', label: 'Proof' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <motion.div
              className="text-2xl font-black tracking-tighter"
              whileHover={{ scale: 1.05 }}
            >
              NICOLE HALL
            </motion.div>
          </Link>

          <nav className="flex items-center gap-2">
            {links.map((link) => (
              <Link key={link.path} to={link.path} className="relative px-3 py-2">
                <span className="relative z-10 text-sm font-semibold text-foreground hover:text-primary-foreground transition-colors duration-300">
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute inset-0 bg-primary rounded-full z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
