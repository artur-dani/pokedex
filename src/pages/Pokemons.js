import PokemonCard from "../components/PokemonCard";
import SearchForm from "../components/SearchForm";
import usePokemons from "../hooks/usePokemons";

const Pokemons = () => {
  const { pokemons, loading, count, loadMore } = usePokemons();

  return (
    <>
      <SearchForm />
      <div className="mt-8">
        <h3 className="text-sm text-gray-500">
          Showing {pokemons.length} / {count}{" "}
        </h3>
      </div>
      <div className="grid w-full grid-cols-1 mx-auto mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-5 gap-y-6">
        {loading ? (
          <div className="flex items-center justify-center w-full h-full">
            <div className="text-primary" role="status">
              <span>Loading...</span>
            </div>
          </div>
        ) : (
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))
        )}
      </div>
      {!loading && pokemons.length < count && (
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 font-bold text-white transition-all duration-200 ease-in-out transform bg-indigo-600 rounded-lg shadow-lg cursor-pointer hover:bg-indigo-700"
            onClick={loadMore}
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default Pokemons;
