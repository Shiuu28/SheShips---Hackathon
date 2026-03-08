import { Search, Clock, PlayCircle, BookOpen, CheckCircle, BarChart, Code, Smartphone, Database } from "lucide-react";
import { useState } from "react";

export function Lessons() {
  const [activeFilter, setActiveFilter] = useState("Todo");

  const categories = ["Todo", "Diseño UX", "Datos", "Desarrollo Web", "Producto"];

  const lessons = [
    { id: 1, title: "Introducción al Diseño UX", category: "Diseño UX", duration: "15 min", level: "Principiante", status: "Completado", icon: Smartphone, color: "bg-pink-100 text-pink-600" },
    { id: 2, title: "¿Qué hace un Analista de Datos?", category: "Datos", duration: "15 min", level: "Principiante", status: "En Progreso", icon: BarChart, color: "bg-blue-100 text-blue-600", progress: 60 },
    { id: 3, title: "Intro a la Estructura HTML", category: "Desarrollo Web", duration: "15 min", level: "Principiante", status: "Empezar", icon: Code, color: "bg-emerald-100 text-emerald-600" },
    { id: 4, title: "Entendiendo las APIs", category: "Desarrollo Web", duration: "15 min", level: "Intermedio", status: "Empezar", icon: Database, color: "bg-purple-100 text-purple-600" },
    { id: 5, title: "¿Qué es la Gestión de Producto?", category: "Producto", duration: "15 min", level: "Principiante", status: "Empezar", icon: BookOpen, color: "bg-amber-100 text-amber-600" },
    { id: 6, title: "Fundamentos de Wireframing", category: "Diseño UX", duration: "15 min", level: "Intermedio", status: "Empezar", icon: Smartphone, color: "bg-pink-100 text-pink-600" },
  ];

  const filteredLessons = activeFilter === "Todo" ? lessons : lessons.filter(l => l.category === activeFilter);

  return (
    <div className="flex-grow bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mini Lecciones</h1>
          <p className="text-lg text-slate-600">
            Micro-aprendizaje diseñado para horarios ocupados. 15 minutos al día es todo lo que necesitas para comenzar a construir tu base tecnológica.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex overflow-x-auto gap-2 w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === cat 
                    ? "bg-slate-900 text-white" 
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar lecciones..." 
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Lesson Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => (
            <div key={lesson.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all group flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${lesson.color}`}>
                  <lesson.icon className="w-6 h-6" />
                </div>
                {lesson.status === "Completado" && (
                  <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                    <CheckCircle className="w-3 h-3 mr-1" /> Hecho
                  </span>
                )}
                {lesson.status === "En Progreso" && (
                  <span className="flex items-center text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-md">
                    En Progreso
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {lesson.duration}</span>
                <span>•</span>
                <span>{lesson.level}</span>
                <span>•</span>
                <span className="font-medium text-slate-700">{lesson.category}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                {lesson.title}
              </h3>
              
              <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-2">
                Aprende los conceptos fundamentales de este tema en un formato corto diseñado para principiantes.
              </p>

              {lesson.status === "En Progreso" ? (
                <div>
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>{lesson.progress}% Completado</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: `${lesson.progress}%` }}></div>
                  </div>
                  <button className="w-full py-2.5 rounded-xl bg-purple-50 text-purple-700 font-semibold text-sm hover:bg-purple-100 transition-colors flex items-center justify-center gap-2">
                    <PlayCircle className="w-4 h-4" /> Continuar
                  </button>
                </div>
              ) : lesson.status === "Completado" ? (
                <button className="w-full py-2.5 rounded-xl bg-slate-50 text-slate-600 font-semibold text-sm hover:bg-slate-100 transition-colors">
                  Repasar Lección
                </button>
              ) : (
                <button className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                  <PlayCircle className="w-4 h-4" /> Comenzar Lección
                </button>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
