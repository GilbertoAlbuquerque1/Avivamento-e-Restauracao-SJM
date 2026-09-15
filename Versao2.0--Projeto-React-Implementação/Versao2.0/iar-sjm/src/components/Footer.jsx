export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <div className="rodape">
        <div className="coluna-footer">
            <img src="./imagens/logoheader.png" 
            alt="Logo da Igreja" 
            className="logo-footer" 
            />
        </div>
        <div className="coluna-footer">
          <h3 className="txtfooter">Avivamento e Restauração</h3>
          <p className="txtfooter"> SJM</p>
        </div>
      </div>
      <div className="coluna-footer">
        <p>Links Rápidos</p>
        <a href="#/sobrenos">Sobre Nós</a>
        <a href="#/eventos">Eventos</a>
      </div>
    </footer>
  );
}