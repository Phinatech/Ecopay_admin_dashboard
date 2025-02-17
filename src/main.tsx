import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import IsLoading from './Pages/isLoading/IsLoading'
import { RouterProvider } from 'react-router-dom'
import { DesktopRouter } from './Routes/MainRoutes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}

    <Suspense fallback={<IsLoading/>}>
        <RouterProvider router={DesktopRouter}/>
    </Suspense>
  </React.StrictMode>,
)
