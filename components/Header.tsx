import Link from 'next/link';
import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

import { FaHamburger } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import useOutsideClick from '../hooks/outsideClick';

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
    const { isOpen, setIsOpen, ref } = useOutsideClick(false);

    const sideNavHeight = () => {
        document.documentElement.style.setProperty(
            '--app-height',
            `${window.innerHeight}px`
        );
    };

    useEffect(() => {
        document.addEventListener('resize', sideNavHeight);
        return () => {
            document.removeEventListener('resize', sideNavHeight);
        };
    }, []);

    return (
        <>
            <header className="mx-auto p-5 md:px-0 md:w-10/12 lg:w-9/12 xl:w-3/4 flex items-center justify-between select-none">
                <Link href="/" passHref>
                    <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-100 cursor-pointer">
                        Courses
                    </h1>
                </Link>
                <FaHamburger
                    size={24}
                    className="sm:hidden cursor-pointer hover:text-[#3073F1]"
                    onClick={() => setIsOpen(!isOpen)}
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

            <Transition
                show={isOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="absolute top-0 left-0 w-screen inset-0 z-10 bg-black opacity-80"></div>
                <div
                    className="absolute top-0 left-0 bg-secondary inset-0 w-3/4 sm:hidden rounded-r-lg flex flex-col z-20"
                    ref={ref}
                >
                    <div className="flex flex-row items-center justify-between w-9/12 mx-auto mt-10">
                        <div className="text-2xl">Courses</div>
                        <div className="text-2xl w-10 h-10 dark:bg-[#18181B] rounded grid place-content-center cursor-pointer">
                            <AiOutlineClose
                                size={32}
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                    </div>
                </div>
            </Transition>
        </>
    );
}
