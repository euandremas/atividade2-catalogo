import { useState } from 'react';

function FormProduto({ aoAdicionar }) {
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

  function handleSubmit(evento) {
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

    aoAdicionar(novoProduto);
    limparFormulario();
  }

  return (
    <form className="form-produto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />

      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={promocao}
          onChange={(e) => setPromocao(e.target.checked)}
        />
        Em promoção
      </label>

      <div className="acoes-formulario">
        <button type="submit">Adicionar produto</button>
        <button type="button" onClick={limparFormulario}>
          Limpar
        </button>
      </div>
    </form>
  );
}

export default FormProduto;
