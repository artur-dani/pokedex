import PokemonCard from "../components/PokemonCard";
import SearchForm from "../components/SearchForm";
import usePokemons from "../hooks/usePokemons";

const Pokemons = () => {
  const { pokemons, loading, loadMore } = usePokemons();
  console.log(pokemons);

  return (
    <>
      <SearchForm />
      <div className="grid w-full grid-cols-1 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-5 gap-y-6">
        {loading ? (
          <div className="flex items-center justify-center w-full h-full">
            <div className="text-primary" role="status">
              <span>Loading...</span>
            </div>
          </div>
        ) : (
          pokemons.map((pokemon) => <PokemonCard key={pokemon.name} />)
        )}
      </div>
    </>
  );
};

export default Pokemons;
