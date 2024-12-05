import description from "../../public/description.json";
import { useNavigate } from "react-router-dom";
import Header from "../composant/header";
export default function PageSerieFilm() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="pt-24">
        <h1 className="font-logo text-black animate__animated animate__zoomIn animate__faster">
          Series & Movies
        </h1>
        <div className="flex flex-col gap-2 h-full justify-center items-center">
          {description.serie_film.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`${item.id}`)}
              className="p-2 rounded-xl w-72 bg-red animate__animated animate__fadeInUp"
            >
              <h3>{item.nom}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
