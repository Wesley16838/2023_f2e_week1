import { ButtonProps } from '../../types/components';
import styles from '@/styles/components/button.module.scss'

const Button = ({ name, onClick, type }: ButtonProps) => {
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

    return <button className={styles[type]} type="button" onClick={(e) => handleOnClick(e)} onKeyDown={(e) => handleOnKeyDown(e)}>{name}</button>
}

export default Button