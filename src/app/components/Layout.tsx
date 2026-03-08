import { Outlet, Link, useLocation } from "react-router";
import { Heart, BookOpen, Users, Award, Sparkles, LayoutDashboard, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Explorar", path: "/", icon: null },
    { name: "Lecciones", path: "/lessons", icon: <BookOpen className="w-4 h-4 mr-2" /> },
    { name: "Mentoras", path: "/mentors", icon: <Users className="w-4 h-4 mr-2" /> },
    { name: "Certificaciones", path: "/certifications", icon: <Award className="w-4 h-4 mr-2" /> },
    { name: "Guía IA", path: "/ai-guidance", icon: <Sparkles className="w-4 h-4 mr-2" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <div className="bg-gradient-to-br from-purple-500 to-fuchsia-500 p-2 rounded-xl group-hover:shadow-md transition-all">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-fuchsia-600 hidden sm:block">
                She Builds
              </span>
            </Link>

            <nav className="hidden lg:flex space-x-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path && link.path !== "/" || (link.path === "/" && location.pathname === "/");
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-purple-50 text-purple-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-purple-600"
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                to="/dashboard"
                className="hidden sm:flex items-center px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-full transition-colors whitespace-nowrap"
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Panel
              </Link>
              <Link
                to="/onboarding"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap"
              >
                Regístrate
              </Link>
              
              <button 
                className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-purple-100 bg-white overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path && link.path !== "/" || (link.path === "/" && location.pathname === "/");
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center px-4 py-3 rounded-2xl text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-purple-50 text-purple-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-purple-600"
                      }`}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  );
                })}
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center px-4 py-3 rounded-2xl text-base font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 transition-colors"
                >
                  <LayoutDashboard className="w-5 h-5 mr-3" />
                  Panel
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-500" fill="currentColor" />
            <span className="text-lg font-bold text-slate-800">She Builds</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-left">
            Empoderando a mujeres para transicionar a carreras tecnológicas.
          </p>
          <div className="flex gap-4">
            <span className="text-sm text-slate-500 hover:text-purple-600 cursor-pointer">Sobre Nosotras</span>
            <span className="text-sm text-slate-500 hover:text-purple-600 cursor-pointer">Privacidad</span>
            <span className="text-sm text-slate-500 hover:text-purple-600 cursor-pointer">Términos</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
