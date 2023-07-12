import { useCallback, useEffect, useRef, useState } from "react"
import readyToSellSlides from "./readyToSellSlider"
import Modal from "./modal";

const arr: object[] = [{
    bedrooms: {
        quantity: 4,
        text: 'bedroom'
    },
    carspots: {
        quantity: 2,
        text: 'carspot'
    },
    bathrooms: {
        quantity: 1,
        text: 'bathroom'
    },
    floors: {
        quantity: 1,
        text: 'floor'
    },
    nameOfTheBitch: 'Dianne Russell',
    rank: 'Manager Director',
    phoneNumber: '+380988080554',
}, {
    bedrooms: {
        quantity: 4,
        text: 'bedroom'
    },
    carspots: {
        quantity: 2,
        text: 'carspot'
    },
    bathrooms: {
        quantity: 1,
        text: 'bathroom'
    },
    floors: {
        quantity: 1,
        text: 'floor'
    },
    nameOfTheBitch: 'Dianne Russell',
    rank: 'Manager Director',
    phoneNumber: '+380988080554',
}, {
    bedrooms: {
        quantity: 2,
        text: 'bedroom'
    },
    carspots: {
        quantity: 3,
        text: 'carspot'
    },
    bathrooms: {
        quantity: 5,
        text: 'bathroom'
    },
    floors: {
        quantity: 99,
        text: 'floor'
    },
    nameOfTheBitch: 'Dianne Russell',
    rank: 'Manager Director',
    phoneNumber: '+380988080554',
}]

let id: any;

export default function ReadyToSell() {
    const [left, setLeft] = useState(0)
    const [isInside, setInside] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [currentElement, setElement] = useState(null)

    useEffect(() => {
        if (isInside) {
            clearTimeout(id)
            return;
        }
        id = setTimeout(() => {
            if (left <= -((arr.length - 1) * 100)) {
                setLeft(0)
            } else {
                setLeft(left - 100)
            }
        }, 5000)
    }, [isInside, left])
    const mouseEnterHandle = useCallback(() => {
        setInside(true)
    }, [setInside])
    const mouseLeaveHandle = useCallback(() => {
        setInside(false)
    }, [setInside])
    const handleClick = useCallback((e: any) => {
        setElement(e.target)
        setOpen(true)
    }, [setOpen, setElement])

    const handleClose = useCallback((e: any) => {
        if (e.target.nodeName === 'IMG') {
            return;
        }
        setOpen(false)
    }, [setOpen])


    return (
        <div className="readyTosellContainer">
            <div
                onMouseLeave={mouseLeaveHandle}
                onMouseEnter={mouseEnterHandle} style={{ position: 'relative', overflow: 'hidden' }} className="readyToSellWrapper">
                <div style={{ position: 'relative', width: '1200px', display: 'flex', left: `${left}%`, transition: 'all 0.3s ease-out', overflow: 'visible', gap: '120px' }} className="readyToSellOverflow">
                    {readyToSellSlides(arr, handleClick)}
                </div>
                {isOpen && <Modal src={currentElement} handleClose={handleClose} />}
            </div>
        </div>
    )
}