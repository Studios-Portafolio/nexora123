import { 
  Download, ShieldCheck, Zap, Smartphone, Wallet, ChevronDown, 
  CheckCircle2, Globe, Cpu, LayoutDashboard, Sparkles
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-300 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* 🌌 FONDO CÓSMICO ANIMADO 🌌 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-violet-600/10 rounded-full mix-blend-screen filter blur-[150px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('/image_585f72.jpg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      {/* 📱 BARRA DE NAVEGACIÓN FIJA 📱 */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0c0a09]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">Nexora</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            <a href="#caracteristicas" className="hover:text-indigo-400 transition-colors">Funciones</a>
            <a href="#tutorial" className="hover:text-indigo-400 transition-colors">Tutorial</a>
            <a href="#precios" className="hover:text-indigo-400 transition-colors">Precios</a>
          </div>
          <a 
            href="#descarga"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-black transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Descargar v1.0
          </a>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        
        {/* 🚀 HERO SECTION 🚀 */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black tracking-widest uppercase mb-12 animate-in fade-in slide-in-from-bottom-4">
            <Sparkles className="w-3.5 h-3.5" /> Potencia Enterprise en tu Bolsillo
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1] max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-500">
            Sistema de Gestión de Inventario <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400">
              para tu Negocio.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-600">
            Control total de stock, punto de venta multi-moneda e Inteligencia Artificial 
            conectada a Llama 3 para analizar tus finanzas en tiempo real.
          </p>
          
          {/* 🔥 MOCKUP DEL TELÉFONO HECHO CON CÓDIGO 🔥 */}
          <div className="relative max-w-sm mx-auto mb-20 group animate-in fade-in zoom-in-95 duration-700 delay-150">
             <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full scale-110 group-hover:scale-125 transition-transform duration-700"></div>
             <div className="relative z-10 w-full h-[650px] bg-[#0c0a09] border-[8px] border-stone-800 rounded-[3rem] shadow-3xl overflow-hidden transform transition-transform duration-700 hover:-translate-y-2 flex flex-col ring-1 ring-white/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-stone-800 rounded-b-2xl z-20"></div>
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 pt-12 pb-8 px-6 text-center rounded-b-[2.5rem] shadow-lg relative z-10">
                   <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                      <LayoutDashboard className="w-8 h-8 text-white" />
                   </div>
                   <h3 className="text-white font-black text-2xl tracking-tight">Caja Registradora</h3>
                   <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mt-2">En Línea</p>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4 bg-stone-950/50">
                   <div className="flex justify-between items-end mb-2">
                     <span className="text-stone-400 font-bold text-sm">Ticket Actual</span>
                     <span className="text-white font-black">Bs. 3,250.00</span>
                   </div>
                   <div className="w-full bg-stone-900 rounded-2xl border border-white/5 p-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-stone-800 rounded-xl flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="w-3/4 h-3 bg-stone-700 rounded mb-2"></div>
                        <div className="w-1/2 h-3 bg-stone-800 rounded"></div>
                      </div>
                   </div>
                   <div className="w-full bg-stone-900 rounded-2xl border border-white/5 p-4 flex items-center gap-4 opacity-70">
                      <div className="w-12 h-12 bg-stone-800 rounded-xl flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="w-full h-3 bg-stone-700 rounded mb-2"></div>
                        <div className="w-2/3 h-3 bg-stone-800 rounded"></div>
                      </div>
                   </div>
                   <div className="mt-auto w-full py-5 bg-indigo-600 rounded-2xl text-center text-white font-black text-lg shadow-lg">
                      Procesar Pago
                   </div>
                </div>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <a href="/Nexora_Enterprise_v1.0.apk" download className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-lg shadow-2xl flex items-center justify-center gap-3 transition-all active:scale-95">
              <Download className="w-6 h-6" />
              Descargar v1.0 Oficial
            </a>
            <button onClick={() => document.getElementById('caracteristicas')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all">
              Ver el poder <ChevronDown className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-6 text-sm font-bold text-stone-500 animate-in fade-in delay-500">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-teal-400"/> Archivo Seguro 100%</span>
            <span className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-indigo-400"/> Android Exclusivo</span>
          </div>
        </section>

        <section id="caracteristicas" className="py-32 bg-black/40 border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-16 tracking-tight">
              Diseño Inteligente para <span className="text-indigo-400">crecer.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
              <div className="md:col-span-2 bg-stone-900/50 border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10"><Cpu className="w-32 h-32 text-indigo-500" /></div>
                <Sparkles className="w-10 h-10 text-indigo-400 mb-4" />
                <h3 className="text-2xl font-black text-white mb-3">IA Intelligence (Llama 3)</h3>
                <p className="text-stone-400 leading-relaxed font-medium">Analiza tus ventas diarias con lenguaje natural. Pregúntale a Nexora sobre tus ganancias al instante.</p>
              </div>
              <div className="bg-stone-900/50 border border-white/10 rounded-[2.5rem] p-8 group">
                <Wallet className="w-10 h-10 text-violet-400 mb-4" />
                <h3 className="text-xl font-black text-white mb-3">Multi-Moneda</h3>
                <p className="text-sm text-stone-400">Cobra en USD, Bs (BCV), Euros o USDT con tasas actualizadas.</p>
              </div>
              <div className="bg-stone-900/50 border border-white/10 rounded-[2.5rem] p-8 group">
                <Globe className="w-10 h-10 text-teal-400 mb-4" />
                <h3 className="text-xl font-black text-white mb-3">Nube 24/7</h3>
                <p className="text-sm text-stone-400">Tu inventario está seguro en nuestros servidores PostgreSQL.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="tutorial" className="py-32 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Aprende a Dominar <span className="text-teal-400">Nexora</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
             <div className="bg-stone-900 border border-white/5 rounded-[2.5rem] p-10 flex flex-col">
                <div className="w-16 h-16 bg-teal-900/40 text-teal-400 rounded-3xl flex items-center justify-center font-black text-3xl mb-8">1</div>
                <h3 className="text-2xl font-black text-white mb-4">Configuración</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">Regístrate como administrador empresarial y define tu moneda base.</p>
             </div>
             <div className="bg-stone-900 border border-white/5 rounded-[2.5rem] p-10 flex flex-col">
                <div className="w-16 h-16 bg-indigo-900/40 text-indigo-400 rounded-3xl flex items-center justify-center font-black text-3xl mb-8">2</div>
                <h3 className="text-2xl font-black text-white mb-4">Inventario</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">Crea productos manualmente o importa tu Excel corporativo en segundos.</p>
             </div>
             <div className="bg-stone-900 border border-white/5 rounded-[2.5rem] p-10 flex flex-col">
                <div className="w-16 h-16 bg-violet-900/40 text-violet-400 rounded-3xl flex items-center justify-center font-black text-3xl mb-8">3</div>
                <h3 className="text-2xl font-black text-white mb-4">Facturación</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">Elige la moneda de cobro y Nexora calcula el cambio al instante.</p>
             </div>
          </div>
        </section>

        <section id="precios" className="py-32 bg-black/40 border-t border-white/5 relative px-6">
           <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Planes Enterprise</h2>
             </div>
             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               <div className="bg-stone-900 border border-white/5 p-8 rounded-[2.5rem] flex flex-col hover:border-white/20 transition-all">
                 <h4 className="text-stone-500 font-black uppercase tracking-widest text-xs mb-4">Básico</h4>
                 <div className="text-4xl font-black text-white mb-6">$10 <span className="text-sm text-stone-500">/mes</span></div>
                 <ul className="space-y-4 mb-8 flex-1 text-sm font-medium">
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Inventario Ilimitado</li>
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Punto de Venta</li>
                 </ul>
                 <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold">Elegir Plan</button>
               </div>
               <div className="bg-gradient-to-b from-indigo-600 to-indigo-900 p-8 rounded-[2.5rem] flex flex-col transform md:scale-110 shadow-3xl relative overflow-hidden">
                 <h4 className="text-indigo-200 font-black uppercase tracking-widest text-xs mb-4">Empresarial</h4>
                 <div className="text-4xl font-black text-white mb-6">$40 <span className="text-sm text-indigo-300">/6 meses</span></div>
                 <ul className="space-y-4 mb-8 flex-1 text-sm font-bold text-white/90">
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white"/> Ahorras $20</li>
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white"/> Nexora IA Habilitado</li>
                 </ul>
                 <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-black">Obtener Oferta</button>
               </div>
               <div className="bg-stone-900 border border-white/5 p-8 rounded-[2.5rem] flex flex-col hover:border-white/20 transition-all">
                 <h4 className="text-stone-500 font-black uppercase tracking-widest text-xs mb-4">Enterprise Plus</h4>
                 <div className="text-4xl font-black text-white mb-6">$90 <span className="text-sm text-stone-500">/año</span></div>
                 <ul className="space-y-4 mb-8 flex-1 text-sm font-medium">
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> 3 Meses Gratis</li>
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Soporte Prioritario</li>
                 </ul>
                 <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold">Elegir Plan</button>
               </div>
             </div>
           </div>
        </section>

        <section id="descarga" className="py-32 bg-gradient-to-b from-black/40 to-indigo-900/10 border-t border-white/5 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Lidera tu sector. Hoy.</h2>
            <div className="bg-gradient-to-br from-stone-900 to-indigo-900/40 border border-indigo-500/30 rounded-[3rem] p-8 md:p-16 text-left flex flex-col md:flex-row gap-12 items-center shadow-3xl relative overflow-hidden">
              <div className="flex-1 space-y-8 relative z-10">
                <h3 className="text-3xl font-black text-white">Instalación</h3>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center font-black text-white shrink-0 shadow-lg">1</div>
                  <div><h4 className="font-black text-white text-lg">Descarga v1.0</h4></div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center font-black text-white shrink-0 shadow-lg">2</div>
                  <div><h4 className="font-black text-white text-lg">Habilita Permisos</h4></div>
                </div>
              </div>
              <div className="w-full md:w-80 flex flex-col items-center justify-center gap-6 relative z-10">
                <a href="/Nexora_Enterprise_v1.0.apk" download className="w-full py-5 bg-indigo-600 text-white rounded-[2rem] font-black text-center shadow-2xl active:scale-95 transition-all text-xl">
                  Descargar v1.0
                </a>
                <div className="flex items-center gap-3 text-xs font-black text-stone-500">
                  <ShieldCheck className="w-5 h-5 text-teal-400" /> Archivo Seguro
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black/50 py-12 relative z-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <Zap className="w-6 h-6 text-indigo-500" />
             <span className="text-xl font-black text-white">Nexora</span>
          </div>
          <div className="flex gap-8 text-sm font-bold text-stone-400">
            <a href="#" className="hover:text-white transition-colors">Soporte</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <p className="text-stone-600">© 2026 Nexora Systems.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;