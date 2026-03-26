import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FiDownload, FiArrowRight, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';
import profile from "../assets/profile.jpg";

const Hero = () => {
    const { name, role, tagline } = PORTFOLIO_DATA.personal;
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-28 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">

                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  

                    <div className="space-y-4">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                            Hi, I'm <br />
                            <span className="text-white">{name}</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl font-medium text-amber-300 uppercase tracking-widest">
                            {role}
                        </h2>
                    </div>

                    <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
                        {tagline} I specialize in building high-performance web applications with modern technologies.
                    </p>

                    <div className="flex flex-wrap gap-5 pt-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold beige-btn"
                        >
                            View Projects <FiArrowRight className="ml-2" />
                        </Link>
                        <button
                            onClick={() => setIsPreviewOpen(true)}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium glass-btn"
                        >
                            <FiDownload className="mr-2" /> View Resume
                        </button>
                    </div>

                    {isPreviewOpen && (
                        <div className="fixed inset-0 z-50 bg-black/90">
                            <button
                                onClick={() => setIsPreviewOpen(false)}
                                className="absolute top-4 right-4 z-20 inline-flex items-center justify-center p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
                                aria-label="Close resume preview"
                            >
                                <FiX size={24} />
                            </button>

                            <iframe
                                src="/resume.pdf"
                                title="Resume Preview"
                                className="absolute inset-0 w-full h-full border-0 bg-white"
                            />

                            <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex items-center gap-3">
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400"
                                >
                                    Download PDF
                                </a>
                                <button
                                    onClick={() => setIsPreviewOpen(false)}
                                    className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-slate-800 text-white hover:bg-slate-700"
                                >
                                    Close Preview
                                </button>
                            </div>
                        </div>
                    )}
                </motion.div>

                <motion.div
                    className="relative lg:h-[600px] flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {/* Decorative rings / glow behind image */}
                    <div className="absolute inset-0 bg-amber-600/20 rounded-full blur-3xl scale-75 animate-pulse"></div>

                    <div className="relative w-72 h-72 sm:w-[26rem] sm:h-[26rem] rounded-2xl overflow-hidden glass-card p-2 border-amber-600/30">
                        <img
                            src={profile}
                            alt={name}
                            className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-2 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
                    </div>

                    
                    
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
