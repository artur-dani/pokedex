const PokemonDetailBiography = ({ pokemon }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-700">Pokemon Data</h2>
      <ul className="mt-5">
        <li className="grid grid-cols-2 mb-3 gap-x-1">
          <span className="font-medium capitalize text-slate-600">hight</span>
          <span className="text-slate-500">{pokemon.height / 10} m</span>
        </li>
        <li className="grid grid-cols-2 mb-3 gap-x-1">
          <span className="font-medium capitalize text-slate-700">weight</span>
          <span className="text-slate-500">{pokemon.weight / 10} kg</span>
        </li>
        <li className="grid grid-cols-2 mb-3 gap-x-1">
          <span className="font-medium capitalize text-slate-600">
            abilities
          </span>
          <ul className="flex flex-col gap-y-1">
            {pokemon.abilities?.map((ability, index) => (
              <li
                key={`ability=${ability.ability.name}`}
                className="capitalize text-slate-500"
              >
                {index + 1}. {ability.ability.name}
              </li>
            ))}
          </ul>
        </li>
        <li className="grid grid-cols-2 mb-3 gap-x-1">
          <span className="font-medium capitalize text-slate-700">
            base experience
          </span>
          <span className="text-slate-500">{pokemon.base_experience}</span>
        </li>
      </ul>
    </div>
  );
};

export default PokemonDetailBiography;
