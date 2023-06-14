import Area from '../template/Area';

interface GerarNumeroProps {
    numero1: number;
    numero2: number;
    gerarNumero: (resultado: number) => void;
}

export default function GerarNumero(props: GerarNumeroProps) {
    const min = Math.min(props.numero1, props.numero2);
    const max = Math.max(props.numero1, props.numero2);

    function gerar() {
        props.gerarNumero(Math.floor(Math.random() * (max - min + 1) + min));
    }

    return (
        <Area titulo="Gerar Número" cor="blue">
            <div className="flex flex-col items-center gap-5">
                <div className="flex justify-center gap-5 text-2xl">
                    <span>Menor: {min}</span>
                    <span>Maior: {max}</span>
                </div>
                <button onClick={gerar} className="btn">
                    Gerar
                </button>
            </div>
        </Area>
    );
}
