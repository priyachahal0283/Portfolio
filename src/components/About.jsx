import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FiCode, FiLayers, FiDatabase, FiCpu } from 'react-icons/fi';

const About = () => {
    const { about } = PORTFOLIO_DATA.personal;

    const features = [
        { icon: <FiCode className="text-amber-300 w-6 h-6" />, title: "Clean Code", desc: "Writing readable & maintainable code." },
        { icon: <FiLayers className="text-pink-400 w-6 h-6" />, title: "Full Stack", desc: "Bridging frontend to database seamlessly." },
        { icon: <FiDatabase className="text-purple-400 w-6 h-6" />, title: "Data Modeling", desc: "Designing robust MongoDB / SQL schemas." },
        { icon: <FiCpu className="text-green-400 w-6 h-6" />, title: "AI Integration", desc: "Implementing intelligent AI features." },
    ];

    return (
        <section id="about" className="pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Text Side */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                                About Me
                            </h2>
                            <div className="w-16 h-1 bg-amber-300 rounded-full"></div>
                        </div>

                        <p className="text-lg text-slate-400 leading-relaxed">
                            {about}
                        </p>

                        <div className="flex gap-8 border-t border-white/10 pt-8 mt-8">
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2">2<span className="text-amber-300">+</span></h4>
                                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Years Exp.</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2">3<span className="text-amber-300">+</span></h4>
                                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">Projects</p>
                            </div>
                        </div>
                    </div>

                    {/* Cards Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="glass-card p-6 h-full hover:bg-white/10 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-[#0c0a09] border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
