import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Xstate/")({
  component: Xstate,
});

function Xstate() {
  return <div>Hello /Xstate/!</div>;
}
