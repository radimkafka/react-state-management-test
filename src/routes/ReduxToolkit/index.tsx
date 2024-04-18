import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ReduxToolkit/")({
  component: ReduxToolkit,
});

function ReduxToolkit() {
  return <div>Hello /ReduxToolkit/!</div>;
}
