import { Link, useParams } from "react-router-dom";
import PokemonDetailBody from "../components/PokemonDetailBody";
import PokemonDetailHeader from "../components/PokemonDetailHeader";
import usePokemon from "../hooks/usePokemon";

const PokemonDetail = () => {
  const { id } = useParams();
  const { pokemon, loading, error } = usePokemon(id);

  console.log(pokemon);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="pb-8">
      <Link
        to="/"
        className="font-semibold transition-transform duration-150 ease-in transform text-primary hover:-translate-y-1 focus:outline-none"
      >
        <span className="font-semibold text-primary">Go Back</span>
      </Link>
      <div className="flex flex-col items-start justify-center w-full mx-auto my-4 rounded-lg shadow-lg lg:flex-row bg-lime-400">
        <PokemonDetailHeader pokemon={pokemon} />
        <div className="w-full px-6 pt-16 overflow-hidden bg-white rounded-b-lg lg:mt-0 rounded-t-3xl lg:rounded-t-none lg:rounded-b-none lg:rounded-r-lg lg:pt-8 md:px-12 lg:px-24">
          <div className="flex flex-row justify-between w-full">
            <PokemonDetailBody pokemon={pokemon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
