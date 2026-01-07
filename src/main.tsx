import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster 
      theme='dark'
      position='top-center'
      toastOptions={{
        className: 'bg-neutral-900 border border-neutral-800 text-white',

      }}
    />
  </StrictMode>
)
