function Filtros({
  busca,
  categoriaSelecionada,
  categorias,
  aoMudarBusca,
  aoMudarCategoria,
  aoLimparFiltros,
}) {
  return (
    <div className="filtros">
      <input
        type="text"
        placeholder="Buscar por nome"
        value={busca}
        onChange={(evento) => aoMudarBusca(evento.target.value)}
      />

      <select
        value={categoriaSelecionada}
        onChange={(evento) => aoMudarCategoria(evento.target.value)}
      >
        <option value="Todas">Todas as categorias</option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>

      <button type="button" className="secundario" onClick={aoLimparFiltros}>
        Limpar filtros
      </button>
    </div>
  );
}

export default Filtros;
