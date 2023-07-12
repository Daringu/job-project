
import Image from 'next/image'
import ButtonWithIcon from './ButtonWithIcon'
import { buttonWithIcon, searchBar } from '../types'

import { useState } from 'react'




export default function SearchBar({ icon, styles, placeHolder, inputRef, buttonProps }: searchBar) {
    const [isFocused, setFocuse] = useState(false)
    const handleFocus = () => {
        setFocuse(true)
    }
    const handleBlur = () => {
        setFocuse(false)
    }
    return (
        <div style={{ ...styles }} className={`searchBoxWrapper ${isFocused && 'active'}`}>
            <div className="wrapper">
                <div className="SearchBoxIcon">
                    <Image width={icon.width} height={icon.height} src={icon.src} alt="icon" />
                </div>
                <div className="searchBoxInputContainer">
                    <input ref={inputRef} onBlur={handleBlur} onFocus={handleFocus} placeholder={placeHolder} className="searchBoxInput" type="text" />
                </div>
            </div>
            <ButtonWithIcon {...buttonProps} />
        </div>
    )
}

