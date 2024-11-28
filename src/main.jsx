import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * Punto de entrada principal de la aplicación React.
 * 
 * Este archivo se encarga de inicializar la aplicación en el DOM y asegurar que se ejecute en modo estricto
 * de React, lo que ayuda a detectar problemas potenciales en el desarrollo.
 * 
 * @returns {JSX.Element} Componente raíz de la aplicación renderizado en el DOM.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
