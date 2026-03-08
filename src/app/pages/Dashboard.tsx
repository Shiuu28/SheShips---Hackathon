import { Link } from "react-router";
import {
  Clock,
  Target,
  Lightbulb,
  BookOpen,
  TrendingUp,
  Sparkles,
  ArrowRight
} from "lucide-react";

export function Dashboard() {

  // Leer datos guardados desde onboarding/login
  const storedProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");

  const user = {
    name: storedProfile.name || "Invitada",
    profession: storedProfile.profession || "Explorando",
    interests: storedProfile.interests || [],
    techLevel: storedProfile.techLevel || "Principiante",
    timeCommitment: storedProfile.timeCommitment || ""
  };

  // Stack sugerido basado en intereses
  const stack = user.interests.length > 0 ? user.interests[0] : "Explorando Tech";

  // Mock IA insights (luego puede venir de IA)
  const aiInsights = {
    hiddenPotential: [
      "Gestión de crisis",
      "Comunicación con usuarios",
      "Resolución de problemas complejos"
    ],
    recommendedRoles: [
      "UX Researcher",
      "Product Manager",
      "QA Tester"
    ],
    recommendedCourses: [
      "Google UX Design Certificate",
      "Intro to User Research",
      "Product Thinking Basics"
    ]
  };

  const motivationalMessage =
    "Las mejores carreras en tecnología no empiezan con saberlo todo, empiezan con curiosidad.";

  return (
    <div className="flex-grow bg-slate-50/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Bienvenida de nuevo, {user.name} 👋
            </h1>
            <p className="text-slate-600 mt-1">
              Tu camino hacia el mundo tech está tomando forma.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Perfil de Transición */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 relative overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Tu Perfil de Transición
                </h2>

                <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  Destino Tech: {stack}
                </span>
              </div>

              {/* Perfil detectado */}
              <div className="mb-6">
                <p className="text-sm text-slate-500 font-medium mb-2 uppercase tracking-wider">
                  Perfil detectado
                </p>

                <div className="flex flex-wrap gap-2">
                  {user.interests.length > 0
                    ? user.interests.map((trait: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-purple-50 text-purple-700 rounded-full font-medium"
                        >
                          {trait}
                        </span>
                      ))
                    : ["Explorando", "Curiosa", "Aprendiendo"].map((trait: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-purple-50 text-purple-700 rounded-full font-medium"
                        >
                          {trait}
                        </span>
                      ))}
                </div>
              </div>

              {/* Experiencia previa */}
              <div className="mb-6">
                <p className="text-sm text-slate-500 font-medium mb-2 uppercase tracking-wider">
                  Experiencia previa
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full font-medium">
                    {user.profession}
                  </span>
                </div>
              </div>

            </div>

            {/* Potencial Oculto */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Tu Potencial Oculto
              </h2>

              <div className="flex flex-wrap gap-3">
                {aiInsights.hiddenPotential.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm bg-purple-50 text-purple-700 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Roles recomendados */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-fuchsia-500" />
                Roles Recomendados
              </h2>

              <div className="grid sm:grid-cols-3 gap-4">
                {aiInsights.recommendedRoles.map((role, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-50 rounded-xl text-center font-semibold text-slate-700 hover:bg-purple-50 transition-colors"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>

            {/* Cursos recomendados */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-500" />
                Cursos para empezar
              </h2>

              <div className="space-y-3">
                {aiInsights.recommendedCourses.map((course, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-50 rounded-xl flex justify-between items-center"
                  >
                    <span className="font-medium text-slate-700">{course}</span>

                    <Link
                      to="/lessons"
                      className="text-sm font-semibold text-purple-600 hover:text-purple-700"
                    >
                      Ver curso
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Motivational Message */}
            <div className="bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">

              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-300" />
                <h3 className="font-bold">Dato Tech del Día</h3>
              </div>

              <p className="text-purple-50 text-sm leading-relaxed mb-4">
                {motivationalMessage}
              </p>

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

            {/* AI Chat */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:border-purple-200 transition-colors group cursor-pointer">

              <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>

              <h3 className="font-bold text-slate-900 mb-2">
                ¿Necesitas orientación?
              </h3>

              <p className="text-sm text-slate-600 mb-4">
                Habla con nuestra guía profesional de IA y descubre tu próximo paso.
              </p>

              <Link
                to="/ai-guidance"
                className="text-sm font-semibold text-purple-600 flex items-center"
              >
                Iniciar Chat <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
