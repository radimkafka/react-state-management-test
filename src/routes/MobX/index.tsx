import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/MobX/")({
  component: MobX,
});

function MobX() {
  return <div>Hello /MobX/!</div>;
}
