import React from 'react'
// @ts-expect-error - HiUI type declarations issue
import Menu from "@hi-ui/menu"
import { CardItem } from './CardItem'
import { NavTitle } from './NavTitle'
import { MegaMenu } from './MegaMenu'
import type { DropdownItem } from '@interfaces'

export const DropdownNavBar: React.FC = () => {
  const PLACEHOLDER = '/images/products/placeholder.svg'
  const [activeMenuId, setActiveMenuId] = React.useState<string | number | null>(null)
  const navTitleTextStyle: React.CSSProperties = {
    color: '#333',
    fontSize: '16px',
    fontWeight: 500,
    cursor: 'pointer',
    padding: '8px 0',
    borderBottom: '2px solid transparent',
    transition: 'all 0.3s ease'
  }

  const renderTitle = (name: string, src?: string, subtitle?: string) => (
    <CardItem name={name} imageSrc={src || PLACEHOLDER} placeholderSrc={PLACEHOLDER} subtitle={subtitle} />
  )

  const createItem = (id: string, name: string, href: string, imageFile?: string, subtitle?: string): DropdownItem => ({
    id,
    href,
    imageUrl: imageFile ? `/images/products/${imageFile}` : undefined,
    title: renderTitle(name, imageFile ? `/images/products/${imageFile}` : undefined, subtitle)
  })
  // 导航菜单数据配置
  const navMenuData: DropdownItem[] = [
    {
      id: 'xiaomi-phone',
      title: 'Xiaomi手机',
      children: [
        createItem('mi17-pro-max', 'Xiaomi 17 Pro Max', '/products/mi17-pro-max', 'mi17-pro-max.jpg', '5999元起'),
        createItem('mi17-pro', 'Xiaomi 17 Pro', '/products/mi17-pro', 'mi17-pro.png', '4999元起'),
        createItem('mi17', 'Xiaomi 17', '/products/mi17', 'mi17.png', '4499元起'),
        createItem('mix-flip2', 'Xiaomi MIX Flip 2', '/products/mix-flip2', 'mix-flip2.png', '5999元起'),
        createItem('mi15s-pro', 'Xiaomi 15S Pro', '/products/mi15s-pro', 'mi15s-pro.png', '5499元起'),
        createItem('civi5-pro', 'Xiaomi Civi 5 Pro', '/products/civi5-pro', 'civi5-pro.png', '2999元起')
      ]
    },
    {
      id: 'redmi-phone',
      title: 'REDMI手机',
      children: [
        createItem('redmi-k80', 'Redmi K80', '/products/redmi-k80', 'redmi-k80.png', '1999元起'),
        createItem('redmi-note15', 'Redmi Note 15', '/products/redmi-note15', 'redmi-note15.png', '1999元起'),
        createItem('redmi-turbo3', 'Redmi Turbo 3', '/products/redmi-turbo3', 'redmi-turbo3.png', '1999元起'),
        createItem('redmi-k70', 'Redmi K70', '/products/redmi-k70', 'redmi-k70.png', '1999元起')
      ]
    },
    {
      id: 'tv',
      title: '电视',
      children: [
        createItem('mi-tv-s85', '小米电视 S85', '/products/mi-tv-s85', 'mi-tv-s85.png', '1999元起'),
        createItem('mi-tv-s75', '小米电视 S75', '/products/mi-tv-s75', 'mi-tv-s75.png', '1999元起'),
        createItem('mi-tv-s65', '小米电视 S65', '/products/mi-tv-s65', 'mi-tv-s65.png', '1999元起'),
        createItem('mi-tv-s55', '小米电视 S55', '/products/mi-tv-s55', 'mi-tv-s55.png', '1999元起'),
        createItem('mi-tv-a85', '小米电视 A85', '/products/mi-tv-a85', 'mi-tv-a85.png', '1999元起')
      ]
    },
    {
      id: 'laptop',
      title: '笔记本',
      children: [
        createItem('redmi-book-pro16', 'Redmi Book Pro 16', '/products/redmi-book-pro16', 'redmi-book-pro16.png', '1999元起'),
        createItem('redmi-book-pro15', 'Redmi Book Pro 15', '/products/redmi-book-pro15', 'redmi-book-pro15.png', '1999元起'),
        createItem('redmi-book-pro14', 'Redmi Book Pro 14', '/products/redmi-book-pro14', 'redmi-book-pro14.png', '1999元起'),
        createItem('xiaomi-book-pro16', 'Xiaomi Book Pro 16', '/products/xiaomi-book-pro16', 'xiaomi-book-pro16.png', '1999元起')
      ]
    },
    {
      id: 'tablet',
      title: '平板',
      children: [
        createItem('xiaomi-pad7-pro', 'Xiaomi Pad 7 Pro', '/products/xiaomi-pad7-pro', 'xiaomi-pad7-pro.png', '1999元起'),
        createItem('xiaomi-pad7', 'Xiaomi Pad 7', '/products/xiaomi-pad7', 'xiaomi-pad7.png', '1999元起'),
        createItem('xiaomi-pad6s-pro', 'Xiaomi Pad 6S Pro', '/products/xiaomi-pad6s-pro', 'xiaomi-pad6s-pro.png', '1999元起'),
        createItem('xiaomi-pad6-pro', 'Xiaomi Pad 6 Pro', '/products/xiaomi-pad6-pro', 'xiaomi-pad6-pro.png', '1999元起')
      ]
    },
    {
      id: 'home-appliances',
      title: '家电',
      children: [
        createItem('air-conditioner', '空调', '/products/air-conditioner', 'air-conditioner.png', '1999元起'),
        createItem('refrigerator', '冰箱', '/products/refrigerator', 'refrigerator.png', '1999元起'),
        createItem('washing-machine', '洗衣机', '/products/washing-machine', 'washing-machine.png', '1999元起'),
        createItem('vacuum-cleaner', '扫地机器人', '/products/vacuum-cleaner', 'vacuum-cleaner.png', '1999元起')
      ]
    },
    {
      id: 'router',
      title: '路由器',
      children: [
        createItem('ax9000', 'Xiaomi AX9000', '/products/ax9000', 'ax9000.png', '1999元起'),
        createItem('ax6000', 'Xiaomi AX6000', '/products/ax6000', 'ax6000.png', '1999元起'),
        createItem('ax3000', 'Xiaomi AX3000', '/products/ax3000', 'ax3000.png', '1999元起'),
        createItem('ax1800', 'Xiaomi AX1800', '/products/ax1800', 'ax1800.png', '1999元起')
      ]
    },
    {
      id: 'service-center',
      title: '服务中心',  
      children: [
        { id: 'after-sales', title: '售后服务', href: '/service/after-sales' },
        { id: 'repair-service', title: '维修服务', href: '/service/repair' },
        { id: 'warranty', title: '保修查询', href: '/service/warranty' },
        { id: 'user-manual', title: '使用手册', href: '/service/manual' }
      ]
    },
    {
      id: 'community',
      title: '社区',
      children: [
        { id: 'mi-forum', title: '小米社区', href: 'https://www.xiaomi.cn' },
        { id: 'mi-feedback', title: '问题反馈', href: '/community/feedback' },
        { id: 'mi-share', title: '用户分享', href: '/community/share' },
        { id: 'mi-help', title: '帮助中心', href: '/community/help' }
      ]
    }
  ]

  // 处理菜单项点击事件
  const handleMenuItemClick = (id: string | number) => {
    // 在所有 children 中按 id 查找 href
    for (const group of navMenuData) {
      if (!group.children) continue
      const found = group.children.find((c) => c.id === id)
      if (found && typeof (found as DropdownItem).href === 'string') {
        const href = (found as DropdownItem).href as string
        if (href.startsWith('http')) {
          window.open(href, '_blank', 'noopener,noreferrer')
        } else {
          window.location.href = href
        }
        break
      }
    }
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
            const isSimpleDropdown = menuItem.id === 'service-center' || menuItem.id === 'community'
            if (isSimpleDropdown) {
              return (
                <div
                  key={menuItem.id}
                  onMouseEnter={() => setActiveMenuId(menuItem.id)}
                  onMouseLeave={() => setActiveMenuId(null)}
                  style={{
                    ...navTitleTextStyle,
                    borderBottom: activeMenuId === menuItem.id ? '2px solid #ff6700' : '2px solid transparent'
                  }}
                >
                  {menuItem.title}
                </div>
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
        {activeMenuId && activeMenuId !== 'service-center' && activeMenuId !== 'community' && (() => {
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
