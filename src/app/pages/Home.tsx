import { Link } from "react-router";
import { ArrowRight, BookOpen, Heart, Sparkles, UserCheck, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white/50 pt-16 pb-24 md:pt-28 md:pb-36">
        <div className="absolute top-0 right-0 -z-10 w-full h-[600px] bg-gradient-to-b from-purple-100/50 to-transparent blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium w-fit border border-purple-100 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-fuchsia-500" />
              Tu amiga de apoyo en la tecnología
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              Construye tu futuro en la tecnología,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
                un paso a la vez.
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              Una plataforma donde las mujeres descubren carreras tech, aprenden con micro-lecciones y reciben mentoría de mujeres que ya hicieron la transición.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Comenzar Mi Viaje <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/mentors"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-full transition-all"
              >
                Encontrar una Mentora
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-fuchsia-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1544717305-f9c88f2897bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwd29tZW4lMjB3b3JraW5nJTIwbW9kZXJuJTIwb2ZmaWNlJTIwbGFwdG9wfGVufDF8fHx8MTc3MjkyMDM5MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Diverse women working together"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
            />
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Nuevo Certificado</p>
                <p className="text-xs text-slate-500">Diseño UX de Google</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-600" fill="currentColor" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Apoyo</p>
                <p className="text-xs text-slate-500">Mentoría</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              La transición a la tecnología no debería ser abrumadora.
            </h2>
            <p className="text-lg text-slate-600">
              Sabemos que estás ocupada, insegura de por dónde empezar y preguntándote si tus habilidades se traducen. She Builds está diseñada para tu viaje único.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mini Lecciones para Vidas Ocupadas</h3>
              <p className="text-slate-600">
                Avanza en tecnología con micro-lecciones de 15 minutos al día. Recibe tareas prácticas y pasos claros para aprender incluso con poco tiempo disponible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-fuchsia-50 rounded-2xl flex items-center justify-center mb-6">
                <UserCheck className="w-7 h-7 text-fuchsia-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mentoría de Mujeres</h3>
              <p className="text-slate-600">
                Conéctate con mujeres experimentadas en tecnología que han estado exactamente donde tú estás. Obtén comentarios sobre tu portafolio, consejos profesionales y apoyo.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Guía Profesional con IA</h3>
              <p className="text-slate-600">
                ¿No estás segura de qué camino elegir? Nuestro asistente de IA te ayuda a mapear tus habilidades transferibles a roles tecnológicos ideales basados en tus intereses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-[2.5rem] p-8 md:p-12 border border-purple-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  "Nunca pensé que mis habilidades como maestra me harían una gran Diseñadora UX."
                </h2>
                <p className="text-lg text-slate-700 italic mb-6">
                  She Builds me ayudó a darme cuenta de que la empatía y la organización son fundamentales en los roles tecnológicos. Las lecciones de 15 minutos
                  encajan perfectamente durante las siestas de mis hijos, y mi mentora me guió en cada paso del camino.
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1673515325568-2baac75324c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwbGVhcm5pbmclMjBsYXB0b3B8ZW58MXx8fHwxNzcyOTIwMzkxfDA&ixlib=rb-4.1.0&q=80&w=150"
                    alt="Sarah M."
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <p className="font-bold text-slate-900">Sarah M.</p>
                    <p className="text-sm text-purple-600">Transicionó a Diseñadora UX Jr.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1673515325568-2baac75324c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwbGVhcm5pbmclMjBsYXB0b3B8ZW58MXx8fHwxNzcyOTIwMzkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mujer aprendiendo"
                  className="rounded-3xl shadow-lg border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
