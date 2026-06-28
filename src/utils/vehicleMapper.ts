import { getVehicleStatus, type VehicleApiItem } from "../services/vehicle";

export interface VehicleCardData {
  status: string;
  speed: number;
  odometer: number;
  accOn: boolean;
  shipmentNumber: string;
  plate: string;
  displayPlate: string;
  signal: string;
  battery: string;
  activationTime: string;
  gsm: string;
  expired: string;
}

export function mapVehicle(item: VehicleApiItem): VehicleCardData {
  const batteryValue = Number(item.battery) || item.accu;

  return {
    status: getVehicleStatus(item.acc, item.speed),
    speed: item.speed,
    odometer: item.mileage,
    accOn: item.acc === "ON",
    shipmentNumber: item.imei,
    plate: item.plate,
    displayPlate: item.device_name ? `${item.plate} - ${item.device_name}` : item.plate,
    signal: item.gsm_signal > 0 ? `${item.gsm_signal}%` : "N/A",
    battery: batteryValue > 0 ? `${batteryValue}%` : "N/A",
    activationTime: item.activation_time,
    gsm: item.gsm_no,
    expired: item.expired_gsm,
  };
}
