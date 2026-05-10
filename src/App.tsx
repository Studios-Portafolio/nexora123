import { 
  Download, ShieldCheck, Zap, Smartphone, Wallet, ChevronDown, 
  CheckCircle2, Globe, Cpu, MessageCircle,
  LayoutDashboard, Sparkles, Plus
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
          
          {/* 🔥 MOCKUP DEL TELÉFONO HECHO CON CÓDIGO (NO ROMPE LA WEB) 🔥 */}
          <div className="relative max-w-sm mx-auto mb-20 group animate-in fade-in zoom-in-95 duration-700 delay-150">
             <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full scale-110 group-hover:scale-125 transition-transform duration-700"></div>
             <div className="relative z-10 w-full h-[650px] bg-[#0c0a09] border-[8px] border-stone-800 rounded-[3rem] shadow-3xl overflow-hidden transform transition-transform duration-700 hover:-translate-y-2 flex flex-col ring-1 ring-white/10">
                {/* Muesca (Notch) del celular */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-stone-800 rounded-b-2xl z-20"></div>
                
                {/* Pantalla Simulada de Nexora */}
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
                   <div className="mt-auto w-full py-5 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-center text-white font-black text-lg shadow-lg shadow-indigo-600/20 cursor-pointer transition-colors">
                      Procesar Pago
                   </div>
                </div>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <a href="/Nexora_Enterprise_v1.0.apk" download className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-lg shadow-2xl shadow-indigo-600/40 flex items-center justify-center gap-3 transition-all active:scale-95">
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

        {/* 🧩 CARACTERÍSTICAS BENTO GRID 🧩 */}
        <section id="caracteristicas" className="py-32 bg-black/40 border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center tracking-tight">
              Diseño Inteligente para <span className="text-indigo-400">crecer.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 bg-stone-900/50 border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-all duration-500"><Cpu className="w-32 h-32 text-indigo-500" /></div>
                <Sparkles className="w-10 h-10 text-indigo-400 mb-4" />
                <h3 className="text-2xl font-black text-white mb-3">IA Intelligence (Llama 3)</h3>
                <p className="text-stone-400 leading-relaxed font-medium">Analiza tus ventas diarias con lenguaje natural. Pregúntale a Nexora: "¿Cuál fue mi ganancia neta hoy?" y obtén respuestas al instante.</p>
              </div>

              <div className="bg-stone-900/50 border border-white/10 rounded-[2.5rem] p-8 group hover:border-violet-500/50 transition-colors duration-500">
                <Wallet className="w-10 h-10 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black text-white mb-3">Multi-Moneda</h3>
                <p className="text-sm text-stone-400 leading-relaxed">Cobra en USD, Bs (BCV), Euros o USDT con tasas actualizadas automáticamente.</p>
              </div>

              <div className="bg-stone-900/50 border border-white/10 rounded-[2.5rem] p-8 group hover:border-teal-500/50 transition-colors duration-500">
                <Globe className="w-10 h-10 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black text-white mb-3">Nube 24/7</h3>
                <p className="text-sm text-stone-400 leading-relaxed">Tu inventario está seguro en nuestros servidores PostgreSQL. Accede desde cualquier Android.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 📖 TUTORIAL COMPLETO Y DETALLADO 📖 */}
        <section id="tutorial" className="py-32 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <LayoutDashboard className="w-12 h-12 text-teal-400 mx-auto mb-4 opacity-50" />
             <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">Aprende a Dominar <span className="text-teal-400">Nexora</span></h2>
             <p className="text-stone-500 font-medium max-w-xl mx-auto">Una guía paso a paso para configurar tu empresa y empezar a facturar como un profesional.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
             
             <div className="bg-stone-900 border border-white/5 rounded-[2.5rem] p-10 flex flex-col group hover:border-teal-500/20 transition-all duration-500">
                <div className="w-16 h-16 bg-teal-900/40 text-teal-400 rounded-3xl flex items-center justify-center font-black text-3xl mb-8 border border-teal-500/10">1</div>
                <h3 className="text-2xl font-black text-white mb-4">Configuración Inicial</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6 flex-1">Abre la app instalada. Regístrate como administrador empresarial. Define el nombre de tu empresa, tu moneda base y configura las tasas de cambio.</p>
                <div className="flex gap-2 items-center text-xs font-bold text-teal-500 bg-teal-950 p-3 rounded-xl border border-teal-500/10">
                   <Plus className="w-4 h-4"/> 60 días de prueba incluidos.
                </div>
             </div>

             <div className="bg-stone-900 border border-white/5 rounded-[2.5rem] p-10 flex flex-col group hover:border-indigo-500/20 transition-all duration-500">
                <div className="w-16 h-16 bg-indigo-900/40 text-indigo-400 rounded-3xl flex items-center justify-center font-black text-3xl mb-8 border border-indigo-500/10">2</div>
                <h3 className="text-2xl font-black text-white mb-4">Sube tu Inventario</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6 flex-1">Accede al módulo de inventario. Crea productos con descripción, costo, precio y stock. O importa tu Excel corporativo en segundos.</p>
                <div className="flex gap-2 items-center text-xs font-bold text-indigo-400 bg-indigo-950 p-3 rounded-xl border border-indigo-500/10">
                   <CheckCircle2 className="w-4 h-4"/> Sincronizado en la Nube.
                </div>
             </div>

             <div className="bg-stone-900 border border-white/5 rounded-[2.5rem] p-10 flex flex-col group hover:border-violet-500/20 transition-all duration-500">
                <div className="w-16 h-16 bg-violet-900/40 text-violet-400 rounded-3xl flex items-center justify-center font-black text-3xl mb-8 border border-violet-500/10">3</div>
                <h3 className="text-2xl font-black text-white mb-4">Facturación y Arqueo</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6 flex-1">Abre el Punto de Venta. Selecciona productos, elige la moneda de cobro y Nexora calcula el cambio al instante. Cierra el día con un arqueo automático.</p>
                <div className="flex gap-2 items-center text-xs font-bold text-violet-400 bg-violet-950 p-3 rounded-xl border border-violet-500/10">
                   <Sparkles className="w-4 h-4"/> IA Llama 3 habilitada.
                </div>
             </div>
          </div>
        </section>

        {/* 💰 SECCIÓN DE PRECIOS 💰 */}
        <section id="precios" className="py-32 bg-black/40 border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">Planes Enterprise</h2>
               <p className="text-stone-500 font-bold max-w-lg mx-auto">Comienza con 60 días gratis. Elige tu plan corporativo después.</p>
             </div>

             <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
               {/* PLAN BÁSICO */}
               <div className="bg-stone-900 border border-white/5 p-8 rounded-[2.5rem] flex flex-col hover:border-white/20 transition-all duration-500">
                 <h4 className="text-stone-500 font-black uppercase tracking-widest text-xs mb-4">Básico</h4>
                 <div className="text-4xl font-black text-white mb-6">$10 <span className="text-sm text-stone-500">/mes</span></div>
                 <ul className="space-y-4 mb-8 flex-1 text-sm font-medium">
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Inventario Ilimitado</li>
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Punto de Venta</li>
                 </ul>
                 <a 
                   href="https://wa.me/584149187287?text=Hola%20Nexora,%20quiero%20adquirir%20el%20Plan%20Básico%20de%20$10.%20¿Me%20puedes%20verificar%20el%20pago?" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all text-white"
                 >
                   <MessageCircle className="w-5 h-5" /> Contratar Plan
                 </a>
               </div>

               {/* PLAN EMPRESARIAL (POPULAR) */}
               <div className="bg-gradient-to-b from-indigo-600 to-indigo-900 p-8 rounded-[2.5rem] flex flex-col transform md:scale-110 shadow-3xl shadow-indigo-600/30 relative overflow-hidden">
                 <div className="absolute top-4 right-4 bg-white text-indigo-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Popular</div>
                 <h4 className="text-indigo-200 font-black uppercase tracking-widest text-xs mb-4">Empresarial</h4>
                 <div className="text-4xl font-black text-white mb-6">$40 <span className="text-sm text-indigo-300">/6 meses</span></div>
                 <ul className="space-y-4 mb-8 flex-1 text-sm font-bold text-white/90">
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white"/> Plan Básico Incluido</li>
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white"/> Ahorras $20</li>
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-white"/> Nexora IA Habilitado</li>
                 </ul>
                 <a 
                   href="https://wa.me/584149187287?text=Hola%20Nexora,%20me%20interesa%20la%20oferta%20del%20Plan%20Empresarial%20por%20$40.%20Quiero%20realizar%20el%20pago." 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 w-full py-4 bg-white text-indigo-600 rounded-2xl font-black shadow-lg hover:bg-stone-100 transition-all"
                 >
                   <MessageCircle className="w-5 h-5" /> Obtener Oferta
                 </a>
               </div>

               {/* PLAN ENTERPRISE PLUS */}
               <div className="bg-stone-900 border border-white/5 p-8 rounded-[2.5rem] flex flex-col hover:border-white/20 transition-all duration-500">
                 <h4 className="text-stone-500 font-black uppercase tracking-widest text-xs mb-4">Enterprise Plus</h4>
                 <div className="text-4xl font-black text-white mb-6">$90 <span className="text-sm text-stone-500">/año</span></div>
                 <ul className="space-y-4 mb-8 flex-1 text-sm font-medium">
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Todo lo anterior</li>
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> 3 Meses Gratis</li>
                   <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-indigo-500"/> Soporte Prioritario</li>
                 </ul>
                 <a 
                   href="https://wa.me/584149187287?text=Hola%20Nexora,%20quiero%20el%20Plan%20Enterprise%20Plus%20Anual.%20¿Cómo%20es%20el%20proceso%20de%20pago?" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all text-white"
                 >
                   <MessageCircle className="w-5 h-5" /> Contratar Plan
                 </a>
               </div>
             </div>

             {/* MÉTODOS DE PAGO */}
             <div className="max-w-4xl mx-auto bg-stone-900/50 border border-white/5 rounded-3xl p-6 md:p-8 text-center">
                <h4 className="text-white font-black text-lg mb-6">Métodos de Pago Aceptados</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 bg-[#0c0a09] px-5 py-3 rounded-xl border border-white/5 text-sm font-bold text-stone-300">
                    <Wallet className="w-5 h-5 text-indigo-400" />
                    Pago Móvil / Transferencia (Bs)
                  </div>
                  <div className="flex items-center gap-2 bg-[#0c0a09] px-5 py-3 rounded-xl border border-white/5 text-sm font-bold text-stone-300">
                    <Globe className="w-5 h-5 text-teal-400" />
                    Zelle / Efectivo USD
                  </div>
                  <div className="flex items-center gap-2 bg-[#0c0a09] px-5 py-3 rounded-xl border border-white/5 text-sm font-bold text-stone-300">
                    <Smartphone className="w-5 h-5 text-yellow-400" />
                    Binance Pay (USDT)
                  </div>
                </div>
                <p className="text-stone-500 text-xs mt-6 font-medium">
                  Al hacer clic en tu plan ideal, serás redirigido a nuestro WhatsApp oficial para procesar el pago de forma segura e inmediata.
                </p>
             </div>
          </div>
        </section>

        {/* ⚙️ DESCARGA E INSTALACIÓN ⚙️ */}
        <section id="descarga" className="py-32 bg-gradient-to-b from-black/40 to-indigo-900/10 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Lidera tu sector. Hoy.</h2>
            <div className="bg-gradient-to-br from-stone-900 to-indigo-900/40 border border-indigo-500/30 rounded-[3rem] p-8 md:p-16 text-left flex flex-col md:flex-row gap-12 items-center shadow-3xl shadow-indigo-600/10 relative overflow-hidden group">
              <div className="flex-1 space-y-8 relative z-10">
                <h3 className="text-3xl font-black text-white">Guía de Instalación Rápida</h3>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center font-black text-white shrink-0 shadow-lg shadow-indigo-600/30">1</div>
                  <div><h4 className="font-black text-white text-lg">Descarga v1.0</h4><p className="text-stone-400 mt-1 text-sm leading-relaxed">Toca el botón para bajar el instalador directo.</p></div>
                </div>
                <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center font-black text-white shrink-0 shadow-lg shadow-indigo-600/30">2</div>
                  <div><h4 className="font-black text-white text-lg">Habilita Permisos</h4><p className="text-stone-400 mt-1 text-sm leading-relaxed">Ajustes &gt; Seguridad y permite instalar apps fuera de Play Store.</p></div>
                </div>
              </div>
              <div className="w-full md:w-80 flex flex-col items-center justify-center gap-6 relative z-10">
                <a href="/Nexora_Enterprise_v1.0.apk" download className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[2rem] font-black text-center shadow-2xl shadow-indigo-600/40 active:scale-95 transition-all flex items-center justify-center gap-3 text-xl">
                  <Download className="w-7 h-7" /> Descargar v1.0
                </a>
                <div className="flex items-center gap-3 text-xs font-black text-stone-500 bg-black/40 px-6 py-3 rounded-full border border-white/5 backdrop-blur-sm">
                  <ShieldCheck className="w-5 h-5 text-teal-400" /> Archivo Seguro Verificado
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-black/50 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
             <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-indigo-500" />
                <span className="text-xl font-black text-white tracking-tight">Nexora</span>
             </div>
             <p className="text-stone-500 text-sm font-medium">Liderando la transformación digital <br />de los negocios.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 text-sm font-bold text-stone-400">
            <a href="#" className="hover:text-white transition-colors">Soporte Técnico (WhatsApp)</a>
            <a href="#" className="hover:text-white transition-colors">Términos Legales</a>
            <p className="text-stone-600 font-bold">© 2026 Nexora Systems.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;