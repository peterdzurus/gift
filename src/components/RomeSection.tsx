
import { useState, useEffect } from "react";
import { Plane, Gift } from "lucide-react";

const RomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [showTickets, setShowTickets] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowGift(true), 800);
      setTimeout(() => setShowTickets(true), 1600);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden flex items-center justify-center">
      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-blue-200/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {/* Main Heading */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-libre-caslon text-6xl md:text-7xl font-normal text-gray-800 leading-tight mb-6">
            We are going to
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Rome, Italy
            </span>
          </h2>
        </div>

        {/* Subheading */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-manrope text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Tickets and accommodation are our gift to you
          </p>
        </div>

        {/* Glass Components Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
          {/* Gift Box */}
          <div className={`transition-all duration-800 ${showGift ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-gift-open"></div>
              <div className="relative px-8 py-12 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
                <Gift className="w-16 h-16 mx-auto mb-4 text-pink-500 animate-float" />
                <h3 className="font-manrope text-lg font-semibold text-gray-800 mb-2">Special Gift</h3>
                <p className="font-manrope text-sm text-gray-600">Everything is taken care of</p>
              </div>
            </div>
          </div>

          {/* Flight Tickets */}
          <div className={`transition-all duration-800 delay-300 ${showTickets ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-8 py-12 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 animate-ticket-fly">
                <div className="flex items-center justify-center mb-4">
                  <Plane className="w-16 h-16 text-blue-500 animate-float" style={{ animationDelay: '1s' }} />
                </div>
                <h3 className="font-manrope text-lg font-semibold text-gray-800 mb-2">Flight Tickets</h3>
                <p className="font-manrope text-sm text-gray-600">Ready for takeoff to Rome</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Glass Card */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${showTickets ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative group max-w-md mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative px-6 py-8 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/30">
              <p className="font-manrope text-base text-gray-700 italic">
                "The world is a book and those who do not travel read only one page"
              </p>
              <p className="font-manrope text-sm text-gray-500 mt-2">— Augustine of Hippo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RomeSection;
