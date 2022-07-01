import { useEffect, useState } from "react";
import axios from "../api/axios";
import { leftPad } from "../utils";

const usePokemon = (id) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemonById = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`/pokemon/${id}`);

      const pokemon = { ...response.data, number: leftPad(id, 3) };

      setPokemon(pokemon);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchPokemonById(id);
  }, [id]);

  return { pokemon, loading, error };
};
export default usePokemon;
