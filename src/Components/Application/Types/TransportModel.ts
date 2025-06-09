import { ManufacturerId, Manufacturer } from "./Manufacturer";
import { TransportType, TransportTypeId } from "./TransportTypes";

/*Модель модели транспорта*/
export type TransportModel = {
  Id: TransportModelId;
  TypeId: TransportTypeId;
  Type: TransportType;
  ManftId: ManufacturerId;
  Manft: Manufacturer;
};
/*Первичный ключ для модели транспорта */
export type TransportModelId = string;
