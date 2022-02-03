import { useState, useRef, useEffect } from 'react';

const useOutsideClick = (initialValue: boolean) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialValue);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        if (isOpen) if (e.key === 'Escape') setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        document.addEventListener('keydown', handleKeyPress, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
            document.removeEventListener('keydown', handleKeyPress, true);
        };
    }, [ref]);

    return { isOpen, setIsOpen, ref };
};

export default useOutsideClick;
