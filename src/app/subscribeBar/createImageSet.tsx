import Image from "next/image"

export default function ImageSet({ styles, image1, image2, imageClass1, imageClass2 }: { styles: any, image1: any, image2: any, imageClass1: string, imageClass2: string }) {
    return (
        <div style={{ ...styles }}>
            <Image className={imageClass1} width={image1.width} height={image1.height} alt="1" src={image1.src} />
            <Image className={imageClass2} width={image2.width} height={image2.height} alt="1" src={image2.src} />
        </div>
    )
}