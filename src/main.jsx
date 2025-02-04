import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, HashRouter as Router, RouterProvider } from 'react-router-dom'
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     < Route path='/' element={<App/>}>
//       <Route/>
//     </Route>
//   )
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
    <Router>
      <App/>
    </Router>  {/*//USED WITH BROWSER ROUTER*/ }
  </StrictMode>,
)
