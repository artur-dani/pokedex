import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container px-4 mx-auto mt-16">
        <Outlet />
      </main>
    </>
  );
}
