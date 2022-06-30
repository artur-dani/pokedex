import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <div>
        <h1>Nav Here</h1>
      </div>
      <Outlet />
    </>
  );
}
