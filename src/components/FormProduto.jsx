import { useState } from 'react';

function FormProduto({ aoAdicionar, carregandoCadastro }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [promocao, setPromocao] = useState(false);

  function limparFormulario() {
    setNome('');
    setPreco('');
    setCategoria('');
    setPromocao(false);
  }

  async function handleSubmit(evento) {
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
      nome: nomeTratado,
      preco: precoNumerico,
      categoria: categoriaTratada,
      promocao,
    };

    const produtoCriado = await aoAdicionar(novoProduto);

    if (produtoCriado) {
      limparFormulario();
    }
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        disabled={carregandoCadastro}
      />

      <input
        type="number"
        min="0"
        step="0.01"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        disabled={carregandoCadastro}
      />

      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        disabled={carregandoCadastro}
      />

      <label className="checkbox">
        <input
          type="checkbox"
          checked={promocao}
          onChange={(e) => setPromocao(e.target.checked)}
          disabled={carregandoCadastro}
        />
        Em promoção
      </label>

      <div className="acoes-formulario">
        <button type="submit" disabled={carregandoCadastro}>
          {carregandoCadastro ? 'Salvando...' : 'Adicionar produto'}
        </button>
        <button
          type="button"
          className="secundario"
          onClick={limparFormulario}
          disabled={carregandoCadastro}
        >
          Limpar
        </button>
      </div>
    </form>
  );
}

export default FormProduto;
