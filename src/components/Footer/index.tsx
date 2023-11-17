import styles from "@/styles/components/footer.module.scss";
import { NavOptionsProp } from "@/types/components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const Footer = () => {
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
    }, []);
    return <div className={styles["footer-wrapper"]}>
        <div>
            <p className="footnote">2023 鬥立翰 版權所有。<br></br>辦公室地址｜毛孩區，毛茸茸大道99號，狗狗大厦99樓　Tel｜(02) 888-5678　Email｜dogoffice@doglihan.tw</p>
        </div>
        <ul>
            {data && data.global.nav.map((option: NavOptionsProp) => {
                return <li key={`footer-${option.name}`}><Link href={option.routeName}>{option.name}</Link></li>
            })}
        </ul>
    </div>
}

export default Footer;