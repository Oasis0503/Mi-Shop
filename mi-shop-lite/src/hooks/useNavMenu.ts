import { useState, useCallback } from 'react'
import type { DropdownItem } from '@interfaces'
import { navMenuData } from '../data/navMenuData.tsx'

export const useNavMenu = () => {
  const [activeMenuId, setActiveMenuId] = useState<string | number | null>(null)

  const handleMenuItemClick = useCallback((id: string | number) => {
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
  }, [])

  const isSimpleDropdown = useCallback((id: string | number) => {
    return id === 'service-center' || id === 'community'
  }, [])

  return {
    activeMenuId,
    setActiveMenuId,
    navMenuData,
    handleMenuItemClick,
    isSimpleDropdown
  }
}
