import React from 'react'
import ReactDOM from 'react-dom/client'
import Base from './screens/Base.tsx'
import './index.css'
import './styles/normilize.css'
import './styles/common.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Base />
  </React.StrictMode>,
)
