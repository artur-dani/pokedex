import PokemonCard from "../components/PokemonCard";
import SearchForm from "../components/SearchForm";

const pokemons = [1, 2, 3, 4];

const Pokemons = () => {
  return (
    <>
      <SearchForm />
      <div className="grid w-full grid-cols-1 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-5 gap-y-6">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon} />
        ))}
      </div>
    </>
  );
};

export default Pokemons;
