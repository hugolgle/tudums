import { useParams } from "react-router-dom";
import description from "../../public/description.json";
import Header from "../composant/header";

export default function PageAnimeById() {
  const { id } = useParams();
  const seriesMovies = description.anime;

  const foundAnime = seriesMovies.find((item) => item.id === Number(id));
  return (
    <>
      <Header />
      <section className="p-4">
        {foundAnime ? (
          <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__zoomIn animate__faster">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-800">
                {foundAnime.nom}
              </h1>
              <p className="text-sm text-gray-500 mb-4">
                Réalisé par{" "}
                <span className="font-medium">{foundAnime.réalisateur}</span>
              </p>
              <div className="mb-4">
                <p className="text-gray-600">
                  <span className="font-semibold">Date de sortie :</span>{" "}
                  {foundAnime.date_de_sortie}
                </p>
                {foundAnime.nb_saisons && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Saisons :</span>{" "}
                    {foundAnime.nb_saisons || "N/A"}
                  </p>
                )}
                {foundAnime.nb_episodes && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Épisodes :</span>{" "}
                    {foundAnime.nb_episodes || "N/A"}
                  </p>
                )}
              </div>
              <p className="text-gray-700">{foundAnime.description}</p>
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
