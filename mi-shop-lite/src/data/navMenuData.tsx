import React from 'react'
import type { DropdownItem } from '@interfaces'
import { CardItem } from '../components/CardItem'

const PLACEHOLDER = '/images/products/placeholder.svg'

const createProductItem = (id: string, name: string, href: string, imageFile?: string, price?: string): DropdownItem => ({
  id,
  href,
  imageUrl: imageFile ? `/images/products/${imageFile}` : undefined,
  title: (
    <CardItem 
      name={name} 
      imageSrc={imageFile ? `/images/products/${imageFile}` : PLACEHOLDER} 
      placeholderSrc={PLACEHOLDER} 
      subtitle={price}
    />
  )
})

const createServiceItem = (id: string, title: string, href: string): DropdownItem => ({
  id,
  title,
  href
})

export const navMenuData: DropdownItem[] = [
  {
    id: 'xiaomi-phone',
    title: 'Xiaomi手机',
    children: [
      createProductItem('mi17-pro-max', 'Xiaomi 17 Pro Max', '/products/mi17-pro-max', 'mi17-pro-max.jpg', '5999元起'),
      createProductItem('mi17-pro', 'Xiaomi 17 Pro', '/products/mi17-pro', 'mi17-pro.png', '4999元起'),
      createProductItem('mi17', 'Xiaomi 17', '/products/mi17', 'mi17.png', '4499元起'),
      createProductItem('mix-flip2', 'Xiaomi MIX Flip 2', '/products/mix-flip2', 'mix-flip2.png', '5999元起'),
      createProductItem('mi15s-pro', 'Xiaomi 15S Pro', '/products/mi15s-pro', 'mi15s-pro.png', '5499元起'),
      createProductItem('civi5-pro', 'Xiaomi Civi 5 Pro', '/products/civi5-pro', 'civi5-pro.png', '2999元起')
    ]
  },
  {
    id: 'redmi-phone',
    title: 'REDMI手机',
    children: [
      createProductItem('redmi-k80', 'Redmi K80', '/products/redmi-k80', 'redmi-k80.png', '1999元起'),
      createProductItem('redmi-note15', 'Redmi Note 15', '/products/redmi-note15', 'redmi-note15.png', '1999元起'),
      createProductItem('redmi-turbo3', 'Redmi Turbo 3', '/products/redmi-turbo3', 'redmi-turbo3.png', '1999元起'),
      createProductItem('redmi-k70', 'Redmi K70', '/products/redmi-k70', 'redmi-k70.png', '1999元起')
    ]
  },
  {
    id: 'tv',
    title: '电视',
    children: [
      createProductItem('mi-tv-s85', '小米电视 S85', '/products/mi-tv-s85', 'mi-tv-s85.png', '1999元起'),
      createProductItem('mi-tv-s75', '小米电视 S75', '/products/mi-tv-s75', 'mi-tv-s75.png', '1999元起'),
      createProductItem('mi-tv-s65', '小米电视 S65', '/products/mi-tv-s65', 'mi-tv-s65.png', '1999元起'),
      createProductItem('mi-tv-s55', '小米电视 S55', '/products/mi-tv-s55', 'mi-tv-s55.png', '1999元起'),
      createProductItem('mi-tv-a85', '小米电视 A85', '/products/mi-tv-a85', 'mi-tv-a85.png', '1999元起')
    ]
  },
  {
    id: 'laptop',
    title: '笔记本',
    children: [
      createProductItem('redmi-book-pro16', 'Redmi Book Pro 16', '/products/redmi-book-pro16', 'redmi-book-pro16.png', '1999元起'),
      createProductItem('redmi-book-pro15', 'Redmi Book Pro 15', '/products/redmi-book-pro15', 'redmi-book-pro15.png', '1999元起'),
      createProductItem('redmi-book-pro14', 'Redmi Book Pro 14', '/products/redmi-book-pro14', 'redmi-book-pro14.png', '1999元起'),
      createProductItem('xiaomi-book-pro16', 'Xiaomi Book Pro 16', '/products/xiaomi-book-pro16', 'xiaomi-book-pro16.png', '1999元起')
    ]
  },
  {
    id: 'tablet',
    title: '平板',
    children: [
      createProductItem('xiaomi-pad7-pro', 'Xiaomi Pad 7 Pro', '/products/xiaomi-pad7-pro', 'xiaomi-pad7-pro.png', '1999元起'),
      createProductItem('xiaomi-pad7', 'Xiaomi Pad 7', '/products/xiaomi-pad7', 'xiaomi-pad7.png', '1999元起'),
      createProductItem('xiaomi-pad6s-pro', 'Xiaomi Pad 6S Pro', '/products/xiaomi-pad6s-pro', 'xiaomi-pad6s-pro.png', '1999元起'),
      createProductItem('xiaomi-pad6-pro', 'Xiaomi Pad 6 Pro', '/products/xiaomi-pad6-pro', 'xiaomi-pad6-pro.png', '1999元起')
    ]
  },
  {
    id: 'home-appliances',
    title: '家电',
    children: [
      createProductItem('air-conditioner', '空调', '/products/air-conditioner', 'air-conditioner.png', '1999元起'),
      createProductItem('refrigerator', '冰箱', '/products/refrigerator', 'refrigerator.png', '1999元起'),
      createProductItem('washing-machine', '洗衣机', '/products/washing-machine', 'washing-machine.png', '1999元起'),
      createProductItem('vacuum-cleaner', '扫地机器人', '/products/vacuum-cleaner', 'vacuum-cleaner.png', '1999元起')
    ]
  },
  {
    id: 'router',
    title: '路由器',
    children: [
      createProductItem('ax9000', 'Xiaomi AX9000', '/products/ax9000', 'ax9000.png', '1999元起'),
      createProductItem('ax6000', 'Xiaomi AX6000', '/products/ax6000', 'ax6000.png', '1999元起'),
      createProductItem('ax3000', 'Xiaomi AX3000', '/products/ax3000', 'ax3000.png', '1999元起'),
      createProductItem('ax1800', 'Xiaomi AX1800', '/products/ax1800', 'ax1800.png', '1999元起')
    ]
  },
  {
    id: 'service-center',
    title: '服务中心',
    children: [
      createServiceItem('after-sales', '售后服务', '/service/after-sales'),
      createServiceItem('repair-service', '维修服务', '/service/repair'),
      createServiceItem('warranty', '保修查询', '/service/warranty'),
      createServiceItem('user-manual', '使用手册', '/service/manual')
    ]
  },
  {
    id: 'community',
    title: '社区',
    children: [
      createServiceItem('mi-forum', '小米社区', 'https://www.xiaomi.cn'),
      createServiceItem('mi-feedback', '问题反馈', '/community/feedback'),
      createServiceItem('mi-share', '用户分享', '/community/share'),
      createServiceItem('mi-help', '帮助中心', '/community/help')
    ]
  }
]
