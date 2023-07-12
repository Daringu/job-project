import SearchBar from "../components/search-bar";
import { LargeHeader } from "../components/standardTexts";
import envelope from './images/eva_email-fill.svg'
import { validateEmail } from "../tools/tools";
import { Notify } from "notiflix";
import { useRef, useState, useCallback, memo } from "react";
import { buttonWithIcon } from "../types";
import { joinClasses } from "../tools/tools";
import ImageSet from "./createImageSet"
import whiteCHair from './images/Rectangle 12 (1).png'
import avatar from './images/Ellipse 6 (1).png'
import castleLike from './images/Rectangle 25.png'
import corner from './images/Rectangle 26.png'



export default function SubscribeBar() {
    const wrapperRef: any = useRef(null)
    const inputRef: any = useRef(null)

    const handleClick = useCallback(
        () => {
            if (!validateEmail(inputRef.current.value, Notify)) {
                wrapperRef.current?.classList.add('blocked')
                setTimeout(() => {
                    if (wrapperRef.current?.classList.contains('blocked')) {
                        wrapperRef.current?.classList.remove('blocked')
                    }
                }, 1500)
            } else {
                Notify.success('Success')
            }
        }, [wrapperRef, inputRef]
    )

    const props: buttonWithIcon = {
        icon: null,
        isIconOnTheLeft: false,
        text: 'Subsribe Now',
        textClass: 'searchButtonText',
        iconClass: 'searchButtonIcon',
        buttonClass: joinClasses('greenButton', 'searchBoxButton'),
        styles: {},
        handleClick: handleClick,
        iconStyles: { width: 24, height: 24 }
    }
    return (
        <div className="subscribeBar">
            <div className="imagesBlock1">
                <ImageSet imageClass2="avatarFromSearch" imageClass1="whiteChair" styles={{ display: 'flex', alignItems: 'center', gap: '78px' }} image2={envelope} image1={whiteCHair} />
                <ImageSet imageClass2="avatarFromSearch" imageClass1="castleLike" styles={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row-reverse', gap: '78px' }} image2={envelope} image1={castleLike} />
            </div>
            <div className="subscribeBarContainer">
                <LargeHeader additionalClass="sbcrhead" text="Subscribe For More Info and update from Hounter" />
                <SearchBar buttonProps={props} styles={{}} placeHolder="Your email here" inputRef={inputRef} icon={envelope} />
            </div>
            <div className="imagesBlock2">
                <ImageSet imageClass2="avatarFromSearch" imageClass1="corner" styles={{ display: 'flex', position: 'relative', top: '-40px', alignItems: 'flex-end', flexDirection: 'column', gap: '28px' }} image2={envelope} image1={corner} />
                <ImageSet imageClass2="castlel" imageClass1="avatarFromSearch" styles={{ display: 'flex', position: 'relative', top: '30px', flexDirection: 'column', gap: '54px' }} image2={whiteCHair} image1={envelope} />
            </div>
        </div>
    )
}