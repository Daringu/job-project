
import Image from 'next/image'
import buttoArrow from '../header/images-for-header/headerButtonArrow.svg'
import ButtonWithIcon from './ButtonWithIcon'
import {buttonWithIcon, searchBar} from '../types'
import { stylesForButton } from '../inlineStyles'




export default function SearchBar({icon,styles,placeHolder,inputRef,handleBlur,handleFocus,buttonText,handleClick,isFocues}:searchBar) {
    const props:buttonWithIcon={
        icon:buttoArrow,
        isIconOnTheLeft:false,
        text:buttonText,
        textClass:'searchButtonText' ,
        iconClass:'searchButtonIcon' ,
        buttonClass:'searchBoxButton',
        styles:{...stylesForButton},
        handleClick:handleClick,
        iconStyles:{width:24,height:24}
    }
    return (
        <div style={{...styles}} className={`searchBoxWrapper ${isFocues&&'active'}`}>
            <div  className="wrapper">
                <div className="SearchBoxIcon">
                    <Image width={icon.width} height={icon.height} src={icon.src} alt="icon" />
                </div>
                <div className="searchBoxInputContainer">
                    <input ref={inputRef} onBlur={handleBlur} onFocus={handleFocus} placeholder={placeHolder} className="searchBoxInput" type="text" />
                </div>
            </div>
            <ButtonWithIcon {...props} />
        </div>
    )
}

