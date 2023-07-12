import { stylesForButton } from '../inlineStyles'
import { SearchBar, icon, useState, useRef, logo, Logo, Notify, validateEmail, Companies, setTimeout } from './imports'
import { P } from '../components/standardTexts'
import { joinClasses } from '../tools/tools'
import buttoArrow from '../header/images-for-header/headerButtonArrow.svg'
import { buttonWithIcon } from '../types'

export default function HeaderLeftSide() {
    const placeeHolderText = "Search for the location you want!"
    const props: buttonWithIcon = {
        icon: buttoArrow,
        isIconOnTheLeft: false,
        text: 'search',
        textClass: 'searchButtonText',
        iconClass: 'searchButtonIcon',
        buttonClass: joinClasses('greenButton', 'searchBoxButton'),
        styles: { ...stylesForButton },
        handleClick: () => 1,
        iconStyles: { width: 24, height: 24 }
    }
    return (
        <div className="headerLeftSide">
            <Logo text="Hounter" logoImage={logo} />
            <div className="headerLeftCaption">
                <h1 className="headerLeftCaptionText"> Find The Place To Live
                    <span className="headerTransparent"> Your Dreams</span> Easily Here
                </h1>
                <P additionalClass='headerDescription' text='Everything you need about finding your place to live will be here, where it will be easier for you' />
            </div>
            <SearchBar buttonProps={props} placeHolder={placeeHolderText} icon={icon} styles={{}} inputRef={null} />
            <Companies />
        </div>)
}