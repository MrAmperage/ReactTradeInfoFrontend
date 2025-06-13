/*Модель для роли пользователяƒ*/
export type Role = {
  rolename: RoleName;
  comment: RoleComment;
};
/*Наименование роли.Первичный ключ в БД*/
export type RoleName = string;
/*Комментарий к роли пользователя*/
export type RoleComment = string;
