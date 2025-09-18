import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div>
      <header style={{ padding: 16, borderBottom: '1px solid #eee' }}>
        <strong>Mi Shop</strong>
      </header>
      <main style={{ minHeight: '60vh' }}>
        <Outlet />
      </main>
      <footer style={{ padding: 16, borderTop: '1px solid #eee' }}>© Mi Shop</footer>
    </div>
  )
}