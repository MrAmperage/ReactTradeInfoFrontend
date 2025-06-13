/*Тип данных для пункта меню*/

export type MenuItem = {
  caption: MenuItemCaption;
  id: MenuItemId;
  type: MenuItemType;
  items?: MenuItemChildren;
};
/*Наименование для пункта меню */
export type MenuItemCaption = string;
/*Id пункта меню.Первичный ключ */
export type MenuItemId = string;
/*Тип для открываемой таблицы */
export type MenuItemType = string;
/*Дочерние элементы для пункта меню*/
export type MenuItemChildren = MenuItem[];
