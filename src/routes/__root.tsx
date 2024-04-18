import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/ReduxToolkit" className="[&.active]:font-bold">
          Redux toolkit
        </Link>
        <Link to="/Zustand" className="[&.active]:font-bold">
          Zustand
        </Link>
        <Link to="/MobX" className="[&.active]:font-bold">
          MobX
        </Link>
        <Link to="/Jotai" className="[&.active]:font-bold">
          Jotai
        </Link>
        <Link to="/Xstate" className="[&.active]:font-bold">
          Xstate
        </Link>
        <Link to="/Recoil" className="[&.active]:font-bold">
          Recoil
        </Link>
        <Link to="/Valtio" className="[&.active]:font-bold">
          Valtio
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
