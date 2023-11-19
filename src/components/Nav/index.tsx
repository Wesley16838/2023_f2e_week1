import { NavOptionsProp, NavProps } from '@/types/components'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/components/nav.module.scss';
import { useEffect, useState } from 'react';
import Button from '../Button';
import { ButtonTheme, Locale } from '@/constants/enum';
import { useLocaleContext } from '@/context/localeProvider';
import { useRouter } from 'next/router';

const langs = new Map([
    ["en-US", Locale.enUS],
    ["zh-TW", Locale.zhTW]
]);


const Nav = ({ data }: NavProps) => {
    const [scrolled, setScrolled] = useState(false);
    const { currentLocale, addCurrentLocale } = useLocaleContext()
    const router = useRouter()
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

    useEffect(() => {
        router.locale && addCurrentLocale(langs.get(router.locale) as Locale);
    }, [addCurrentLocale])

    const handleOnSwitchLanguage = (val: Locale) => {
        addCurrentLocale(val)
        router.push(router.pathname, router.pathname, { locale: val })
    }
    return <div className={`${styles['nav-wrapper']} ${scrolled ? styles['scrolled'] : ""}`}>
        <div className={styles['nav-container']}>
            <Image src="/assets/icons/logo.svg" width={38} height={54} alt="Logo" />
            <ul>
                {
                    data && data.global.nav.map((option: NavOptionsProp) => {
                        return <li key={option.name}><Link href={option.routeName} locale={currentLocale}>{option.name}</Link></li>
                    })
                }
            </ul>
        </div>

        <div className={styles['locale-wrapper']}>
            <Image src="/assets/icons/language-switch.svg" width={24} height={24} alt="Logo" />
            <Button type={ButtonTheme.Text} onClick={() => handleOnSwitchLanguage(Locale.enUS)} name={'English'} />
            <div className={styles['vertical-line']}></div>
            <Button type={ButtonTheme.Text} onClick={() => handleOnSwitchLanguage(Locale.zhTW)} name={'中文'} />
        </div>
    </div>
}

export default Nav