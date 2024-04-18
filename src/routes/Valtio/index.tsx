import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Valtio/")({
  component: Valtio,
});

function Valtio() {
  return <div>Hello /Valtio/!</div>;
}
