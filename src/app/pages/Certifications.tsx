import { Award, Briefcase, ExternalLink, ShieldCheck, Banknote, HelpCircle, Clock } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Certificado Profesional de Diseño UX de Google",
      provider: "Google via Coursera",
      duration: "6 meses (10 h/semana)",
      level: "Principiante",
      cost: "$49/mes",
      skills: ["Wireframing", "Figma", "Investigación de Usuarios", "Prototipado"],
      image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
      description: "Aprende los fundamentos del diseño UX, incluyendo la empatía con los usuarios, la creación de wireframes y el desarrollo de prototipos de alta fidelidad.",
      featured: true,
    },
    {
      id: 2,
      title: "Certificación Microsoft: Fundamentos de Azure (AZ-900)",
      provider: "Microsoft",
      duration: "15-20 horas",
      level: "Principiante",
      cost: "$99 (Costo del Examen)",
      skills: ["Conceptos en la Nube", "Servicios de Azure", "Seguridad", "Precios"],
      image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      description: "Demuestra tu conocimiento de conceptos en la nube, servicios de Azure, cargas de trabajo, seguridad, privacidad y soporte.",
      featured: false,
    },
    {
      id: 3,
      title: "Certificado Profesional de Ciencia de Datos de IBM",
      provider: "IBM via Coursera",
      duration: "5 meses (4 h/semana)",
      level: "Principiante",
      cost: "$49/mes",
      skills: ["Python", "SQL", "Análisis de Datos", "Machine Learning"],
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      description: "Domina las habilidades y conocimientos prácticos más actualizados que usan los científicos de datos en su trabajo diario.",
      featured: false,
    },
    {
      id: 4,
      title: "Certificado Profesional de Desarrollador Front-End de Meta",
      provider: "Meta via Coursera",
      duration: "7 meses (6 h/semana)",
      level: "Principiante",
      cost: "$49/mes",
      skills: ["React", "JavaScript", "HTML/CSS", "UI/UX"],
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      description: "Inicia tu carrera como desarrollador front-end. Aprende a crear sitios web y aplicaciones interactivas con React.",
      featured: false,
      sezzleEligible: true
    },
  ];

  return (
    <div className="flex-grow bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-purple-100">
            <ShieldCheck className="w-4 h-4" /> Estándares de la Industria Confiables
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Certificaciones Reconocidas</h1>
          <p className="text-lg text-slate-600">
            Impulsa tu currículum con certificaciones reconocidas por las principales empresas tecnológicas. Solo incluimos programas confiables, prácticos y altamente valorados en la industria.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm text-blue-600 shrink-0">
              <Banknote className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Opciones de Pago Flexibles</h3>
              <p className="text-sm text-slate-600 max-w-xl">
                Nos hemos asociado con Sezzle para que puedas pagar las certificaciones elegibles en 4 cuotas sin interés, haciendo el crecimiento profesional más accesible.
              </p>
            </div>
          </div>
          <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm">
            Conoce más sobre Sezzle
          </button>
        </div>

        {/* Cert List */}
        <div className="space-y-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              {cert.featured && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold px-4 py-1 rounded-bl-xl shadow-sm">
                  Altamente Recomendado
                </div>
              )}
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 p-4 shadow-inner">
                  <img src={cert.image} alt={cert.provider} className="w-full h-full object-contain" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{cert.provider}</span>
                    <span className="text-slate-300">•</span>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">
                      {cert.level}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{cert.title}</h2>
                  <p className="text-slate-600 text-sm md:text-base mb-6 max-w-3xl leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-lg border border-purple-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-slate-100 gap-4">
                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div className="flex items-center text-slate-600">
                        <Clock className="w-4 h-4 mr-2 text-slate-400" />
                        <span className="font-medium">{cert.duration}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Briefcase className="w-4 h-4 mr-2 text-slate-400" />
                        <span className="font-medium">{cert.cost}</span>
                      </div>
                      {cert.sezzleEligible && (
                        <div className="flex items-center text-[#4C249F] font-semibold bg-[#F0EEFA] px-3 py-1.5 rounded-lg">
                          <span className="mr-1.5">Paga en cuotas con</span>
                          <svg width="60" height="14" viewBox="0 0 119 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#4C249F]">
                            <path d="M116.797 20.3117C118.257 19.3364 119.262 17.6166 119.262 15.6881V6.99268C119.262 5.06409 118.257 3.34431 116.797 2.36894C115.338 1.39345 113.564 1.25414 111.968 1.98638L99.039 7.91501V12.9806C99.039 13.9785 98.4357 14.8698 97.5186 15.244L83.0232 21.1611C82.1062 21.5353 81.071 21.3289 80.3804 20.6276C79.6897 19.9262 79.4801 18.8778 79.8453 17.9439L85.2418 4.14502C85.5947 3.2434 85.3907 2.21557 84.7176 1.52303C84.0446 0.830491 83.0245 0.618641 82.1154 0.985956L68.7905 6.36863V11.233C68.7905 12.2309 68.1872 13.1221 67.2701 13.4964L53.9579 18.9329C53.0409 19.3071 52.0057 19.1008 51.3151 18.3994C50.6244 17.698 50.4148 16.6496 50.78 15.7157L55.8089 2.85966C56.1619 1.95804 55.9578 0.93021 55.2848 0.23767C54.6118 -0.45487 53.5916 -0.66672 52.6826 -0.299405L40.0906 4.78652V9.85223C40.0906 10.8501 39.4873 11.7413 38.5702 12.1156L24.8969 17.7013C23.9798 18.0755 22.9446 17.8692 22.254 17.1678C21.5634 16.4664 21.3538 15.418 21.7189 14.4841L26.6853 1.78768C27.0382 0.886053 26.8342 -0.141777 26.1612 -0.834317C25.4881 -1.52686 24.468 -1.73871 23.5589 -1.37139L2.36894 7.19106C0.910014 7.78018 0 9.21532 0 10.7938C0 12.3723 0.910014 13.8074 2.36894 14.3965L12.5513 18.511C13.4684 18.8853 14.5036 18.6789 15.1942 17.9775C15.8848 17.2762 16.0944 16.2278 15.7293 15.2939L10.7628 27.9903C10.4099 28.8919 10.6139 29.9198 11.2869 30.6123C11.96 31.3048 12.9801 31.5167 13.8891 31.1494L35.0791 22.5869C36.538 21.9978 37.4481 20.5627 37.4481 18.9842V14.1198C37.4481 13.1219 38.0514 12.2307 38.9685 11.8564L52.6418 6.27076C53.5589 5.8965 54.594 6.10283 55.2847 6.80423C55.9753 7.50563 56.1849 8.55403 55.8198 9.48792L50.7909 22.344C50.4379 23.2456 50.642 24.2735 51.315 24.966C51.988 25.6585 53.0081 25.8704 53.9172 25.5031L67.2421 20.1204V15.0547C67.2421 14.0568 67.8454 13.1656 68.7625 12.7913L82.0747 7.35487C82.9918 6.98061 84.0269 7.18695 84.7176 7.88835C85.4082 8.58975 85.6178 9.63814 85.2527 10.572L79.8562 24.3709C79.5032 25.2725 79.7073 26.3003 80.3803 26.9929C81.0534 27.6854 82.0734 27.8973 82.9825 27.523L97.4779 21.6059V17.026C97.4779 16.0281 98.0812 15.1368 98.9983 14.7626L111.927 8.83398C112.844 8.45972 113.879 8.66606 114.57 9.36746C115.26 10.0689 115.47 11.1173 115.105 12.0512L112.923 17.6369C112.57 18.5385 112.774 19.5664 113.447 20.2589C114.12 20.9514 115.14 21.1633 116.049 20.796L116.797 20.3117Z" fill="currentColor"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-colors w-full sm:w-auto">
                      Ver detalles <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
