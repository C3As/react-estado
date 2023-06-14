import Mais from '@/components/basico/Mais';
import Menos from '@/components/basico/Menos';
import Valor from '@/components/basico/Valor';
import { ContadorProvider } from '@/context/ContadorContext';

export default function ExemploBasico() {
    return (
        <div className="flex flex-col p-20 gap-5">
            <ContadorProvider>
                <Valor />
                <div className="flex gap-5">
                    <Menos />
                    <Mais />
                </div>
            </ContadorProvider>
        </div>
    );
}
