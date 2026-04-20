import ProdutoCard from './ProdutoCard';

function ListaProdutos({ produtos, aoRemover }) {
  if (produtos.length === 0) {
    return (
      <div className="sem-resultados">
        <p>Nenhum produto encontrado com os filtros informados.</p>
      </div>
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
          <button type="button" onClick={() => aoRemover(produto.id)}>
            Remover
          </button>
        </ProdutoCard>
      ))}
    </section>
  );
}

export default ListaProdutos;
