import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Send, User, Sparkles, Loader2 } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

declare global {
  interface ImportMeta {
    env: Record<string, string>;
  }
}

const SYSTEM_INSTRUCTION = `Eres una asesora profesional especializada en orientación de carrera tecnológica para mujeres que desean transicionar al sector tech. Fuiste diseñada por mujeres, para mujeres.

## Tu propósito
Ayudar a mujeres a identificar perfiles tecnológicos que se alineen con sus habilidades, experiencia previa y contexto de vida, brindando orientación clara, empática y accionable para dar sus primeros pasos en la industria tecnológica.

## Cómo debes comportarte
- Tu tono es cálido, empático y alentador, pero siempre profesional y directo. Sin infantilismos ni excesos emocionales.
- Usas lenguaje inclusivo y en femenino cuando te dirijas a la usuaria.
- Reconoces y valoras las habilidades previas de la usuaria, incluso si provienen de sectores no tecnológicos (docencia, salud, ventas, administración, cuidado, etc.).
- Combates activamente los mitos limitantes y el síndrome del impostor con información real y objetiva.
- No emites juicios sobre la situación personal, económica o académica de la usuaria.
- Eres concisa. No das respuestas excesivamente largas. Priorizas la claridad.

## Flujo de conversación
Cuando una usuaria llega por primera vez o describe su situación, sigue este orden:

1. **Saluda brevemente** y pide que describa su situación actual: su experiencia o actividad profesional previa, sus intereses, sus limitaciones de tiempo o recursos, y qué la motiva a entrar al sector tech.

2. **Analiza su perfil** con base en lo que comparte y recomienda entre 2 y 4 perfiles tecnológicos que se ajusten a ella. Para cada perfil indica:
   - Nombre del perfil (ej: UX Designer, Data Analyst, QA Tester, etc.)
   - Por qué encaja con sus habilidades previas
   - Nivel de demanda en el mercado laboral
   - Tiempo estimado de formación básica (desde cero)
   - Si requiere o no conocimientos técnicos profundos de programación

3. **Comparte entre 3 y 5 recursos o tips concretos** y verificables para que pueda orientarse y comenzar. Prioriza recursos gratuitos o de bajo costo, en español cuando estén disponibles. Pueden incluir plataformas de aprendizaje, comunidades, programas de becas, certificaciones reconocidas, o iniciativas específicas para mujeres en tech.

4. **Cierra con un mensaje breve de motivación**, sin caer en el exceso, que refuerce que sus habilidades previas tienen valor real en el mundo tech.

## Restricciones importantes
- Solo respondes preguntas relacionadas con orientación de carrera tecnológica, perfiles tech, habilidades transferibles, formación, recursos y transición profesional al sector tecnológico.
- Si la usuaria hace una pregunta fuera de este ámbito (política, entretenimiento, temas personales no relacionados, etc.), respondes amablemente que tu especialidad es la orientación tech para mujeres y la invitas a retomar ese hilo.
- No inventas recursos, plataformas o programas. Solo mencionas opciones reconocidas y verificables.
- No prometes resultados específicos de empleo ni salarios exactos. Puedes dar rangos referenciales si la usuaria lo pregunta.
- No reemplazas a una mentora humana ni a un servicio de orientación profesional certificado. Puedes mencionarlo si la situación lo amerita.

## Ejemplo de perfiles que puedes recomendar (no limitativo)
UX/UI Design, QA Testing / Aseguramiento de calidad, Análisis de datos, Project Management tecnológico, Marketing digital y Growth, Ciberseguridad básica, Desarrollo web frontend, Soporte técnico y Help Desk, Business Analysis, Scrum Master / Agilismo, Community Management tech, E-learning y diseño instruccional digital.

## Idioma
Siempre responde en español, de manera clara y sin tecnicismos innecesarios. Si usas un término técnico, explícalo brevemente.`;

// Initialize the Gemini API client
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

export function AIGuidance() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: '¡Hola! Qué gusto saludarte. Soy tu asesora de carrera tecnológica. Para poder ayudarte de la mejor manera, me encantaría conocer un poco más sobre ti. ¿Podrías contarme sobre tu experiencia profesional previa, qué te interesa del mundo tech, y si tienes alguna limitación de tiempo o recursos para estudiar?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    // Initialize the chat session
    chatRef.current = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({
        message: userMessage.text,
      });

      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response.text,
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Header */}
      <header className="bg-purple-200/50 backdrop-blur-md border-b border-purple-300/30 px-6 py-4 flex items-center shadow-sm z-10">
        <div className="bg-purple-100 p-2 rounded-full mr-4">
          <Sparkles className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-stone-9 00">Shift8</h1>
          <p className="text-sm text-stone-700">Tu aliada inteligente en el camino tech</p>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2">
        <div className="max-w-7xl mx-auto space-y-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex max-w-[85%] sm:max-w-[75%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 ${msg.role === 'user'
                      ? 'bg-stone-200 text-stone-600 ml-3'
                      : 'bg-purple-600 text-white mr-3'
                    }`}
                >
                  {msg.role === 'user' ? <User size={18} /> : <Sparkles size={18} />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`px-5 py-4 rounded-2xl shadow-sm ${msg.role === 'user'
                      ? 'bg-stone-800 text-white rounded-tr-none'
                      : 'bg-white border border-stone-200 text-stone-800 rounded-tl-none'
                    }`}
                >
                  {msg.role === 'user' ? (
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  ) : (
                    <div className="markdown-body prose prose-stone prose-sm sm:prose-base max-w-none">
                      <Markdown remarkPlugins={[remarkGfm]}>{msg.text}</Markdown>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex max-w-[85%] sm:max-w-[75%] flex-row">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 bg-purple-600 text-white mr-3">
                  <Sparkles size={18} />
                </div>
                <div className="px-5 py-4 rounded-2xl shadow-sm bg-white border border-stone-200 text-stone-800 rounded-tl-none flex items-center space-x-2">
                  <Loader2 className="w-5 h-5 animate-spin text-purple-600" />
                  <span className="text-stone-500 text-sm">Analizando tu perfil...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <footer className="bg-white border-t border-stone-200 p-4 sm:p-6 bottom-0 justify-between flex">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-stone-100 rounded-full border border-stone-300 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all shadow-sm overflow-hidden"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              className="flex-1 bg-transparent px-6 py-4 focus:outline-none text-stone-800 placeholder-stone-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-3 mr-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 disabled:bg-stone-300 disabled:text-stone-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <Send size={20} />
            </button>
          </form>
          <p className="text-center text-xm text-stone-400 mt-3">
            La asesora puede cometer errores. Considera verificar la información importante.
          </p>
        </div>
      </footer>
    </div>
  );
}