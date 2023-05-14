import Image from "next/image"

export default function Logo({text,logoImage}:{text:string,logoImage:any}) {
    return (
    <div className="logoContainer">
        <div className="logoImageBox">
            <Image style={{minWidth:'100%'}} width={logoImage.width} height={logoImage.height} src={logoImage.src} alt="logo" />
        </div>
        <div className="logoTextContainer">
            <p className="logoText">
                {text}
            </p>
        </div>
    </div>)
}