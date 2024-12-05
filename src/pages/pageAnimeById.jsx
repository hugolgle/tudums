import { useParams } from "react-router-dom";
import description from "../../public/description.json";
import Header from "../composant/header";

export default function PageAnimeById() {
  const { id } = useParams();
  const seriesMovies = description.cartoon;

  const foundAnime = seriesMovies.find((item) => item.id === Number(id));
  return (
    <>
      <Header />
      <section className="p-4">
        {foundAnime ? (
          <div className="max-w-lg mx-auto  rounded-lg overflow-hidden animate__animated animate__zoomIn animate__faster">
            <div className="p-6">
              <h1 className="text-2xl font-bold font-logo text-gray-800">
                {foundAnime.nom}
              </h1>
              <p className="text-sm text-gray-500 mb-4">
                Directed by{" "}
                <span className="font-medium">{foundAnime.réalisateur}</span>
              </p>
              <div className="mb-4 text-left">
                <p className="text-gray-600">
                  <span className="font-semibold">Release date :</span>{" "}
                  {foundAnime.date_de_sortie}
                </p>
                {foundAnime.nb_saisons && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Season(s) :</span>{" "}
                    {foundAnime.nb_saisons || "N/A"}
                  </p>
                )}
                {foundAnime.nb_episodes && (
                  <p className="text-gray-600">
                    <span className="font-semibold">Episodes :</span>{" "}
                    {foundAnime.nb_episodes || "N/A"}
                  </p>
                )}
              </div>
              <p className="text-gray-700 text-justify">
                {foundAnime.description}
              </p>
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
