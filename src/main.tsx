import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './index.css'
import {Home} from'../pages/Home'
import {Prueba} from'../pages/Prueba'
import {Carrusel} from'../pages/Carrusel'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/prueba' element={<Prueba/>}/>
        <Route path='/carrusel' element={<Carrusel/>}/>
      </Routes>
  </StrictMode>,
  </BrowserRouter>

)
