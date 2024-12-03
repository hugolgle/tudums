import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section>
      <h1>ERROR 404</h1>
      <Link to="/">Revenir à la page daccueil</Link>
    </section>
  );
}
