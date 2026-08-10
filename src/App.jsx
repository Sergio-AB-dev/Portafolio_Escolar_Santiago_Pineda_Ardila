import React from 'react';
import { User, Trophy, BookOpen, Gamepad2, Target, MessageCircle, Globe2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* HEADER / NAV */}
      <nav className="fixed w-full top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white tracking-wider">
            SANTIAGO<span className="text-emerald-500">P.A</span>
          </h1>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#sobre-mi" className="hover:text-emerald-400 transition-colors">Sobre Mí</a>
            <a href="#educacion" className="hover:text-emerald-400 transition-colors">Educación</a>
            <a href="#habilidades" className="hover:text-emerald-400 transition-colors">Habilidades</a>
            <a href="#metas" className="hover:text-emerald-400 transition-colors">Logros & Metas</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 p-1 mb-8 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center overflow-hidden">
              {/* Aquí puedes poner la URL de una foto tuya reemplazando el div del ícono */}
              <User size={64} className="text-slate-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Santiago Pineda Ardila
          </h2>
          <p className="text-xl md:text-2xl text-emerald-400 font-medium mb-6">
            Futuro Campeón de UFC & Creador de Contenido
          </p>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed mb-8">
            Tengo 14 años, vivo en Bogotá y soy una persona de grandes valores. Disciplinado en el deporte, apasionado por los videojuegos y enfocado en construir un futuro extraordinario.
          </p>
          <a href="#metas" className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-emerald-500/30">
            Conoce mi trayectoria
          </a>
        </div>
      </section>

      {/* EDUCACIÓN Y EXPERIENCIA */}
      <section id="educacion" className="py-20 bg-slate-900 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <BookOpen className="text-emerald-500" size={32} />
            <h3 className="text-3xl font-bold text-white">Educación y Formación</h3>
          </div>
          
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
            <h4 className="text-2xl font-bold text-white mb-2">Liceo psicopedagogico San pablo</h4>
            <p className="text-emerald-400 font-medium mb-4">Estudiante de Noveno Grado (Desde Grado 1°)</p>
            <p className="text-slate-400 mb-6">
              Durante mi tiempo en el colegio he descubierto mis verdaderas aspiraciones y forjado mi disciplina. Actualmente curso las siguientes materias:
            </p>
            <div className="flex flex-wrap gap-2">
              {['Español', 'Ética', 'Tecnología', 'Biología', 'Química', 'Cátedra', 'Matemáticas', 'Historia', 'Religión', 'Inglés', 'Artes', 'Geografía', 'Educación Física', 'Física'].map((materia) => (
                <span key={materia} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600">
                  {materia}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES E INTERESES */}
      <section id="habilidades" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* Soft Skills & Idiomas */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="text-cyan-500" size={28} />
              <h3 className="text-2xl font-bold text-white">Habilidades Personales</h3>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-cyan-500 rounded-full"></div>Excelente Comunicación</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-cyan-500 rounded-full"></div>Carisma y Liderazgo</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 bg-cyan-500 rounded-full"></div>Sinceridad y Honestidad</li>
            </ul>

            <div className="flex items-center gap-3 mb-6">
              <Globe2 className="text-cyan-500" size={28} />
              <h3 className="text-2xl font-bold text-white">Idiomas</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-800 p-3 rounded-lg flex justify-between items-center">
                <span>Español</span> <span className="text-cyan-400 text-sm">Nativo</span>
              </div>
              <div className="bg-slate-800 p-3 rounded-lg flex justify-between items-center">
                <span>Inglés</span> <span className="text-cyan-400 text-sm">Aprendiendo (Duolingo)</span>
              </div>
              <div className="bg-slate-800 p-3 rounded-lg flex justify-between items-center">
                <span>Ruso</span> <span className="text-cyan-400 text-sm">Aprendiendo (Duolingo)</span>
              </div>
            </div>
          </div>

          {/* Proyectos y Pasatiempos */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 className="text-emerald-500" size={28} />
              <h3 className="text-2xl font-bold text-white">Proyectos & Intereses</h3>
            </div>
            <div className="space-y-6">
              <div className="p-5 bg-slate-800/50 rounded-xl border border-slate-700">
                <h4 className="text-xl font-bold text-white mb-2">Gaming & Creación de Contenido</h4>
                <p className="text-slate-400 text-sm">
                  Invierto mi tiempo libre en los videojuegos, analizando mecánicas y preparándome para dar el salto como un creador de contenido exitoso e influyente.
                </p>
              </div>
              <div className="p-5 bg-slate-800/50 rounded-xl border border-slate-700">
                <h4 className="text-xl font-bold text-white mb-2">Entrenamiento Deportivo</h4>
                <p className="text-slate-400 text-sm">
                  El deporte de contacto no es solo un hobby, es un proyecto de vida. Entreno con la mentalidad y disciplina necesarias para convertirme en un campeón mundial.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* LOGROS Y METAS */}
      <section id="metas" className="py-20 bg-slate-900 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Target className="text-emerald-500 w-16 h-16 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-4">Logros y Visión a Futuro</h3>
          <p className="text-slate-400">El trabajo duro de hoy es el éxito de mañana.</p>
        </div>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 flex items-start gap-4">
            <div className="p-3 bg-yellow-500/10 rounded-lg">
              <Trophy className="text-yellow-500" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Medallista en Fútbol</h4>
              <p className="text-sm text-slate-400">Reconocimientos por desempeño y trabajo en equipo en torneos locales.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 flex items-start gap-4">
            <div className="p-3 bg-red-500/10 rounded-lg">
              <Trophy className="text-red-500" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Torneos de Contacto</h4>
              <p className="text-sm text-slate-400">Medallas obtenidas en competiciones de deportes de contacto, forjando el camino hacia la UFC.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Santiago Pineda Ardila. Todos los derechos reservados.</p>
        <p className="mt-2">Diseñado con React, Tailwind CSS y mucha disciplina.</p>
      </footer>
    </div>
  );
}

export default App;