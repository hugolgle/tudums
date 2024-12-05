import { useParams } from "react-router-dom";
import description from "../../public/description.json";
import Header from "../composant/header";

export default function PageSerieFilmById() {
  const { id } = useParams();
  const seriesMovies = description.serie_film;

  const foundSerieFilm = seriesMovies.find((item) => item.id === Number(id));

  return (
    <>
      <Header />
      <section className="p-6">
        {foundSerieFilm ? (
          <div className="max-w-3xl mx-auto p-6 rounded-lg overflow-hidden animate__animated animate__zoomIn animate__faster">
            <h1 className="text-2xl font-logo font-bold text-gray-800 mb-4">
              {foundSerieFilm.nom}
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Directed by{" "}
              <span className="font-medium">{foundSerieFilm.réalisateur}</span>
            </p>
            <div className="mb-4 text-left">
              <p className="text-gray-600">
                <span className="font-semibold">Release date :</span>{" "}
                {foundSerieFilm.date_de_sortie}
              </p>
              {foundSerieFilm.nb_saisons && (
                <p className="text-gray-600">
                  <span className="font-semibold">Season(s) :</span>{" "}
                  {foundSerieFilm.nb_saisons}
                </p>
              )}
              {foundSerieFilm.nb_episodes && (
                <p className="text-gray-600">
                  <span className="font-semibold">Episodes :</span>{" "}
                  {foundSerieFilm.nb_episodes}
                </p>
              )}
            </div>
            <p className="text-gray-700 text-justify">
              {foundSerieFilm.description}
            </p>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <p>La série ou le film n&apos;a pas été trouvé.</p>
          </div>
        )}
      </section>
    </>
  );
}
