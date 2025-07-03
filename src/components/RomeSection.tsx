
import { useState, useEffect } from "react";
import { Plane, Gift } from "lucide-react";

const RomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowGift(true), 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden flex items-center justify-center">
      {/* Floating Corner Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center transform rotate-12 animate-float">
        <Gift className="w-8 h-8 text-white" />
      </div>
      <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform -rotate-12 animate-float" style={{ animationDelay: '1s' }}>
        <Plane className="w-8 h-8 text-white" />
      </div>
      <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center transform rotate-45 animate-float" style={{ animationDelay: '2s' }}>
        <Plane className="w-8 h-8 text-white" />
      </div>
      <div className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center transform -rotate-45 animate-float" style={{ animationDelay: '3s' }}>
        <Gift className="w-8 h-8 text-white" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Main Heading */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-libre-caslon text-7xl md:text-8xl font-normal text-gray-900 leading-tight mb-6">
            We are going to
            <br />
            Rome, Italy! 🇮🇹
          </h2>
        </div>

        {/* Subheading */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-manrope text-xl md:text-2xl text-gray-600 mb-8">
            Your flight tickets and luxury accommodation are my gift to you! ✈️🎁
          </p>
          <p className="font-manrope text-lg text-pink-500 font-medium">
            Pack your bags, my love - adventure awaits! ❤️
          </p>
        </div>

        {/* Central Gift Card */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${showGift ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative group max-w-sm mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
            <div className="relative px-12 py-16 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl animate-bounce">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Plane className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center">
                <p className="font-manrope text-sm text-gray-600 mb-2">✨ SURPRISE! ✨</p>
                <p className="font-manrope text-lg font-semibold text-gray-800">All expenses covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RomeSection;
