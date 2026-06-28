import { api } from "./api";

export interface VehicleApiItem {
  imei: string;
  owner: string;
  device_name: string;
  plate: string;
  gsm_no: string;
  activation_time: string;
  expired_gsm: string;
  gps_type: string;
  vehicle_type: string;
  acc: string;
  speed: number;
  mileage: number;
  last_positioning: string;
  last_update: string;
  gsm_signal: number;
  battery: string;
  accu: number;
}

export async function fetchVehicles() {
  const { data } = await api.get("/vehicle");

  return {
    total: data.message.total as number,
    items: data.message.data as VehicleApiItem[],
  };
}

export function getVehicleStatus(acc: string, speed: number): string {
  const accOn = acc === "ON";

  if (accOn && speed > 0) return "Running";
  if (!accOn && speed === 0) return "Parking";
  if (accOn && speed === 0) return "Stop";

  return "Parking";
}
