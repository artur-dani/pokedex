import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PokemonDetailHeader from "../components/PokemonDetailHeader";

const pokemon = {
  id: 1,
  name: "Bulbasaur",
  types: [{ type: { name: "Grass" } }, { type: { name: "Poison" } }],
  imgUrl:
    "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/456.png",
};

const PokemonDetail = () => {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState("biography");

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
          {/* <div className="flex flex-row justify-between w-full">
            <Tab
              handleSelect={() => setActiveTab("biography")}
              isSelected={activeTab === "biography"}
            >
              Biography
            </Tab>
            <Tab
              handleSelect={() => setActiveTab("stats")}
              isSelected={activeTab === "stats"}
            >
              Stats
            </Tab>
            <Tab
              handleSelect={() => setActiveTab("evolutions")}
              isSelected={activeTab === "evolutions"}
            >
              Evolutions
            </Tab>
          </div>
          <div className="relative mt-8 lg:h-178">
            {transitions.map(({ item, key, props }) => {
              let page = (
                <PokemonDetailsBiography
                  species={selectedSpecies}
                  pokemon={selectedPokemon}
                />
              );

              switch (item) {
                case "biography":
                  page = (
                    <PokemonDetailsBiography
                      species={selectedSpecies}
                      pokemon={selectedPokemon}
                    />
                  );
                  break;
                case "stats":
                  page = <PokemonDetailsStats pokemon={selectedPokemon} />;
                  break;
                case "evolutions":
                  page = (
                    <PokemonDetailsEvolutions
                      selectedIds={selectedEvolutionPokemonIds}
                      chainLinks={chainLinks}
                      selectedBackgroundColor={selectedBackgroundColor}
                    />
                  );
                  break;
                default:
                  break;
              }
              return (
                <div
                  key={key}
                  style={{
                    ...props,
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {page}
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
