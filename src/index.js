import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { CommomProvider } from './contexts/CommonContext'
import { AuthStorageProvider } from './contexts/AuthContext'
import './_index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CommomProvider>
      <AuthStorageProvider>
        <Router>
          <App />
        </Router>
      </AuthStorageProvider>
    </CommomProvider>
  </React.StrictMode>
)
