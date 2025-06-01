/*Класс глобального стора для приложения*/

import { makeAutoObservable } from "mobx";

export default class GlobalStore {
  constructor() {
    makeAutoObservable(this);
  }
  /*Меню приложения*/
  //TODO Типизировать
  private Menu: any[] = [];
  /*Установить новое меню для приложения */
  ChangeMenu(Menu: any[]) {
    this.Menu = Menu;
  }
  /*Ключ для текущего открытого пункта меню */
  private CurrentMenuItemKey: string | null = null;
  /*Установить новую открытую вкладку в приложении по ключу*/
  ChangeCurrentMenuItemByKey(ItemKey: string) {
    this.CurrentMenuItemKey = ItemKey;
  }
}
