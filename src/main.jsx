import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '../assets/App.jsx'

const root = document.getElementById('root')
createRoot(root).render(
  React.createElement(React.StrictMode, null, React.createElement(App))
)
