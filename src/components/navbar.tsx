import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import Menu from "./menu";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { totalProduct } from "../store/cart";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const totalProductNum = useRecoilValue(totalProduct);
  return (
    <div className="w-full fixed z-20 bg-white h-20 border-b border-b-line/20">
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="absolute h-px w-full bg-line/20"></div>
      <div className="h-full flex items-center justify-between w-full max-w-3xl mx-auto px-2">
        <div
          className="flex flex-col h-full gap-1 w-10 items-center justify-center"
          onClick={() => setMenuOpen((m) => !m)}
        >
          <div
            style={{
              rotate: menuOpen ? "45deg" : "0deg",
              translate: menuOpen ? "0 6px 0" : "",
              transitionProperty: "translate",
              transitionDuration: "300ms",
              transitionBehavior: "ease-in-out",
            }}
            className="bg-black h-0.5 w-5"
          ></div>
          <div
            style={{
              opacity: menuOpen ? "0" : "1",
              transition: "all ease-in-out 0.3ms",
              transitionProperty: "opacity",
              transitionDuration: "300ms",
              transitionBehavior: "ease-in-out",
            }}
            className="bg-black h-0.5 w-5"
          ></div>
          <div
            style={{
              rotate: menuOpen ? "-45deg" : "0deg",
              translate: menuOpen ? "0 -6px 0" : "",
              transition: "translate ease-in-out 0.3ms",
              transitionProperty: "translate",
              transitionDuration: "300ms",
              transitionBehavior: "ease-in-out",
            }}
            className="bg-black h-0.5 w-5"
          ></div>
        </div>
        <div className="h-12 absolute left-12 p-3 lg:left-50 xl:left-[400px] 2xl:left-[40%] w-12">
          <a href={`https://wa.me/message/R5J62TY73JR4M1`} target="_blank">
            <img
              src="./whatsapp.png"
              alt="whatsapp logo"
              className="h-full w-full object-contain"
            />
          </a>
        </div>
        <div
          className="h-full w-20 flex flex-col items-center justify-center"
          onClick={() => navigate("/")}
        >
          <img src="/logo1.svg" className="w-6 h-6" />
          <span className="text-[16px] font-toreadore">Bond Store</span>
        </div>
        <div className="h-12 absolute right-18 p-3 lg:right-50 xl:right-[400px] 2xl:right-[40%] w-12">
          <a href={`https://www.youtube.com/@Bondstore-nh4ie`} target="_blank">
            <img
              src="./youtube.png"
              alt="whatsapp logo"
              className="h-full w-full object-contain"
            />
          </a>
        </div>
        <div
          className="flex cursor-pointer gap-2"
          onClick={() => navigate("/cart")}
        >
          <div className="bg-black text-white font-morganite tracking-[2px] text-xl text-center w-8 rounded-sm flex items-center justify-center">
            {totalProductNum > 99 ? "99+" : totalProductNum}
          </div>
          <ShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
