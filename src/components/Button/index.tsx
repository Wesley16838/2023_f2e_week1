import { ButtonProps } from '../../types/components';
import styles from '@/styles/components/button.module.scss'
import { ButtonTheme, Locale } from '@/constants/enum';
import { useLocaleContext } from '@/context/localeProvider';

const langs = new Map([
    ["English", Locale.enUS],
    ["中文", Locale.zhTW]
]);

const Button = ({ name, onClick, type, buttonType }: ButtonProps) => {
    const { currentLocale } = useLocaleContext()
    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        if (onClick) onClick()
    }

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
            e.preventDefault();
            if (onClick) onClick()
        }
    }
    return <button className={`${styles[type]} ${type === ButtonTheme.Text ? currentLocale === langs.get(name) ? styles["activate"] : "" : ""}`} type={buttonType ? buttonType : "button"} onClick={(e) => handleOnClick(e)} onKeyDown={(e) => handleOnKeyDown(e)}>{name}</button>
}

export default Button