import { useState } from "react";
import { Link } from "react-router";
import { 
  Play, CheckCircle, Clock, Trophy, Target, 
  Lightbulb, BookOpen, Flame, ChevronRight,
  TrendingUp, Award, Sparkles, ArrowRight
} from "lucide-react";
import { motion } from "motion/react";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex-grow bg-slate-50/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Bienvenida de nuevo, Maria 👋</h1>
            <p className="text-slate-600 mt-1">Estás haciendo un gran progreso hacia tu objetivo de Diseño UX.</p>
          </div>
          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-xl">
              <Flame className="w-5 h-5 text-orange-500" fill="currentColor" />
              <span className="font-bold text-orange-700">Racha de 5 días</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content - Left 2 Columns */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Progress Overview Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Tu Viaje
                </h2>
                <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  Ruta de Diseño UX
                </span>
              </div>

              <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-slate-600 mb-2">
                  <span>Progreso del Curso</span>
                  <span className="text-purple-700">45%</span>
                </div>
                <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "45%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
                  </motion.div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Lecciones", value: "12", icon: <BookOpen className="w-5 h-5 text-blue-500" />, bg: "bg-blue-50" },
                  { label: "Horas", value: "3.5", icon: <Clock className="w-5 h-5 text-emerald-500" />, bg: "bg-emerald-50" },
                  { label: "Insignias", value: "4", icon: <Award className="w-5 h-5 text-amber-500" />, bg: "bg-amber-50" },
                  { label: "Mentoras", value: "1", icon: <CheckCircle className="w-5 h-5 text-fuchsia-500" />, bg: "bg-fuchsia-50" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-2`}>
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Up Next / Mini Lessons */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-900">A continuación para ti</h2>
                <Link to="/lessons" className="text-sm font-medium text-purple-600 hover:text-purple-700 flex items-center">
                  Ver todo <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="space-y-4">
                {/* Active Lesson */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-purple-200 flex flex-col sm:flex-row gap-5 items-start sm:items-center hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md uppercase tracking-wider">En Progreso</span>
                      <span className="text-xs text-slate-500 flex items-center"><Clock className="w-3 h-3 mr-1" /> 15 min</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">Intro a la Investigación de Usuarios</h3>
                    <p className="text-sm text-slate-600 line-clamp-1 mt-1">Aprende a hablar con usuarios y obtener información valiosa.</p>
                  </div>
                  <div className="w-full sm:w-32 shrink-0">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>70%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>

                {/* Next Lesson */}
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-5 items-start sm:items-center hover:border-purple-200 transition-colors cursor-pointer group">
                  <div className="w-16 h-16 bg-slate-50 text-slate-400 border border-slate-200 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-purple-50 group-hover:text-purple-500 group-hover:border-purple-200 transition-colors">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-slate-500 flex items-center"><Clock className="w-3 h-3 mr-1" /> 15 min</span>
                      <span className="text-xs text-slate-500">• Principiante</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">Creando Personas de Usuario</h3>
                    <p className="text-sm text-slate-600 line-clamp-1 mt-1">Convierte la investigación en perfiles de usuario procesables.</p>
                  </div>
                  <button className="hidden sm:block px-4 py-2 text-sm font-medium text-slate-600 bg-slate-50 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors">
                    Comenzar
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            
            {/* Daily Tip */}
            <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-300" fill="currentColor" />
                <h3 className="font-bold">Consejo Profesional del Día</h3>
              </div>
              <p className="text-purple-50 text-sm leading-relaxed mb-4">
                No necesitas un portafolio perfectamente pulido para empezar a aplicar. 
                Enfócate en 2-3 casos de estudio sólidos que expliquen claramente tu proceso de pensamiento.
              </p>
              <button className="text-sm font-semibold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl backdrop-blur-sm transition-colors w-full">
                Leer artículo completo
              </button>
            </div>

            {/* Upcoming Mentorship */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-fuchsia-500" />
                Próxima Mentoría
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwcHJvZmVzc2lvbmFsJTIwd29tYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzI5MjAzOTF8MA&ixlib=rb-4.1.0&q=80&w=150" 
                  alt="Mentora" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-100"
                />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Sarah Jenkins</p>
                  <p className="text-xs text-slate-500">Diseñadora de Producto Sr.</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 text-sm text-slate-700 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-500" />
                Mañana, 10:00 AM (30 min)
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 text-sm font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors">
                  Reprogramar
                </button>
                <button className="flex-1 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors">
                  Unirse a la Llamada
                </button>
              </div>
            </div>

            {/* AI Guidance Teaser */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:border-purple-200 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">¿Te sientes atascada?</h3>
              <p className="text-sm text-slate-600 mb-4">Chatea con nuestra guía profesional de IA para descubrir tus próximos pasos según tu progreso.</p>
              <Link to="/ai-guidance" className="text-sm font-semibold text-purple-600 group-hover:text-purple-700 flex items-center">
                Iniciar Chat <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
