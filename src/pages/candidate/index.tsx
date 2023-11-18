import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import useFetch from '@/hooks/useFetch';
import styles from '@/styles/pages/candidate.module.scss'
import { useRouter } from 'next/router';

const CandidatePage = () => {
    const router = useRouter();
    const locale = router.locale;
    const { data } = useFetch(`/_l18n/${locale}.json`)
    return <div className='bg'>
        <Nav data={data} />
        <div className={styles["candidate-wrapper"]}>
            <div className={styles["introduction-wrapper"]}>
                <div className={styles["introduction-container"]}>
                    <h2>{data && data.candidatepage.title}</h2>
                    <p className='body-large'>
                        {data && data.candidatepage.content}
                    </p>
                </div>
            </div>
        </div>
        <Footer data={data} />
    </div>
}

export default CandidatePage;