import { Search, Clock, PlayCircle } from "lucide-react";
import { useState } from "react";
import { courses } from "../data/courses";

export function Lessons() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todo");

  const categories = ["Todo", "Diseño UX", "Datos", "Desarrollo Web", "Producto"];

  const lessons = courses;

  const filteredLessons = lessons.filter((lesson) => {
  const matchesCategory =
    activeFilter === "Todo" || lesson.category === activeFilter;

  const matchesSearch =
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.category.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-grow bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Cursos Recomendados
          </h1>
          <p className="text-lg text-slate-600">
            Descubre cursos de plataformas educativas para comenzar tu transición al mundo tech.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex overflow-x-auto gap-2 w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
            {categories.map((cat) => (
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
              placeholder="Buscar cursos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Lesson Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.length === 0 && (
            <p className="text-center text-slate-500 col-span-full">
              No se encontraron cursos.
            </p>
          )}
          {filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all group flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${lesson.color}`}
                >
                  <lesson.icon className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> {lesson.duration}
                </span>
                <span>•</span>
                <span>{lesson.level}</span>
                <span>•</span>
                <span className="font-medium text-slate-700">
                  {lesson.platform}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                {lesson.title}
              </h3>

              <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-2">
                Curso recomendado para comenzar a desarrollar habilidades en esta área.
              </p>

              <a
                href={lesson.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-4 h-4" /> Ver Curso
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
