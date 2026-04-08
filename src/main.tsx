import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'
import SmoothScroll from './components/Scroll/SmoothScroll.tsx'
import "./i18n";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScroll>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <App />
        <ToastContainer />
      </ThemeProvider>
    </SmoothScroll>
  </StrictMode>,
)