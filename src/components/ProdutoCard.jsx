const formatarMoeda = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

function ProdutoCard({ nome, preco, categoria, promocao }) {
  return (
    <article className={`card ${promocao ? 'promocao' : ''}`}>
      <h2>{nome}</h2>
      <p>
        <strong>Categoria:</strong> {categoria}
      </p>
      <p>
        <strong>Preço:</strong> {formatarMoeda(preco)}
      </p>
      <p>
        <strong>Status:</strong> {promocao ? 'Em promoção' : 'Preço normal'}
      </p>
    </article>
  );
}

export default ProdutoCard;
