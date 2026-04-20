import { useMemo, useState } from 'react';
import './App.css';
import Filtros from './components/Filtros';
import FormProduto from './components/FormProduto';
import Header from './components/Header';
import ListaProdutos from './components/ListaProdutos';
import SectionCard from './components/SectionCard';
import produtosIniciais from './data/produtos';

const formatarMoeda = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

function App() {
  const [produtos, setProdutos] = useState(produtosIniciais);
  const [modoEscuro, setModoEscuro] = useState(false);
  const [busca, setBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');

  const categorias = useMemo(
    () => [...new Set(produtos.map((produto) => produto.categoria))].sort(),
    [produtos],
  );

  const produtosFiltrados = useMemo(() => {
    return produtos
      .filter((produto) =>
        produto.nome.toLowerCase().includes(busca.trim().toLowerCase()),
      )
      .filter(
        (produto) =>
          categoriaSelecionada === 'Todas' ||
          produto.categoria === categoriaSelecionada,
      );
  }, [produtos, busca, categoriaSelecionada]);

  const precoTotal = useMemo(
    () => produtos.reduce((total, produto) => total + produto.preco, 0),
    [produtos],
  );

  const totalPromocoes = useMemo(
    () => produtos.filter((produto) => produto.promocao).length,
    [produtos],
  );

  function limparFiltros() {
    setBusca('');
    setCategoriaSelecionada('Todas');
  }

  function adicionarProduto(novoProduto) {
    setProdutos((listaAtual) => [...listaAtual, novoProduto]);
  }

  function removerProduto(id) {
    setProdutos((listaAtual) =>
      listaAtual.filter((produto) => produto.id !== id),
    );
  }

  return (
    <div className={`app ${modoEscuro ? 'dark' : ''}`}>
      <div className="container">
        <Header
          modoEscuro={modoEscuro}
          aoAlternarTema={() => setModoEscuro((valorAtual) => !valorAtual)}
        />

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
          <div className="resumo-item">
            <span>Produtos visíveis</span>
            <strong>{produtosFiltrados.length}</strong>
          </div>
        </section>

        <SectionCard titulo="Cadastrar novo produto">
          <FormProduto aoAdicionar={adicionarProduto} />
        </SectionCard>

        <SectionCard titulo="Filtrar catálogo">
          <Filtros
            busca={busca}
            categoriaSelecionada={categoriaSelecionada}
            categorias={categorias}
            aoMudarBusca={setBusca}
            aoMudarCategoria={setCategoriaSelecionada}
            aoLimparFiltros={limparFiltros}
          />
        </SectionCard>

        <SectionCard titulo="Lista de produtos">
          <ListaProdutos
            produtos={produtosFiltrados}
            aoRemover={removerProduto}
          />
        </SectionCard>
      </div>
    </div>
  );
}

export default App;
