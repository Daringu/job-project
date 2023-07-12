import Logo from "../components/logo"
import logoImage from '../header/images-for-header/logo.svg'
import facebook from './brandico_facebook.svg'
import Image from "next/image"

export default function Footer() {
    return (
        <footer>
            <div className="footerLeft">
                <Logo logoImage={logoImage} text="Hounter" />
                <p style={{ marginTop: '16px' }} className="text400_14px">We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
                <div className="socialMedia">
                    <a href="#"><Image alt="sad" width={facebook.width} height={facebook.height} src={facebook} /></a>
                    <a href="#"><Image alt="sad" width={facebook.width} height={facebook.height} src={facebook} /></a>
                    <a href="#"><Image alt="sad" width={facebook.width} height={facebook.height} src={facebook} /></a>
                </div>
            </div>
            <div className="lists">
                <ul>
                    <li><h2>Property</h2></li>
                    <li><p>House</p></li>
                    <li><p>Apartment</p></li>
                    <li><p>Villa</p></li>
                </ul>
                <ul>
                    <li><h2>Article</h2></li>
                    <li><p>New Article</p></li>
                    <li><p>Popular Article</p></li>
                    <li><p>Most Read</p></li>
                    <li><p>Tips & Tricks</p></li>
                </ul>
                <ul>
                    <li><h2>Contact</h2></li>
                    <li><p>2464 Royal Ln. Mesa, New Jersey 45463</p></li>
                    <li><p>(671) 555-0110</p></li>
                    <li><p>info@hounter.com</p></li>
                </ul>
            </div>
        </footer>
    )
}