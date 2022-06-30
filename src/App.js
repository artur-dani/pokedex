import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mt-16">
        <Outlet />
      </main>
    </>
  );
}
