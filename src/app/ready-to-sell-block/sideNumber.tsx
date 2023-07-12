import Image from "next/image"

export default function SideNumber({ quantity, image, text }: { quantity: number, image: any, text: string }) {
    return (
        <div>
            <Image width={32} height={32} src={image} alt="1" />
            <p>{quantity} {quantity > 1 ? text + 's' : text}</p>
        </div>
    )
}