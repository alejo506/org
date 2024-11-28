import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FormContainer from './components/FormContainer/FormContainer';
import MyOrg from './components/MyOrg';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuid } from 'uuid';

function App() {
  //! State Hooks

  /**
   * Controla la visibilidad del formulario.
   * @type {boolean}
   */
  const [toggleForm, setToggleForm] = useState(true);

  /**
   * Lista de colaboradores con su respectiva información.
   * Se inicializa desde localStorage o como un array vacío.
   * @type {Array<Object>}
   */
  const [collaboratorsTeam, setCollaborators] = useState(() => {
    const savedCollaborators = localStorage.getItem('collaboratorsTeam');
    return savedCollaborators
      ? JSON.parse(savedCollaborators).map(collaborator => ({
          ...collaborator,
          id: collaborator.id || uuid(), // Genera un ID si no existe
        }))
      : []; //En este arreglo se almacenan los colaboradores
  });

  /**
   * Lista de equipos con su respectiva información.
   * Se inicializa desde localStorage o como un array vacío.
   * @type {Array<Object>}
   */
  const [teams, setTeams] = useState(() => {
    const savedTeams = localStorage.getItem('teams');
    return savedTeams
      ? JSON.parse(savedTeams).map(team => ({
          ...team,
          id: team.id || uuid(), // Genera un ID si no existe
        }))
      : []; //En este arreglo se almacenan los disenos de los equipos
  });

  //! Effects

  /**
   * Guarda `collaboratorsTeam` en localStorage cada vez que cambia.
   */
  useEffect(() => {
    localStorage.setItem('collaboratorsTeam', JSON.stringify(collaboratorsTeam));
  }, [collaboratorsTeam]);

  /**
   * Guarda `teams` en localStorage cada vez que cambia.
   */
  useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(teams));
  }, [teams]);

  //! Functions

  /**
   * Alterna la visibilidad del formulario.
   */
  const formVisibility = () => {
    setToggleForm(!toggleForm);
  };

  /**
   * Registra un nuevo colaborador.
   * @param {Object} collaborator - Datos del colaborador.
   */
  const registerCollaborator = collaborator => {
    setCollaborators([...collaboratorsTeam, collaborator]);
  };

  /**
   * Elimina un colaborador por su ID.
   * @param {string} id - ID del colaborador a eliminar.
   */
  const deleteCollaborator = id => {
    const newCollaborators = collaboratorsTeam.filter(
      collaborator => collaborator.id !== id
    );
    setCollaborators(newCollaborators);
  };

  /**
   * Actualiza el color principal de un equipo.
   * @param {string} color - Nuevo color para el equipo.
   * @param {string} id - ID del equipo a actualizar.
   */
  const updateTeamColor = (color, id) => {
    const updatedTeams = teams.map(team => {
      if (team.id === id) {
        team.primaryColor = color;
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  /**
   * Crea un nuevo equipo.
   * @param {Object} newTeam - Datos del nuevo equipo.
   */
  const createTeam = newTeam => {
    const newTeams = [...teams, { ...newTeam, id: uuid() }];
    setTeams(newTeams);
  };

  /**
   * Alterna el estado de "like" para un colaborador.
   * @param {string} id - ID del colaborador.
   */
  const like = id => {
    const updatedCollaborators = collaboratorsTeam.map(collaborator => {
      if (collaborator.id === id) {
        collaborator.fav = !collaborator.fav;
      }
      return collaborator;
    });
    setCollaborators(updatedCollaborators);
  };

  //! Render

  return (
    <>
      {/* 1. Header */}
      <Header />

      {/* 2. Form */}
      {toggleForm && (
        <FormContainer
          teamNames={teams.map(team => team.titleTeam)} // Solo títulos de equipos
          registerCollaborator={registerCollaborator}
          createTeam={createTeam}
        />
      )}

      {/* 3. MyOrg (control de visibilidad del formulario) */}
      <MyOrg formVisibility={formVisibility} />

      {/* 4. Teams */}
      {teams.map(team => (
        <Team
          teamData={team}
          key={team.titleTeam}
          collaborators={collaboratorsTeam.filter(
            collaborator => collaborator.dropDownTeam === team.titleTeam
          )}
          deleteCollaborator={deleteCollaborator}
          updateTeamColor={updateTeamColor}
          like={like}
        />
      ))}

      {/* 5. Footer */}
      <Footer />
    </>
  );
}

export default App;
