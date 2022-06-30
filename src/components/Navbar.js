import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className={
        "fixed z-50 w-full bg-slate-400 flex items-center justify-center py-2 top-0 left-0"
      }
    >
      <Link to="/">
        <img
          className="w-10 h-10 transition duration-500 ease-in-out transform hover:rotate-180"
          alt="Pokeball"
          src="https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Sites-popsockets-master-catalog/default/dw9eb9511a/images/hi-res/Poke-Ball-Gloss_01_Top-View.png?sw=200&sh=200"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
