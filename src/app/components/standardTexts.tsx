function LargeHeader({ text, additionalClass }: { text: string, additionalClass: string }) {
    return (
        <h1 className={`text600_32px ${additionalClass}`}>
            {text}
        </h1>
    )
}

function P({ text, additionalClass }: { text: string, additionalClass: string }) {
    return <p className={`text400_16px ${additionalClass}`}>
        {text}
    </p>
}
export { LargeHeader, P }