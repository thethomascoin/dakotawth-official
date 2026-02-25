import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Disc3, User, Mail } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', icon: null },
        { name: 'Music', href: '#music', icon: <Disc3 size={18} /> },
        { name: 'About', href: '#about', icon: <User size={18} /> },
        { name: 'Connect', href: '#connect', icon: <Mail size={18} /> }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass border-b border-zinc-800' : 'py-6 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <a href="#home" className="text-2xl font-black tracking-tighter text-white z-50 relative uppercase w-[200px]">
                        Dakota<span className="text-zinc-500 font-light lowercase text-lg relative -top-1">withthehat</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-2 group"
                            >
                                {link.icon && <span className="text-zinc-500 group-hover:text-rose-400 transition-colors">{link.icon}</span>}
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-zinc-300 hover:text-white z-50 relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 0.2 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-4xl font-light text-zinc-200 hover:text-white tracking-tight flex items-center gap-4 group"
                            >
                                {link.icon && <span className="text-zinc-500 group-hover:text-rose-400">{link.icon}</span>}
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
