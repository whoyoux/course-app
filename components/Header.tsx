import Link from 'next/link';

import { FaHamburger } from 'react-icons/fa';

const navData = [
    {
        name: 'Main1',
        href: '/',
        label: 'Main'
    },
    {
        name: 'SignIn',
        href: '/signin',
        label: 'Sign in'
    },
    {
        name: 'SignUp',
        href: '/signup',
        label: 'Sign up'
    }
];

export default function Header() {
    return (
        <header className="mx-auto p-5 md:px-0 md:w-10/12 lg:w-9/12 xl:w-3/4 flex items-center justify-between select-none">
            <Link href="/" passHref>
                <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-100 cursor-pointer">
                    Courses
                </h1>
            </Link>
            <FaHamburger
                size={24}
                className="sm:hidden cursor-pointer hover:text-purple-400"
            />
            <ul className="hidden sm:flex flex-row items-center justify-between gap-4 text-xl">
                {navData.map((item) => {
                    return (
                        <Link href={item.href} passHref key={item.name}>
                            <li className="cursor-pointer hover:underline text-black/90 dark:text-white/90 dark:hover:text-white hover:text-black transition">
                                {item.label}
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </header>
    );
}
