import Cards from "../components/cards"
import Image from "next/image"
import star from './pictures/star.svg'
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function slides(arr: any[]) {
    const toReturn = arr.map((e) => {

        return (
            <SplideSlide key={e.id}>
                <div style={{ background: `url(${e.houseImage.src})`, backgroundRepeat: 'no-repeat', width: '740px', height: '505px', display: 'flex', justifyContent: 'center' }}>
                    <div className="tablet">
                        <div className="tabletText">
                            <h1 className="tabletHead">{e.heading}</h1>
                            <p className="tabletDesc">{e.description}</p>
                        </div>
                        <div className="tabletInfo">
                            <Cards cardImageClass="imageTabletCard" textContainerClassName="tabletInfoText" image={e.avatar} descClass="tabletDesc" headClass="tabletHeadInfo" head={e.name} containerClassName="tabletInfoContainer" desc={e.position} />
                            <div className="tabletRatingContainer">
                                <Image alt="2" width={24} height={24} src={star} />
                                <p className="rating">{e.stars}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SplideSlide>
        )
    })
    return toReturn
}