import ProdutoCard from './ProdutoCard';
import StatusMessage from './StatusMessage';

function ListaProdutos({ produtos, aoRemover, carregandoRemocaoId }) {
  if (produtos.length === 0) {
    return (
      <StatusMessage
        tipo="info"
        titulo="Nenhum produto encontrado"
        mensagem="Tente ajustar os filtros ou cadastre um novo item no catálogo."
      />
    );
  }

  return (
    <section className="lista-produtos">
      {produtos.map((produto) => (
        <ProdutoCard
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          categoria={produto.categoria}
          promocao={produto.promocao}
        >
          <button
            type="button"
            onClick={() => aoRemover(produto.id)}
            disabled={carregandoRemocaoId === produto.id}
          >
            {carregandoRemocaoId === produto.id ? 'Removendo...' : 'Remover'}
          </button>
        </ProdutoCard>
      ))}
    </section>
  );
}

export default ListaProdutos;
