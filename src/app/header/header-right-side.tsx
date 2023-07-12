import NavBAr from "./navBar/navBar"
import { useState, useRef, useEffect, useCallback } from "react"
import image from './images-for-header/slidercard.png'
import HeaderSldier from "./headerSlider"


const cardsArr: any[] = [
    {
        src: image,
        head: '1K+ People',
        desc: 'Successfully Getting Home',
        id: 1
    },
    {
        src: image,
        head: '56 Houses',
        desc: 'Sold Monthly',
        id: 2
    },
    {
        src: image,
        head: '1K+ People',
        desc: 'Successfully Getting Home',
        id: 3
    },
    {
        src: image,
        head: '56 Houses',
        desc: 'Sold Monthly',
        id: 4
    },
    {
        src: image,
        head: '56 Houses',
        desc: 'Sold Monthly',
        id: 5
    },
    {
        src: image,
        head: '1K+ People',
        desc: 'Successfully Getting Home',
        id: 6
    },
    {
        src: image,
        head: '56 Houses',
        desc: 'Sold Monthly',
        id: 7
    },
    {
        src: image,
        head: '56 Houses',
        desc: 'Sold Monthly',
        id: 8
    },
    {
        src: image,
        head: '56 Houses',
        desc: 'Sold Monthly',
        id: 9
    },
    {
        src: image,
        head: '56 Houses',
        desc: 'Sold Monthly',
        id: 10
    }
]
export default function HeaderRightSide() {
    const [isDown, setIsDown] = useState(false)
    const [left, setLeft] = useState(0)
    const menu: any = useRef(null)
    const handleClick = useCallback(() => {
        setIsDown(!isDown)
    }, [setIsDown, isDown])
    useEffect(() => {
        if (isDown) {
            menu?.current.classList.add('menuVisible')
        } else {
            menu?.current.classList.remove('menuVisible')
        }
    }, [isDown, menu])
    useEffect(() => {
        setTimeout(() => {
            if (left <= -100) {
                setLeft(0)
                return;
            }
            setLeft(left - 20)
        }, 3000)
    }, [left])
    return (
        <div className="headerRightSide">
            <NavBAr menu={menu} isDown={isDown} handleClick={handleClick} />
            <HeaderSldier array={cardsArr} styles={{ left: left }} />
        </div>)
}