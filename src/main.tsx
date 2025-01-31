import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router-dom'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import Beranda from './page/public/Beranda.tsx'
import Login from './page/auth/Login.tsx'
import Regsiter from './page/auth/Register.tsx'
import Analitik from './page/admin/Analitik.tsx'
import PanelAdmin from './page/admin/PanelAdmin.tsx'
import DataPengajuan from './page/admin/DataPengajuan.tsx'
import Dashboard from './page/user/Dashboard.tsx'
import PengajuanModal from './page/user/PengajuanModal.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Beranda />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Regsiter />} />

      <Route path='admin' element={<PanelAdmin />} >
        <Route index={true} element={<Analitik />} />
        <Route path='analitik' element={<Analitik />} />
        <Route path='data-pengajuan' element={<DataPengajuan />} />
      </Route >

      <Route path='user/dashboard' element={<Dashboard />} />
      <Route path='user/pengajuan-modal' element={<PengajuanModal />} />
    </Route >
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
