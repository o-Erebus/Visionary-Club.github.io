import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../constants/navigation';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from "../../hooks/DarkMode/DarkMode.jsx";

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <nav className={` fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-transparent' : 'bg-transparent'} ${mobileMenuOpen? 'backdrop-blur-sm':''}`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-4">
                        <div className="bg-cyan-500 text-black px-4 py-2 font-mono font-bold">VC</div>
                        <span className={`font-mono hidden md:block ${isDark ? 'text-cyan-500' : 'text-black'}`}>
                            VISIONARY CLUB
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map(([label, href]) => (
                            <Link
                                key={label}
                                to={href}
                                className={`font-mono  transition-colors relative group ${
                                    isDark ? 'text-cyan-500 hover:text-[#D6D600]' : 'text-black hover:text-black'
                                }`}
                            >
                                {label}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDark? 'bg-[#D6D600]':'bg-[#FFBF00]'} group-hover:w-full transition-all`}></span>
                            </Link>
                        ))}

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-0 ${isDark? "hover:border-white": "hover:border-black"}`}
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-cyan-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-black" />
                            )}
                        </button>

                        <button className={`px-4 py-2 font-mono font-bold leading-none transition-colors ${
                            isDark
                                ? 'bg-[#B6B600] text-black hover:bg-cyan-500'
                                : 'bg-yellow-300 text-black hover:bg-[#E6E600]'
                        }`}>
                            INITIALIZE
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-0"
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-cyan-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-black" />
                            )}
                        </button>
                        <button
                            className={`border p-2 w-[10vw] min-w-[4rem] font-mono focus:ring-0 focus:outline-none transition-colors ${
                                isDark
                                    ? 'text-cyan-500 border-cyan-500 hover:border-cyan-500'
                                    : 'text-black border-black hover:border-black'
                            }`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? 'CLOSE' : 'MENU'}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div
                        className={`lg:hidden py-4  space-y-2 backdrop-blur-md ${
                            isDark ? 'bg-[#101010]/10 -mx-4 px-4' : 'bg-white/10 -mx-4 px-4'
                        }`}
                    >
                        {navLinks.map(([label, href]) => (
                            <Link
                                key={label}
                                to={href}
                                className={`block font-mono py-2 hover:text-[#FFFF00] transition-colors ${
                                    isDark ? 'text-cyan-500' : 'text-black'
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                &gt; {label}
                            </Link>
                        ))}
                        <button
                            className={`w-full px-4 py-2 font-mono font-bold mt-4 ${
                                isDark
                                    ? 'bg-[#B6B600] text-black'
                                    : 'bg-yellow-300 text-black hover:bg-[#E6E600]'
                            }`}
                        >
                            INITIALIZE
                        </button>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;