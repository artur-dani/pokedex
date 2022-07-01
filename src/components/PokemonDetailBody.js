import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { classes } from "../utils";
import PokemonDetailBiography from "./PokemonDetailBiography";

function PokemonDetailBody({ pokemon }) {
  return (
    <Tab.Group as="div" className="flex flex-col w-full divide-y-2 gap-y-4">
      <Tab.List className={"space-x-4"}>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={classes(
                "px-4 py-2 text-sm font-semibold rounded-md capitalize",
                selected ? "bg-lime-400 text-white" : "text-slate-500"
              )}
            >
              biography
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={classes(
                "px-4 py-2 text-sm font-semibold rounded-md capitalize",
                selected ? "bg-lime-400 text-white" : "text-slate-500"
              )}
            >
              stats
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={classes(
                "px-4 py-2 text-sm font-semibold rounded-md capitalize",
                selected ? "bg-lime-400 text-white" : "text-slate-500"
              )}
            >
              evolution
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className={"pb-6"}>
          <PokemonDetailBiography pokemon={pokemon} />
        </Tab.Panel>
        <Tab.Panel className={"pb-6"}>Content 2</Tab.Panel>
        <Tab.Panel className={"pb-6"}>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default PokemonDetailBody;
