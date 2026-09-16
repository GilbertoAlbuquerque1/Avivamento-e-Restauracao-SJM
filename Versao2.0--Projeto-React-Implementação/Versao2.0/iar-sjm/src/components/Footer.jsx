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
          <h2 className="txtfooter">Avivamento e Restauração</h2>
          <p className="txtfooter"> SJM</p>
        </div>
      </div>
      <div className="coluna-footer">
        <h3>Links Rápidos</h3>
        <a href="#/sobrenos">Início</a>
        <a href="#/eventos">Eventos</a>
        <a href="#/sobrenos">Sobre Nós</a>
        <a href="#/eventos">Precisa de Ajuda?</a>
        <a href="#/eventos">Colabore</a>
      </div>
      <div className="coluna-footer">
        <h3>Nossas Redes Sociais</h3>
        <section className="imgSociais">
          <a href="#/sobrenos">
          <img src="./imagens/logo_youtube.png" width={35}></img>
          </a>
          <a href="#/sobrenos">
          <img src="./imagens/instagramb.png" width={30}></img>
          </a>
          <a href="#/sobrenos">
          <img src="./imagens/facebook.webp" width={30}></img>
          </a>
          </section>
        <h4>Entre em contato</h4>
        <section>
      <input className="footerinput" type="email" placeholder="Digite seu email"/>
      <button className="footerbutton">Inscrer</button> 
        </section>
      </div>
            <div className="coluna-footer">
        <h3>Nos encontre</h3>
        <a href="https://maps.app.goo.gl/qvnzro8xRR8vmB5m7" target="_blank" rel="noopener noreferrer">R. Dr. Sá Carneiro 235, 3700-255 São João da Madeira</a>
        <h4>Horarios de nossas reuniões</h4>
        <p>Quinta-feira: 10h e 20h</p>
        <p>Domingo as 9h</p>
      </div>
     <p className="direitosReservados">&copy; {new Date().getFullYear()} Avivamento & Restauração - SJM todos os direitos reservados</p>
    </footer>
  );
}