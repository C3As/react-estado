=> componentes com provider preferível ter fragment ao invés de div

=> criar um componente provider que envolverá os outros componentes que partilharão dos dados do contexto

    export function ContadorProvider(props: any) {
    return (
        <ContadorContext.Provider value={{
            numero: 30
        }}>
            {props.children}
        </ContadorContext.Provider>
    );
}
export default ContadorContext

-> envolvendo:

            <ContadorProvider>
                <Valor />
                <div className="flex gap-5">
                    <Menos />
                    <Mais />
                </div>
            </ContadorProvider>

=> criamos um contexto
    const ContadorContext = createContext({});

=> objeto disponibilizado pelo context
    value={{
            numero: 30
        }}>

=> recebendo/usando o valor do objeto
    const obj = useContext(ContadorContext);

     <span className="font-black text-6xl">{obj.numero}</span>

=> => arquivo Real.ts com configurações regionais, neste caso Brasil