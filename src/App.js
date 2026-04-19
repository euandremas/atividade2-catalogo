import { useState } from 'react';
import './App.css';
import ProdutoCard from './components/ProdutoCard';
import produtosIniciais from './data/produtos';

function App() {
  const [produtos, setProdutos] = useState(produtosIniciais);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [promocao, setPromocao] = useState(false);

  const precoTotal = produtos.reduce(
    (total, produto) => total + produto.preco,
    0,
  );

  function adicionarProduto(e) {
    e.preventDefault();

    const novoProduto = {
      id: Date.now(),
      nome,
      preco: Number(preco),
      categoria,
      promocao,
    };

    setProdutos([...produtos, novoProduto]);
    setNome('');
    setPreco('');
    setCategoria('');
    setPromocao(false);
  }

  return (
    <div className="container">
      <header>
        <h1>Catálogo de Produtos</h1>
        <p>Projeto desenvolvido em React para a Atividade da Unidade 2.</p>
      </header>

      <section className="resumo">
        <h3>Total do catálogo: R${precoTotal.toFixed(2)}</h3>
      </section>

      <section className="formulario">
        <h2>Cadastrar novo produto</h2>
        <form onSubmit={adicionarProduto}>
          <input
            type="text"
            placeholder="Nome do produto"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Preço"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />

          <label className="checkbox">
            <input
              type="checkbox"
              checked={promocao}
              onChange={(e) => setPromocao(e.target.checked)}
            />
            Em promoção
          </label>

          <button type="submit">Adicionar produto</button>
        </form>
      </section>

      <section className="lista-produtos">
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            categoria={produto.categoria}
            promocao={produto.promocao}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
