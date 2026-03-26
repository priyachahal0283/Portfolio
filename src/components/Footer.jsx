import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { name } = PORTFOLIO_DATA.personal;

    return (
        <footer className="border-t border-white/10 bg-[#0c0a09]">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between sm:flex-row gap-4">
                <div className="text-xl font-bold text-white flex items-center">
                    {name}<span className="text-amber-300 mb-1 ml-0.5 animate-pulse"></span>
                </div>

                <p className="text-sm text-slate-400 text-center">
                    &copy; {currentYear} {name}. All rights reserved.
                </p>

                <p className="text-xs font-mono text-slate-500 opacity-70">
                    Designed with Cyan & Glass
                </p>
            </div>
        </footer>
    );
};

export default Footer;
