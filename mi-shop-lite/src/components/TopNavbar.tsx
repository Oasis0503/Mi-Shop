import React from 'react'
import { Link } from 'react-router-dom'
// @ts-expect-error - HiUI type declarations issue
import { ShoppingCartOutlined, BellOutlined } from '@hi-ui/icons'

const TopNavbar: React.FC = () => {
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

  return (
    <div style={{
      backgroundColor: '#333',
      color: '#ccc',
      fontSize: '12px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      borderBottom: '1px solid #444'
    }}>
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
    </div>
  )
}

export default TopNavbar
