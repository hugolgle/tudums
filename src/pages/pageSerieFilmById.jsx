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
      <section className="p-4">
        {foundSerieFilm ? (
          <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__zoomIn animate__faster">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-800  ">
                {foundSerieFilm.nom}
              </h1>
              <p className="text-sm text-gray-500 mb-4">
                Réalisé par{" "}
                <span className="font-medium">
                  {foundSerieFilm.réalisateur}
                </span>
              </p>
              <div className="mb-4">
                <p className="text-gray-600">
                  <span className="font-semibold">Date de sortie :</span>{" "}
                  {foundSerieFilm.date_de_sortie}
                </p>
                {foundSerieFilm.nb_saisons && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Saisons :</span>{" "}
                    {foundSerieFilm.nb_saisons}
                  </p>
                )}
                {foundSerieFilm.nb_episodes && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Épisodes :</span>{" "}
                    {foundSerieFilm.nb_episodes}
                  </p>
                )}
              </div>
              <p className="text-gray-700">{foundSerieFilm.description}</p>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p>La série ou le film na pas été trouvé.</p>
          </div>
        )}
      </section>
    </>
  );
}
