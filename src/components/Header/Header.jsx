import headerImage from '/img/header.svg';
import './Header.css';

/**
 * Componente Header que muestra una imagen representativa del encabezado.
 * 
 * Este componente se utiliza como encabezado principal de la aplicación,
 * mostrando una imagen que se importa desde los recursos estáticos.
 * 
 * @returns {JSX.Element} Componente Header.
 */
function Header() {
    return (
        <header className="header">
            <img src={headerImage} alt="Org" />
        </header>
    );
}

export default Header;
