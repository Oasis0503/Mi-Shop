import React from 'react'
// @ts-expect-error - HiUI type declarations issue
import Dropdown from "@hi-ui/dropdown"
import type { DropdownItem } from '@interfaces'

export const DropdownNavBar: React.FC = () => {
  // 导航菜单数据配置
  const navMenuData: DropdownItem[] = [
    {
      id: 'xiaomi-phone',
      title: 'Xiaomi手机',
      children: [
        { id: 'mi17-pro-max', title: 'Xiaomi 17 Pro Max', href: '/products/mi17-pro-max' },
        { id: 'mi17-pro', title: 'Xiaomi 17 Pro', href: '/products/mi17-pro' },
        { id: 'mi17', title: 'Xiaomi 17', href: '/products/mi17' },
        { id: 'mi15s-pro', title: 'Xiaomi 15S Pro', href: '/products/mi15s-pro' },
        { id: 'civi5-pro', title: 'Xiaomi Civi 5 Pro', href: '/products/civi5-pro' },
        { id: 'mix-flip2', title: 'Xiaomi MIX Flip 2', href: '/products/mix-flip2' }
      ]
    },
    {
      id: 'redmi-phone',
      title: 'REDMI手机',
      children: [
        { id: 'redmi-k80', title: 'Redmi K80', href: '/products/redmi-k80' },
        { id: 'redmi-note15', title: 'Redmi Note 15', href: '/products/redmi-note15' },
        { id: 'redmi-turbo3', title: 'Redmi Turbo 3', href: '/products/redmi-turbo3' },
        { id: 'redmi-k70', title: 'Redmi K70', href: '/products/redmi-k70' }
      ]
    },
    {
      id: 'tv',
      title: '电视',
      children: [
        { id: 'mi-tv-s85', title: '小米电视 S85', href: '/products/mi-tv-s85' },
        { id: 'mi-tv-s75', title: '小米电视 S75', href: '/products/mi-tv-s75' },
        { id: 'mi-tv-s65', title: '小米电视 S65', href: '/products/mi-tv-s65' },
        { id: 'mi-tv-s55', title: '小米电视 S55', href: '/products/mi-tv-s55' },
        { id: 'mi-tv-a85', title: '小米电视 A85', href: '/products/mi-tv-a85' }
      ]
    },
    {
      id: 'laptop',
      title: '笔记本',
      children: [
        { id: 'redmi-book-pro16', title: 'Redmi Book Pro 16', href: '/products/redmi-book-pro16' },
        { id: 'redmi-book-pro15', title: 'Redmi Book Pro 15', href: '/products/redmi-book-pro15' },
        { id: 'redmi-book-pro14', title: 'Redmi Book Pro 14', href: '/products/redmi-book-pro14' },
        { id: 'xiaomi-book-pro16', title: 'Xiaomi Book Pro 16', href: '/products/xiaomi-book-pro16' }
      ]
    },
    {
      id: 'tablet',
      title: '平板',
      children: [
        { id: 'xiaomi-pad7-pro', title: 'Xiaomi Pad 7 Pro', href: '/products/xiaomi-pad7-pro' },
        { id: 'xiaomi-pad7', title: 'Xiaomi Pad 7', href: '/products/xiaomi-pad7' },
        { id: 'xiaomi-pad6s-pro', title: 'Xiaomi Pad 6S Pro', href: '/products/xiaomi-pad6s-pro' },
        { id: 'xiaomi-pad6-pro', title: 'Xiaomi Pad 6 Pro', href: '/products/xiaomi-pad6-pro' }
      ]
    },
    {
      id: 'home-appliances',
      title: '家电',
      children: [
        { id: 'air-conditioner', title: '空调', href: '/products/air-conditioner' },
        { id: 'refrigerator', title: '冰箱', href: '/products/refrigerator' },
        { id: 'washing-machine', title: '洗衣机', href: '/products/washing-machine' },
        { id: 'vacuum-cleaner', title: '扫地机器人', href: '/products/vacuum-cleaner' }
      ]
    },
    {
      id: 'router',
      title: '路由器',
      children: [
        { id: 'ax9000', title: 'Xiaomi AX9000', href: '/products/ax9000' },
        { id: 'ax6000', title: 'Xiaomi AX6000', href: '/products/ax6000' },
        { id: 'ax3000', title: 'Xiaomi AX3000', href: '/products/ax3000' },
        { id: 'ax1800', title: 'Xiaomi AX1800', href: '/products/ax1800' }
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
                  minWidth: '200px',
                  maxWidth: '300px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  borderRadius: '8px',
                  border: '1px solid #e8e8e8'
                }}
                itemStyle={{
                  padding: '12px 16px',
                  fontSize: '14px',
                  color: '#333',
                  borderBottom: '1px solid #f0f0f0',
                  transition: 'all 0.2s ease'
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
