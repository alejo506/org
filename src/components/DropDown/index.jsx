import './DropDown.css';

/**
 * Componente de lista desplegable (DropDown).
 * 
 * Este componente permite al usuario seleccionar un valor de un conjunto de opciones, como una lista de nombres de equipos.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.dropDownValue - Valor seleccionado actualmente en el menú desplegable.
 * @param {Function} props.setDropDownValue - Función para actualizar el valor seleccionado.
 * @param {boolean} props.required - Indica si seleccionar un valor es obligatorio.
 * @param {Array<string>} props.teamNames - Lista de nombres de equipos disponibles como opciones en el menú desplegable.
 * 
 * @returns {JSX.Element} Componente que representa un menú desplegable.
 */
const DropDown = ({ dropDownValue, setDropDownValue, required, teamNames }) => {
    /**
     * Maneja los cambios en el valor seleccionado del menú desplegable.
     * 
     * @param {React.ChangeEvent<HTMLSelectElement>} e - Evento de cambio.
     */
    const handleChange = (e) => {
        setDropDownValue(e.target.value);
    };

    return (
        <div className='dropDown'>
            <label>Teams</label>
            <select value={dropDownValue} onChange={handleChange} required={required}>
                {/* Opción por defecto para guiar al usuario */}
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {/* Generar opciones dinámicamente a partir de los nombres de los equipos */}
                {teamNames.map((team, index) => (
                    <option key={index} value={team}>
                        {team}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;
