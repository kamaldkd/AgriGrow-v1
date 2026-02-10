import { Sprout, Tractor, Cloud, BarChart3, Droplets, Shield } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Sprout,
    title: 'Crop Consulting',
    description: 'Expert advice on crop selection, rotation, and management for optimal yields.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Tractor,
    title: 'Modern Equipment',
    description: 'Access to cutting-edge agricultural machinery and equipment rental services.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Cloud,
    title: 'Weather Analysis',
    description: 'Real-time weather monitoring and forecasting for better farm planning.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Yield Analytics',
    description: 'Data-driven insights to maximize productivity and profitability.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Droplets,
    title: 'Irrigation Solutions',
    description: 'Smart irrigation systems that conserve water and boost crop health.',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    icon: Shield,
    title: 'Pest Management',
    description: 'Integrated pest control strategies that protect crops naturally.',
    color: 'bg-red-100 text-red-600',
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive agricultural solutions tailored to your farming needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 ${
                    hoveredIndex === index ? 'scale-110 rotate-6' : ''
                  }`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
