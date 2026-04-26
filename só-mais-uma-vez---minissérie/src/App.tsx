import {
  Volume2,
  ChevronRight,
  ArrowLeft,
  Phone,
  Video,
  Tag,
  ShieldCheck,
  X,
  CheckCircle2,
  Star
} from 'lucide-react';
import React, { useState } from 'react';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center">
      <div className="w-full max-w-[480px] flex flex-col items-center pt-8 overflow-x-hidden">
        
        {/* === HEADER SECTION === */}
        <div className="flex flex-col items-center px-4 w-full text-center">
          <div className="bg-black border border-zinc-800 text-zinc-400 text-[9px] font-bold tracking-[0.2em] py-1.5 px-4 rounded-full flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#EAB308]"></div>
            EM ALTA NO BRASIL
          </div>

          <h1 className="text-4xl font-black mb-1 tracking-tight">
            Só Mais Uma Vez
          </h1>
          <h2 className="text-[#EAB308] text-sm font-bold tracking-[0.1em] mb-6">
            DUBLADO BRASILEIRO
          </h2>

          <p className="text-zinc-400 italic text-[13px] mb-8 font-serif px-4">
            "Antes de eu partir... você me beijaria uma última vez?"
          </p>

          {/* Fake Poster Image */}
          <div className="w-[82%] aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl mb-14 bg-zinc-900 border border-zinc-800">
             <img 
               src="https://digitalprimeia.site/wp-content/uploads/2026/03/hero-D1mfgU1L.png" 
               alt="Capa" 
               className="absolute inset-0 w-full h-full object-cover opacity-90" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end items-center pb-8">
                 <h3 className="text-4xl font-serif text-[#FFE2B8] italic drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-center leading-[1.1] opacity-90">
                    SÓ MAIS<br/>UMA VEZ
                 </h3>
             </div>
          </div>
        </div>

        {/* === VIDEO SECTION === */}
        <div className="w-full flex flex-col items-center mb-16">
          <h3 className="text-[#EAB308] font-bold text-[11px] tracking-[0.2em] mb-6">
            ASSISTA UMA PRÉVIA
          </h3>

          <div className="w-[85%] bg-zinc-900 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center border border-zinc-800 shadow-2xl">
            <div dangerouslySetInnerHTML={{ __html: '<wistia-player media-id="56cutkv94x" aspect="0.6360424028268551"></wistia-player>' }} className="w-full" />
          </div>
        </div>

        {/* === OFFER SECTION === */}
        <div className="w-[90%] mx-auto mb-16 relative">
          <div className="border border-[#EAB308]/40 rounded-[28px] p-7 flex flex-col items-center relative overflow-hidden bg-black z-10 shadow-[0_0_50px_rgba(234,179,8,0.05)]">
             <h2 className="text-xl font-bold text-center mb-8 leading-snug tracking-wide">
               ASSISTA A MINISSÉRIE<br/>COMPLETA AGORA
             </h2>

             <div className="flex flex-col gap-4 w-full mb-8 ml-2">
               {[
                 "Temporada completa com todos os\nepisódios",
                 "Dublado em português brasileiro",
                 "Acesso imediato após pagamento",
                 "Pagamento único sem mensalidade"
               ].map((text, i) => (
                 <div key={i} className="flex items-start gap-3">
                    <ChevronRight size={18} className="text-[#EAB308] shrink-0 mt-[2px] stroke-[3]" />
                    <span className="text-[14px] leading-snug font-medium whitespace-pre-wrap text-zinc-200">{text}</span>
                 </div>
               ))}
             </div>

             <button 
               onClick={() => setIsPopupOpen(true)}
               className="w-[95%] bg-[#FFC107] text-black font-extrabold text-[15px] py-4 rounded-xl shadow-[0_2px_15px_rgba(255,193,7,0.2)] tracking-wide"
             >
                QUERO COMPLETO POR R$ 5,90
             </button>
          </div>
        </div>

        {/* === TESTIMONIALS SECTION === */}
        <div className="w-[90%] flex flex-col items-center mb-16">
           <h3 className="text-white font-bold text-sm tracking-[0.1em] mb-8">
             QUEM COMPROU APROVOU
           </h3>

           <div className="w-[95%] flex flex-col gap-6 text-left">
              <img src="https://digitalprimeia.site/wp-content/uploads/2026/03/testimonial-cinthia.jpg" alt="Depoimento Cinthia" className="w-full rounded-2xl shadow-xl" />
              <img src="https://digitalprimeia.site/wp-content/uploads/2026/03/testimonial-ana.jpg" alt="Depoimento Ana" className="w-full rounded-2xl shadow-xl" />
              <img src="https://digitalprimeia.site/wp-content/uploads/2026/03/testimonial-bianca.jpg" alt="Depoimento Bianca" className="w-full rounded-2xl shadow-xl" />
           </div>
        </div>

        {/* === FOOTER SECTION === */}
        <div className="w-[85%] flex flex-col items-center text-center pb-24">
           <div className="mb-4">
              <ShieldCheck size={42} className="text-[#FFC107] stroke-[1.5]" />
           </div>
           <h3 className="text-lg font-bold mb-3 tracking-wide">GARANTIA DE SATISFAÇÃO</h3>
           <p className="text-zinc-400 text-[13px] mb-10 leading-relaxed px-4">
              Caso tenha qualquer problema para acessar, nossa equipe<br/>está pronta para ajudar.
           </p>

           <a href="#" onClick={(e) => { e.preventDefault(); setIsPopupOpen(true); }} className="text-zinc-500 text-[11px] tracking-widest font-bold underline underline-offset-[6px] decoration-zinc-700 hover:text-zinc-300 transition-colors">
              ASSISTA COMPLETO POR R$ 5,90
           </a>
        </div>

      </div>

      {/* === PREMIUM POPUP === */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#121212] w-full max-w-[360px] rounded-3xl p-6 relative border border-zinc-800 shadow-2xl flex flex-col items-center">
            
            <button 
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="bg-[#382a0b] text-[#EAB308] text-[10px] font-bold tracking-widest py-1.5 px-4 rounded-full flex items-center gap-1.5 mb-6">
              <Star size={12} fill="currentColor" />
              UPGRADE PREMIUM
            </div>

            <h2 className="text-2xl font-black mb-1">
              PACOTE PREMIUM
            </h2>
            <h3 className="text-4xl font-black text-[#EAB308] mb-2 tracking-tight">
              R$ 10,00
            </h3>
            <p className="text-zinc-500 text-[11px] font-bold tracking-[0.15em] mb-6">
              ACESSO VITALÍCIO
            </p>

            <div className="w-full bg-[#1c1c1c] rounded-2xl p-5 mb-8 border border-zinc-800">
              <div className="text-zinc-400 text-[10px] font-bold tracking-widest mb-4">
                INCLUI:
              </div>
              <div className="flex flex-col gap-3.5">
                {[
                  "3500+ minisséries exclusivas",
                  "Lançamentos diários de séries",
                  "Todos os doramas dos apps famosos",
                  "Nunca mais pague por nenhuma série 🤩"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#EAB308] shrink-0 mt-[2px]" />
                    <span className="text-[13px] text-zinc-300 font-medium leading-tight">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => window.location.href = 'https://pay.lowify.com.br/checkout?product_id=XhkZq3'}
              className="w-full bg-[#FFC107] text-black font-extrabold text-[14px] py-4 rounded-xl shadow-[0_0_25px_rgba(255,193,7,0.3)] tracking-wide mb-6">
              QUERO O PREMIUM POR R$ 10,00
            </button>

            <button 
              onClick={() => window.location.href = 'https://pay.lowify.com.br/checkout?product_id=c2ztDa'}
              className="text-zinc-500 text-[10px] font-bold tracking-widest hover:text-zinc-300 transition-colors"
            >
              QUERO SÓ A SÉRIE POR R$ 5,90
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
}
