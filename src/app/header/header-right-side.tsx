import ButtonWithIcon from "../components/ButtonWithIcon"
import arrow from './images-for-header/headerButtonArrow.svg'
import { useState, useRef,useEffect} from "react"
import cards from "../components/cards"
import image from './images-for-header/slidercard.png'
import HeaderSldier from "./headerSlider"

const cardsArr:any[]=[
    {
        src:image,
        head:'1K+ People',
        desc:'Successfully Getting Home',
        id:1
    },
    {
        src:image,
        head:'56 Houses',
        desc:'Sold Monthly',
        id:2
    },
    {
        src:image,
        head:'1K+ People',
        desc:'Successfully Getting Home',
        id:3
    },
    {
        src:image,
        head:'56 Houses',
        desc:'Sold Monthly',
        id:4
    },
    {
        src:image,
        head:'56 Houses',
        desc:'Sold Monthly',
        id:5
    },
    {
        src:image,
        head:'1K+ People',
        desc:'Successfully Getting Home',
        id:6
    },
    {
        src:image,
        head:'56 Houses',
        desc:'Sold Monthly',
        id:7
    },  
    {
        src:image,
        head:'56 Houses',
        desc:'Sold Monthly',
        id:8
    },
    {
        src:image,
        head:'56 Houses',
        desc:'Sold Monthly',
        id:9
    },
    {
        src:image,
        head:'56 Houses',
        desc:'Sold Monthly',
        id:10
    }
]
export default function HeaderRightSide() {
    const [isDown,setIsDown]=useState(false)
    const [left,setLeft]=useState(0)
    const menu:any=useRef(null)
    const handleClick=()=>{
        setIsDown(!isDown)
    }
    useEffect(()=>{
        if (isDown) {
            menu?.current.classList.add('menuVisible')
        }else{
            menu?.current.classList.remove('menuVisible')
        }
    },[isDown])
    useEffect(()=>{
        setTimeout(()=>{
            if (left<=-100) {
                setLeft(0)
                return;
            }
            setLeft(left-20)
        },3000)
    },[left])
    return (
    <div className="headerRightSide">
        <nav className="headerRightNavBar">
            <nav className="navButtonsContainer">
                <ButtonWithIcon iconStyles={{}}  iconClass="" textClass="navButtonText" buttonClass="navButton"
                handleClick={()=>1} styles={{}} icon={null} isIconOnTheLeft={false} text="About us"/>
                <ButtonWithIcon iconStyles={{}}  iconClass="" textClass="navButtonText" buttonClass="navButton"
                handleClick={()=>1} styles={{}} icon={null} isIconOnTheLeft={false} text="Article"/>
                <div style={{display:'flex',flexDirection:'column',gap:'10px'}} className="unfold">
                    <ButtonWithIcon iconStyles={{width:18,height:18,transform: isDown?'rotate(90deg)':'rotate(0deg)'}}  iconClass="navBarArrow" textClass="navButtonText" buttonClass="navButton"
                    handleClick={handleClick} styles={{display:'flex',alignItems:'center',gap:'10px'}} icon={arrow} isIconOnTheLeft={false} text="Property"/>
                    <div ref={menu} style={{display:'flex',flexDirection:'column',
                    gap:'10px',}} className="menu">
                        <ButtonWithIcon iconStyles={{}}  iconClass="" textClass="navButtonText" buttonClass="navButton"
                        handleClick={()=>1} styles={{}} icon={null} isIconOnTheLeft={false} text="House"/>
                        <ButtonWithIcon iconStyles={{}}  iconClass="" textClass="navButtonText" buttonClass="navButton"
                        handleClick={()=>1} styles={{}} icon={null} isIconOnTheLeft={false} text="Villa"/>
                        <ButtonWithIcon iconStyles={{}}  iconClass="" textClass="navButtonText" buttonClass="navButton"
                        handleClick={()=>1} styles={{}} icon={null} isIconOnTheLeft={false} text="Apartment"/>
                    </div>
                </div>
            </nav>
            <div className="SignUpButtonContainer">
                <ButtonWithIcon iconStyles={{}}  iconClass="" textClass="SignUpText" buttonClass="SignUpButton"
                handleClick={()=>1} styles={{}} icon={null} isIconOnTheLeft={false} text="Sign Up!"/>
            </div>
        </nav>
        <HeaderSldier styles={{left:left}} array={cards(cardsArr,'cardsContainer',"cardText","cardHead","cardDescriprion")}/>
    </div>)
}