import { Role, RoleName } from "./Role";

/*Модель для пользователя*/
export type User = {
  Username: UserName;
  Enabled: UserEnabled;
  Hash: UserHash;
  Rolename: RoleName;
  Role: Role;
};
/*Имя юзера */
export type UserName = string;
/*Включена или нет учетная запись */
export type UserEnabled = string;
/*Хэш учетной записи*/
export type UserHash = string;
