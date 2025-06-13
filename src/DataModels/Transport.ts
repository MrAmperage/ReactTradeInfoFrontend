import { TransportModel, TransportModelId } from "./TransportModel";

/*Модель транспорта*/
export type Transport = {
  Id: TransportId;
  Caption: TransportCaption;
  ModelId: TransportModelId;
  Model: TransportModel;
};
/*Id транспорта первичный ключ в БД*/
export type TransportId = string;
/*Описание для транспорта*/
export type TransportCaption = string;
