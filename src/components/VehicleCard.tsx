import type { VehicleCardData } from "../utils/vehicleMapper";
import SpeedGauge from "./SpeedGauge";

interface VehicleCardProps {
  vehicle: VehicleCardData;
}

function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <div className="vehicle-card-wrap">
      <div className="vehicle-card__status-tab">
        <span className="vehicle-card__status-label">Status :</span>
        <span className="vehicle-card__status-value">
          <i className="ph ph-truck" />
          {vehicle.status}
        </span>
      </div>

      <article className="vehicle-card">
        <div className="vehicle-card__body">
          <div className="vehicle-card__top">
            <div className="vehicle-card__gauge-wrap">
              <SpeedGauge speed={vehicle.speed} />
              <div className="vehicle-card__gauge-text">
                <div className="vehicle-card__speed">{vehicle.speed}km/h</div>
                <div className="vehicle-card__odo">
                  Odo : {vehicle.odometer}km
                </div>
              </div>
            </div>

            <img
              className="vehicle-card__vehicle-img"
              src="/assets/truck-top.png"
              alt="Vehicle Image"
            />

            <div className="vehicle-card__info">
              <p className="vehicle-card__shipment-label">
                Shipment Number <span>{vehicle.shipmentNumber}</span>
              </p>
              <h3 className="vehicle-card__plate">{vehicle.displayPlate}</h3>
            </div>
          </div>

          <div className="vehicle-card__metrics">
            <div
              className={`vehicle-card__metric vehicle-card__metric--acc${
                vehicle.accOn ? "" : " vehicle-card__metric--acc-off"
              }`}
            >
              <i className="ph ph-engine" />
              ACC {vehicle.accOn ? "ON" : "OFF"}
            </div>

            <div className="vehicle-card__metric">
              <i className="ph ph-broadcast" />
              {vehicle.signal}
            </div>

            <div className="vehicle-card__metric">
              <i className="ph ph-battery-full" />
              {vehicle.battery}
            </div>
          </div>
        </div>

        <footer className="vehicle-card__footer">
          <span>Activation : {vehicle.activationTime}</span>
          <span>No GSM : {vehicle.gsm}</span>
          <span>Expired : {vehicle.expired}</span>
        </footer>
      </article>
    </div>
  );
}

export default VehicleCard;
