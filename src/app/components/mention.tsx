export default function Mention({styles,text}:{styles:object,text:string}) {
    return (
        <div style={{...styles}}>
            <p style={{width:'32px',height:'1px',backgroundColor:'rgba(245, 158, 11, 1)'}} className="mentionBar"></p>
            <p className="mentionText">{text}</p>
        </div>
    )
}