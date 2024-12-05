import { Search } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mascote from "/Mascotte.png";
import brandboard from "/BrandBoard.png";

export default function Header({ notBtnSearch }) {
  const navigate = useNavigate();
  return (
    <div className="absolute w-full flex justify-center mx-auto top-4 ">
      <div className="w-1/5">
        <ArrowLeft
          className="absolute top-4 left-4 text-black animate__animated animate__zoomIn animate__faster"
          onClick={() => navigate(-1)}
        />
      </div>
      <div
        className="w-fit animate__animated animate__zoomIn animate__faster"
        onClick={() => navigate("/")}
      >
        <img src={mascote} className="w-10 mx-auto" />
        <img src={brandboard} className="w-20 mx-auto" />
      </div>
      <div className="w-1/5">
        {!notBtnSearch && (
          <Search
            className="absolute top-4 right-4 text-black animate__animated animate__zoomIn animate__faster"
            onClick={() => navigate("/search")}
          />
        )}
      </div>
    </div>
  );
}
