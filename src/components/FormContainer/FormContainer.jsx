import { useState } from 'react';
import './FormContainer.css';
import DropDown from '../DropDown';
import ButtonElement from '../ButtonElement'; 
import CustomField from '../CustomField';

/**
 * Componente contenedor del formulario para crear colaboradores y equipos.
 * 
 * Este componente incluye dos formularios:
 * - Uno para registrar colaboradores.
 * - Otro para crear nuevos equipos.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {string[]} props.teamNames - Lista de nombres de equipos disponibles para el select de equipos.
 * @param {Function} props.registerCollaborator - Función para registrar un nuevo colaborador.
 * @param {Function} props.createTeam - Función para crear un nuevo equipo.
 * @returns {JSX.Element} Componente contenedor del formulario.
 */
const FormContainer = ({ teamNames, registerCollaborator, createTeam }) => {
    // Estados para manejar los datos del formulario de colaboradores
    const [inputName, setInputName] = useState("");
    const [inputRole, setInputRole] = useState("");
    const [inputPhoto, setInputPhoto] = useState("");
    const [dropDownTeam, setDropDownTeam] = useState("");

    // Estados para manejar los datos del formulario de equipos
    const [titleTeam, setTitleTeam] = useState("");
    const [colorTeam, setcolorTeam] = useState("");

    /**
     * Maneja el envío del formulario para registrar colaboradores.
     * 
     * @param {React.FormEvent<HTMLFormElement>} e - Evento de envío del formulario.
     */
    const handleFormSubmission = (e) => { 
        e.preventDefault(); // Previene el envío por defecto

        // Datos del colaborador a registrar
        const sendDataForm = {
            inputName, 
            inputRole,
            inputPhoto,
            dropDownTeam,
        };

        registerCollaborator(sendDataForm); // Llama la función para registrar
    };

    /**
     * Maneja el envío del formulario para crear un equipo.
     * 
     * @param {React.FormEvent<HTMLFormElement>} e - Evento de envío del formulario.
     */
    const handleNewTeam = (e) => {
        e.preventDefault();

        // Crea el equipo con título y color
        createTeam({ 
            titleTeam, 
            primaryColor: colorTeam 
        });
    };

    return (
        <section className="formSection">
            {/* Formulario para crear colaboradores */}
            <form onSubmit={handleFormSubmission}>
                <h2>Fill out the form to create a collaborator profile</h2>
                <CustomField 
                    title="Name" 
                    placeholder="Enter name..." 
                    required={true} 
                    inputValue={inputName} 
                    setInputValue={setInputName} 
                />
                <CustomField 
                    title="Role" 
                    placeholder="Enter role..." 
                    required 
                    inputValue={inputRole} 
                    setInputValue={setInputRole} 
                />
                <CustomField 
                    title="Photo" 
                    placeholder="Enter photo url..." 
                    required 
                    inputValue={inputPhoto} 
                    setInputValue={setInputPhoto} 
                />
                <DropDown 
                    required 
                    dropDownValue={dropDownTeam}  
                    setDropDownValue={setDropDownTeam}
                    teamNames={teamNames}
                />
                <ButtonElement>Create</ButtonElement>
            </form>

            {/* Formulario para crear equipos */}
            <form onSubmit={handleNewTeam}>
                <h2>Fill out the form to create a team</h2>
                <CustomField 
                    title="Title" 
                    placeholder="Enter title..." 
                    required={true} 
                    inputValue={titleTeam} 
                    setInputValue={setTitleTeam} 
                />
                <CustomField 
                    title="Color" 
                    placeholder="Enter Hex color..." 
                    required 
                    inputValue={colorTeam} 
                    setInputValue={setcolorTeam}
                    type="color" //! OJO: Este es el unico input de tipo color en el formulario, y para no agregar un type manualmente a los Componentes input(<CustomTextField ) entonces solo enviamos como propiedad para recibirlo en el componente <CustomTextField, ya que este type envia como valor color, los demas envian un undefined por obvias razones, en el componente <CustomTextField agregamos un valor predeterminado para que no sea undefined y se pueda enviar el color correctamente los demas campos. Con esto hacemos que este campo sea apto para elegir un color

                />
                <ButtonElement>Register Team</ButtonElement>
            </form>
        </section>
    );
};

export default FormContainer;
