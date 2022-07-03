export const menuItems = [
  {
    id: '1',
    label: 'Hesabım',
    params: { title: 'Hesabım', goBack: true },
    toNavigate: 'Account'
  },
  {
    id: '2',
    label: 'Çıkış Yap',
    toNavigate: 'Logout'
  }
];

export type MenuItemType = typeof menuItems;
