import MenuItem from "@/components/template/MenuItem";
import { IconArrowsDownUp, IconForms } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="
        flex flex-col items-center justify-center h-screen
        bg-gradient-to-br from-zinc-800 to-black gap-20
    ">
      <div className="text-6xl">
        <span className="opacity-60 font-black text-white">Gerenciamento de Estado</span>
      </div>
      <div className="flex flex-wrap justify-around w-3/5">
        <MenuItem icone={<IconForms />} texto="Estado" url="/revisao/estado"/>
        <MenuItem icone={<IconArrowsDownUp />} texto="Comunicação" url="/revisao/comunicacao"/>
      </div>
    </div>
  )
}
