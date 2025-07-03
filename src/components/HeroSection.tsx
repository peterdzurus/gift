
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="https://res.cloudinary.com/anubhav1602/video/upload/v1750880023/g81ygrvfr9cjf4gydbg0.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      
      {/* Main Content - Centered */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
        <div className="text-center text-white max-w-4xl">
          <h1 className="font-libre-caslon text-8xl md:text-9xl font-normal tracking-tight leading-[0.9] animate-fade-in">
            Happy Birthday
          </h1>
          <p className="mt-8 font-manrope text-lg md:text-xl font-normal text-white/90 max-w-2xl mx-auto animate-slide-up">
            Today marks the beginning of another beautiful chapter in your extraordinary story
          </p>
        </div>
      </div>

      {/* Decorative Right Side */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="writing-mode-vertical text-white/60 font-manrope text-sm tracking-widest uppercase">
          <span className="inline-block transform rotate-90 origin-center whitespace-nowrap">
            BIRTHDAY CHAPTER ONE
          </span>
        </div>
      </div>

      {/* Footer Label */}
      <div className="absolute bottom-8 left-8 z-20">
        <p className="font-manrope text-xs text-white/50">
          ✦ Founded in Stillness, 2025
        </p>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-8 right-8 z-20">
        <p className="font-manrope text-xs text-white/60">
          © Luna
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center animate-float">
          <span className="font-manrope text-xs text-white/70 mb-2 tracking-wide">SCROLL</span>
          <ArrowDown className="w-4 h-4 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
