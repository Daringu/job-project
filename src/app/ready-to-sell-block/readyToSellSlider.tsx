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
import SideNumber from './sideNumber'
import Cards from '../components/cards'
import { LargeHeader, P } from '../components/standardTexts'
import { joinClasses } from '../tools/tools'

export default function readyToSellSlides(array: any[], handleClick: any) {
    const toReturn = array.map((e: any, i: number) => {
        return (
            <div style={{ display: 'flex', gap: '148px', flexShrink: 0, }} key={i}>
                <div className='readyTosellSlideContainer'>
                    <Mention classs={''} styles={{ display: 'flex', alignItems: 'center', gap: '8px' }} text='Ready to Sell!' />
                    <div className='readyTOSellSLideInfo'>
                        <LargeHeader additionalClass='' text='Let’s tour and see our house!' />
                        <P additionalClass='' text='Houses recommended by our partners that have been curated to become the home of your dreams!' />
                        <p className="readyTOSellDetails">
                            House Detail
                        </p>
                        <div style={{ maxWidth: '440px', }} className="readyToSellSlideNumbers">
                            <div className='sideNumbers'>
                                <SideNumber text={e.bedrooms.text} quantity={e.bedrooms.quantity} image={bed} />
                                <SideNumber text={e.bathrooms.text} quantity={e.bathrooms.quality} image={bath} />
                            </div>
                            <div className='sideNumbers'>
                                <SideNumber text={e.carspots.text} quantity={e.carspots.quantity} image={garrage} />
                                <SideNumber text={e.floors.text} quantity={e.floors.quantity} image={stairs} />
                            </div>
                        </div>
                        <div className="sellerInfo">
                            <Cards textContainerClassName='sellerName' cardImageClass='sellerAvatar' image={stairs} containerClassName='sellerCard'
                                head={e.nameOfTheBitch} desc={e.rank} descClass='sellerRank' headClass='sellerNameText' />
                            <ButtonWithIcon styles={{}}
                                handleClick={() => 1}
                                buttonClass={joinClasses('greenButton', 'phoneButton')}
                                isIconOnTheLeft={true}
                                icon={phone} text='Contact Now'
                                iconClass='phone' iconStyles={{}}
                                textClass='phoneText' />
                        </div>
                    </div>
                </div>
                <div className="readyToSellPicturesContainer">
                    <iframe onClick={handleClick} src="https://www.youtube.com/embed/tgbNymZ7vqY" width='488px' height='416px'>
                    </iframe>
                    <div className='imagesContainer'>
                        <Image data-index='0' onClick={handleClick} width={296} height={168} src={biggerPicture.src} alt='1' />
                        <Image data-index='1' onClick={handleClick} width={96} height={80} alt='1' src={picture.src} />
                        <Image data-index='2' onClick={handleClick} width={96} height={80} alt='1' src={picture.src} />
                    </div>
                </div>
            </div>

        )
    })
    return toReturn
}