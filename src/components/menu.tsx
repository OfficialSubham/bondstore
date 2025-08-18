const Menu = ({ menuOpen }: { menuOpen: boolean }) => {
  return (
    <div
      className="absolute top-14 h-screen w-[60vw] md:w-80 border-r border-e-neutral-700 bg-white duration-300 transition-discrete"
      style={{
        translate: menuOpen ? "0%" : "-100%",
        transition: "translate 0.3s ease-in-out",
      }}
    ></div>
  );
};

export default Menu;
