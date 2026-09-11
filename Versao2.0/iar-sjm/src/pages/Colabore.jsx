import { useState } from "react";

export default function Colabore() {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <main>
      <h1 className="temapagina">Colabore</h1>
      <picture>
        <source
          media="(max-width: 750px)"
          srcSet="/imagens/colaborep.png"
          type="image/png"
        />
        <img
          className="imgcontribua"
          src="/imagens/colabore.png"
          alt="banerdizimoseofertasigreja"
          width="auto"
        />
      </picture>

      <div className="colabore">
        <p>
          Existem diversas formas de nos ajudar, e algumas delas são através de
          Dízimos, Ofertas e Primícias.
        </p>

        <div className="contribua">
          <section>
            <img
              className="contribuaimg"
              src="/imagens/mbwaynovo.png"
              alt="MB_WAY avivaerestaura_sjm"
              height="150"
            />
            <h2>915 873 005</h2>
            <button
              type="button"
              onClick={() => handleCopy("915873005", "mbway")}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                backgroundColor: "var(--cor4)",
                color: "var(--cor1)",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "var(--txt2)",
                fontSize: "14px",
              }}
            >
              {copiedField === "mbway" ? "✓ Copiado!" : "Copiar Número"}
            </button>
          </section>

          <section>
            <img
              className="contribuaimg"
              src="/imagens/ca_agricola_logo.png"
              alt="IBAN avivaerestaura_sjm"
            />
            <h2>IBAN: PT50 0045 3092 4039 2601 3474 6</h2>
            <button
              type="button"
              onClick={() =>
                handleCopy("PT50004530924039260134746", "iban")
              }
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                backgroundColor: "var(--cor4)",
                color: "var(--cor1)",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontFamily: "var(--txt2)",
                fontSize: "14px",
              }}
            >
              {copiedField === "iban" ? "✓ Copiado!" : "Copiar IBAN"}
            </button>
          </section>
        </div>

        <h3 className="txtvericulo">
          2 Coríntios 9:7
          <br />
          Cada um dê conforme determinou em seu coração, não com pesar ou por
          obrigação, pois Deus ama quem dá com alegria.
        </h3>
      </div>
    </main>
  );
}
