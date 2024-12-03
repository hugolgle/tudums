import { useNavigate } from "react-router-dom";
import Header from "../composant/header";
import { useState, useEffect } from "react";
import description from "../../public/description.json";

export default function PageSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Met à jour les résultats à chaque fois que l'utilisateur tape
  useEffect(() => {
    if (searchTerm) {
      const allItems = [
        ...description.serie_film.map((item) => ({
          ...item,
          typee: "seriesMovies",
        })),
        ...description.anime.map((item) => ({ ...item, typee: "anime" })),
        ...description.musics.map((item) => ({ ...item, typee: "musics" })),
      ];

      const filteredResults = allItems.filter(
        (item) =>
          item.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.artiste &&
            item.artiste.toLowerCase().includes(searchTerm.toLowerCase())) || // Filtrer par artiste
          (item.realisateur &&
            item.realisateur.toLowerCase().includes(searchTerm.toLowerCase())) // Filtrer par réalisateur
      );

      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  // Fonction pour déterminer la couleur du fond selon le type
  const getTypeColor = (type) => {
    switch (type) {
      case "musics":
        return "bg-green"; // Bleu clair pour les albums
      case "seriesMovies":
        return "bg-red"; // Vert clair pour les séries/films
      case "anime":
        return "bg-purple"; // Violet clair pour les animes
      default:
        return "bg-gray-500"; // Gris par défaut
    }
  };

  return (
    <>
      <Header />
      <section className="p-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          {results.length > 0 && (
            <table className="table-auto flex flex-col gap-2 w-full mt-4">
              <tbody className="flex flex-col gap-2">
                {results.map((item) => (
                  <tr
                    key={item.id}
                    className={`cursor-pointer rounded-md animate__animated animate__zoomIn animate__faster hover:bg-gray ${getTypeColor(
                      item.typee
                    )}`}
                    onClick={() => navigate(`/${item.typee}/${item.id}`)}
                  >
                    <td className="px-4 py-2">{item.nom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
}
