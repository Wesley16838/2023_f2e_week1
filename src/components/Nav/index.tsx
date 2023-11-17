import { NavOptionsProp, NavProps } from '@/types/components'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/components/nav.module.scss';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Nav = () => {
    const [data, setData] = useState<any>(null);
    const router = useRouter();
    const locale = router.locale;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/_l18n/${locale}.json`);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [locale]);
    return <div className={style['nav-wrapper']}>
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