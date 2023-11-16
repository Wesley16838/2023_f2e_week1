import { NavOptionsProp, NavProps } from '@/types/components'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/components/nav.module.scss';

const Nav = ({ options }: NavProps) => {
    return <div className={style['nav-wrapper']}>
        <Image src="/assets/icons/logo.svg" width={38} height={54} alt="Logo" />
        <ul>
            {
                options.map((option: NavOptionsProp) => {
                    return <li key={option.name}><Link href={option.routeName}>{option.name}</Link></li>
                })
            }
        </ul>

    </div>
}

export default Nav