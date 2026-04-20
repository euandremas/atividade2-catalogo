function SectionCard({ titulo, children }) {
  return (
    <section className="bloco">
      <div className="bloco-topo">
        <h2>{titulo}</h2>
      </div>
      {children}
    </section>
  );
}

export default SectionCard;
