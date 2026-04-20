import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filtros from './components/Filtros';
import FormProduto from './components/FormProduto';
import Header from './components/Header';
import ListaProdutos from './components/ListaProdutos';
import SectionCard from './components/SectionCard';
import StatusMessage from './components/StatusMessage';

const API_URL = 'http://localhost:3001/produtos';

const formatarMoeda = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

function App() {
  const [produtos, setProdutos] = useState([]);

  const [modoEscuro, setModoEscuro] = useState(() => {
    const temaSalvo = localStorage.getItem('modoEscuro');
    return temaSalvo ? JSON.parse(temaSalvo) : false;
  });

  const [busca, setBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');
  const [carregandoProdutos, setCarregandoProdutos] = useState(true);
  const [carregandoCadastro, setCarregandoCadastro] = useState(false);
  const [carregandoRemocaoId, setCarregandoRemocaoId] = useState(null);
  const [erroApi, setErroApi] = useState('');

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
    () => produtos.reduce((total, produto) => total + Number(produto.preco), 0),
    [produtos],
  );

  const totalPromocoes = useMemo(
    () => produtos.filter((produto) => produto.promocao).length,
    [produtos],
  );

  useEffect(() => {
    carregarProdutos();
  }, []);

  useEffect(() => {
    localStorage.setItem('modoEscuro', JSON.stringify(modoEscuro));
  }, [modoEscuro]);

  function limparFiltros() {
    setBusca('');
    setCategoriaSelecionada('Todas');
  }

  async function carregarProdutos() {
    setCarregandoProdutos(true);
    setErroApi('');

    try {
      const resposta = await fetch(API_URL);

      if (!resposta.ok) {
        throw new Error('Nao foi possivel carregar os produtos da API.');
      }

      const dados = await resposta.json();
      setProdutos(dados);
    } catch (erro) {
      setErroApi(
        'Falha ao conectar com a API. Verifique se o JSON Server esta em execucao.',
      );
    } finally {
      setCarregandoProdutos(false);
    }
  }

  async function adicionarProduto(novoProduto) {
    setCarregandoCadastro(true);
    setErroApi('');

    try {
      const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoProduto),
      });

      if (!resposta.ok) {
        throw new Error('Nao foi possivel cadastrar o produto.');
      }

      const produtoCriado = await resposta.json();
      setProdutos((listaAtual) => [...listaAtual, produtoCriado]);
      return produtoCriado;
    } catch (erro) {
      setErroApi('Erro ao cadastrar produto. Tente novamente.');
      return null;
    } finally {
      setCarregandoCadastro(false);
    }
  }

  async function removerProduto(id) {
    setCarregandoRemocaoId(id);
    setErroApi('');

    try {
      const resposta = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      if (!resposta.ok) {
        throw new Error('Nao foi possivel remover o produto.');
      }

      setProdutos((listaAtual) =>
        listaAtual.filter((produto) => produto.id !== id),
      );
    } catch (erro) {
      setErroApi('Erro ao remover produto. Tente novamente.');
    } finally {
      setCarregandoRemocaoId(null);
    }
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

        {erroApi && (
          <StatusMessage
            tipo="erro"
            titulo="Problema na comunicação com a API"
            mensagem={erroApi}
          />
        )}

        <SectionCard titulo="Cadastrar novo produto">
          <FormProduto
            aoAdicionar={adicionarProduto}
            carregandoCadastro={carregandoCadastro}
          />
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
          {carregandoProdutos ? (
            <StatusMessage
              tipo="loading"
              titulo="Carregando dados"
              mensagem="Buscando produtos no servidor..."
            />
          ) : (
            <ListaProdutos
              produtos={produtosFiltrados}
              aoRemover={removerProduto}
              carregandoRemocaoId={carregandoRemocaoId}
            />
          )}
        </SectionCard>
      </div>
    </div>
  );
}

export default App;
