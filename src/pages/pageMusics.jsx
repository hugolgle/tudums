import description from "../../public/description.json";
import { useNavigate } from "react-router-dom";
import Header from "../composant/header";
export default function PageMusics() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="pt-24">
        <div className="flex flex-col gap-2 justify-center items-center">
          {description.musics.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`${item.id}`)}
              className="p-2 rounded-xl w-72 bg-green animate__animated animate__fadeInUp"
            >
              <h3>{item.nom}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
