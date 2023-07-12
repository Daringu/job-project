import Mention from "../components/mention"
import ButtonWithIcon from "../components/ButtonWithIcon"
import userAvatarImage from '../header/images-for-header/slidercard.png'
import imageLeft from './images/Rectangle 22.png'
import leftCards from "./leftSideCards"
import largeImage from './images/Rectangle 23.png'
import { LargeHeader } from "../components/standardTexts"
import { joinClasses } from "../tools/tools"

const leftContent: any[] = [
    {
        userName: 'Dianne Russell',
        text: 'The things we need to check when we want to buy a house',
        timeToRead: 4,
        date: '25 Apr 2021',
        userAvatar: userAvatarImage,
        imageLeft: imageLeft,
        id: 1,
        largeImage: largeImage,
        comment: 'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house'
    },
    {
        userName: 'Courtney Henry',
        text: '7 Ways to distinguish the quality of the house we want to buy',
        timeToRead: 6,
        date: '25 Apr 2021',
        userAvatar: userAvatarImage,
        imageLeft: imageLeft,
        id: 2,
        largeImage: largeImage,
        comment: 'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house'
    },
    ,
    {
        userName: 'Darlene Robertson',
        text: 'The best way to know the quality of the house we want to buy',
        timeToRead: 2,
        date: '24 Apr 2021',
        userAvatar: userAvatarImage,
        imageLeft: imageLeft,
        id: 3,
        largeImage: largeImage,
        comment: 'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house'
    },
    {
        userName: 'Courtney Henry',
        text: '7 Ways to distinguish the quality of the house we want to buy',
        timeToRead: 6,
        date: '25 Apr 2021',
        userAvatar: userAvatarImage,
        imageLeft: imageLeft,
        id: 4,
        largeImage: largeImage,
        comment: 'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house'
    }
]



export default function FindOutMoreBlock() {
    return (
        <div className="findOutMoreContainer">
            <div className="findOutMoreTextContainer">
                <Mention styles={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }} classs={'dsadas'} text="See tips and trick from our partnership" />
                <LargeHeader additionalClass="sliderWithPaginationHeader" text=" Find out more about
                selling and buying homes"/>
                <ButtonWithIcon buttonClass={joinClasses('greenButton', 'searchBoxButton')} iconStyles={{}} handleClick={() => { }} iconClass="" styles={{ marginTop: '24px' }} isIconOnTheLeft={false} textClass="searchButtonText" text="More Artikel" icon={null} />
            </div>
            {leftCards(leftContent)}
        </div>
    )
}