import Link from "next/link";
import React from "react";

interface MenuItemProps {
    texto: string;
    url: string;
    icone: any;
}

export default function MenuItem(props: MenuItemProps) {
    return (
       <Link href={props.url} className="flex flex-col items-center gap-2">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full p-5">
                {React.cloneElement(props.icone, {size:90, stroke: 1, className: 'opacity-40' })}
            </div>
            <span className="opacity-40 font-black text-2xl text-white">{props.texto}</span>
       </Link>
    )
}