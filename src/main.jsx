import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFirebase } from './shared/FirebaseProvider'
(async () => {
  const firebase = await initFirebase()

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App firebase={firebase}/>
    </React.StrictMode>,
  )
})()

