import ButtonWithIcon from "../../components/ButtonWithIcon"

import Menu from "./navBarMenu"

export default function NavBAr({ handleClick, menu, isDown }: { handleClick: any, menu: any, isDown: boolean }) {
    return (
        <nav className="headerRightNavBar">
            <nav className="navButtonsContainer">
                <ButtonWithIcon iconStyles={{}} iconClass="" textClass="navButtonText" buttonClass="navButton"
                    handleClick={() => 1} styles={{}} icon={null} isIconOnTheLeft={false} text="About us" />
                <ButtonWithIcon iconStyles={{}} iconClass="" textClass="navButtonText" buttonClass="navButton"
                    handleClick={() => 1} styles={{}} icon={null} isIconOnTheLeft={false} text="Article" />
                <Menu handleClick={handleClick} isDown={isDown} menu={menu} />
            </nav>
            <div className="SignUpButtonContainer">
                <ButtonWithIcon iconStyles={{}} iconClass="" textClass="SignUpText" buttonClass="SignUpButton"
                    handleClick={() => 1} styles={{}} icon={null} isIconOnTheLeft={false} text="Sign Up!" />
            </div>
        </nav>
    )
}