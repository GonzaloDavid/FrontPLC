export interface MenuItem {
  name: string;
  disabled?: Boolean;
  link?: string;
  iconName?: string;
  description?: string;
  children?: MenuItem[];
  active?: boolean; // active desactive
  ischild? :boolean
}
