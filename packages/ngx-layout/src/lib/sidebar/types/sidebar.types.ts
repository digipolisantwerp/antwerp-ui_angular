export interface SidebarTheme {
  slug: string;
  color: string;
  logo?: string;
}

export interface SidebarItem {
  href?: string;
  routerLink?: string | string[];
  icon?: string;
  label: string;
  theme?: SidebarTheme;
  items?: SidebarItem[];
  classList?: string;
}

export interface Sidebar {
  items: SidebarItem[];
  open: boolean;
}

export interface SidebarState {
  sidebar: Sidebar;
}
