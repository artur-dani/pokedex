import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Pokemons from "./pages/Pokemons";
import PokemonDetail from "./pages/PokemonDetail";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Pokemons />} />
          <Route path="pokemons/:id" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
