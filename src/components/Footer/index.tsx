import styles from "@/styles/components/footer.module.scss";
import { FooterProps, NavOptionsProp } from "@/types/components";
import Link from "next/link";

const Footer = ({ data }: FooterProps) => {
    return <div className={styles["footer-wrapper"]}>
        <div>
            <p className="footnote">{data && data.global.footer.copyright}</p>
            <div className={styles["contact-wrapper"]}>
                <p className="footnote">{data && data.global.footer.address}</p>
                <p className={styles["tablet-contact"]}>{data && data.global.footer.contact}</p>
                <p className={styles["non-tablet-contact"]}>{data && data.global.footer.tabletContact}</p>
            </div>

        </div>
        <ul>
            {data && data.global.nav.map((option: NavOptionsProp) => {
                return <li key={`footer-${option.name}`}><Link href={option.routeName}>{option.name}</Link></li>
            })}
        </ul>
    </div>
}

export default Footer;