import { useContext } from 'react';
import Area from '../template/Area';
import CarrinhoVazio from './CarrinhoVazio';
import CarrinhoContext from '@/context/CarrinhoContext';
import ItemCarrinhoCard from './ItemCarrinhoCard';
import Real from '@/utils/Real';
import { IconX } from '@tabler/icons-react';

export default function Carrinho() {
    const { itens, valorTotal, limparCarrinho } = useContext(CarrinhoContext);
    return (
        <Area titulo="Carrinho" cor="green" sumario={Real.format(valorTotal)}>
            <div className='flex flex-col justify-center items-center gap-5'>
                <div className="flex flex-wrap justify-around gap-4">
                    {itens.length === 0 ? (
                        <CarrinhoVazio />
                    ) : (
                        itens.map(item => {
                            return (
                                <ItemCarrinhoCard
                                    key={item.produto.id}
                                    item={item}
                                />
                            );
                        })
                    )}
                </div>
                {itens.length > 0 && (
                    <button
                        className="btn-danger flex gap-2 w-28 justify-center"
                        onClick={limparCarrinho}
                    >
                        <IconX />
                        Limpar
                    </button>
                )}
            </div>
        </Area>
    );
}
