import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Keyboard from './components/keyboard.jsx'
import Grid from './components/Grid.jsx'
import Cell
 from './components/Cell.jsx'
import './index.css'
import CurrentRow from './components/CurrentRow.jsx'
import CompletedRow from './components/CompletedRow.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
