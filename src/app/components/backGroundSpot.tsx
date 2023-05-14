export default function BackgroundSpot({styles,classs}:{styles:object,classs:string}) {
    return <div className={classs} style={{...styles}}></div>
}