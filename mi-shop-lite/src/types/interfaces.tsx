// Centralized TypeScript interfaces for the application
import React from 'react'

export interface DropdownItem {
  id: string | number
  title: React.ReactNode
  href?: string
  imageUrl?: string
  children?: DropdownItem[]
}