import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { AppProviders } from '@/app/providers'
import AppRoutes from '@/app/routes'

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
)