import { CheckCircle } from 'lucide-react';

const features = [
  'Sustainable farming practices',
  'Expert agricultural consultants',
  'Latest farming technology',
  'Customized solutions',
  '24/7 customer support',
  'Proven track record',
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-200 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Agricultural field"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-green-600 text-4xl font-bold">15+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading the Way in
              <span className="text-green-600"> Modern Agriculture</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At AgriGrow, we're committed to revolutionizing farming through innovation, sustainability, and expertise. Our team of agricultural specialists works closely with farmers to implement solutions that increase productivity while preserving our planet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-green-600 transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
