interface ShapeProps {
  className?: string;
  size?: string | number;
  rotate?: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

function Shape({
  className = "",
  size = "400px",
  rotate = 0,
  top,
  bottom,
  left,
  right,
}: ShapeProps) {
  return (
    <svg
      className={`shape ${className}`}
      viewBox="0 0 100 100"
      style={{
        width: size,
        height: size,
        top,
        bottom,
        left,
        right,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <path
        d="M 45 3
     A 50 50 0 0 1 100 50
     A 50 50 0 0 1 50 100
     A 50 50 0 0 1 3 55
     A 6 6 0 0 1 10 47   
     Q 60 60 41 12       
     A 6 6 0 0 1 45 3 Z"
        fill="#319EEE"
        opacity={0.6}
      />
    </svg>
  );
}

export default Shape;