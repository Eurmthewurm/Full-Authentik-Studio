import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'J-Griff Mastermind',
    category: 'Scale: $2M to $8M',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop',
    description: 'Comprehensive brand overhaul and creative strategy for education sector.'
  },
  {
    id: '2',
    title: 'High-Ticket Consulting',
    category: 'Creative & Art Direction',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
    description: 'Visual systems for 8-figure consultancy firms.'
  },
  {
    id: '3',
    title: 'eCom Aggregators',
    category: 'Asset Production',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
    description: 'Standardized creative workflows for 20+ brands.'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-4 bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">The Creative & Art Director</h2>
          <p className="text-gray-400 text-lg">
            Authentik Studio is led by a Creative & Art Director with a track record of scaling service-based businesses and e-commerce brands.
            The methodology applied to your Amazon listing is the same used to generate millions in revenue for private clients.
          </p>
          <div className="mt-6 inline-block bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            <span className="text-white font-bold">Track Record:</span> <span className="text-gray-400">J-Griff ($2M &rarr; $8M in 1.5 Years)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl cursor-pointer bg-background">
              <div className="aspect-[4/3] w-full overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-blue-400 text-xs font-bold tracking-wider mb-1 uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-1 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;