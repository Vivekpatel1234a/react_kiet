import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
//import Useeffect from './Useeffect.jsx'
//import Project from './project.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <Project/> */}
    {/* <Useeffect/> */}
  </StrictMode>,
)