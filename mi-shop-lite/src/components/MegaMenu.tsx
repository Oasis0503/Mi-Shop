import React from 'react'
// @ts-expect-error - HiUI type declarations issue
import Menu from '@hi-ui/menu'

export interface MegaMenuProps {
  columns: number
  data: { id: string | number; title: React.ReactNode }[]
  onClick: (id: string | number) => void
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ columns, data, onClick }) => {
  return (
    <div className="mega-menu-scope" style={{ ['--cols' as unknown as string]: String(Math.max(columns, 1)) }}>
      <Menu
        placement="horizontal"
        // @ts-expect-error - HiUI type declarations issue
        onClick={(id) => onClick(id as string | number)}
        style={{ width: '100%' }}
        data={data}
      />
      <style>{`
        .mega-menu-scope .hi-v4-menu--horizontal { overflow: visible; background: transparent; }
        .mega-menu-scope .hi-v4-menu--horizontal .hi-v4-menu__wrapper { display: grid !important; grid-template-columns: repeat(var(--cols), 1fr); width: 100%; column-gap: 40px; }
        .mega-menu-scope .hi-v4-menu-item { padding: 0; height: auto; border-right: 1px solid #eee; }
        .mega-menu-scope .hi-v4-menu-item:last-child { border-right: none; }
        .mega-menu-scope .hi-v4-menu--horizontal .hi-v4-menu-item__inner { height: auto; border-bottom: none; align-items: stretch; }
        .mega-menu-scope .hi-v4-menu--horizontal .hi-v4-menu-item:hover .hi-v4-menu-item__inner { border-bottom: none; }
        .mega-menu-scope .hi-v4-menu-item__content { width: 100%; }
      `}</style>
    </div>
  )
}

export default MegaMenu


