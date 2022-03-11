export interface SidenavElem {
  name: string;
  route: string[];
  possition?: string;
  iconPath: string;
  level: number;
  index: number;
  parent_index?: number;
  global_parent_index: number;
  isOpen?: boolean;
  children?: SidenavElem[];
}
