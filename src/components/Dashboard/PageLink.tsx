import { Link } from 'react-router-dom';

type PageProps = {
  to: string;
  name: string;
}

export default function PageLink({ to, name }: PageProps) {
  return (
    <Link to={to} className="flex flex-col">
      <button>{name}</button>
      <span className="font-bold text-lg">{name}</span>
    </Link>
  );
}
