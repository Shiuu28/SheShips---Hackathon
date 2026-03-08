import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, CheckCircle, Linkedin, Briefcase, Clock, Target, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Onboarding() {
  const [step, setStep] = useState(1);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    profession: "",
    techLevel: "",
    interests: [] as string[],
    timeCommitment: ""
  });

  // Puedes mapear un "stack" sugerido desde intereses
  const stack = userData.interests?.[0] || "Explorando tech";

  const navigate = useNavigate();

  const handleNext = () => {
  if (step < 4) {
    setStep(step + 1);
  } else {
    localStorage.setItem("userProfile", JSON.stringify(userData));
    navigate("/dashboard");
  }
  };
  
  const handleBack = () => {
    if (step > 1) setStep(step - 1);
    else navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-100/50 to-transparent -z-10"></div>
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-fuchsia-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      {/* Top Nav Minimal */}
      <div className="p-6 flex justify-between items-center z-10">
        <button onClick={handleBack} className="p-2 rounded-full hover:bg-white transition-colors text-slate-600 flex items-center gap-2 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Volver
        </button>
        <div className="text-sm font-bold text-slate-400">Paso {step} de 4</div>
      </div>

      <div className="flex-grow flex items-center justify-center p-4 z-10">
        <div className="bg-white w-full max-w-xl rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden relative">
          
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-slate-100">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
              initial={{ width: `${((step - 1) / 4) * 100}%` }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </div>

          <div className="p-8 sm:p-12">
            <AnimatePresence mode="wait">
              
              {/* Step 1: Basic Info / Auth */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">¡Bienvenida a She Builds!</h2>
                    <p className="text-slate-600">Creemos tu cuenta para comenzar tu viaje.</p>
                  </div>

                  <button
                    onClick={() => {
                      setUserData({
                        ...userData,
                        name: "María",
                        email: "maria@linkedin.com"
                      });

                      setStep(2);
                    }}
                    className="w-full py-3.5 px-4 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-sm"
                  >
                    <Linkedin className="w-5 h-5" /> Continuar con LinkedIn
                  </button>
                  
                  <div className="relative flex items-center py-4">
                    <div className="flex-grow border-t border-slate-200"></div>
                    <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">o regístrate con email</span>
                    <div className="flex-grow border-t border-slate-200"></div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre Completo</label>
                      <input
                        type="text"
                        value={userData.name}
                        onChange={(e) =>
                          setUserData({ ...userData, name: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                        placeholder="Maria Garcia"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                      <input
                        type="email"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                        placeholder="maria@ejemplo.com"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Background */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">¿Cuál es tu experiencia?</h2>
                    <p className="text-slate-600">Tu experiencia previa es valiosa. Cuéntanos qué haces actualmente.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Profesión Actual</label>
                    <select
                      value={userData.profession}
                      onChange={(e) =>
                        setUserData({ ...userData, profession: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all text-slate-700 appearance-none"
                    >
                      <option value="">Selecciona una profesión...</option>
                      <option value="teacher">Maestra / Educadora</option>
                      <option value="retail">Comercio / Servicio al Cliente</option>
                      <option value="healthcare">Salud</option>
                      <option value="admin">Administrativo / Oficina</option>
                      <option value="stayAtHome">Madre/Padre en casa</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Considero que mis habilidades técnicas son:</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["Principiante", "Intermedio", "Avanzado"].map(level => (
                        <label key={level} className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 hover:border-purple-200 transition-all focus-within:ring-2 focus-within:ring-purple-500">
                          <input
                            type="radio"
                            name="techLevel"
                            value={level}
                            onChange={(e) =>
                              setUserData({ ...userData, techLevel: e.target.value })
                            }
                            className="sr-only"
                          />
                          <span className="text-sm font-medium text-slate-700">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Goals */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-fuchsia-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-fuchsia-600" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">¿Cuáles son tus metas?</h2>
                    <p className="text-slate-600">Selecciona las áreas que más te interesan explorar.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Diseño UX/UI", "Análisis de Datos", "Desarrollo Web", "Gestión de Producto", "Ciberseguridad", "¡Aún no estoy segura!"].map(interest => (
                      <label
                        key={interest}
                        className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 hover:border-purple-200 transition-all group"
                      >

                        <input
                          type="checkbox"
                          value={interest}
                          checked={userData.interests.includes(interest)}
                          className="sr-only"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setUserData({
                                ...userData,
                                interests: [...userData.interests, interest]
                              });
                            } else {
                              setUserData({
                                ...userData,
                                interests: userData.interests.filter(i => i !== interest)
                              });
                            }
                          }}
                        />

                        <div className="w-5 h-5 rounded border border-slate-300 mr-3 flex items-center justify-center group-hover:border-purple-400">

                          {userData.interests.includes(interest) && (
                            <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
                          )}

                        </div>

                        <span className="text-sm font-medium text-slate-700">
                          {interest}
                        </span>

                      </label>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 4: Time Commitment */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">¿Cuánto tiempo tienes?</h2>
                    <p className="text-slate-600">¡Sé realista! Nuestras lecciones de 15 minutos están diseñadas para adaptarse a cualquier horario.</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { title: "1-2 horas / semana", desc: "Apenas comenzando, aprendiendo casualmente." },
                      { title: "3-5 horas / semana", desc: "Progreso constante, ~30 minutos al día." },
                      { title: "5-10+ horas / semana", desc: "Acelerando mi transición." }
                    ].map(time => (
                      <label key={time.title} className="flex items-start p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 hover:border-purple-200 transition-all group">
                        <input
                          type="radio"
                          name="time"
                          value={time.title}
                          onChange={(e) =>
                            setUserData({ ...userData, timeCommitment: e.target.value })
                          }
                          className="mt-1 flex-shrink-0"
                        />
                        <div className="ml-3">
                          <span className="block text-sm font-bold text-slate-900">{time.title}</span>
                          <span className="block text-sm text-slate-500 mt-0.5">{time.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

            <div className="mt-10 pt-6 border-t border-slate-100 flex gap-4">
              <button 
                onClick={handleNext}
                className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                {step < 4 ? "Continuar" : "Completar Configuración"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
