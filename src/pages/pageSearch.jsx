import { useNavigate } from "react-router-dom";
import Header from "../composant/header";
import { useState, useEffect } from "react";
import description from "../../public/description.json";
import { Search } from "lucide-react";

export default function PageSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      const allItems = [
        ...description.serie_film.map((item) => ({
          ...item,
          type: "seriesMovies",
        })),
        ...description.cartoon.map((item) => ({ ...item, type: "cartoon" })),
        ...description.musics.map((item) => ({ ...item, type: "musics" })),
      ];

      const filteredResults = allItems.filter(
        (item) =>
          item.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.artiste &&
            item.artiste.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (item.realisateur &&
            item.realisateur.toLowerCase().includes(searchTerm.toLowerCase()))
      );

      setResults(filteredResults.slice(0, 8));
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  const getTypeColor = (type) => {
    switch (type) {
      case "musics":
        return "bg-green";
      case "seriesMovies":
        return "bg-red";
      case "cartoon":
        return "bg-purple";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      <Header notBtnSearch />
      <section className="p-4">
        <div className="flex flex-col gap-4">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              placeholder="Search ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-black text-white rounded-lg px-4 py-2 w-full"
            />
            <Search className="absolute right-0 mr-2" size={16} />
          </div>

          {results.length > 0 && (
            <table className="table-auto flex flex-col gap-2 w-full mt-4">
              <tbody className="flex flex-col gap-2">
                {results
                  .sort(() => Math.random() - 0.5)
                  .map((item) => (
                    <tr
                      key={item.id}
                      className={`cursor-pointer rounded-md animate__animated animate__zoomIn animate__faster hover:bg-gray ${getTypeColor(
                        item.type
                      )}`}
                      onClick={() => navigate(`/${item.type}/${item.id}`)}
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
