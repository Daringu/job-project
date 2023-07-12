'use client'
import HeaderLeftSide from "./header/header-left-side";
import BackgroundSpot from "./components/backGroundSpot";
import HeaderRightSide from "./header/header-right-side";
import SecondBlock from "./second-block/secondBlock";
import ReadyToSell from "./ready-to-sell-block/readyToSell";
import SliderWithPaginationBlock from "./sldier-with-pagination-block/slider-with-pag-component";
import FindOutMoreBlock from "./findOut-more-block/findOutMoreComponent";
import SubscribeBar from "./subscribeBar/SubscribeBar";
import Footer from "./footer/footer";

export default function App() {
  return (
    <div className="page">
      <BackgroundSpot styles={{ position: 'absolute' }} classs="spot-1" />
      <BackgroundSpot styles={{ position: 'absolute' }} classs="spot-2" />
      <header className="header">
        <HeaderLeftSide />
        <HeaderRightSide />
      </header>
      <SecondBlock />
      <ReadyToSell />
      <SliderWithPaginationBlock />
      <FindOutMoreBlock />
      <SubscribeBar />
      <Footer />
    </div>
  )
}

