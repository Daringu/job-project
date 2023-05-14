import Image from "next/image"

export default function cards(array:any[],className:string,textContainerClassName:string,headClass:string,descClass:string) {
    const torender=array.map((e:any,i:number)=>{
        return (
            <div key={e.id} className={className}>
                <Image height={e.src.height} width={e.src.width} className="cardImage" src={e.src.src} alt="asda"/>
                <div className={textContainerClassName}>
                    <h2 className={headClass}>{e.head}</h2>
                    <p className={descClass}>{e.desc}</p>
                </div>
            </div>
        )
    })
    return torender
}