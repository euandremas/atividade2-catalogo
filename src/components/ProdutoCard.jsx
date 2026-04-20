const formatarMoeda = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

function ProdutoCard({ nome, preco, categoria, promocao, children }) {
  return (
    <article className={`card ${promocao ? 'promocao' : ''}`}>
      <h3>{nome}</h3>
      <p>
        <strong>Categoria:</strong> {categoria}
      </p>
      <p>
        <strong>Preço:</strong> {formatarMoeda(preco)}
      </p>
      <p>
        <strong>Status:</strong> {promocao ? 'Em promoção' : 'Preço normal'}
      </p>
      {children && <div className="card-acoes">{children}</div>}
    </article>
  );
}

export default ProdutoCard;
