import './CustomField.css';

/**
 * Componente de campo personalizado.
 * 
 * Este componente representa un campo de entrada (input) configurable. Soporta diferentes tipos de entrada 
 * como texto o color, y permite manejar dinámicamente los valores ingresados.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Etiqueta del campo que será mostrada al usuario.
 * @param {string} props.placeholder - Texto de marcador de posición dentro del campo de entrada.
 * @param {boolean} props.required - Indica si el campo es obligatorio.
 * @param {string} props.inputValue - Valor actual del campo de entrada.
 * @param {Function} props.setInputValue - Función para actualizar el valor del campo de entrada.
 * @param {string} [props.type="text"] - Tipo del campo de entrada (por defecto "text"). Envia el valor de color, y si no lo tiene coloca "text" por defecto 
 * 
 * @returns {JSX.Element} Componente que representa un campo de entrada personalizado.
 */
const CustomField = ({ title, placeholder, required, inputValue, setInputValue, type = "text" }) => {

    /**
     * Maneja los cambios en el campo de entrada.
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio.
     */
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className={`inputfield inputfield-${type}`}>
            <label>{title}</label>
            <input 
                placeholder={placeholder} 
                required={required} 
                value={inputValue} 
                onChange={handleChange} 
                type={type} 
            />
        </div>
    );
};

export default CustomField;
