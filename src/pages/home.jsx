import { Link } from "react-router-dom";
import mascote from "../../public/Mascotte.png";
import brandboard from "../../public/BrandBoard.png";

export default function Home() {
  return (
    <section className="relative">
      <div className="flex flex-col justify-center items-center animate__animated animate__zoomIn animate__faster">
        <img src={mascote} alt="logo" className=" h-24 w-24" />{" "}
        <img src={brandboard} alt="brandboard" className="w-64" />{" "}
      </div>

      <div className="flex gap-2 mt-2 flex-wrap w-[95%] mx-auto justify-center items-center animate__animated animate__zoomIn animate__faster animate__delay-0.5s">
        <Link to="/timer" className="text-sm py-1 px-4 rounded-xl bg-red">
          Timer
        </Link>
        <Link to="/library" className="text-sm py-1 px-4 rounded-xl bg-red">
          Library
        </Link>
        <Link to="/rules" className="text-sm py-1 px-4 rounded-xl bg-red">
          The Rules
        </Link>
      </div>
    </section>
  );
}
