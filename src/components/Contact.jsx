import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
    const { personal } = PORTFOLIO_DATA;
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill out all fields.');
            return;
        }
        setStatus('Sending message...');
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setStatus('Message sent successfully!');
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setStatus('');
    };

    return (
        <section id="contact" className="py-20 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                        Let's build something <span className="text-amber-300 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-700">epic.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg mt-4">
                        Drop me a message if you're looking for a developer, have a question, or just want to connect.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)]">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="space-y-6">
                            <div className="glass-card p-6 flex items-start group hover:border-amber-600/30 transition-colors">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#0c0a09] border border-white/10 rounded-xl flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                                    <FiMail size={24} />
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-1">Email</h4>
                                    <a href={`mailto:${personal.email}`} className="text-lg text-white hover:text-amber-300 transition-colors">
                                        {personal.email}
                                    </a>
                                </div>
                            </div>

                            <div className="glass-card p-6 flex items-start group hover:border-amber-600/30 transition-colors">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#0c0a09] border border-white/10 rounded-xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                                    <FiPhone size={24} />
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-1">Phone</h4>
                                    <p className="text-lg text-white">{personal.mobile}</p>
                                </div>
                            </div>

                            <div className="glass-card p-6 flex items-start group hover:border-amber-600/30 transition-colors">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#0c0a09] border border-white/10 rounded-xl flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                                    <FiMapPin size={24} />
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-1">Location</h4>
                                    <p className="text-lg text-white">India 🇮🇳</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4 pt-4">
                            <a href={personal.github} className="p-4 glass-card text-white hover:text-amber-300 hover:border-amber-600/50 transition-colors group">
                                <FiGithub size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href={personal.linkedin} className="p-4 glass-card text-white hover:text-amber-300 hover:border-amber-600/50 transition-colors group">
                                <FiLinkedin size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 glass-card p-8 sm:p-10 relative overflow-hidden"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl border border-white/10 bg-[#1c1917] text-white focus:ring-2 focus:ring-amber-600/50 focus:border-amber-600 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-xl border border-white/10 bg-[#1c1917] text-white focus:ring-2 focus:ring-amber-600/50 focus:border-amber-600 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-xl border border-white/10 bg-[#1c1917] text-white focus:ring-2 focus:ring-amber-600/50 focus:border-amber-600 outline-none transition-all resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            {status && (
                                <p className={`text-sm font-medium ${status.includes('successfully') ? 'text-amber-300' : 'text-red-400'}`}>
                                    {status}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold beige-btn mt-4"
                            >
                                <FiSend className="mr-2" /> Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
