/** Navbar içerisinde alt menüye sahip olan menüye tıklanıp Dropdown şeklinde
 * açılıp açılmadığını tuttuğumuz state. Bunu duruma göre stil vermek için kullanıyoruz.
 */
export interface SubMenuProps {
  $isDropdownOpen: boolean;
}

/** Alt menünün içeriğinin type'ı. */
export type Submenus = {
  label: string;
  url: string;
}[];
