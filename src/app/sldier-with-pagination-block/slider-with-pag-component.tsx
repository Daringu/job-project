
import Mention from "../components/mention";
import slides from "./slides";
import data from './data'
import { Splide, SplideTrack } from "@splidejs/react-splide";
import { LargeHeader } from "../components/standardTexts";

import '@splidejs/splide/css/sea-green';

export default function SliderWithPaginationBlock() {

    return (
        <div className="sliderWithPaginationBlock">
            <div className="sliderWithPaginationText">
                <Mention classs="sliderMention" styles={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }} text="See Our Review" />
                <LargeHeader additionalClass="sliderWithPaginationHeader" text="What Our User Say About Us" />
            </div>
            <div className="paginationSliderBody">
                <Splide style={{ paddingTop: 0 }} aria-label="Basic Structure Example" options={{
                    type: 'loop', arrows: false, perPage: 1, pagination: true, autoWidth: true, padding: '21rem', gap: '56px', classes: {
                        page: 'splide__pagination__page customPag',
                        active: 'is-activePag'
                    }
                }} hasTrack={false} >
                    <div style={{ width: '1440px' }} className="customwrapper">
                        <SplideTrack>
                            {slides(data)}
                        </SplideTrack>
                        <ul style={{ marginTop: '32px' }} className="splide__pagination"></ul>
                    </div>
                </Splide>
            </div>
        </div>
    )
}