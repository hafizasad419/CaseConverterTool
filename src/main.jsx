import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom'
import { Home, Layout, Header, Footer, BigTextConverter, BubbleTextGenerator, BoldTextGenerator, FacebookFontGenerator, DuplicateLineRemover, CursedTextTool, MirrorTextGenerator, ItalicTextConverter, InvisibleTextGenerator } from './components'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>

      <Route path='' element={<Home />} />




      <Route path="/convert-case/big-text-converter"
        element={<BigTextConverter />} />
      <Route path="/convert-case/bold-text-generator"
        element={<BoldTextGenerator />} />
      <Route path="/convert-case/bubble-text-generator"
        element={<BubbleTextGenerator />} />
      <Route path="/convert-case/cursed-text-tool" element={<CursedTextTool />} />
      <Route path="/convert-case/duplicate-line-remover" element={<DuplicateLineRemover />} />
      <Route path="/convert-case/facebook-font-generator" element={<FacebookFontGenerator />} />
      <Route path="/convert-case/invisible-text-generator" element={<InvisibleTextGenerator />} />
      <Route path="/convert-case/italic-text-converter" element={<ItalicTextConverter />} />
      <Route path="/convert-case/mirror-text-generator" element={<MirrorTextGenerator />} />


    </Route>
  )
)





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
