import ContadorContext from '@/context/ContadorContext';
import Area from '../template/Area';
import { useContext } from 'react';

export default function Menos() {
    const { decrementar } = useContext(ContadorContext);

    return (
        <Area titulo="Botão Menos" cor="red">
            <button className="btn" onClick={decrementar}>
                -1
            </button>
        </Area>
    );
}
