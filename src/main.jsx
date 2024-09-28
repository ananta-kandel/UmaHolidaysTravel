import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Routess from './routes/routes.jsx';
import { ChakraProvider } from '@chakra-ui/react'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ChakraProvider>
   
  <StrictMode>
  <Routess/>
  </StrictMode>
  
  </ChakraProvider>
  </BrowserRouter>
  
)
