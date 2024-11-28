import "./Footer.css";

/**
 * Componente de pie de página (Footer).
 * 
 * Este componente representa el pie de página del sitio, que incluye enlaces a redes sociales,
 * un logotipo y un texto de créditos del desarrollador.
 * 
 * @returns {JSX.Element} Pie de página del sitio web.
 */
const Footer = () => {
    return (
        <footer 
            className="footer" 
            style={{ backgroundImage: "url(/img/footer.png)" }}
        >
            {/* Sección de redes sociales */}
            <div className="social-media">
                <a href="https://www.facebook.com/" aria-label="Facebook">
                    <img src="/img/facebook.svg" alt="Facebook" />
                </a>
                <a href="https://x.com/?lang=es" aria-label="Twitter">
                    <img src="/img/twitter.svg" alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/" aria-label="Instagram">
                    <img src="/img/instagram.svg" alt="Instagram" />
                </a>
            </div>

            {/* Logotipo del sitio */}
            <img src="/img/logo.svg" alt="Logo de la organización" />

            {/* Créditos del desarrollador */}
            <strong>Developed by Alejandro CM</strong>
        </footer>
    );
};

export default Footer;
