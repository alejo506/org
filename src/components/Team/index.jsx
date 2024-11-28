import './Team.css';
import Collaborator from '../Collaborator';
import hexToRgba from 'hex-to-rgba'; // Nos permite cambiar tanto el color primario y secundario utilizando opacidad

/**
 * Componente Team que muestra un equipo con sus colaboradores y permite cambiar el color de fondo del equipo.
 * 
 * Este componente recibe los datos de un equipo, muestra sus colaboradores y permite actualizar el color de fondo
 * mediante un input de tipo color. También permite eliminar colaboradores y gestionar la interacción con el botón de "me gusta".
 * 
 * @param {Object} props - Propiedades pasadas al componente.
 * @param {Object} props.teamData - Datos del equipo que incluye el título, color primario, color secundario y ID.
 * @param {Array} props.collaborators - Lista de colaboradores asociados al equipo.
 * @param {function} props.deleteCollaborator - Función para eliminar un colaborador.
 * @param {function} props.updateTeamColor - Función para actualizar el color del equipo.
 * @param {function} props.like - Función para gestionar la interacción de "me gusta" en el equipo.
 * @returns {JSX.Element} Componente Team.
 */
const Team = ({ teamData, collaborators, deleteCollaborator, updateTeamColor, like }) => {
    
    const { titleTeam, primaryColor, secundaryColor, id } = teamData;

    // Establece el color de fondo utilizando el color primario con opacidad
    const obj = {
        backgroundColor: hexToRgba(primaryColor, 0.6),
    }

    return (
        <>
        {
            // Solo muestra el equipo si tiene colaboradores
            collaborators.length > 0 &&  // Devuelve true o false dependiendo si hay colaboradores

            <section className="team" style={obj}> 
                {/* Input para cambiar el color de fondo del equipo */}
                <input 
                    type="color"
                    className='input-color' 
                    value={primaryColor} 
                    onChange={(event) => {
                        updateTeamColor(event.target.value, id); //Agregamos la función para actualizar el color de la bandera al cambiar el color del input, enviamos el color y el titulo del equipo al que le cambiamos el color Ej: #99b9c7 id
                    }} 
                />

                <h3 style={{ borderBottomColor: primaryColor }}>{titleTeam}</h3>
                <div className='collaborators'>
                    {
                        // Mapea y muestra cada colaborador del equipo
                        collaborators.map((collaborator, index) => (
                            <Collaborator 
                                dataCollaborator={collaborator} 
                                key={index} 
                                primaryColor={primaryColor}
                                deleteCollaborator={deleteCollaborator} // Función para eliminar un colaborador
                                like={like} // Función de "me gusta"
                            />
                        ))
                    }
                </div>
            </section>
        }
        </>
    );
}

export default Team;
