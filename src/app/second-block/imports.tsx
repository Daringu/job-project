import Mention from "../components/mention"
import ButtonWithIcon from "../components/ButtonWithIcon"
import apartment from './second-block-images/icons/apartment.svg'
import house from './second-block-images/icons/houseIcon.svg'
import villa from './second-block-images/icons/villaIcon.svg'
import arrow from '../header/images-for-header/headerButtonArrow.svg'
import villaImage from './second-block-images/Imgvilla.png'
import houseImage from './second-block-images/Imghouse.png'
import apartmentImage from './second-block-images/Imgapartment.png'
import commentImage from '../header/images-for-header/slidercard.png'
import { useState, useRef, useEffect, useCallback } from "react"
import slidercards from "./sliderCard"
import apartmentIcon from './second-block-images/icons/apartment.svg'
import houseIcon from './second-block-images/icons/typeHouse.svg'
import villaIcon from './second-block-images/icons/villaIcon.svg'
import wallet from './second-block-images/icons/wallet.svg'
import flame from './second-block-images/icons/flame.svg'
import Image from 'next/image'
import { joinClasses } from "../tools/tools"
import { LargeHeader } from "../components/standardTexts"


export {
    Mention, ButtonWithIcon, apartment, house, villa, arrow, villaImage, houseImage,
    apartmentImage, commentImage, useState, useRef, useEffect, slidercards,
    apartmentIcon, houseIcon, villaIcon, wallet, flame, Image, useCallback, joinClasses, LargeHeader
}