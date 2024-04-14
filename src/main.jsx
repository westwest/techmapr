import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FirebaseProvider, { initFirebase } from './shared/FirebaseProvider'
(async () => {
  const firebase = await initFirebase()

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <FirebaseProvider firebaseApp={firebase}>
        <App />
      </FirebaseProvider>
    </React.StrictMode>,
  )
})()

