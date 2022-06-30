import { useCallback, useEffect, useState } from "react";

import axios from "../api/axios";

const DEFAULT_LIMIT = 20;

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [offset, setOffset] = useState(0);

  const fetchPokemons = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `/pokemon?limit=${limit}&offset=${offset}`
      );
      setPokemons(response.data.results);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  });

  useEffect(() => {
    fetchPokemons();
  }, []);

  const loadMore = () => {
    setOffset(offset + limit);
  };

  return { pokemons, loading, error, loadMore };
};

export default usePokemons;
