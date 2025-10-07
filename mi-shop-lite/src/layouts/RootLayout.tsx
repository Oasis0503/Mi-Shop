import React from 'react'
import { Outlet } from 'react-router-dom'
import { TopNavbar } from '../components'
import { DropdownNavBar } from '../components/DropdownNavBar'

export default function RootLayout() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#333',
      color: '#fff',
      margin: 0,
      padding: 0
    }}>
      <TopNavbar />
      <DropdownNavBar />
      <main style={{ 
        flex: 1,
        padding: '20px',
        backgroundColor: '#333'
      }}>
        <Outlet />
      </main>
      <footer style={{ 
        padding: '16px 20px',
        borderTop: '1px solid #444',
        backgroundColor: '#333',
        color: '#ccc',
        textAlign: 'center'
      }}>
        © Mi Shop
      </footer>
    </div>
  )
}