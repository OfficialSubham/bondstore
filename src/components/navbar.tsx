import { ShoppingBag } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full fixed z-20 h-14 border-b border-b-line/20">
      <div
        className="absolute top-14 h-screen w-[60vw] md:w-80 border-r border-e-neutral-700 duration-300 transition-discrete"
        style={{
          translate: menuOpen ? "0%" : "-100%",
          transition: "translate 0.3s ease-in-out",
        }}
      ></div>

      <div className="absolute h-px w-full bg-line/20"></div>
      <div className="h-full flex items-center justify-between w-full max-w-3xl mx-auto px-2">
        <div
          className="flex flex-col h-full gap-1 w-10 items-center justify-center z-20 bg-white"
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
        <div className="h-10 w-10 bg-amber-200">
          <img src="/logo1.svg" className="w-full h-full" />
        </div>
        <div className="flex gap-2">
          <div className="bg-black text-white font-morganite tracking-[2px] text-xl text-center w-8 rounded-sm flex items-center justify-center">
            99
          </div>
          <ShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
