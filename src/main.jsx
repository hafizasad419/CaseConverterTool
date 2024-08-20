import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import { Home, Layout, Header, Footer } from './components'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />

  

      

    </Route>
  )
)





createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />

  </StrictMode>,
)
