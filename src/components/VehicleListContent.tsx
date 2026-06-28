import { useEffect, useState } from "react";
import { fetchVehicles } from "../services/vehicle";
import { mapVehicle, type VehicleCardData } from "../utils/vehicleMapper";
import VehicleCard from "./VehicleCard";
import "../styles/vehicle-list.css";

function VehicleListContent() {
  const [vehicles, setVehicles] = useState<VehicleCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadVehicles() {
      try {
        const { items } = await fetchVehicles();
        setVehicles(items.map(mapVehicle));
      } catch {
        setError("Gagal memuat data kendaraan.");
      } finally {
        setLoading(false);
      }
    }

    loadVehicles();
  }, []);

  if (loading) {
    return (
      <div className="vehicle-list__loading" role="status" aria-label="Memuat data kendaraan">
        <span className="vehicle-list__spinner" aria-hidden="true" />
      </div>
    );
  }

  if (error) {
    return <p className="vehicle-list__message vehicle-list__message--error">{error}</p>;
  }

  return (
    <div className="vehicle-list__container">
      <div className="vehicle-list__grid">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.shipmentNumber} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
}

export default VehicleListContent;
