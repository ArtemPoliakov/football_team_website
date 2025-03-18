import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import normalize from './global_styles/normalize.module.css'
import css_variables from './global_styles/global_variables.module.css'
import body_styles from './global_styles/body_styles.module.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
