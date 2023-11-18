import { ListProp } from "@/types/components";
import { EventProp } from "@/types/global";
import Image from 'next/image'
import style from '@/styles/components/list.module.scss'

const List = ({ data, title, isFullType }: ListProp) => {
    return <>
        <h2>{title && title}</h2>
        {data && data.map((event: EventProp, index: number) => {
            return <div key={event.title} className={style['list-wrapper']} style={{ marginTop: index == 0 ? 24 : 0 }}>
                <div className={style['list-container']}>
                    <Image src={isFullType ? event.fullAsset : event.asset} width={isFullType ? 322 : 100} height={isFullType ? 221 : 100} objectFit="contain" alt={event.title} />
                    <div>
                        <h3 className="primary">{event.date}</h3>
                        <h5>{event.title}</h5>
                        <p className="body">{isFullType ? event.fullDescription : event.description}</p>
                    </div>
                </div>
                {index < data.length - 1 && <div className={style["line"]}></div>}
            </div>
        })}
    </>
}

export default List;