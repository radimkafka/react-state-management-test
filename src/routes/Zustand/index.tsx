import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Zustand/")({
  component: Zustand,
});

function Zustand() {
  return <div>Hello /Zustand/!</div>;
}
