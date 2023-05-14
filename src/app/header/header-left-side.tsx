
import {SearchBar,icon,useState, useRef,logo,Logo,Notify,validateEmail,Companies,setTimeout} from './imports'


export default function HeaderLeftSide() {
    const [isFocused,setFocuse]=useState(false)
    const wrapperRef:any=useRef(null)
    const inputRef:any=useRef(null)
    const placeeHolderText="Search for the location you want!"

    const handleFocus=()=>{
        setFocuse(true)
    }
    const handleBlur=()=> {
        setFocuse(false)
    }
    const handleClick=()=>{
        if (!validateEmail(inputRef.current.value,Notify)) {
            wrapperRef.current?.classList.add('blocked')
            setTimeout(()=>{
                if (wrapperRef.current?.classList.contains('blocked')) {
                    wrapperRef.current?.classList.remove('blocked')
                }
            },1500)
        }else{
            Notify.success('Success')
        }
    }
    return (
    <div className="headerLeftSide">
        <Logo text="Hounter" logoImage={logo}/>
        <div className="headerLeftCaption">
            <h1 className="headerLeftCaptionText"> Find The Place To Live 
                <span className="headerTransparent"> Your Dreams</span> Easily Here
            </h1>
            <p className="headerDescription">
            Everything you need about finding your place to live will be here, where it will be easier for you
            </p>
        </div>
        <SearchBar buttonText="search" placeHolder={placeeHolderText} handleClick={handleClick}icon={icon} styles={{}} 
        handleFocus={handleFocus} handleBlur={handleBlur} inputRef={inputRef} isFocues={isFocused}/>
        <Companies/>
    </div>)
}