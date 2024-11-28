# My Organization - Web Application

## Descripción

**My Organization** es una aplicación web diseñada para gestionar equipos y colaboradores dentro de una organización. Los usuarios pueden crear equipos, asignar colaboradores a los equipos y personalizar los detalles de cada colaborador. Además, la aplicación permite editar los colores de los equipos y gestionar la información de los colaboradores.

## Dependencias

El proyecto utiliza las siguientes dependencias:

- **hex-to-rgba**: `^2.0.1` - Para convertir colores hexadecimales a valores RGBA con opacidad.
- **react-icons**: `^5.3.0` - Para usar íconos en la interfaz de usuario.
- **uuid**: `^11.0.3` - Para generar identificadores únicos universales (UUID) para los colaboradores y equipos.

## Tecnologías utilizadas

- **React**: ⚛️ Biblioteca para construir la interfaz de usuario.
- **Vite**: 🚀 Herramienta de construcción y desarrollo rápida para aplicaciones web modernas.
- **Google Fonts**: 🖋️ Usado para cargar fuentes personalizadas como "Montserrat" a través de un enlace en el archivo `index.html`.
- **CSS**: 🎨 Estilos personalizados para la presentación de la aplicación.

## Carga de Fuentes

Las fuentes de Google se cargan directamente desde el archivo `index.html` mediante un enlace en la sección `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
Patrones de Diseño utilizados
Lifting State Up: 🏗️ Este patrón de diseño se utiliza para manejar el estado de la aplicación de manera centralizada. En esta aplicación, el componente App.jsx es el responsable de almacenar los datos y el estado. A través de props, se pasa la información a los componentes hijos y sub-hijos (nietos). Si un componente sub-hijo necesita acceder a datos almacenados en App.jsx, debe comunicarse con su respectivo componente padre, quien a su vez se comunicará con App.jsx para obtener o modificar esos datos. Este patrón facilita la gestión del estado y asegura que los datos estén centralizados y actualizados en toda la aplicación.
Estructura de Componentes
El componente más alto, el padre de todos, es App.jsx, que almacena los datos de manera centralizada y gestiona el estado de la aplicación. La comunicación entre los componentes sigue el patrón de Lifting State Up, en el que los componentes padres gestionan el estado y lo pasan a los componentes hijos mediante props.

Comunicación entre Componentes
App.jsx: Es el componente central donde se almacenan los datos y el estado de la aplicación. Los datos almacenados en App.jsx pueden ser enviados hacia los componentes hijos y sub-hijos (nietos) a través de props.

Comunicación entre Padres e Hijos: Los componentes padres pueden enviar datos a sus hijos (y viceversa) a través de props. Los hijos, que son los componentes directamente debajo del padre, pueden enviar datos de vuelta al padre mediante funciones que son pasadas como props.

Comunicación entre Hijos y Sub-hijos (Nietos): Si un componente sub-hijo (nieto) necesita datos almacenados en App.jsx, primero debe comunicarse con su componente padre, quien a su vez se comunicará con App.jsx. Esta estructura asegura que todo el estado y la información estén centralizados en App.jsx, pero mantiene la comunicación fluida entre los componentes de la jerarquía.

Componentes e Hijos
App.jsx
Componente principal que actúa como el contenedor y gestiona los datos de la aplicación. A partir de este componente, se pasan los estados y las funciones a los componentes hijos mediante props.

FormContainer
Es un contenedor para el formulario de creación de colaboradores y equipos. Sus hijos son:

ButtonElement: 🖲️ Renderiza un botón reutilizable para el formulario.
CustomField: 📝 Muestra un campo de entrada de texto personalizado.
DropDown: 🔽 Muestra una lista desplegable para seleccionar un equipo.
Team
Este componente representa un equipo y muestra los colaboradores asignados a él. El hijo de Team es:

Collaborator: 👥 Este componente muestra los detalles de un colaborador, incluyendo su nombre, rol, foto, y permite editar o eliminar al colaborador.
Estructura de Archivos
Todos los componentes, excepto App.jsx, están dentro de una carpeta llamada components. Además, se ha creado una carpeta para cada componente con su respectivo archivo index.jsx y index.css para mantener la organización del proyecto.

plaintext
Copy code
src/
├── components/
│   ├── ButtonElement/
│   │   ├── index.jsx
│   │   └── ButtonElement.css
│   ├── Collaborator/
│   │   ├── index.jsx
│   │   └── Collaborator.css
│   ├── CustomField/
│   │   ├── index.jsx
│   │   └── CustomField.css
│   ├── DropDown/
│   │   ├── index.jsx
│   │   └── DropDown.css
│   ├── Footer/
│   │   ├── index.jsx
│   │   └── Footer.css
│   ├── FormContainer/
│   │   ├── index.jsx
│   │   └── FormContainer.css
│   ├── Header/
│   │   ├── index.jsx
│   │   └── Header.css
│   ├── MyOrg/
│   │   ├── index.jsx
│   │   └── MyOrg.css
│   └── Team/
│       ├── index.jsx
│       └── Team.css
└── App.jsx
Componentes
ButtonElement
Componente reutilizable que renderiza botones con un estilo común para toda la aplicación. Recibe como propiedad el texto a mostrar.

Collaborator
Este componente se utiliza para mostrar la información de un colaborador dentro de un equipo. Permite ver su foto, nombre, rol, y proporciona botones para eliminar o marcar al colaborador como favorito (darle "like").

CustomField
Componente que muestra un campo de entrada de texto personalizado con una etiqueta, un campo de entrada y soporte para validación. Permite la creación de formularios para agregar colaboradores y equipos, con personalización en cuanto a tipo de campo (texto, color, etc.).

DropDown
Componente de selección desplegable que permite elegir un equipo de una lista preexistente. Ideal para asignar colaboradores a equipos durante la creación de nuevos colaboradores.

Footer
El pie de página contiene enlaces a redes sociales y una firma del desarrollador de la aplicación. Es un componente simple pero esencial para cerrar la página y ofrecer enlaces de contacto.

FormContainer
Componente que alberga los formularios para crear nuevos colaboradores y equipos. Contiene campos de entrada para el nombre, rol, foto, equipo y color de los equipos, gestionando el estado de los formularios de manera eficiente.

Header
El encabezado de la aplicación muestra una imagen de bienvenida y puede incluir más elementos según las necesidades. Es la primera parte visible al cargar la página.

MyOrg
Componente que muestra el nombre de la organización y ofrece un botón para agregar nuevos colaboradores a la organización. Permite al usuario abrir el formulario de creación de colaboradores.

Team
Este componente muestra un equipo junto con sus colaboradores. Cada equipo tiene un color principal personalizable y se pueden ver los detalles de cada colaborador en el equipo. Además, se pueden eliminar colaboradores y cambiar el color del equipo.