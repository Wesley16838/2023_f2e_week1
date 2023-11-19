import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";
import styles from '@/styles/pages/donations.module.scss'
import { donationOptionProp } from "@/types/global";
import Image from "next/image";
import Button from "@/components/Button";
import { ButtonTheme } from "@/constants/enum";

const DonationsPage = () => {
    const router = useRouter();
    const locale = router.locale;
    const { data } = useFetch(`/_l18n/${locale}.json`)
    return <div className={styles["donationspage-wrapper"]}>
        <Nav data={data} />
        <div className={styles["donations-banner"]}></div>
        <div className={styles["donations-wrapper"]}>
            <h2 className={styles["title"]}>{data && data.donationspage.title}</h2>
            <p className={styles["subtitle"]}>{data && data.donationspage.subtitle}</p>
            <p className={styles["action"]}>{data && data.donationspage.action}</p>
            <div className={styles["option-wrapper"]}>
                {
                    data && data.donationspage.actionOptions.map((option: donationOptionProp, index: number) => {
                        return <div className={styles["option-container"]} key={option.optionName}>
                            <Image src={option.optionAsset} width={88} height={88} alt={option.optionName + 'Icon'} />
                            <h3>{option.optionName}</h3>
                            <div className={styles["option-inner-container"]}>
                                <p>{option.optionAmount}</p>
                                {index !== data.donationspage.actionOptions.length - 1 && <p className={`footnote`}>{data.donationspage.donateNumberPrefix} {Math.floor(Math.random() * 5000)} {data.donationspage.donateNumberPostfix}</p>}
                            </div>
                            <Button onClick={() => { }} name={data.donationspage.donateAction} type={ButtonTheme.SecondaryNormal} />
                        </div>
                    })
                }
            </div>
        </div>
        <Footer data={data} />
    </div>
}

export default DonationsPage;