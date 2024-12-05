import { useNavigate } from "react-router-dom";
import Header from "../composant/header";

export default function PageDescription() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <section className="flex flex-col gap-2">
        <div
          className="p-2 w-52 bg-red rounded-xl animate__animated animate__zoomIn animate__faster"
          onClick={() => navigate("/seriesMovies")}
        >
          <h2>Series & Movies</h2>
        </div>
        <div
          className="p-2 bg-red rounded-xl animate__animated animate__zoomIn animate__faster"
          onClick={() => navigate("/cartoon")}
        >
          <h2>Cartoon</h2>
        </div>
        <div
          className="p-2 bg-red rounded-xl animate__animated animate__zoomIn animate__faster"
          onClick={() => navigate("/musics")}
        >
          <h2>Musics</h2>
        </div>
      </section>
    </>
  );
}
