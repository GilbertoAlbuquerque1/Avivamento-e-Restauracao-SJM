import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="rodape">
          <Link to="/nos-encontre" title="Ver Localização">
            <img src="/imagens/localizacao.png" alt="Localização" height="35" />
          </Link>
        </section>

        <section className="rodape">
          <a
            href="https://wa.me/351969879724"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            title="Contato WhatsApp"
          >
            <img src="/imagens/whats.png" alt="WhatsApp" height="31" />
          </a>
          <a
            href="mailto:gilbertogian.rs@gmail.com"
            className="email-float"
            target="_blank"
            rel="noopener noreferrer"
            title="Enviar E-mail"
          >
            <img src="/imagens/gmail.png" alt="Gmail" height="25" />
          </a>
        </section>

        <section className="rodape">
          <a
            href="https://www.youtube.com/@AvivamentoeRestaura%C3%A7%C3%A3o-SJM"
            target="_blank"
            rel="noopener noreferrer"
            title="Canal no YouTube"
          >
            <img src="/imagens/logo_youtube.png" alt="YouTube" height="29" />
          </a>
          <a
            href="https://www.instagram.com/avivaerestaura_sjm/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <img src="/imagens/instagramb.png" alt="Instagram" height="30" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100067635055262"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <img src="/imagens/facebook.webp" alt="Facebook" height="30" />
          </a>
        </section>
      </footer>
      <p className="txtfooter">
        © 2026 Avivamento &amp; Restauração – SJM Todos os direitos reservados
      </p>
    </>
  );
}
