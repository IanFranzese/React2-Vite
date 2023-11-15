import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './componentes/Header/Header.jsx'
import About from './componentes/About/About.jsx'
import Contact from './componentes/Contact/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <About />
    <Contact />
  </React.StrictMode>,
)
