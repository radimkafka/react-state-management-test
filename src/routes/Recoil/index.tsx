import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Recoil/")({
  component: Recoil,
});

function Recoil() {
  return <div>Hello /Recoil/!</div>;
}
