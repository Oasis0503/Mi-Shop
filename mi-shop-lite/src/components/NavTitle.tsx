import React from 'react'

export interface NavTitleProps {
  active: boolean
  children: React.ReactNode
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const navTitleTextStyle: React.CSSProperties = {
  color: '#333',
  fontSize: '16px',
  fontWeight: 500,
  cursor: 'pointer',
  padding: '8px 0',
  borderBottom: '2px solid transparent',
  transition: 'all 0.3s ease'
}

export const NavTitle: React.FC<NavTitleProps> = ({ active, onMouseEnter, onMouseLeave, children }) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{
      ...navTitleTextStyle,
      borderBottom: active ? '2px solid #ff6700' : '2px solid transparent'
    }}
  >
    {children}
  </div>
)

export default NavTitle


