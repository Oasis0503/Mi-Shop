// Centralized TypeScript interfaces for the application

export interface DropdownItem {
  id: string | number
  title: string
  href?: string
  children?: DropdownItem[]
}


