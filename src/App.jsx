import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Timer } from "./pages/timer.jsx";
import Home from "./pages/home.jsx";
import Error from "./pages/error.jsx";
import PageDescription from "./pages/pageDescription.jsx";
import PageSerieFilm from "./pages/pageSerieFilm.jsx";
import PageSerieFilmById from "./pages/pageSerieFilmById.jsx";
import PageAnime from "./pages/pageAnime.jsx";
import PageAnimeById from "./pages/pageAnimeById.jsx";
import PageRules from "./pages/rules.jsx";
import PageMusics from "./pages/pageMusics.jsx";
import PageMusicsById from "./pages/pageMusicsById.jsx";
import PageSearch from "./pages/pageSearch.jsx";

function App() {
  const router = createBrowserRouter([
    {
      children: [
        { path: "/", element: <Home /> },
        { path: "/timer", element: <Timer /> },
        { path: "/library", element: <PageDescription /> },
        { path: "/seriesMovies", element: <PageSerieFilm /> },
        { path: "/seriesMovies/:id", element: <PageSerieFilmById /> },
        { path: "/anime", element: <PageAnime /> },
        { path: "/anime/:id", element: <PageAnimeById /> },
        { path: "/musics", element: <PageMusics /> },
        { path: "/musics/:id", element: <PageMusicsById /> },
        { path: "/rules", element: <PageRules /> },
        { path: "/search", element: <PageSearch /> },

        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
