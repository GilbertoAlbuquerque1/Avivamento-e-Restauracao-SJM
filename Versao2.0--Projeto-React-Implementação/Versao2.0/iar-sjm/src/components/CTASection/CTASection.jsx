import { Link } from 'react-router-dom';
import './CTASection.css';

const CTASection = ({ title, buttonText, buttonLink, variant = 'default' }) => {
  return (
    <section className={`cta-section ${variant === 'warm' ? 'cta-warm' : ''}`}>
      <div className="container cta-container">
        <h2 className="cta-title">{title}</h2>
        {buttonText && (
          <Link to={buttonLink} className="btn btn-primary cta-btn">
            {buttonText} <span>→</span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default CTASection;
