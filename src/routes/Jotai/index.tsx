import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Jotai/")({
  component: Jotai,
});

function Jotai() {
  return <div>Hello /MobX/Jotai/!</div>;
}
