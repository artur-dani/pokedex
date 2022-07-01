const PokemonDetailHeader = ({ pokemon }) => {
  return (
    <div className="w-full">
      <div className="px-4 md:px-8">
        <p className="mt-4 text-xl font-medium text-white">#{pokemon.number}</p>
        <h1 className="pb-6 text-3xl font-bold text-white capitalize md:text-3xl lg:text-4xl">
          {pokemon.name}
        </h1>
      </div>

      <div className="relative w-full mx-auto mt-8 text-center h-96 lg:mt-24">
        <div className="absolute inset-x-auto left-0 right-0 z-0 inline-block mx-auto rounded-full">
          <div className="flex justify-center max-w-xs mx-auto">
            <img
              src={pokemon.sprites?.other?.dream_world?.front_default}
              alt={pokemon.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailHeader;
