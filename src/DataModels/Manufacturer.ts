/*Модель производителя транспорта*/
export type Manufacturer = { Id: ManufacturerId; Caption: ManufacturerCaption };
/*Id производителя транспорта.Первичный ключ*/
export type ManufacturerId = string;
/*Описание для производителя */
export type ManufacturerCaption = string;
