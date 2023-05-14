import company1 from './images-for-header/company-icons/traveloka_logo_2.png'
import company2 from './images-for-header/company-icons/traveloka_logo_3.png'
import company3 from './images-for-header/company-icons/traveloka_logo_4.png'
import company4 from './images-for-header/company-icons/traveloka_logo_5.png'
import Image from "next/image"
const companies=[{element:company1,id:1},{element:company2,id:2},{element:company3,id:3},{element:company4,id:4}]

export default function Companies() {
    const comp=companies.map((e:any,i)=>{
        return (<div key={e.id} className="companiesImageContainer">
            <Image height={e.element.height} alt='company'width={e.element.width} src={e.element.src}/>
        </div> )
    })
    return <div style={{display:'flex',flexDirection:'column'}}>
        <p className="partner">Our Partnership </p>
        <div style={{display:'flex',gap:'32px',alignItems:'center'}} className="companiesContainer">{comp}</div>
        </div> 
}