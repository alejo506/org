import './MyOrg.css';

/**
 * Componente MyOrg que muestra una vista de la organización y un botón para agregar un nuevo miembro.
 * 
 * Este componente es responsable de mostrar el título de la organización y un botón que
 * permite activar o desactivar un formulario, a través de la función `formVisibility`.
 * 
 * @param {Object} props - Propiedades pasadas al componente.
 * @param {function} props.formVisibility - Función que maneja la visibilidad del formulario.
 * @returns {JSX.Element} Componente MyOrg.
 */
const MyOrg = ({ formVisibility }) => {
    return (
        <section className="orgSection">
            <div className="orgContainer">
                <h3>My organization</h3>
                <img src="/img/bttAdd.svg" alt="add" onClick={formVisibility} />
            </div>
        </section>
    );
}

export default MyOrg;
