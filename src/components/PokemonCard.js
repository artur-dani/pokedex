import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="w-full mx-auto overflow-hidden transition-all duration-200 ease-in-out transform rounded-lg shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-2">
      <Link to={`/pokemon/${pokemon.id}`}>
        <div className="flex items-center justify-center w-full py-8 mx-auto bg-lime-200">
          <div className="w-64">
            <img src={pokemon.imgUrl} className="w-full h-full" />
          </div>
        </div>

        <div className="w-full pt-5 pb-8 text-center bg-white">
          <h1 className="mb-2 text-3xl font-semibold capitalize">
            {pokemon.name}
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
