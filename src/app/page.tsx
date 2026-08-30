"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, LayoutDashboard, Smartphone, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/nova_logo.png" alt="SAPE Logo" className="h-10 w-auto object-contain drop-shadow-xl" />
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight">SAPE</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <a href="#recursos" className="hover:text-blue-400 transition-colors">Recursos</a>
            <a href="#vantagens" className="hover:text-blue-400 transition-colors">Vantagens</a>
            <a href="#depoimentos" className="hover:text-blue-400 transition-colors">Casos de Sucesso</a>
          </div>
          <a href="https://sapemunicipio.zonaeducacional.org/" target="_blank" rel="noreferrer" className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all text-sm font-semibold shadow-lg shadow-blue-500/20">
            Acessar Sistema
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-blue-500/30 text-blue-400 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              De professores para professores
            </div>
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter fx-chrome-premium leading-[1.1]">
                Modernizando o chão de<br />
                escola na palma da mão.
              </h1>
            </div>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              O SAPE devolve o tempo ao professor para focar no aluno. 
              Um Sistema Administrativo Pedagógico Escolar leve, intuitivo e feito para funcionar no celular, onde a aula acontece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://sapemunicipio.zonaeducacional.org/" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                Acessar Plataforma <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#contato" className="px-8 py-4 rounded-full glass hover:bg-white/10 transition-colors font-medium">
                Agendar Demonstração
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* O Problema vs Solução */}
      <section id="vantagens" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold mb-6 border border-red-500/20">
                O Problema Invisível
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">40% do tempo é desperdiçado com burocracia.</h2>
              <p className="text-lg text-zinc-400 mb-8">
                Sistemas pesados resultam em dados atrasados e papelada sem fim. Com o SAPE, a Secretaria tem a visão real do município hoje, não no mês que vem, e o professor foca no que importa: <strong>ensinar</strong>.
              </p>
              <ul className="space-y-4">
                {[
                  "Frequência em tempo real para combater a evasão",
                  "Dados precisos e rápidos para o IDEB e Censo",
                  "Sem sistemas legados ou interfaces difíceis"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl" />
              <div className="relative glass rounded-3xl border-white/10 p-6 flex flex-col overflow-hidden">
                <div className="flex gap-4 items-center mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Smartphone className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Plataforma Web & Mobile</h3>
                    <p className="text-zinc-400 text-sm">Acesse de qualquer dispositivo</p>
                  </div>
                </div>
                {/* Laptop Mockup */}
                <div className="relative z-10 w-full mt-4 transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                  {/* Screen Frame */}
                  <div className="relative w-full aspect-video bg-zinc-950 rounded-t-2xl border-[6px] md:border-[10px] border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
                    {/* Webcam Notch */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-3 bg-zinc-800 rounded-b-lg flex justify-center items-center z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-black border border-white/10" />
                    </div>
                    {/* Image inside Screen */}
                    <img 
                      src="/sape_desktop.png" 
                      alt="SAPE Web Login no Notebook" 
                      className="w-full h-full object-cover object-left opacity-95 hover:opacity-100 transition-opacity duration-500 relative z-10" 
                    />
                  </div>
                  {/* Laptop Base */}
                  <div className="relative w-[105%] -ml-[2.5%] h-3 md:h-5 bg-zinc-400 rounded-b-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-t border-zinc-300 flex justify-center">
                    {/* Trackpad indentation line */}
                    <div className="w-1/4 h-1 bg-zinc-500/50 rounded-b-md mx-auto" />
                  </div>
                  {/* Floor Shadow */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/40 blur-xl rounded-[100%]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid (Recursos) */}
      <section id="recursos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Tudo que sua rede precisa.</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Desenvolvemos funcionalidades essenciais para o professor e dados cruciais para a secretaria. Aprenda a usar em 5 minutos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl md:col-span-2 relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />
              <LayoutDashboard className="w-10 h-10 text-blue-500 mb-6 relative z-10" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10">Painel de Gestão (Secretaria)</h3>
              <p className="text-zinc-400 relative z-10 max-w-lg mb-6">
                Monitore a frequência da rede em tempo real. Tome decisões baseadas em dados vivos e reduza drasticamente a evasão escolar. O Raio-X do seu município.
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-zinc-300">Frequência em tempo real</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-zinc-300">Dados do IDEB</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-zinc-300">Censo Escolar</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full" />
              <Users className="w-10 h-10 text-purple-500 mb-6 relative z-10" />
              <h3 className="text-2xl font-semibold mb-4 relative z-10">Suporte Humanizado</h3>
              <p className="text-zinc-400 relative z-10">
                Não somos apenas software. Oferecemos suporte rápido e acolhedor via WhatsApp para que nenhum professor fique com dúvidas.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl md:col-span-3 flex flex-col md:flex-row gap-8 items-center justify-between overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
              <div className="max-w-xl relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold mb-4 border border-blue-500/30">
                  A Experiência Completa
                </div>
                <h3 className="text-2xl font-semibold mb-4">SAPE + Reduca: Município 360</h3>
                <p className="text-zinc-400 mb-6">
                  Não estamos apenas trocando o diário de papel. Estamos criando um <strong>Município Educacional 360</strong>, onde a gestão é precisa com o SAPE e a comunidade engaja com a educação através do Reduca.
                </p>
                <a href="#contato" className="inline-block px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors font-medium">
                  Conhecer o Bundle Completo
                </a>
              </div>
              <div className="w-full md:w-1/3 relative z-10 flex justify-center">
                {/* Mobile Phone Mockup */}
                <div className="relative w-[280px] h-[580px] bg-black rounded-[3rem] border-[10px] border-zinc-800 shadow-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-700 ease-out flex flex-col">
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center justify-end pr-2">
                    <div className="w-2 h-2 rounded-full bg-zinc-900 border border-white/5" />
                  </div>
                  {/* Side Buttons */}
                  <div className="absolute top-24 -left-[10px] w-1 h-10 bg-zinc-700 rounded-l-md" />
                  <div className="absolute top-36 -left-[10px] w-1 h-10 bg-zinc-700 rounded-l-md" />
                  <div className="absolute top-28 -right-[10px] w-1 h-14 bg-zinc-700 rounded-r-md" />
                  
                  {/* Screen Content - Scrollable */}
                  <div className="w-full flex-1 overflow-y-auto overflow-x-hidden bg-white [&::-webkit-scrollbar]:hidden rounded-[2.2rem]">
                    <img 
                      src="/mobile_full.png" 
                      alt="SAPE App Mobile Completo" 
                      className="w-full h-auto block" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA e Depoimentos Simples */}
      <section id="depoimentos" className="py-32 px-6 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">
            Pronto para transformar sua gestão escolar?
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
            Mais que um sistema de tecnologia, somos seus parceiros pedagógicos. Leve o SAPE para a sua rede e devolva o tempo de ensinar aos seus professores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" id="contato">
            <a href="https://chat.whatsapp.com/FQhRpqWcR4iLTK2yBOaX2T?s=sh&p=a&ilr=0" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold hover:scale-105 transition-transform shadow-xl">
              Iniciar um Piloto na Minha Rede
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-xl">SAPE<span className="text-blue-500">.</span></span>
            <span className="text-sm">© {new Date().getFullYear()} Zona Educacional</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">LGPD & Segurança</a>
            <a href="#" className="hover:text-white transition-colors">Marco Legal das Startups (CPSI)</a>
            <a href="https://sapemunicipio.zonaeducacional.org" className="hover:text-white transition-colors">Demo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
