import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { FullPage, Slide } from 'react-full-page';
import useFetch from '@/hooks/useFetch';
import styles from '@/styles/pages/policy.module.scss'
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

class CustomControls extends React.Component {
    static defaultProps = {
        className: 'full-page-controls',
    }

    render() {
        const {
            getCurrentSlideIndex, slidesCount, style, className,
        } = this.props;
        const currentSlideIndex = getCurrentSlideIndex();
        if (getCurrentSlideIndex() === -1) this.props.onNext()
        return (
            <div className={styles[className]} style={style}>
                <button
                    type="button"
                    disabled={currentSlideIndex === 0}
                    onClick={this.props.onPrev}
                >
                    <Image src="/assets/icons/up-arrow.svg" alt="Go Up Button" width={20} height={20} />
                </button>
                <p>{currentSlideIndex + 1}/{slidesCount}</p>
                <button
                    type="button"
                    disabled={currentSlideIndex === slidesCount - 1}
                    onClick={this.props.onNext}
                >
                    <Image src="/assets/icons/down-arrow.svg" alt="Go Down Button" width={20} height={20} />
                </button>
            </div>
        );
    }
}

const PolicyPage = () => {
    const router = useRouter();
    const locale = router.locale;
    const { data } = useFetch(`/_l18n/${locale}.json`)
    const { data: issueData } = useFetch(`/_l18n/issues.${locale}.json`)
    const baseStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative'
    };

    return <FullPage controls={CustomControls}>
        <Nav data={data} />
        {
            issueData && issueData.map(
                (issue, index) => {
                    return <Slide style={{
                        ...baseStyle,
                    }} key={issue.name}>
                        <div className={styles["policy-picture-container"]}>
                            <Image src={issue.fullAsset} width={0}
                                height={0} alt={issue.name} layout="fill"
                                objectFit="cover" />
                            <Image src="/assets/icons/policy-slogan.svg" width={192} height={211} alt={'policy slogan'} style={{ position: 'absolute', left: 40, bottom: 146, zIndex: 2 }} />
                        </div>
                        <div className={styles["policy-container"]}>
                            <h4>{data && data.policypage.policy} {index + 1}</h4>
                            <h2>{issue.name}</h2>
                            <ul>
                                {
                                    issue.content.map(item => {
                                        return <div className={styles["list-item"]} key={item}><Image src="/assets/icons/blue-dot.svg" width={12} height={12} alt="blue dot" /><li>{item}</li></div>
                                    })
                                }
                            </ul>
                            <Image src={issue.backgroundImage.asset} width={issue.backgroundImage.size.width} height={issue.backgroundImage.size.height} alt={'policy slogan'} style={{ position: 'absolute', right: issue.backgroundImage.position.right, top: issue.backgroundImage.position.top }} />
                        </div>

                    </Slide>
                }
            )
        }
        <div className={styles["footer-container"]}>
            <Footer data={data} />
        </div>
    </FullPage>
}

export default PolicyPage;