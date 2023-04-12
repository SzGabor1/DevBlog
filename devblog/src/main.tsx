import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Blog from './Blog'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Blog />
  </React.StrictMode>,
)
