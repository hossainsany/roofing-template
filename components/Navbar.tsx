'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { label: 'Home', href: '/' },
    { label: 'Our Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className='bg-transparent sticky top-0 left-0 w-full z-50 mb-[-68px]'>
            <div className='container mx-auto flex justify-between items-center py-5 px-4 xl:px-0'>
                <div className=''>
                    <Link
                        href='/'
                        className='text-xl text-primary hover:text-accent font-bold transition-all'
                    >
                        YourLogo
                    </Link>
                </div>
                <ul className='flex justify-between items-center'>
                    {links.map((link) => (
                        <li
                            key={link.label}
                            className={`ml-6 text-primary hover:text-accent font-semibold transition-all ${
                                pathname === link.href ? 'text-accent' : ''
                            }`}
                        >
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
