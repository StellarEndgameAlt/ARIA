import { createFileRoute } from "@tanstack/react-router";
import { MitraApp } from "@/components/mitra/MitraApp";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <MitraApp />;
}
