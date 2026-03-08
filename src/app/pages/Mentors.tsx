import { Star, Clock, Calendar, MessageCircle, MapPin, Search, Filter } from "lucide-react";
import { useState } from "react";

export function Mentors() {
  const [activeTab, setActiveTab] = useState("Todas");

  const mentors = [
    {
      id: 1,
      name: "Jessica Chen",
      role: "Diseñadora de Producto Sr.",
      company: "TechCorp",
      experience: "8 años",
      bio: "Diseñadora autodidacta que transicionó desde la enseñanza. Apasionada por ayudar a otras a construir portafolios.",
      image: "https://images.unsplash.com/photo-1582730662695-bac7f5f11cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMHdvbWFuJTIwdGVjaCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjkyMDM5MHww&ixlib=rb-4.1.0&q=80&w=400",
      skills: ["Diseño UX", "Revisión de Portafolio", "Consejo Profesional"],
      availability: "La próxima semana",
      rating: 5.0,
      reviews: 42,
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Ingeniera Frontend",
      company: "StartupInc",
      experience: "5 años",
      bio: "Graduada de Bootcamp convertida en líder frontend. Puedo ayudarte a navegar entrevistas y aprender React.",
      image: "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwcHJvZmVzc2lvbmFsJTIwd29tYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzI5MjAzOTF8MA&ixlib=rb-4.1.0&q=80&w=400",
      skills: ["Frontend", "Prep. para Entrevistas", "React"],
      availability: "Esta semana",
      rating: 4.9,
      reviews: 28,
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Analista de Datos",
      company: "DataDynamics",
      experience: "6 años",
      bio: "Madre de dos que transicionó a datos durante la licencia de maternidad. ¡Aquí para mostrarte que es posible!",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NzI5MjA0MDB8MA&ixlib=rb-4.1.0&q=80&w=400",
      skills: ["SQL", "Visualización de Datos", "Revisión de CV"],
      availability: "En 2 semanas",
      rating: 4.8,
      reviews: 15,
    },
  ];

  return (
    <div className="flex-grow bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Encontrar una Mentora</h1>
            <p className="text-lg text-slate-600">
              Conéctate con mujeres experimentadas en tecnología que pueden guiarte en tu viaje. Reserva una sesión para consejos profesionales, revisión de portafolio o preparación para entrevistas.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100 flex items-center gap-4 shadow-sm">
            <div className="bg-white p-2 rounded-xl text-purple-600">
              <Star className="w-6 h-6" fill="currentColor" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">¿Eres profesional?</p>
              <p className="text-xs text-slate-600">Las mentoras ganan recompensas para herramientas como Figma.</p>
            </div>
            <button className="text-sm font-semibold text-purple-700 bg-white px-3 py-1.5 rounded-lg border border-purple-200 hover:bg-purple-50 transition-colors">
              Conviértete en Mentora
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            {["Todas", "Diseño", "Ingeniería", "Datos", "Producto"].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === cat 
                    ? "bg-slate-900 text-white" 
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar por habilidad o nombre..." 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 border border-slate-200 rounded-full bg-white text-slate-600 hover:bg-slate-50">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mentor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <img src={mentor.image} alt={mentor.name} className="w-16 h-16 rounded-2xl object-cover shadow-sm" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{mentor.name}</h3>
                  <p className="text-sm text-purple-600 font-medium">{mentor.role}</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-slate-500">
                    <Star className="w-3 h-3 text-amber-400" fill="currentColor" />
                    <span className="font-bold text-slate-700">{mentor.rating}</span>
                    <span>({mentor.reviews} reseñas)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 bg-slate-50 py-2 px-3 rounded-xl w-fit">
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {mentor.company}</span>
                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {mentor.experience}</span>
              </div>

              <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">"{mentor.bio}"</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {mentor.skills.map((skill, index) => (
                  <span key={index} className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-md border border-purple-100">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <div className="flex items-center text-xs text-slate-500">
                  <Calendar className="w-4 h-4 mr-1 text-emerald-500" />
                  <span className="font-medium">Disp. {mentor.availability}</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm font-semibold rounded-xl hover:from-purple-700 hover:to-fuchsia-700 transition-colors shadow-sm">
                  Reservar Sesión
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
