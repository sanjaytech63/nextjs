"use client";
import { useRouter } from 'next/navigation'
import Link from "next/link";

const footerData = {
    logo: 'http://34.229.58.190/SacredSecret%20logo%20color%20white.svg',
    description: 'Securing your digital assets with advanced technology and an unwavering commitment to privacy.',
    quickLinks: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '/blog' }
    ],
    contactInfo: [
        {
            icon: 'lucide-mail',
            label: 'contact@sacredsecret.com'
        },
        {
            icon: 'lucide-phone',
            label: '+1 (555) 123-4567'
        },
        {
            icon: 'lucide-map-pin',
            label: '123 Security Ave, Digital City'
        }
    ]
};

const Footer = () => {
    const router = useRouter()

    return (
        <footer className="bg-[#1a1b26cc] text-white  pt-16 pb-8 px-4">
            <div className="container mx-auto px-6">
                <div className=" flex sm:flex-row flex-col gap-4 items-center justify-between mb-12">
                    {/* Logo and Description */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center -mt-4">
                        <div onClick={() => {
                        router.push('/');
                    }} className="text-2xl font-bold bg-clip-text cursor-pointer text-transparent bg-gradient-to-r from-white to-blue-500">
                    Tech Features
                </div>

                        </div>
                        <p className="text-white leading-relaxed w-[300px]">
                            {footerData.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerData.quickLinks.map((link, index) => (
                                <li
                                    className="hover:text-blue-400"
                                    key={index}
                                >
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-4">
                            {footerData.contactInfo.map((contact, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`lucide ${contact.icon} w-5 h-5 text-accent-100`}
                                    >
                                        {contact.icon === 'lucide-mail' && (
                                            <>
                                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                            </>
                                        )}
                                        {contact.icon === 'lucide-phone' && (
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        )}
                                        {contact.icon === 'lucide-map-pin' && (
                                            <>
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </>
                                        )}
                                    </svg>
                                    <span className="text-white">{contact.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-dark-300 pt-8">
                <p className="text-center text-white">
                    © 2025 SacredSecret. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
