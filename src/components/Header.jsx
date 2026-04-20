function Header({ modoEscuro, aoAlternarTema }) {
  return (
    <header className="topo">
      <div>
        <span className="badge">Atividade 3</span>
        <h1>Catálogo de Produtos</h1>
        <p>
          Projeto evoluído com componentes, props, children, formulário,
          listagem e filtros.
        </p>
      </div>

      <button
        type="button"
        className="toggle-tema"
        onClick={aoAlternarTema}
      >
        {modoEscuro ? '☀️ Modo claro' : '🌙 Modo escuro'}
      </button>
    </header>
  );
}

export default Header;
