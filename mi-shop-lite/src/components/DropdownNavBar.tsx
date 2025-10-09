import React from 'react'
// @ts-expect-error - HiUI type declarations issue
import Dropdown from "@hi-ui/dropdown"
import type { DropdownItem } from '@interfaces'

export const DropdownNavBar: React.FC = () => {
  const PLACEHOLDER = '/images/products/placeholder.svg'

  const renderTitle = (name: string, src?: string) => (
    <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <img
        src={src || PLACEHOLDER}
        alt={name}
        style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 4, backgroundColor: '#f5f5f5' }}
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement
          if (!img.src.includes('placeholder.svg')) {
            img.src = PLACEHOLDER
          }
        }}
      />
      <span>{name}</span>
    </span>
  )

  const createItem = (id: string, name: string, href: string, imageFile?: string): DropdownItem => ({
    id,
    href,
    imageUrl: imageFile ? `/images/products/${imageFile}` : undefined,
    title: renderTitle(name, imageFile ? `/images/products/${imageFile}` : undefined)
  })
  // 导航菜单数据配置
  const navMenuData: DropdownItem[] = [
    {
      id: 'xiaomi-phone',
      title: 'Xiaomi手机',
      children: [
        createItem('mi17-pro-max', 'Xiaomi 17 Pro Max', '/products/mi17-pro-max', 'mi17-pro-max.jpg'),
        createItem('mi17-pro', 'Xiaomi 17 Pro', '/products/mi17-pro', 'mi17-pro.png'),
        createItem('mi17', 'Xiaomi 17', '/products/mi17', 'mi17.png'),
        createItem('mi15s-pro', 'Xiaomi 15S Pro', '/products/mi15s-pro', 'mi15s-pro.png'),
        createItem('civi5-pro', 'Xiaomi Civi 5 Pro', '/products/civi5-pro', 'civi5-pro.png'),
        createItem('mix-flip2', 'Xiaomi MIX Flip 2', '/products/mix-flip2', 'mix-flip2.png')
      ]
    },
    {
      id: 'redmi-phone',
      title: 'REDMI手机',
      children: [
        createItem('redmi-k80', 'Redmi K80', '/products/redmi-k80', 'redmi-k80.png'),
        createItem('redmi-note15', 'Redmi Note 15', '/products/redmi-note15', 'redmi-note15.png'),
        createItem('redmi-turbo3', 'Redmi Turbo 3', '/products/redmi-turbo3', 'redmi-turbo3.png'),
        createItem('redmi-k70', 'Redmi K70', '/products/redmi-k70', 'redmi-k70.png')
      ]
    },
    {
      id: 'tv',
      title: '电视',
      children: [
        createItem('mi-tv-s85', '小米电视 S85', '/products/mi-tv-s85', 'mi-tv-s85.png'),
        createItem('mi-tv-s75', '小米电视 S75', '/products/mi-tv-s75', 'mi-tv-s75.png'),
        createItem('mi-tv-s65', '小米电视 S65', '/products/mi-tv-s65', 'mi-tv-s65.png'),
        createItem('mi-tv-s55', '小米电视 S55', '/products/mi-tv-s55', 'mi-tv-s55.png'),
        createItem('mi-tv-a85', '小米电视 A85', '/products/mi-tv-a85', 'mi-tv-a85.png')
      ]
    },
    {
      id: 'laptop',
      title: '笔记本',
      children: [
        createItem('redmi-book-pro16', 'Redmi Book Pro 16', '/products/redmi-book-pro16', 'redmi-book-pro16.png'),
        createItem('redmi-book-pro15', 'Redmi Book Pro 15', '/products/redmi-book-pro15', 'redmi-book-pro15.png'),
        createItem('redmi-book-pro14', 'Redmi Book Pro 14', '/products/redmi-book-pro14', 'redmi-book-pro14.png'),
        createItem('xiaomi-book-pro16', 'Xiaomi Book Pro 16', '/products/xiaomi-book-pro16', 'xiaomi-book-pro16.png')
      ]
    },
    {
      id: 'tablet',
      title: '平板',
      children: [
        createItem('xiaomi-pad7-pro', 'Xiaomi Pad 7 Pro', '/products/xiaomi-pad7-pro', 'xiaomi-pad7-pro.png'),
        createItem('xiaomi-pad7', 'Xiaomi Pad 7', '/products/xiaomi-pad7', 'xiaomi-pad7.png'),
        createItem('xiaomi-pad6s-pro', 'Xiaomi Pad 6S Pro', '/products/xiaomi-pad6s-pro', 'xiaomi-pad6s-pro.png'),
        createItem('xiaomi-pad6-pro', 'Xiaomi Pad 6 Pro', '/products/xiaomi-pad6-pro', 'xiaomi-pad6-pro.png')
      ]
    },
    {
      id: 'home-appliances',
      title: '家电',
      children: [
        createItem('air-conditioner', '空调', '/products/air-conditioner', 'air-conditioner.png'),
        createItem('refrigerator', '冰箱', '/products/refrigerator', 'refrigerator.png'),
        createItem('washing-machine', '洗衣机', '/products/washing-machine', 'washing-machine.png'),
        createItem('vacuum-cleaner', '扫地机器人', '/products/vacuum-cleaner', 'vacuum-cleaner.png')
      ]
    },
    {
      id: 'router',
      title: '路由器',
      children: [
        createItem('ax9000', 'Xiaomi AX9000', '/products/ax9000', 'ax9000.png'),
        createItem('ax6000', 'Xiaomi AX6000', '/products/ax6000', 'ax6000.png'),
        createItem('ax3000', 'Xiaomi AX3000', '/products/ax3000', 'ax3000.png'),
        createItem('ax1800', 'Xiaomi AX1800', '/products/ax1800', 'ax1800.png')
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
  const handleMenuClick = (item: DropdownItem) => {
    if (item.href) {
      if (item.href.startsWith('http')) {
        window.open(item.href, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = item.href
      }
    }
    console.log('菜单项被点击:', item)
  }

  return (
    <div className="dropdown-navbar">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '0 20px',
        height: '60px',
        borderBottom: '1px solid #e8e8e8',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          {navMenuData.map((menuItem) => (
            <div key={menuItem.id}>
              <Dropdown
                data={menuItem.children || []}
                title={menuItem.title}
                onClick={handleMenuClick}
                trigger="hover"
                placement="bottom-start"
                titleStyle={{
                  color: '#333',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  padding: '8px 0',
                  borderBottom: '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}
                overlayStyle={{
                  minWidth: '250px',
                  maxWidth: '350px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  borderRadius: '8px',
                  border: '1px solid #e8e8e8'
                }}
                itemStyle={{
                  padding: '12px 16px',
                  fontSize: '14px',
                  color: '#333',
                  borderBottom: '1px solid #f0f0f0',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
                activeItemStyle={{
                  backgroundColor: '#fff7f0',
                  color: '#ff6700'
                }}
              />
            </div>
          ))}
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
      </div>
    </div>
  )
}

export default DropdownNavBar
