import React from 'react'
// @ts-expect-error - HiUI type declarations issue
import Menu from "@hi-ui/menu"
import { NavTitle } from './NavTitle'
import { MegaMenu } from './MegaMenu'
import { useNavMenu } from '../hooks/useNavMenu'
import { useMediaQuery } from '../hooks/useMediaQuery'

export const DropdownNavBar: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 1250px)')
  const { activeMenuId, setActiveMenuId, navMenuData, handleMenuItemClick, isSimpleDropdown } = useNavMenu()

  // 如果屏幕宽度小于1250px，不渲染组件
  if (!isDesktop) {
    return null
  }

  return (
    <div className="dropdown-navbar" style={{ position: 'relative' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '0 20px',
        height: '60px',
        borderBottom: '1px solid #e8e8e8',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={() => setActiveMenuId(null)}
      >
        {/* 小米Logo */}
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: '#ff6700',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '40px',
          cursor: 'pointer'
        }}
        onClick={() => window.location.href = '/'}
        >
          <span style={{
            color: '#fff',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif'
          }}>
            MI
          </span>
        </div>

        {/* 导航菜单 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navMenuData.map((menuItem) => {
            if (isSimpleDropdown(menuItem.id)) {
              return (
                <NavTitle
                  key={menuItem.id}
                  active={activeMenuId === menuItem.id}
                  onMouseEnter={() => setActiveMenuId(menuItem.id)}
                  onMouseLeave={() => setActiveMenuId(null)}
                >
                  {menuItem.title}
                </NavTitle>
              )
            }
            return (
              <NavTitle
                key={menuItem.id}
                active={activeMenuId === menuItem.id}
                onMouseEnter={() => setActiveMenuId(menuItem.id)}
              >
                {menuItem.title}
              </NavTitle>
            )
          })}
        </div>

        {/* 搜索框 */}
        <div style={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #e8e8e8',
          borderRadius: '24px',
          padding: '0 16px',
          backgroundColor: '#fafafa',
          minWidth: '300px'
        }}>
          <input
            type="text"
            placeholder="耳机"
            style={{
              border: 'none',
              outline: 'none',
              background: 'transparent',
              padding: '12px 0',
              fontSize: '14px',
              flex: 1,
              color: '#333'
            }}
          />
          <div style={{
            width: '1px',
            height: '20px',
            backgroundColor: '#e8e8e8',
            margin: '0 8px'
          }} />
          <div style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M11.7422 10.3439C12.5329 9.2673 13 7.9385 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C7.9385 13 9.2673 12.5329 10.3439 11.7422L14.2929 15.6914C14.6834 16.0819 15.3166 16.0819 15.7071 15.6914C16.0976 15.3009 16.0976 14.6677 15.7071 14.2772L11.7422 10.3439ZM6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 8.98528 8.98528 11 6.5 11Z"
                fill="#666"
              />
            </svg>
          </div>
        </div>
        {/* 悬浮面板：横向 Menu */}
        {activeMenuId && !isSimpleDropdown(activeMenuId) && (() => {
          const activeChildren = (navMenuData.find(g => g.id === activeMenuId)?.children || []) as unknown as { id: string | number; title: React.ReactNode }[]
          const isCardMode = activeChildren.some((c) => typeof (c as { title: unknown }).title !== 'string')
          const cols = Math.max(activeChildren.length, 1)
          return (
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 60,
                backgroundColor: '#fff',
                border: '1px solid #e8e8e8',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                borderRadius: 12,
                padding: isCardMode ? '24px 28px' : '10px 16px',
                zIndex: 1000,
                minHeight: isCardMode ? 250 : 40
              }}
              onMouseLeave={() => setActiveMenuId(null)}
            >
              {isCardMode ? (
                <MegaMenu columns={cols} data={activeChildren} onClick={handleMenuItemClick} />
              ) : (
                <div className="simple-menu-scope">
                  <Menu
                    placement="horizontal"
                    // @ts-expect-error - HiUI type declarations issue
                    onClick={(id) => handleMenuItemClick(id as string | number)}
                    data={activeChildren}
                  />
                  <style>{`
                    .simple-menu-scope .hi-v4-menu--horizontal { background: transparent; }
                    .simple-menu-scope .hi-v4-menu--horizontal .hi-v4-menu-item { height: 40px; padding: 0 12px; }
                    .simple-menu-scope .hi-v4-menu--horizontal .hi-v4-menu-item__inner { height: 40px; border-bottom: none; }
                    .simple-menu-scope .hi-v4-menu--horizontal .hi-v4-menu-item:hover .hi-v4-menu-item__inner { border-bottom: none; }
                  `}</style>
                </div>
              )}
            </div>
          )
        })()}
      </div>
    </div>
  )
}

export default DropdownNavBar
