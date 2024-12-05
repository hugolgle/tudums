import { useParams } from "react-router-dom";
import description from "../../public/description.json";
import Header from "../composant/header";

export default function PageMusicsById() {
  const { id } = useParams();
  const seriesMovies = description.musics;

  const foundMusics = seriesMovies.find((item) => item.id === Number(id));

  return (
    <>
      <Header />
      <section className="p-4">
        {foundMusics ? (
          <div className="max-w-xl mx-auto overflow-hidden animate__animated animate__zoomIn animate__faster">
            <div className="p-6 space-y-4">
              <h1 className="text-2xl font-bold font-logo text-gray-800 text-center">
                {foundMusics.nom}
              </h1>
              <img
                src={`/cover/${foundMusics.cover}.jpg`}
                alt={foundMusics.nom}
                className="rounded-xl mx-auto w-full max-h-80 object-cover"
              />
              <p className="text-sm text-gray-500 text-center">
                Performed by{" "}
                <span className="font-medium">{foundMusics.artiste}</span>
              </p>
              <div className="text-center">
                <p className="text-gray-600">
                  <span>Released in </span> {foundMusics.date_de_sortie}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p>La musique demandée na pas été trouvée.</p>
          </div>
        )}
      </section>
    </>
  );
}
