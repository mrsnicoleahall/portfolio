import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills & Proof' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-lg md:text-xl font-black uppercase tracking-tight">
            Nicole Hall
          </Link>

          <div className="flex gap-4 md:gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs md:text-sm font-semibold uppercase tracking-wide ${
                  location.pathname === link.path
                    ? 'text-black'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
