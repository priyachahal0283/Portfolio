import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const Skills = () => {
    const { skills } = PORTFOLIO_DATA;

    const SkillCategory = ({ title, items }) => (
        <div className="glass-card p-8 group hover:border-amber-600/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-2 rounded-full bg-amber-300 mr-3 hidden sm:block"></span>
                {title}
            </h3>
            <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                    <motion.div
                        key={skill}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="px-4 py-2 bg-[#0c0a09] border border-white/10 rounded-lg text-sm font-medium text-slate-300 shadow-sm cursor-default hover:border-amber-600/50 hover:text-amber-300 transition-colors"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <section id="skills" className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                        Technical Arsenal
                    </h2>
                    <div className="w-16 h-1 bg-amber-300 rounded-full mb-6"></div>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        My toolkit spans frontend, backend, databases, and AI technologies. Constantly learning and evolving with the modern web stack.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <SkillCategory title="Frontend Development" items={skills.frontend} />
                    <SkillCategory title="Backend & Core" items={skills.backend} />
                    <SkillCategory title="Databases & Tools" items={[...skills.database, ...skills.tools]} />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
