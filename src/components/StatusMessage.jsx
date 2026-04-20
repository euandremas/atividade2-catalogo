function StatusMessage({ tipo = 'info', titulo, mensagem }) {
  return (
    <div className={`status-message ${tipo}`} role={tipo === 'erro' ? 'alert' : 'status'}>
      {titulo && <strong>{titulo}</strong>}
      <p>{mensagem}</p>
    </div>
  );
}

export default StatusMessage;
