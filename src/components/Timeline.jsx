import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const TimelineItem = ({ item, type, index }) => {
    const isEdu = type === 'education';

    return (
        <div className="relative pl-8 sm:pl-32 py-8 group">
            {/* Timeline Base vertical line */}
            <div className="absolute left-[1.15rem] sm:left-12 top-0 bottom-0 w-[2px] bg-white/10 group-last:bottom-auto group-last:h-full">
                <div className="absolute top-0 w-full h-full bg-amber-600/50 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-out"></div>
            </div>

            {/* Connecting Dot */}
            <div className="absolute left-[0.6rem] sm:left-[2.5rem] top-12 w-5 h-5 rounded-full bg-[#0c0a09] border-2 border-amber-300 z-10 transition-shadow duration-500 group-hover:shadow-[0_0_15px_#fcd34dcc] group-hover:bg-amber-300">
            </div>

            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 sm:p-8 hover:border-amber-600/30 transition-colors relative"
            >
                <span className="inline-block px-3 py-1 bg-amber-600/10 text-amber-300 text-xs font-bold rounded-md mb-4 border border-amber-600/20">
                    {item.date}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {item.title}
                </h3>
                <h4 className="text-md font-medium text-slate-400 mb-4">
                    {isEdu ? item.institution : item.company}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {item.details || item.description}
                </p>
            </motion.div>
        </div>
    );
};

const Timeline = () => {
    const { education, experience } = PORTFOLIO_DATA;

    return (
        <section id="timeline" className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                        Journey & Experience
                    </h2>
                    <div className="w-16 h-1 bg-amber-300 rounded-full mb-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 relative w-full max-w-5xl mx-auto">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 pl-8 sm:pl-32 flex items-center">
                            <span className="w-2 h-2 rounded-full bg-amber-300 mr-3 hidden sm:block"></span>
                            Experience
                        </h3>
                        {experience.map((item, index) => (
                            <TimelineItem key={`exp-${item.id}`} item={item} type="experience" index={index} />
                        ))}
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 pl-8 sm:pl-32 flex items-center mt-12 lg:mt-0">
                            <span className="w-2 h-2 rounded-full bg-purple-400 mr-3 hidden sm:block"></span>
                            Education
                        </h3>
                        {education.map((item, index) => (
                            <TimelineItem key={`edu-${item.id}`} item={item} type="education" index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
