import "../styles/coming-soon.css";

interface ComingSoonProps {
  title: string;
}

function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div className="coming-soon">
      <h1 className="coming-soon__title">{title}</h1>
      <p className="coming-soon__text">Coming Soon</p>
    </div>
  );
}

export default ComingSoon;
