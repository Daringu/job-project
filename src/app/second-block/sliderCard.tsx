import { apartmentIcon, houseIcon, villaIcon, wallet, flame, Image } from './imports'
import Cards from '../components/cards'
import { SplideSlide } from '@splidejs/react-splide'

export default function slidercards(array: any[], accTypeName: string) {
    const typeAcc: any = {
        popular: {
            textColor: '#EF4444',
            icon: flame,
            backGroundColor: '#FEE2E2',
            text: 'Popular'
        },
        new: {
            textColor: '#1D4ED8',
            icon: {
                house: houseIcon,
                villa: villaIcon,
                apartment: apartmentIcon
            },
            text: {
                house: 'New House',
                villa: 'New Villa',
                apartment: 'New Apratment'
            },
            backGroundColor: '#DBEAFE'
        },
        best: {
            textColor: '#047857',
            icon: wallet,
            backGroundColor: '#D1FAE5',
            text: 'Best Deals'
        }
    }
    const toReturn = array.map((e, i) => {
        return (
            <SplideSlide key={e.id}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }} className="sliderCardContainer">
                    <div style={{ background: `url(${e.src})`, width: '340px', height: '382px', display: 'flex', alignItems: 'flex-end', borderRadius: '24px' }} className="sliderPicture">
                        {
                            e.accType === 'new' ? (
                                <div style={{ display: 'flex', gap: '10px', backgroundColor: typeAcc.new.backGroundColor, padding: '8px 16px', borderRadius: '32px', marginLeft: '16px', marginBottom: '16px' }}>
                                    <Image style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(65%) saturate(3386%) hue-rotate(217deg) brightness(90%) contrast(88%)' }}
                                        className='secondSliderImage' src={typeAcc.new.icon[accTypeName].src} width={16} height={16} alt="1" />
                                    <p className='secondSliderText' style={{ color: typeAcc.new.textColor }}>{typeAcc.new.text[accTypeName]}</p>
                                </div>
                            ) : (<div style={{ display: 'flex', gap: '10px', backgroundColor: typeAcc[e.accType].backGroundColor, padding: '8px 16px', borderRadius: '32px', marginLeft: '16px', marginBottom: '16px' }}>
                                <Image className='secondSliderImage' src={typeAcc[e.accType].icon.src} width={16} height={16} alt="1" />
                                <p className='secondSliderText' style={{ color: typeAcc[e.accType].textColor }}>{typeAcc[e.accType].text}</p>
                            </div>)
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} className='secondSliderInfo'>
                        <h1 className='secondSLiderNameHead'>{e.accName}</h1>
                        <p className="secondSliderPrice">{e.accPrice}</p>
                    </div>
                    <Cards cardImageClass='' textContainerClassName='secondSliderTextContainer' headClass='secondSliderTextCommentName' head={e.accComment.commentName} desc={e.accComment.commentDesc} descClass='secondSliderTextCommentDesc' image={e.accComment.commentImage} containerClassName='secondSlideerComment' />
                </div>
            </SplideSlide>
        )
    })
    return toReturn
}