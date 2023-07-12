import { ButtonWithIcon, apartment, house, villa } from "./imports"

export default function SwitchImageCollectionButtons({ currentType, handleClick }: { currentType: any, handleClick: any }) {
        return (
                <div className="buttonsToChooseType">
                        <ButtonWithIcon iconStyles={{}} styles={{}} key={'house'} text="House" handleClick={handleClick('house')} isIconOnTheLeft={true}
                                icon={house} textClass="btnTypeText" iconClass={``} buttonClass={`btnType ${currentType.typeName === 'house' && 'btnTypeActive'}`} />
                        <ButtonWithIcon iconStyles={{}} styles={{}} key={'villa'} text="Villa" handleClick={handleClick('villa')} isIconOnTheLeft={true} icon={villa}
                                textClass="btnTypeText" iconClass={``} buttonClass={`btnType ${currentType.typeName === 'villa' && 'btnTypeActive'}`} />
                        <ButtonWithIcon iconStyles={{}} styles={{}} key={'apartment'} text="Appratment" handleClick={handleClick('apartment')} isIconOnTheLeft={true} icon={apartment}
                                textClass="btnTypeText" iconClass={''} buttonClass={`btnType ${currentType.typeName === 'apartment' && 'btnTypeActive'}`} />
                </div>
        )
}