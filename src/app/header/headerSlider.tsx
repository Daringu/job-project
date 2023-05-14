export default function HeaderSldier({array,styles}:{array:any[],styles:any}) {
    return (
        <div style={{position:'relative',overflow:'hidden',display:'flex'}} className="sliderContainerOverFlow">
            <div style={{position:'relative',transform: `translateX(${styles.left}%)`}} className="sliderContainer">
                {array}
            </div>
        </div>
    )
}