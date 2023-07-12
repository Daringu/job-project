import { arrow, joinClasses, ButtonWithIcon } from "./imports"

export default function SliderNavigation() {
    return (
        <div className="secondBlockSliderArrows splide__arrows">
            <ButtonWithIcon iconStyles={{ transform: 'rotate(180deg)' }} styles={{}} key={'left'} text="nothing" handleClick={() => 1} isIconOnTheLeft={true}
                icon={arrow} textClass="" iconClass="btnSliderArrowIcon" buttonClass={`${joinClasses('greenButton', 'secondBlockSliderArrow', 'splide__arrow--prev')} '}`} />
            <ButtonWithIcon iconStyles={{}} styles={{}} key={'right'} text="nothing" handleClick={() => 1} isIconOnTheLeft={true}
                icon={arrow} textClass="" iconClass="btnSliderArrowIcon" buttonClass={`${joinClasses('greenButton', 'secondBlockSliderArrow', 'secondBlockSliderArrow', 'splide__arrow--next')} '}`} />
        </div>
    )
}