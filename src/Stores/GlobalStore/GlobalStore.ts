/*Класс глобального стора для приложения*/
import { makeAutoObservable } from "mobx";
import { MenuItem } from "../../DataModels/MenuItem";

export default class GlobalStore {
  constructor() {
    makeAutoObservable(this);
  }
  /*Меню приложения*/
  //TODO Типизировать
  Menu: MenuItem[] = [];
  /*Установить новое меню для приложения */
  ChangeMenu(Menu: MenuItem[]) {
    this.Menu = Menu;
  }
  /*Ключ для текущего открытого пункта меню */
  CurrentMenuItemKey: string | null = null;
  /*Установить новую открытую вкладку в приложении по ключу*/
  ChangeCurrentMenuItemByKey(ItemKey: string) {
    this.CurrentMenuItemKey = ItemKey;
  }
}
