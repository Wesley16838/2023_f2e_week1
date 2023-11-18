import List from "@/components/List";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";
import styles from '@/styles/pages/events.module.scss'
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const EventsPage = () => {
    const router = useRouter();
    const locale = router.locale;
    const { data } = useFetch(`/_l18n/${locale}.json`)
    const { data: eventData } = useFetch(`/_l18n/events.${locale}.json`)
    return <div className={styles["eventpage-wrapper"]}>
        <Nav data={data} />
        <div className={styles["event-banner"]}></div>
        <div className={styles["event-wrapper"]}>
            <h2></h2>
            {
                <List data={eventData} title={data && data.homepage.eventListTitle} isFullType={true} />

            }
        </div>
        <Footer data={data} />
    </div>
}

export default EventsPage;