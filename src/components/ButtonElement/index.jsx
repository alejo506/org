import './ButtonElement.css';

/**
 * Componente de botón reutilizable.
 * 
 * Este componente renderiza un botón con estilo definido en `ButtonElement.css`.
 * Permite que el contenido del botón se pase como `children`.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido a renderizar dentro del botón.
 * @returns {JSX.Element} Componente de botón estilizado.
 */
const ButtonElement = (props) => {
  return <button className="buttonElement">{props.children}</button>;
};

export default ButtonElement;
