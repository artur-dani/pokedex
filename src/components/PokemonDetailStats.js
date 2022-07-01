const PokemonDetailStats = ({ pokemon }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-700">
        Pokemon Base Stats
      </h2>
      <ul className="mt-5">
        {pokemon.stats.map((stat) => (
          <li
            key={`stat=${stat.stat.name}`}
            className="grid grid-cols-2 mb-3 gap-x-1"
          >
            <span className="font-medium capitalize text-slate-600">
              {stat.stat.name}
            </span>
            <span className="text-slate-500">{stat.base_stat}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetailStats;
