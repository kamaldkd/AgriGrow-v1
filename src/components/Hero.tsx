import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-700 to-green-600 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeInUp">
          Growing Tomorrow's
          <span className="block text-green-300">Harvest Today</span>
        </h1>
        <p className="text-xl md:text-2xl text-green-50 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
          Sustainable agricultural solutions for modern farming. We help farmers maximize yield while protecting the environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
          <button className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group">
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-xl">
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
