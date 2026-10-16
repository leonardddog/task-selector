import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@npm-questionpro/wick-ui-lib/dist/style.css'
import '@npm-questionpro/wick-ui-icon/dist/wu-icon.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
