import { useEffect, useState } from "react";

import axios from "../api/axios";
import { baseImageUrl } from "../api/baseUrls";
import { leftPad } from "../utils";

const DEFAULT_LIMIT = 20;

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);

  const fetchPokemons = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `/pokemon?limit=${limit}&offset=${offset}`
      );

      const fetchedPokemons = response.data?.results?.map((pokemon) => {
        const [_, idStr] = pokemon.url.match(/\/(\d{1,3})\/$/);
        const id = Number(idStr);
        const number = leftPad(idStr, 3);
        const imgUrl = `${baseImageUrl}/${number}.png`;

        return { ...pokemon, id, number, imgUrl };
      });

      setCount(response.data?.count);
      setPokemons(() => [...pokemons, ...fetchedPokemons]);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, [offset, limit]);

  const loadMore = () => {
    setOffset(offset + limit);
  };

  return { pokemons, loading, error, count, loadMore };
};

export default usePokemons;
