import { type } from "os";

interface buttonWithIcon {
    styles:object,
    isIconOnTheLeft:boolean,
    text:string,
    icon:any,
    iconClass:string,
    textClass:string,
    buttonClass:string,
    handleClick:any,
    iconStyles:any,
}

interface searchBar{
    icon:any,
    styles:object,
    placeHolder:string,
    inputRef:any,
    handleBlur:any,
    handleFocus:any,
    buttonText:string,
    handleClick:any,
    isFocues:boolean
}


export type {buttonWithIcon, searchBar}