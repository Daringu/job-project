import ButtonWithIcon from "@/app/components/ButtonWithIcon"
import arrow from '../images-for-header/headerButtonArrow.svg'

export default function Menu({ menu, handleClick, isDown }: { menu: any, handleClick: any, isDown: boolean }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="unfold">
            <ButtonWithIcon iconStyles={{ width: 18, height: 18, transform: isDown ? 'rotate(90deg)' : 'rotate(0deg)' }} iconClass="navBarArrow" textClass="navButtonText" buttonClass="navButton"
                handleClick={handleClick} styles={{ display: 'flex', alignItems: 'center', gap: '10px' }} icon={arrow} isIconOnTheLeft={false} text="Property" />
            <div ref={menu} style={{ display: 'flex', flexDirection: 'column', gap: '10px', }} className="menu">
                <ButtonWithIcon iconStyles={{}} iconClass="" textClass="navButtonText" buttonClass="navButton"
                    handleClick={() => 1} styles={{}} icon={null} isIconOnTheLeft={false} text="House" />
                <ButtonWithIcon iconStyles={{}} iconClass="" textClass="navButtonText" buttonClass="navButton"
                    handleClick={() => 1} styles={{}} icon={null} isIconOnTheLeft={false} text="Villa" />
                <ButtonWithIcon iconStyles={{}} iconClass="" textClass="navButtonText" buttonClass="navButton"
                    handleClick={() => 1} styles={{}} icon={null} isIconOnTheLeft={false} text="Apartment" />
            </div>
        </div>

    )
}