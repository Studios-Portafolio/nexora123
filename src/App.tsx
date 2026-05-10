import { 
  Download, ShieldCheck, Zap, Smartphone, Wallet, 
  CheckCircle2, Globe, MessageCircle, LayoutDashboard, Sparkles, 
  Plus, Users, MailCheck, ServerCrash, Map, Rocket, Clock, Share2, FileImage,
  Store, Activity, Wrench, Shirt, HelpCircle, ArrowRight, ChevronDown
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
            <a href="#roadmap" className="hover:text-indigo-400 transition-colors">Hoja de Ruta</a>
            <a href="#precios" className="hover:text-indigo-400 transition-colors">Precios</a>
            <a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ</a>
          </div>
          <a 
            href="#precios"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-black transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            Panel CEO
          </a>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        
        {/* 🚀 HERO SECTION 🚀 */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black tracking-widest uppercase mb-12 animate-in fade-in slide-in-from-bottom-4">
            <Sparkles className="w-3.5 h-3.5" /> Potencia Enterprise Web & Móvil
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1] max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-500">
            Ecosistema de Facturación <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400">
              para tu Empresa.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 mb-16 max-w-2xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-600">
            Control total de stock, punto de venta multi-moneda, métricas en la nube y chat de soporte integrado. Todo conectado a un potente Panel CEO.
          </p>
          
          {/* 🔥 MOCKUP DUAL (PC + CELULAR) 🔥 */}
          <div className="relative max-w-4xl mx-auto mb-20 md:h-[650px] group animate-in fade-in zoom-in-95 duration-700 delay-150">
             
             {/* FONDO: Mockup del Panel CEO (PC) */}
             <div className="hidden md:block absolute top-0 left-0 w-[750px] h-[480px] bg-[#0c0a09] border-[8px] border-stone-800 rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-white/10 opacity-60 group-hover:opacity-100 transition-opacity duration-700 z-0">
                <div className="w-full h-10 bg-stone-900 border-b border-white/5 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                   <div className="ml-4 text-xs text-stone-500 font-medium bg-black/30 px-3 py-1 rounded-md flex-1 max-w-[200px] truncate">nexora.com/ceo-panel</div>
                </div>
                <div className="flex h-[calc(100%-2.5rem)]">
                   <div className="w-48 border-r border-white/5 bg-black/40 p-4 flex flex-col gap-4">
                      <div className="w-full h-8 bg-indigo-500/20 rounded-lg mb-2 border border-indigo-500/20"></div>
                      <div className="w-full h-4 bg-stone-800/50 rounded"></div>
                      <div className="w-3/4 h-4 bg-stone-800/50 rounded"></div>
                      <div className="w-5/6 h-4 bg-stone-800/50 rounded"></div>
                      <div className="mt-auto w-full h-8 bg-stone-800/50 rounded-lg"></div>
                   </div>
                   <div className="flex-1 p-6 bg-stone-950/40">
                      <div className="flex justify-between mb-6">
                         <div className="w-1/3 h-8 bg-stone-800/80 rounded-lg"></div>
                         <div className="w-8 h-8 bg-stone-800/80 rounded-full"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                         <div className="h-24 bg-stone-900/80 rounded-xl border border-white/5 p-4 flex flex-col justify-end"><div className="w-1/2 h-6 bg-indigo-500/40 rounded"></div></div>
                         <div className="h-24 bg-stone-900/80 rounded-xl border border-white/5 p-4 flex flex-col justify-end"><div className="w-2/3 h-6 bg-emerald-500/40 rounded"></div></div>
                         <div className="h-24 bg-stone-900/80 rounded-xl border border-white/5 p-4 flex flex-col justify-end"><div className="w-1/3 h-6 bg-violet-500/40 rounded"></div></div>
                      </div>
                      <div className="h-40 bg-stone-900/80 rounded-xl border border-white/5"></div>
                   </div>
                </div>
             </div>

             {/* FRENTE: Mockup del Celular (App POS) */}
             <div className="relative z-10 w-full max-w-[320px] mx-auto md:absolute md:bottom-0 md:right-4 md:mx-0 h-[600px] bg-[#0c0a09] border-[8px] border-stone-800 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transform transition-transform duration-700 hover:-translate-y-2 flex flex-col ring-1 ring-white/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-stone-800 rounded-b-xl z-20"></div>
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 pt-12 pb-8 px-6 text-center rounded-b-[2.5rem] shadow-lg relative z-10">
                   <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                      <Wallet className="w-7 h-7 text-white" />
                   </div>
                   <h3 className="text-white font-black text-xl tracking-tight">Caja Registradora</h3>
                   <p className="text-indigo-200 text-[10px] font-bold uppercase tracking-widest mt-2">Punto de Venta</p>
                </div>
                <div className="flex-1 p-5 flex flex-col gap-4 bg-stone-950/50">
                   <div className="flex justify-between items-end mb-2">
                     <span className="text-stone-400 font-bold text-xs">Ticket Actual</span>
                     <span className="text-white font-black">Bs. 3,250.00</span>
                   </div>
                   <div className="w-full bg-stone-900 rounded-xl border border-white/5 p-3 flex items-center gap-4">
                      <div className="w-10 h-10 bg-stone-800 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="w-3/4 h-2.5 bg-stone-700 rounded mb-2"></div>
                        <div className="w-1/2 h-2.5 bg-stone-800 rounded"></div>
                      </div>
                   </div>
                   <div className="w-full bg-stone-900 rounded-xl border border-white/5 p-3 flex items-center gap-4 opacity-70">
                      <div className="w-10 h-10 bg-stone-800 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="w-full h-2.5 bg-stone-700 rounded mb-2"></div>
                        <div className="w-2/3 h-2.5 bg-stone-800 rounded"></div>
                      </div>
                   </div>
                   <div className="mt-auto w-full py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-center text-white font-black text-base shadow-lg shadow-indigo-600/20 cursor-pointer transition-colors">
                      Procesar Pago
                   </div>
                </div>
             </div>
          </div>

          {/* BOTONES PRINCIPALES (Enfoque en Ecosistema) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <a href="#precios" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-lg shadow-2xl shadow-indigo-600/40 flex items-center justify-center gap-3 transition-all active:scale-95">
              <LayoutDashboard className="w-6 h-6" />
              Entrar al Panel CEO
            </a>
            <a href="/Nexora_Enterprise_v1.0.apk" download className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all">
              <Download className="w-5 h-5" /> Descargar App (POS)
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-6 text-sm font-bold text-stone-500 animate-in fade-in delay-500">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-teal-400"/> Servidores Seguros</span>
            <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-indigo-400"/> Sincronización Web</span>
          </div>
        </section>

        {/* 🎬 SECCIÓN DE VIDEO DEMOSTRATIVO REAL 🎬 */}
        <section className="py-12 relative max-w-5xl mx-auto px-6 z-20">
           <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="relative bg-stone-900/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-3 md:p-4 shadow-3xl overflow-hidden group">
              
              {/* Contenedor del Video Real */}
              <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden flex items-center justify-center border border-white/5 shadow-inner">
                 
                 <video 
                   src="/promo.mp4" 
                   className="w-full h-full object-cover"
                   autoPlay 
                   loop 
                   muted 
                   playsInline
                   controls
                 />
                 
                 {/* Etiqueta flotante inferior */}
                 <div className="absolute bottom-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                   <span className="text-white font-black text-xs md:text-sm tracking-wide">Nexora Enterprise en acción</span>
                 </div>
                 
              </div>
           </div>
        </section>

        {/* 🧩 CARACTERÍSTICAS BENTO GRID (RENOVADO) 🧩 */}
        <section id="caracteristicas" className="py-32 bg-black/40 border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-16 text-center tracking-tight">
              Arquitectura de Producción <span className="text-indigo-400">Blindada.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* CAJA 1: PANEL CEO (Grande) */}
              <div className="md:col-span-2 bg-stone-900/50 border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group hover:border-indigo-500/50 transition-colors duration-500 flex flex-col justify-end min-h-[300px]">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-all duration-500">
                  <LayoutDashboard className="w-40 h-40 text-indigo-500" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/20">
                       <Users className="w-6 h-6 text-indigo-400" />
                     </div>
                     <h3 className="text-2xl font-black text-white">Panel CEO & CRM Avanzado</h3>
                  </div>
                  <p className="text-stone-400 leading-relaxed font-medium max-w-xl">
                    Control total desde cualquier dispositivo. Métricas en vivo, gestión matemática de membresías (renovaciones automáticas de 1 mes o 1 año), y capacidad de bloquear o desbloquear clientes con un solo clic.
                  </p>
                </div>
              </div>

              {/* CAJA 2: SOPORTE EN VIVO (Pequeña) */}
              <div className="bg-stone-900/50 border border-white/10 rounded-[2.5rem] p-8 group hover:border-teal-500/50 transition-colors duration-500 flex flex-col justify-center">
                <div className="p-3 bg-teal-500/20 rounded-xl border border-teal-500/20 w-fit mb-6 group-hover:scale-110 transition-transform">
                   <MessageCircle className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">Soporte Socket.IO</h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Chat en tiempo real integrado. Historial de mensajes por cliente, indicador de sesión segura y notificaciones visuales al instante.
                </p>
              </div>

              {/* CAJA 3: ANTI-CRASHES (Pequeña) */}
              <div className="bg-stone-900/50 border border-white/10 rounded-[2.5rem] p-8 group hover:border-violet-500/50 transition-colors duration-500 flex flex-col justify-center">
                <div className="p-3 bg-violet-500/20 rounded-xl border border-violet-500/20 w-fit mb-6 group-hover:scale-110 transition-transform">
                   <ServerCrash className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-black text-white mb-3">Blindaje Anti-Crashes</h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Frontend React protegido. Si la red falla, la app simplemente espera los datos sin colapsar. Adiós a la pantalla blanca de la muerte.
                </p>
              </div>

              {/* CAJA 4: SEGURIDAD BREVO (Grande) */}
              <div className="md:col-span-2 bg-gradient-to-br from-stone-900/50 to-indigo-900/10 border border-white/10 rounded-[2.5rem] p-8 relative overflow-hidden group hover:border-indigo-400/50 transition-colors duration-500 flex flex-col justify-end">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-all duration-500">
                  <ShieldCheck className="w-40 h-40 text-indigo-500" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/20">
                       <MailCheck className="w-6 h-6 text-indigo-400" />
                     </div>
                     <h3 className="text-2xl font-black text-white">Autenticación Inmune (API Brevo)</h3>
                  </div>
                  <p className="text-stone-400 leading-relaxed font-medium max-w-xl">
                    Sistemas de correos sin bloqueos. Migramos a la API profesional de Brevo para enviar PINs de recuperación en milisegundos, combinado con seguridad militar JWT para tus usuarios.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 🎯 CASOS DE USO (IDEAL PARA TU RUBRO) 🎯 */}
        <section className="py-24 bg-[#0c0a09] border-t border-white/5 relative overflow-hidden">
           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-black text-white mb-4">Nexora se adapta a tu negocio</h2>
                 <p className="text-stone-400 font-medium">Diseñado para la agilidad que requiere el comercio latinoamericano.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 <div className="bg-stone-900/50 border border-white/5 p-6 rounded-3xl text-center hover:bg-stone-800/50 transition-colors">
                    <Store className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                    <h4 className="text-white font-bold text-sm">Bodegones &<br/>Minimarkets</h4>
                 </div>
                 <div className="bg-stone-900/50 border border-white/5 p-6 rounded-3xl text-center hover:bg-stone-800/50 transition-colors">
                    <Activity className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                    <h4 className="text-white font-bold text-sm">Farmacias &<br/>Salud</h4>
                 </div>
                 <div className="bg-stone-900/50 border border-white/5 p-6 rounded-3xl text-center hover:bg-stone-800/50 transition-colors">
                    <Wrench className="w-8 h-8 text-violet-400 mx-auto mb-4" />
                    <h4 className="text-white font-bold text-sm">Ferreterías &<br/>Repuestos</h4>
                 </div>
                 <div className="bg-stone-900/50 border border-white/5 p-6 rounded-3xl text-center hover:bg-stone-800/50 transition-colors">
                    <Shirt className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                    <h4 className="text-white font-bold text-sm">Boutiques &<br/>Tiendas de Ropa</h4>
                 </div>
              </div>
           </div>
        </section>

        {/* 🧾 KILLER FEATURE: RECIBOS PNG 🧾 */}
        <section className="py-32 bg-black/40 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 relative z-10">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black tracking-widest uppercase">
                 <Share2 className="w-3.5 h-3.5" /> Innovación Visual
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                 Recibos profesionales directo a <span className="text-emerald-400">WhatsApp.</span>
               </h2>
               <p className="text-stone-400 text-lg leading-relaxed font-medium">
                 Olvídate de las máquinas fiscales y las impresoras térmicas. Nexora incluye un Motor de Recibos PNG que genera una imagen detallada de cada venta para enviarla a tus clientes en segundos.
               </p>
               <ul className="space-y-4 text-stone-300 font-bold">
                 <li className="flex items-center gap-3"><FileImage className="w-5 h-5 text-emerald-500"/> Formato PNG optimizado y ligero</li>
                 <li className="flex items-center gap-3"><Smartphone className="w-5 h-5 text-emerald-500"/> Listo para compartir en cualquier red social</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500"/> Desglose de factura con diseño elegante</li>
               </ul>
            </div>
            
            {/* Visualización del Recibo PNG */}
            <div className="w-full md:w-[400px] flex justify-center relative">
               <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full"></div>
               <div className="relative bg-white p-8 rounded-t-xl rounded-b-[2.5rem] w-80 shadow-2xl shadow-emerald-900/40 transform md:rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center border-b border-dashed border-stone-300 pb-6 mb-6">
                     <div className="w-14 h-14 bg-black rounded-full mx-auto mb-3 flex items-center justify-center"><Zap className="w-7 h-7 text-white"/></div>
                     <h4 className="font-black text-black text-2xl">Distribuidora XYZ</h4>
                     <p className="text-sm text-stone-500 font-medium">Recibo #00427</p>
                  </div>
                  <div className="space-y-4 text-sm text-stone-600 font-bold mb-6">
                     <div className="flex justify-between"><span>2x Producto Premium</span> <span>$30.00</span></div>
                     <div className="flex justify-between"><span>1x Servicio Técnico</span> <span>$25.00</span></div>
                  </div>
                  <div className="border-t-2 border-stone-200 pt-4 flex justify-between items-center text-black font-black text-xl">
                     <span>TOTAL</span>
                     <span className="text-emerald-600">$55.00</span>
                  </div>
                  <div className="mt-8 text-center text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                    Generado por Nexora
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 🗺️ HOJA DE RUTA (ROADMAP) 🗺️ */}
        <section id="roadmap" className="py-32 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
              <Map className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">La Hoja de Ruta de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Nexora</span></h2>
            <p className="text-stone-400 font-medium max-w-2xl mx-auto">La evolución no se detiene. Esto es lo que hemos logrado y hacia dónde nos dirigimos para ser el estándar corporativo definitivo.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

            {/* Fase 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0c0a09] bg-teal-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-stone-900/50 border border-teal-500/30 p-6 rounded-2xl shadow-xl hover:border-teal-500/60 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="font-black text-white text-xl">Fase 1: Cimientos Enterprise</h3>
                  <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full w-fit">Completado</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">Arquitectura de producción lista. Panel de control CEO, gestión de directorio CRM, chat interno en vivo por Socket.IO y sistema anti-crashes con autenticación Brevo API.</p>
              </div>
            </div>

            {/* Fase 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0c0a09] bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Rocket className="w-4 h-4 animate-bounce" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-gradient-to-br from-stone-900 to-indigo-900/20 border border-indigo-500/50 p-6 rounded-2xl shadow-xl shadow-indigo-500/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="font-black text-white text-xl">Fase 2: Motor Financiero</h3>
                  <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1 bg-indigo-500 flex items-center gap-2 text-white rounded-full w-fit shadow-lg shadow-indigo-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span> En Desarrollo
                  </span>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed mb-4">Motor multidivisa real integrado (VES, USD, EUR, USDT) abandonando la paridad 1:1, permitiendo tasas de cambio sincronizadas y fluidas.</p>
              </div>
            </div>

            {/* Fase 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0c0a09] bg-stone-800 text-stone-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Clock className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-stone-900/30 border border-white/5 p-6 rounded-2xl opacity-70">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <h3 className="font-black text-stone-300 text-xl">Fase 3: Expansión Legal</h3>
                  <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1 bg-stone-800 text-stone-400 rounded-full w-fit">Próximamente</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed">Libro Mayor de Ventas con historial detallado, creación del Perfil Legal de Empresa (RIF/NIT) y Alineación NIIF con cálculos estrictos de IVA y separación de costos vs. utilidades.</p>
              </div>
            </div>

          </div>
        </section>

        {/* 📖 TUTORIAL COMPLETO Y DETALLADO 📖 */}
        <section id="tutorial" className="py-32 max-w-7xl mx-auto px-6 border-t border-white/5">
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

        {/* 🤔 PREGUNTAS FRECUENTES (FAQ) 🤔 */}
        <section id="faq" className="py-24 bg-[#0c0a09] border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
               <HelpCircle className="w-12 h-12 text-indigo-400 mx-auto mb-4 opacity-80" />
               <h2 className="text-3xl font-black text-white mb-4">Preguntas Frecuentes</h2>
               <p className="text-stone-500 font-medium">Despeja tus dudas y toma la decisión correcta hoy.</p>
            </div>
            
            <div className="space-y-4">
              <details className="group bg-stone-900/50 border border-white/5 rounded-2xl p-6 cursor-pointer hover:border-indigo-500/30 transition-colors">
                <summary className="flex justify-between items-center font-bold text-white outline-none">
                  ¿Qué pasa si se cae el internet de mi local?
                  <ChevronDown className="w-5 h-5 text-stone-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-stone-400 mt-4 text-sm leading-relaxed border-t border-white/5 pt-4">
                  Nexora cuenta con un potente blindaje anti-crashes. Si la red falla de repente, el sistema no colapsará. Protegerá tu sesión actual de ventas y esperará de forma segura a que regrese la conexión sin perder tu trabajo.
                </p>
              </details>

              <details className="group bg-stone-900/50 border border-white/5 rounded-2xl p-6 cursor-pointer hover:border-indigo-500/30 transition-colors">
                <summary className="flex justify-between items-center font-bold text-white outline-none">
                  ¿Los 60 días de prueba requieren tarjeta de crédito?
                  <ChevronDown className="w-5 h-5 text-stone-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-stone-400 mt-4 text-sm leading-relaxed border-t border-white/5 pt-4">
                  No. Queremos que pruebes el poder de Nexora sin ningún tipo de compromiso ni miedos. Solo necesitas registrar tu cuenta de administrador y podrás comenzar a organizar tu inventario y facturar inmediatamente.
                </p>
              </details>

              <details className="group bg-stone-900/50 border border-white/5 rounded-2xl p-6 cursor-pointer hover:border-indigo-500/30 transition-colors">
                <summary className="flex justify-between items-center font-bold text-white outline-none">
                  ¿Puedo usarlo en varios teléfonos al mismo tiempo?
                  <ChevronDown className="w-5 h-5 text-stone-500 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-stone-400 mt-4 text-sm leading-relaxed border-t border-white/5 pt-4">
                  ¡Por supuesto! Gracias a nuestros servidores en la nube basados en PostgreSQL, puedes conectar múltiples dispositivos (teléfonos de vendedores, cajeros) y todos se sincronizarán en tiempo real bajo el mando de tu Panel CEO.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 💥 LLAMADO A LA ACCIÓN (CTA FINAL) 💥 */}
        <section className="py-24 bg-gradient-to-br from-indigo-950 via-[#0c0a09] to-violet-950 border-y border-white/10 relative text-center overflow-hidden">
           <div className="absolute inset-0 bg-[url('/image_585f72.jpg')] opacity-10 mix-blend-overlay"></div>
           <div className="max-w-4xl mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
                El control de tu negocio no puede esperar.
              </h2>
              <p className="text-xl text-indigo-200/80 mb-10 font-medium max-w-2xl mx-auto">
                Deja de perder dinero por fugas de inventario y cuentas desorganizadas. Únete a la nueva era del comercio digital con Nexora.
              </p>
              <a 
                href="https://wa.me/584149187287?text=Hola%20Nexora,%20quiero%20empezar%20mi%20prueba%20gratis%20hoy%20mismo." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-5 bg-white text-indigo-950 rounded-full font-black text-xl hover:scale-105 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
              >
                Comenzar mi prueba hoy <ArrowRight className="w-6 h-6" />
              </a>
           </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-black/80 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
             <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-indigo-500" />
                <span className="text-xl font-black text-white tracking-tight">Nexora</span>
             </div>
             <p className="text-stone-500 text-sm font-medium">Liderando la transformación digital <br />de los negocios.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 text-sm font-bold text-stone-400">
            <a href="https://wa.me/584149187287" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Soporte Técnico (WhatsApp)</a>
            <a href="#" className="hover:text-white transition-colors">Términos Legales</a>
            <p className="text-stone-600 font-bold">© 2026 Nexora Systems.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
