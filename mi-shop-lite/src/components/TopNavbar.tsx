import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// @ts-expect-error - HiUI type declarations issue
import { SearchOutlined, ShoppingCartOutlined, MoveOutlined, BellOutlined } from '@hi-ui/icons'

const TopNavbar: React.FC = () => {
  // 响应式状态管理
  const [isMobile, setIsMobile] = useState(false)

  // 检测屏幕宽度
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1250)
    }

    // 初始检测
    checkScreenSize()

    // 监听窗口大小变化
    window.addEventListener('resize', checkScreenSize)

    // 清理事件监听器
    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  // 导航链接数据
  const navLinks = [
    { label: '小米官网', href: 'https://www.mi.com' },
    { label: '小米商城', href: '/', isActive: true },
    { label: '小米澎湃OS', href: 'https://www.miui.com' },
    { label: '小米汽车', href: 'https://car.mi.com' },
    { label: '云服务', href: 'https://i.mi.com' },
    { label: 'IoT', href: 'https://iot.mi.com' },
    { label: '有品', href: 'https://www.xiaomiyoupin.com' },
    { label: '小爱开放平台', href: 'https://developers.xiaoai.mi.com' },
    { label: '资质证照', href: 'https://www.mi.com/about/certificate' },
    { label: '协议规则', href: 'https://www.mi.com/about/terms' },
    { label: '下载app', href: 'https://app.mi.com' },
    { label: 'Select Location', href: '#' }
  ]

  const userLinks = [
    { label: '登录', href: '/login' },
    { label: '注册', href: '/register' },
    { label: '消息通知', href: '/notifications', icon: <BellOutlined /> }
  ]

  // 处理链接点击
  const handleLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer')
    } else if (href !== '#') {
      window.location.href = href
    }
  }

  // 小米Logo组件
  const MiLogo = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer'
    }}>
      <div style={{
        width: '32px',
        height: '32px',
        backgroundColor: '#ff6700',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 'bold'
      }}>
        MI
      </div>
    </div>
  )

  // 移动端图标点击处理
  const handleMobileIconClick = (iconType: 'search' | 'cart' | 'menu') => {
    switch (iconType) {
      case 'search':
        // TODO: 实现搜索功能
        console.log('搜索功能')
        break
      case 'cart':
        // 跳转到购物车页面
        window.location.href = '/cart'
        break
      case 'menu':
        // TODO: 实现菜单展开功能
        console.log('菜单功能')
        break
    }
  }

  return (
    <div style={{
      backgroundColor: isMobile ? '#fff' : '#333',
      color: isMobile ? '#333' : '#ccc',
      fontSize: '12px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      borderBottom: isMobile ? '1px solid #eee' : '1px solid #444'
    }}>
      {isMobile ? (
        // 移动端布局
        <>
          {/* 左侧小米Logo */}
          <MiLogo />
          
          {/* 右侧三个图标 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <SearchOutlined 
              style={{ 
                fontSize: '20px', 
                color: '#333', 
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onClick={() => handleMobileIconClick('search')}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.color = '#ff6700'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.color = '#333'
              }}
            />
            <ShoppingCartOutlined 
              style={{ 
                fontSize: '20px', 
                color: '#333', 
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onClick={() => handleMobileIconClick('cart')}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.color = '#ff6700'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.color = '#333'
              }}
            />
            <MoveOutlined 
              style={{ 
                fontSize: '20px', 
                color: '#333', 
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }}
              onClick={() => handleMobileIconClick('menu')}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.color = '#ff6700'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.color = '#333'
              }}
            />
          </div>
        </>
      ) : (
        // 桌面端布局
        <>
          {/* 左侧导航链接 */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {navLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <span
                  onClick={() => handleLinkClick(link.href)}
                  style={{
                    color: link.isActive ? '#ff6700' : '#ccc',
                    cursor: 'pointer',
                    padding: '0 8px',
                    fontSize: '12px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!link.isActive) {
                      e.currentTarget.style.color = '#fff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!link.isActive) {
                      e.currentTarget.style.color = '#ccc'
                    }
                  }}
                >
                  {link.label}
                </span>
                {index < navLinks.length - 1 && (
                  <span style={{
                    color: '#555',
                    margin: '0 4px',
                    fontSize: '12px'
                  }}>
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 右侧用户操作 */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {userLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <Link
                  to={link.href}
                  style={{
                    color: '#ccc',
                    textDecoration: 'none',
                    padding: '0 8px',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#ccc'
                  }}
                >
                  {link.icon}
                  {link.label}
                </Link>
                {index < userLinks.length - 1 && (
                  <span style={{
                    color: '#555',
                    margin: '0 4px',
                    fontSize: '12px'
                  }}>
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
            
            {/* 购物车 */}
            <div style={{
              marginLeft: '16px',
              backgroundColor: '#424242',
              padding: '0 12px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ff6700'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#424242'
            }}
            >
              <ShoppingCartOutlined style={{ color: '#fff', fontSize: '16px' }} />
              <span style={{ color: '#fff', fontSize: '12px' }}>购物车(0)</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default TopNavbar
