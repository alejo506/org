import './Collaborator.css';
import { IoMdCloseCircle, IoMdHeartEmpty, IoMdHeart } from "react-icons/io"; // Iconos de React

/**
 * Componente para representar a un colaborador.
 * 
 * Este componente muestra la información de un colaborador, incluyendo su nombre, rol, foto, 
 * y si tiene marcado como favorito. También incluye opciones para eliminar al colaborador 
 * o alternar el estado de "favorito".
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.dataCollaborator - Datos del colaborador.
 * @param {string} props.dataCollaborator.inputName - Nombre del colaborador.
 * @param {string} props.dataCollaborator.inputRole - Rol del colaborador.
 * @param {string} props.dataCollaborator.inputPhoto - URL de la foto del colaborador.
 * @param {string} props.dataCollaborator.dropDownTeam - Nombre del equipo al que pertenece.
 * @param {string} props.dataCollaborator.id - Identificador único del colaborador.
 * @param {boolean} props.dataCollaborator.fav - Indica si el colaborador es favorito.
 * @param {string} props.primaryColor - Color principal asociado al equipo.
 * @param {Function} props.deleteCollaborator - Función para eliminar al colaborador.
 * @param {Function} props.like - Función para alternar el estado de "favorito" del colaborador.
 * 
 * @returns {JSX.Element} Componente que representa al colaborador.
 */
const Collaborator = ({ dataCollaborator, primaryColor, deleteCollaborator, like }) => {
    const { inputName, inputRole, inputPhoto, id, fav } = dataCollaborator;

    return (
        <div className="collaborator">
            {/* Botón para eliminar colaborador */}
            <IoMdCloseCircle 
                className="delete" 
                onClick={() => deleteCollaborator(id)} 
            />
            
            {/* Encabezado con la foto del colaborador y el color de fondo */}
            <div 
                className="collaborator__header" 
                style={{ backgroundColor: primaryColor }}
            >
                <img src={inputPhoto} alt={inputName} />
            </div>
            
            {/* Información del colaborador */}
            <div className="info">
                <h4>{inputName}</h4>
                <h5>{inputRole}</h5>
                
                {/* Ícono de favorito (relleno si es favorito, vacío si no) */}
                {fav ? (
                    <IoMdHeart color="red" onClick={() => like(id)} />
                ) : (
                    <IoMdHeartEmpty onClick={() => like(id)} />
                )}
            </div>
        </div>
    );
};

export default Collaborator;
