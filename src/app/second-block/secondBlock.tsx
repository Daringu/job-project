import {Mention,ButtonWithIcon,apartment,house,villa,arrow,villaImage,houseImage,apartmentImage,commentImage,useState,slidercards} from './imports'

const all:any={
    apartment:[
        {
            src:apartmentImage.src,
            accType:'new',
            accName:'dasdaadddaa',
            accPrice:'$ 35.000.000',
            id:1,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:apartmentImage.src,
            accType:'popular',
            accName:'Woodlandside',
            accPrice:'$ 20.000.000',
            id:2,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:apartmentImage.src,
            accType:'best',
            accName:'Roselands House',
            accPrice:'$ 35.000.000',
            id:3,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:apartmentImage.src,
            accType:'best',
            accName:'asdasdasdasdas',
            accPrice:'$ 35.000.000',
            id:4,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:apartmentImage.src,
            accType:'popular',
            accName:'dsaaadasdxc',
            accPrice:'$ 35.000.000',
            id:5,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:apartmentImage.src,
            accType:'new',
            accName:'dadadddaaweqweqeq',
            accPrice:'$ 35.000.000',
            id:6,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
    ],
    house:[
        {
            src:houseImage.src,
            accType:'new',
            accName:'dasdaadddaa',
            accPrice:'$ 35.000.000',
            id:7,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:houseImage.src,
            accType:'popular',
            accName:'Woodlandside',
            accPrice:'$ 20.000.000',
            id:8,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:houseImage.src,
            accType:'best',
            accName:'Roselands House',
            accPrice:'$ 35.000.000',
            id:9,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:houseImage.src,
            accType:'best',
            accName:'asdasdasdasdas',
            accPrice:'$ 35.000.000',
            id:10,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:houseImage.src,
            accType:'popular',
            accName:'dsaaadasdxc',
            accPrice:'$ 35.000.000',
            id:11,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:houseImage.src,
            accType:'new',
            accName:'dadadddaaweqweqeq',
            accPrice:'$ 35.000.000',
            id:12,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        }
    ],
    villa:[
        {
            src:villaImage.src,
            accType:'new',
            accName:'dasdaadddaa',
            accPrice:'$ 35.000.000',
            id:13,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:villaImage.src,
            accType:'popular',
            accName:'Woodlandside',
            accPrice:'$ 20.000.000',
            id:14,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:villaImage.src,
            accType:'best',
            accName:'Roselands House',
            accPrice:'$ 35.000.000',
            id:15,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:villaImage.src,
            accType:'best',
            accName:'asdasdasdasdas',
            accPrice:'$ 35.000.000',
            id:16,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:villaImage.src,
            accType:'popular',
            accName:'dsaaadasdxc',
            accPrice:'$ 35.000.000',
            id:17,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        },
        {
            src:villaImage.src,
            accType:'new',
            accName:'dadadddaaweqweqeq',
            accPrice:'$ 35.000.000',
            id:18,
            accComment:{
                commentImage:commentImage,
                commentName:'Dianne Russell',
                commentDesc:'Manchester, Kentucky'
            }
        }
    ]
}


export default function SecondBlock() {
    const [currentType,setCurrentType]=useState({type:all.house,typeName:'house'})
    const [currentSlides,setCurrentSlides]=useState(slidercards(all.house,currentType.typeName))
    const [left,setLeft]=useState(10)
    const goLeft=()=>{
        setLeft(left-18)
    }
    const goRight=()=>{
        setLeft(left+18)
    }
    const handleClick=(typeName:string)=>{
        return ()=>{
            setCurrentType({type:all[typeName],typeName:typeName})
            setCurrentSlides(slidercards(all[typeName],typeName))
        }
    }
    return (
        <div className="secondBlock">
            <Mention styles={{display:'flex',gap:'8px',alignItems:'center',paddingLeft:'120px'}} text="Our Recommendation"/>
            <div className="functional">
                <h1 className="headersText">Featured House</h1>
                <div className="buttonsToChooseType">
                    <ButtonWithIcon iconStyles={{}} styles={{}} key={'house'} text="House" handleClick={handleClick('house')} isIconOnTheLeft={true} 
                    icon={house} textClass="btnTypeText" iconClass={`btnTypeIcon ${currentType.typeName==='house'&&'btnTypeIconActive'}`} buttonClass={`btnType ${currentType.typeName==='house'&&'btnTypeActive'}`}/>
                    <ButtonWithIcon iconStyles={{}} styles={{}} key={'villa'} text="Villa" handleClick={handleClick('villa')} isIconOnTheLeft={true} icon={villa} 
                    textClass="btnTypeText" iconClass={`btnTypeIcon ${currentType.typeName==='villa'&&'btnTypeIconActive'}`} buttonClass={`btnType ${currentType.typeName==='villa'&&'btnTypeActive'}`}/>
                    <ButtonWithIcon iconStyles={{}} styles={{}} key={'apartment'} text="Appratment" handleClick={handleClick('apartment')} isIconOnTheLeft={true} icon={apartment} 
                    textClass="btnTypeText" iconClass={`btnTypeIcon ${currentType.typeName==='apartment'&&'btnTypeIconActive'}`} buttonClass={`btnType ${currentType.typeName==='apartment'&&'btnTypeActive'}`}/>
                </div>
                <div className="secondBlockSliderArrows">
                    <ButtonWithIcon iconStyles={{transform:'rotate(180deg)'}} styles={{}} key={'left'} text="nothing" handleClick={goRight} isIconOnTheLeft={true} 
                    icon={arrow} textClass="" iconClass="btnSliderArrowIcon" buttonClass={`secondBlockSliderArrow ${left>=5&&'buttonBlocked'}`}/>
                    <ButtonWithIcon iconStyles={{}} styles={{}} key={'right'} text="nothing" handleClick={goLeft} isIconOnTheLeft={true} 
                    icon={arrow} textClass="" iconClass="btnSliderArrowIcon" buttonClass={`secondBlockSliderArrow ${left<=-55&&'buttonBlocked'}`}/>
                </div>
            </div>
            <div className="SliderSecondBlockOverflow" style={{position:'relative',overflow:'hidden'}}>
                <div className="SliderSecondBlockContainer" style={{transform:`translateX(${left}%)`}}>
                    {currentSlides}
                </div>
            </div>
        </div>
    )
}