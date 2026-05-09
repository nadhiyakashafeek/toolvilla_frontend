import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="1021030260429-9s5aqmj01srjo1vcorhrsh8rruamdq1a.apps.googleusercontent.com">
        <App />

      </GoogleOAuthProvider>;


    </BrowserRouter>

  </StrictMode>,
)
