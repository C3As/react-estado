import { createContext } from "react";
import Produto from "@/data/model/Produto";
import produtos from "@/data/constants/produtos";

interface CatalogoContextProps {
    produtos: Produto[];
}

const CatalogoContext = createContext<CatalogoContextProps>({} as any);

export function CatalogoProvider(props: any) {
    return (
        <CatalogoContext.Provider value={{produtos}}>
         {props.children}
        </CatalogoContext.Provider>
    )
}
export default CatalogoContext;



