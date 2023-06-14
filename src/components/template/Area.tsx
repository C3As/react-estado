interface AreaProps {
    titulo: string
    sumario?: string
    children: any
    cor: string
}

export default function Area(props: AreaProps) {
    return (
        <div className={`
            flex flex-col items-center bg-${props.cor}-400
            rounded-md w-full
        `}>
            <div className={`
                flex items-center ${props.sumario ? 'justify-between' : 'justify-center'}
                w-full bg-black bg-opacity-20 h-14 text-3xl font-black opacity-70
            `}>
                <span className="px-4 text-white">{props.titulo}</span>
                {props.sumario && (
                    <span className="
                        flex items-center px-4
                        bg-black bg-opacity-20 h-full text-white
                    ">{props.sumario}</span>
                )}
            </div>
            <div className="p-7 text-white">
                {props.children}
            </div>
        </div>
    )
}
