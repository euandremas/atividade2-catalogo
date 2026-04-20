function Header({ modoEscuro, aoAlternarTema }) {
  return (
    <header className="topo">
      <div>
        <span className="badge">Atividade Final - Unidade 4</span>
        <h1>Catálogo de Produtos</h1>
        <p>
          Projeto evoluído com eventos, estado, integração com API, useEffect e
          async/await.
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
