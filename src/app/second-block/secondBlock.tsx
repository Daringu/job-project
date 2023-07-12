import { Mention, ButtonWithIcon, villaImage, houseImage, apartmentImage, commentImage, useState, slidercards, useCallback, LargeHeader } from './imports'
import SliderNavigation from './sliderNavigation'
import SwitchImageCollectionButtons from './switchImageCollectionButtons'
import { Splide, SplideTrack } from '@splidejs/react-splide'

const all: any = {
    apartment: [
        {
            src: apartmentImage.src,
            accType: 'new',
            accName: 'dasdaadddaa',
            accPrice: '$ 35.000.000',
            id: 1,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: apartmentImage.src,
            accType: 'popular',
            accName: 'Woodlandside',
            accPrice: '$ 20.000.000',
            id: 2,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: apartmentImage.src,
            accType: 'best',
            accName: 'Roselands House',
            accPrice: '$ 35.000.000',
            id: 3,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: apartmentImage.src,
            accType: 'best',
            accName: 'asdasdasdasdas',
            accPrice: '$ 35.000.000',
            id: 4,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: apartmentImage.src,
            accType: 'popular',
            accName: 'dsaaadasdxc',
            accPrice: '$ 35.000.000',
            id: 5,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: apartmentImage.src,
            accType: 'new',
            accName: 'dadadddaaweqweqeq',
            accPrice: '$ 35.000.000',
            id: 6,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
    ],
    house: [
        {
            src: houseImage.src,
            accType: 'new',
            accName: 'dasdaadddaa',
            accPrice: '$ 35.000.000',
            id: 7,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: houseImage.src,
            accType: 'popular',
            accName: 'Woodlandside',
            accPrice: '$ 20.000.000',
            id: 8,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: houseImage.src,
            accType: 'best',
            accName: 'Roselands House',
            accPrice: '$ 35.000.000',
            id: 9,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: houseImage.src,
            accType: 'best',
            accName: 'asdasdasdasdas',
            accPrice: '$ 35.000.000',
            id: 10,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: houseImage.src,
            accType: 'popular',
            accName: 'dsaaadasdxc',
            accPrice: '$ 35.000.000',
            id: 11,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: houseImage.src,
            accType: 'new',
            accName: 'dadadddaaweqweqeq',
            accPrice: '$ 35.000.000',
            id: 12,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        }
    ],
    villa: [
        {
            src: villaImage.src,
            accType: 'new',
            accName: 'dasdaadddaa',
            accPrice: '$ 35.000.000',
            id: 13,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: villaImage.src,
            accType: 'popular',
            accName: 'Woodlandside',
            accPrice: '$ 20.000.000',
            id: 14,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: villaImage.src,
            accType: 'best',
            accName: 'Roselands House',
            accPrice: '$ 35.000.000',
            id: 15,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: villaImage.src,
            accType: 'best',
            accName: 'asdasdasdasdas',
            accPrice: '$ 35.000.000',
            id: 16,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: villaImage.src,
            accType: 'popular',
            accName: 'dsaaadasdxc',
            accPrice: '$ 35.000.000',
            id: 17,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        },
        {
            src: villaImage.src,
            accType: 'new',
            accName: 'dadadddaaweqweqeq',
            accPrice: '$ 35.000.000',
            id: 18,
            accComment: {
                commentImage: commentImage,
                commentName: 'Dianne Russell',
                commentDesc: 'Manchester, Kentucky'
            }
        }
    ]
}


export default function SecondBlock() {
    const [currentType, setCurrentType] = useState({ type: all.house, typeName: 'house' })
    const [currentSlides, setCurrentSlides] = useState(slidercards(all.house, currentType.typeName))
    const [left, setLeft] = useState(160)
    const move = useCallback((value: number) => {
        return () => setLeft(left + -value)

    }, [setLeft, left])
    const handleClick = useCallback((typeName: string) => {
        return () => {
            setCurrentType({ type: all[typeName], typeName: typeName })
            setCurrentSlides(slidercards(all[typeName], typeName))
        }
    }, [setCurrentSlides, setCurrentType])
    return (
        <div className="secondBlock">
            <Mention classs='secondBLockMention' styles={{ display: 'flex', gap: '8px', alignItems: 'center' }} text="Our Recommendation" />

            <Splide style={{ display: 'flex', flexDirection: 'column' }} aria-label="My"
                options={{ autoWidth: true, pagination: false, perMove: 1, perPage: 4, gap: '40px' }}
                hasTrack={false}>
                <div className="functional">
                    <LargeHeader additionalClass='' text='Featured House' />
                    <SwitchImageCollectionButtons handleClick={handleClick} currentType={currentType} />
                    <SliderNavigation />
                </div>
                <SplideTrack>
                    {currentSlides}
                </SplideTrack>
            </Splide>
        </div>
    )
}