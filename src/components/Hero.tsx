import React, { useEffect, useRef } from 'react';
import { ArrowDown, Play } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 10;
      const yPos = (clientY / innerHeight - 0.5) * 10;
      
      heroRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
      </div>

      <div ref={heroRef} className="relative z-10 text-center px-6 transition-transform duration-100 ease-out">
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <span className="text-4xl font-black text-white">U</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tighter leading-none">
          <span className="block animate-slide-up">WE ARE</span>
          <span className="block animate-slide-up delay-200 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            UNDERDOG
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-500">
          From <span className="text-white font-semibold">retail stores</span> to 
          <span className="text-white font-semibold"> e-commerce platforms</span> and 
          <span className="text-white font-semibold"> real estate ventures</span> - 
          we transform brands into market leaders
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-700">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
          >
            <span className="group-hover:tracking-wider transition-all duration-300">Start Your Journey</span>
          </button>
          <button 
            onClick={() => scrollToSection('beliefs')}
            className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:tracking-wider transition-all duration-300">Discover Our Beliefs</span>
          </button>
        </div>

        <div className="mt-20 animate-fade-in delay-1000">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
              <div className="text-gray-400 text-sm">Brands Elevated</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">500%</div>
              <div className="text-gray-400 text-sm">Average Sales Growth</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-400 text-sm">Marketing Support</div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300 p-2 rounded-full hover:bg-white/10"
      >
        <ArrowDown className="text-white/60" size={32} />
      </button>
    </section>
  );
};

export default Hero;