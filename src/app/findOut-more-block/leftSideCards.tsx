import Image from "next/image"
import Cards from "../components/cards"
import clock from './images/ic_round-access-time.svg'


export default function leftCards(array: any[]) {
    const leftSide: any[] = []
    array.forEach((e, i) => {
        const isLast: boolean = array.length - 1 === i;
        leftSide.push((
            <div key={e.id} className={isLast ? 'contentRight' : 'contentLeft'}>
                <Image className={isLast ? 'contentRightImageHouse' : 'contentLeftImageHouse'} alt="1"
                    src={isLast ? e.largeImage.src : e.imageLeft.src} width={isLast ? e.largeImage.width : e.imageLeft.width} height={isLast ? e.largeImage.width : e.imageLeft.width} />
                <div className="contentLeftInfo">
                    <Cards descClass="contentLeftDesc" desc={e.userName} head="" headClass=""
                        textContainerClassName="contentLeftText" cardImageClass="contentLeftImage"
                        containerClassName={`contentLeftAvatar ${isLast && 'rightContentContainer'}`} image={e.userAvatar} />
                    <p style={{ marginTop: '12px' }} className="contentLeftDescription">{e.text}</p>
                    {isLast && <p className="contentRightComment">{e.comment}</p>}
                    <div style={{ marginTop: '16px' }} className="contentLeftTime">
                        <Image className="clock" src={clock} alt="9" width={clock.width} height={clock.height} />
                        <p className="time">{e.timeToRead} min read | {e.date}</p>
                    </div>
                </div>
            </div>
        ))
    })

    return (
        <div className="findOutMoreContentContainer">
            <div className="findOutMoreContentLeft">{leftSide}</div>
            <div className="findOutMoreContentRight">{leftSide.pop()}</div>
        </div>
    )
}