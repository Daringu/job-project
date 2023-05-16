import bath from './images/bath 1.svg'
import bed from './images/bed 1.svg'
import garrage from './images/car-garage 1.svg'
import stairs from './images/stairs-with-handrail 1.svg'
import biggerPicture from './images/biggerPicture.png'
import picture from './images/picture.png'
import phone from './images/fluent_call-20-filled.svg'
import ButtonWithIcon from '../components/ButtonWithIcon'
import Mention from '../components/mention'
import Image from 'next/image'



export default function readyToSellSlides(array:any[],handleClick:any) {
    const toReturn=array.map((e:any,i:number)=>{
        return (
        <div style={{display:'flex',gap:'148px',flexShrink:0}} key={i}>
                <div className='readyTosellSlideContainer'>
                <Mention styles={{display:'flex', alignItems:'center',gap:'8px'}} text='Ready to Sell!'/>
                <div className='readyTOSellSLideInfo'>
                    <h1 className="readyToSellHead">
                    Let’s tour and see our house!
                    </h1>
                    <p className="readyToSellDesc">
                    Houses recommended by our partners that have been curated to become the home of your dreams!
                    </p>
                    <p className="readyTOSellDetails">
                        House Detail
                    </p>
                    <div style={{maxWidth:'440px',}} className="readyToSellSlideNumbers">
                        <div className='sideNumbers'>
                            <div>
                                <Image width={32} height={32} src={bed} alt="1" /> 
                                <p>{e.bedrooms} {e.bedrooms>1?'bedrooms':'bedroom'}</p>
                            </div>
                            <div>
                                <Image width={32} height={32} src={bath} alt="1" />
                                <p>{e.bathrooms}  {e.bathrooms>1?'bathrooms':'bathroom'}</p>
                            </div>
                        </div>
                        <div className='sideNumbers'>
                            <div>
                            <Image width={32} height={32} src={garrage} alt="1" />
                                <p>{e.garrage} {e.garrage>1?'carports':'carport'}</p>
                            </div>
                            <div>
                            <Image width={32} height={32} src={stairs} alt="1" /> 
                                <p>{e.floors} {e.floors>1?'floors':'floor'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="sellerInfo">
                        <Image style={{marginRight:'24px'}} width={56} height={56} alt='2' src={stairs}/>
                        <div style={{marginRight:'58px'}} className="sellerName">
                            <h2 className="sellerNameText">{e.nameOfTheBitch}</h2>
                            <p className="sellerRank">{e.rank}</p>
                        </div>
                        <ButtonWithIcon styles={{}} 
                        handleClick={()=>1} 
                        buttonClass='phoneButton' 
                        isIconOnTheLeft={true} 
                        icon={phone} text='Contact Now' 
                        iconClass='phone' iconStyles={{}} 
                        textClass='phoneText'/>
                    </div>
                </div>
            </div>
            <div  className="readyToSellPicturesContainer">
                <iframe onClick={handleClick} src="https://www.youtube.com/embed/tgbNymZ7vqY" width='488px' height='416px'></iframe>
                <div className='imagesContainer'>
                    <Image data-index='0'  onClick={handleClick} width={296} height={168} src={biggerPicture.src} alt='1'/>
                    <Image data-index='1'  onClick={handleClick} width={96} height={80} alt='1' src={picture.src}/>
                    <Image data-index='2'  onClick={handleClick} width={96} height={80} alt='1' src={picture.src}/>
                </div>
            </div>
        </div>
           
        )
    })
    return toReturn
}