import { useMemo, useState } from 'react';
import './App.css';
import ProdutoCard from './components/ProdutoCard';
import produtosIniciais from './data/produtos';

const formatarMoeda = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

function App() {
  const [produtos, setProdutos] = useState(produtosIniciais);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [promocao, setPromocao] = useState(false);
  const [modoEscuro, setModoEscuro] = useState(false);

  const precoTotal = useMemo(
    () => produtos.reduce((total, produto) => total + produto.preco, 0),
    [produtos],
  );

  const totalPromocoes = useMemo(
    () => produtos.filter((produto) => produto.promocao).length,
    [produtos],
  );

  function limparFormulario() {
    setNome('');
    setPreco('');
    setCategoria('');
    setPromocao(false);
  }

  function adicionarProduto(evento) {
    evento.preventDefault();

    const nomeTratado = nome.trim();
    const categoriaTratada = categoria.trim();
    const precoNumerico = Number(preco);

    if (!nomeTratado || !categoriaTratada || precoNumerico <= 0) {
      window.alert(
        'Preencha nome, categoria e informe um preço maior que zero.',
      );
      return;
    }

    const novoProduto = {
      id: Date.now(),
      nome: nomeTratado,
      preco: precoNumerico,
      categoria: categoriaTratada,
      promocao,
    };

    setProdutos((listaAtual) => [...listaAtual, novoProduto]);
    limparFormulario();
  }

  return (
    <div className={`app ${modoEscuro ? 'dark' : ''}`}>
      <div className="container">
        <header className="topo">
          <div>
            <span className="badge">Atividade 2</span>
            <h1>Catálogo de Produtos</h1>
            <p>Projeto desenvolvido em React para a Atividade da Unidade 2.</p>
          </div>

          <button
            type="button"
            className="toggle-tema"
            onClick={() => setModoEscuro((valorAtual) => !valorAtual)}
          >
            {modoEscuro ? '☀️ Modo claro' : '🌙 Modo escuro'}
          </button>
        </header>

        <section className="resumo grade-resumo">
          <div className="resumo-item">
            <span>Total do catálogo</span>
            <strong>{formatarMoeda(precoTotal)}</strong>
          </div>
          <div className="resumo-item">
            <span>Total de produtos</span>
            <strong>{produtos.length}</strong>
          </div>
          <div className="resumo-item">
            <span>Em promoção</span>
            <strong>{totalPromocoes}</strong>
          </div>
        </section>

        <section className="formulario">
          <h2>Cadastrar novo produto</h2>
          <form onSubmit={adicionarProduto}>
            <input
              type="text"
              placeholder="Nome do produto"
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Preço"
              value={preco}
              onChange={(evento) => setPreco(evento.target.value)}
              min="0.01"
              step="0.01"
              required
            />

            <input
              type="text"
              placeholder="Categoria"
              value={categoria}
              onChange={(evento) => setCategoria(evento.target.value)}
              required
            />

            <label className="checkbox">
              <input
                type="checkbox"
                checked={promocao}
                onChange={(evento) => setPromocao(evento.target.checked)}
              />
              Em promoção
            </label>

            <div className="acoes-formulario">
              <button type="submit">Adicionar produto</button>
              <button type="button" className="secundario" onClick={limparFormulario}>
                Limpar
              </button>
            </div>
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
    </div>
  );
}

export default App;
