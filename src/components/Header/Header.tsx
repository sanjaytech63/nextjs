"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    interface Link {
        label: string;
        href: string;
    }

    const links: Link[] = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '/blog' },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full text-white z-50 bg-[#1a1b26cc] backdrop-blur-md transition-all duration-300 translate-y-0">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                <div className="text-2xl font-bold">
                    <Image
                        src="http://34.229.58.190/SacredSecret%20logo%20color%20white.svg"
                        alt="Logo"
                        width={150}
                        height={150}
                        className="object-cover"
                    />
                </div>

                {/* Hamburger Menu Icon */}
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white"
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex">
                    <ul className="flex space-x-6">
                        {links.map((link, index) => (
                            <li
                                className="hover:text-blue-400  font-bold"
                                key={index}
                            >
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Auth Buttons */}
                <div className="lg:flex items-center hidden  gap-3">
                    <button className="font-bold hover:text-blue-400 hover:text-blue-400 ">
                        Sign In
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-full">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-[#1a1b26cc] backdrop-blur-md absolute inset-x-0  py-4 px-6 z-40">
                    <ul className="flex flex-col items-center space-y-6">
                        {links.map((link, index) => (
                            <li key={index} className="hover:text-blue-400 hover:underline underline-offset-8 decoration-2 font-bold">
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                        <div className="flex flex-col gap-3 items-center mt-4">
                            <button className="font-bold hover:text-blue-400 hover:text-blue-400 hover:underline underline-offset-8 decoration-2">
                                Sign In
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-full">
                                Sign Up
                            </button>
                        </div>
                    </ul>
                </div>
            )}
        </header>
    );
}
