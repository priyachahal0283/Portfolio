import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

const Projects = () => {
    const { projects } = PORTFOLIO_DATA;
    const [filter, setFilter] = useState('All');

    // Extract unique tech choices for filters (optional customization)
    const filters = ['All', 'React.js', 'Python', 'PHP'];

    const filteredProjects = projects.filter(p =>
        filter === 'All' ? true : p.tech.includes(filter)
    );

    return (
        <section id="projects" className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                        Featured Work
                    </h2>
                    <div className="w-16 h-1 bg-amber-300 rounded-full mb-6"></div>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        Real-world projects showcasing problem-solving and full-stack development.
                    </p>
                </div>

                {/* Filter Bar */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === f
                                ? 'bg-amber-600 text-[#0c0a09] shadow-[0_0_15px_#fcd34d80]'
                                : 'glass-btn border-white/10 text-slate-300 hover:border-amber-600/50'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="space-y-16">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
                        >
                            {/* Project Image */}
                            <div className="w-full lg:w-1/2 relative">
                                <div className="absolute inset-0 bg-amber-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="relative glass-card overflow-hidden rounded-2xl border-white/10 group-hover:border-amber-600/50 transition-colors duration-500">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                                        <a href={project.liveLink} className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-amber-600 hover:text-[#0c0a09] hover:scale-110 transition-all">
                                            <FiExternalLink size={24} />
                                        </a>
                                        <a href={project.githubLink} className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-amber-600 hover:text-[#0c0a09] hover:scale-110 transition-all">
                                            <FiGithub size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h3 className="text-3xl font-bold text-white group-hover:text-amber-300 transition-colors">
                                    {project.title}
                                </h3>

                                <div className="glass-card p-6 border-white/5 space-y-4">
                                    <div>
                                        <h4 className="flex items-center text-sm font-bold text-amber-300 uppercase tracking-wider mb-2">
                                            <FiArrowRight className="mr-2" /> Overview
                                        </h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-[#0c0a09] border border-white/10 text-slate-300 text-xs font-semibold rounded-md"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
