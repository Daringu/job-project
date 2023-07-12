export default function Mention({ classs, styles, text }: { classs: string, styles: object, text: string }) {
    return (
        <div className={classs} style={{ ...styles }}>
            <p style={{ width: '32px', height: '1px', backgroundColor: 'rgba(245, 158, 11, 1)' }} className="mentionBar"></p>
            <p className="mentionText">{text}</p>
        </div>
    )
}