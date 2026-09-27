import './PageHero.css';

const PageHero = ({ title, subtitle, backgroundImage }) => {
  const heroStyle = {
    backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.6) 100%), url('${backgroundImage}')`,
  };

  return (
    <section className="page-hero" style={heroStyle}>
      <div className="container page-hero-container">
        <span className="page-hero-label">{subtitle}</span>
        <h1 className="page-hero-title">{title}</h1>
      </div>
    </section>
  );
};

export default PageHero;
