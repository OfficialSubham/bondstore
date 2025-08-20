import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
const Menu = ({ menuOpen }: { menuOpen: boolean }) => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Men's Wallet",
      link: "/products/menswallet",
    },
    {
      title: "Leather Bags",
      link: "/products/leatherbags",
    },
    {
      title: "Imported Bags",
      link: "/products/importedbags",
    },
    {
      title: "Hand Clutch",
      link: "/products/handclutch",
    },
    {
      title: "Men's Side Bag",
      link: "/products/mensidebags",
    },
    {
      title: "Explore Bags",
      link: "/products/explorebags",
    },
    {
      title: "Submit a Review",
      link: "submitReview",
    },
  ];
  const location = useLocation();

  const childrenVarients = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -20,
    },
  };

  const parentVarients = {
    open: {
      transition: {
        staggerChildren: 0.08,
        delay: 1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        delay: -1,
      },
    },
  };

  const navigate = useNavigate();

  return (
    <motion.div
      initial={false}
      variants={parentVarients}
      animate={menuOpen ? "open" : "closed"}
      className="absolute top-14 h-screen w-[60vw] md:w-80 border-r border-e-neutral-700 bg-white duration-300 transition-discrete"
      style={{
        translate: menuOpen ? "0%" : "-100%",
        transition: "translate 0.3s ease-in-out",
      }}
    >
      {links.map((link) => {
        return (
          <motion.div
            variants={childrenVarients}
            key={link.link}
            whileHover={{
              scale: 1.1,
              translateX: 4,
            }}
            className="h-10 flex items-center text-xl font-toreadore justify-between px-5"
            onClick={() => navigate(`${link.link}`)}
          >
            <h1 className="hover:underline">{link.title}</h1>
            {location.pathname == `/${link.link}` && (
              <div className="rounded-full hover:bg-transparent h-2 w-2 bg-black"></div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Menu;
