interface SpeedGaugeProps {
  speed: number;
  maxSpeed?: number;
}

const SEGMENTS = 13;
const CX = 60;
const CY = 62;
const INNER_R = 34;
const OUTER_R = 46;
const GAP_DEG = 2.8;

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function segmentPath(startAngle: number, endAngle: number) {
  const innerStart = polar(CX, CY, INNER_R, startAngle);
  const outerStart = polar(CX, CY, OUTER_R, startAngle);
  const outerEnd = polar(CX, CY, OUTER_R, endAngle);
  const innerEnd = polar(CX, CY, INNER_R, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  return [
    `M ${innerStart.x} ${innerStart.y}`,
    `L ${outerStart.x} ${outerStart.y}`,
    `A ${OUTER_R} ${OUTER_R} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${INNER_R} ${INNER_R} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
    "Z",
  ].join(" ");
}

function SpeedGauge({ speed, maxSpeed = 120 }: SpeedGaugeProps) {
  const clampedSpeed = Math.max(0, Math.min(speed, maxSpeed));
  const activeSegments = Math.round((clampedSpeed / maxSpeed) * SEGMENTS);
  const segmentSweep = (180 - GAP_DEG * (SEGMENTS - 1)) / SEGMENTS;

  return (
    <svg className="vehicle-card__gauge" viewBox="0 0 120 70" aria-hidden="true">
      {Array.from({ length: SEGMENTS }, (_, index) => {
        const startAngle = 180 + index * (segmentSweep + GAP_DEG);
        const endAngle = startAngle + segmentSweep;
        const isActive = index < activeSegments;
        const isTransition =
          isActive && index === activeSegments - 1 && activeSegments < SEGMENTS;

        let className = "vehicle-card__gauge-seg";
        if (isTransition) {
          className += " vehicle-card__gauge-seg--transition";
        } else if (isActive) {
          className += " vehicle-card__gauge-seg--active";
        } else {
          className += " vehicle-card__gauge-seg--empty";
        }

        return <path key={index} d={segmentPath(startAngle, endAngle)} className={className} />;
      })}
    </svg>
  );
}

export default SpeedGauge;
