import { Link } from "wouter";
import { useRoutingStore } from "../../store/routing.store.ts";

export default function Second() {
  const { getHomePage } = useRoutingStore();
  const { name, path } = getHomePage();
  return (
    <div>
      <Link to={path}>{name}</Link>
      <br />
    </div>
  );
}
