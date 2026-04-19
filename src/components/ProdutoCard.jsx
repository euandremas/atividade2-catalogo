function ProdutoCard({ nome, preco, categoria, promocao }) {
  return (
    <div className={`card ${promocao ? 'promocao' : ''}`}>
      <h2>{nome}</h2>
      <p>
        <strong>Categoria:</strong> {categoria}
      </p>
      <p>
        <strong>Preço:</strong> R${preco.toFixed(2)}
      </p>
      <p>
        <strong>Status:</strong> {promocao ? 'Em promoção' : 'Preço normal'}
      </p>
    </div>
  );
}

export default ProdutoCard;
