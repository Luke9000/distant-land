import React from 'react'
import ReactDOM from 'react-dom/client'
import Base from './screens/Base.tsx'
import Test from './screens/Test.tsx'
import './index.css'
import './styles/normilize.css'
import './styles/common.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
)
