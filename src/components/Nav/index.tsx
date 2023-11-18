import { NavOptionsProp, NavProps } from '@/types/components'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/components/nav.module.scss';
import { useEffect, useState } from 'react';

const Nav = ({ data }: NavProps) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return <div className={`${style['nav-wrapper']} ${scrolled ? style['scrolled'] : ""}`}>
        <Image src="/assets/icons/logo.svg" width={38} height={54} alt="Logo" />
        <ul>
            {
                data && data.global.nav.map((option: NavOptionsProp) => {
                    return <li key={option.name}><Link href={option.routeName}>{option.name}</Link></li>
                })
            }
        </ul>

    </div>
}

export default Nav