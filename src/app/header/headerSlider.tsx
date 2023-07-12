import Cards from "../components/cards"

export default function HeaderSldier({ array, styles }: { array: any[], styles: any }) {
    const toRender = array.map((e, i) => {
        return <Cards cardImageClass="" image={e.src} key={e.id} headClass="cardHead" containerClassName="cardsContainer" textContainerClassName="cardText" descClass="cardDescription" desc={e.desc} head={e.head} />
    })
    return (
        <div style={{ position: 'relative', overflow: 'hidden', display: 'flex' }} className="sliderContainerOverFlow">
            <div style={{ position: 'relative', transform: `translateX(${styles.left}%)` }} className="sliderContainer">
                {toRender}
            </div>
        </div>
    )
}