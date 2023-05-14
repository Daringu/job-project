import Image from "next/image"
import {buttonWithIcon} from '../types'


export default function ButtonWithIcon({styles,
    isIconOnTheLeft=false,
    text='any text',
    icon=null,
    iconClass='new icon',
    textClass='new text',
    buttonClass='new button',
    handleClick,
    iconStyles,
}:buttonWithIcon) {
    const reversed={flexDirection:'row-reverse'}
    const adjustedStyles=isIconOnTheLeft?{...styles,...reversed}:{...styles}
   return (
    <button onClick={handleClick} style={{...adjustedStyles}} className={buttonClass}>
        {text!=='nothing'&&<p className={textClass}>{text}</p>}
        {icon&&<Image style={{...iconStyles}} className={iconClass} width={icon.width} height={icon.height} src={icon.src} alt="arrow" />}
    </button>)
}