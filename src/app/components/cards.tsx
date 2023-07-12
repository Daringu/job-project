import Image from "next/image"
import { card } from "../types"

export default function Cards({ image, containerClassName, textContainerClassName, headClass, descClass, head, desc, cardImageClass }: card) {

    return (<div className={containerClassName}>
        <Image height={image.height} width={image.width} className={cardImageClass} src={image.src} alt="asda" />
        <div className={textContainerClassName}>
            {head.length > 0 && <h2 className={headClass}>{head}</h2>}
            {desc.length > 0 && <p className={descClass}>{desc}</p>}
        </div>
    </div>)
}