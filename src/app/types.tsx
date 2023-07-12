import { type } from "os";

interface buttonWithIcon {
    styles: object,
    isIconOnTheLeft: boolean,
    text: string,
    icon: any,
    iconClass: string,
    textClass: string,
    buttonClass: string,
    handleClick: any,
    iconStyles: any,
}

interface searchBar {
    icon: any,
    styles: object,
    placeHolder: string,
    inputRef: any,
    buttonProps: any
}
interface card {
    image: any,
    containerClassName: string,
    textContainerClassName: string,
    headClass: string,
    descClass: string,
    head: string,
    desc: string,
    cardImageClass: string
}

export type { buttonWithIcon, searchBar, card }